// startup_scripts


if (Platform.isClientEnvironment()) {
	// --- CONFIGURATION PER HITBOX TYPE ---
	// VERTICAL_PLANE = overhead chops (greatswords, hammers)
	// HORIZONTAL_PLANE = sweeps (swords, axes)
	// FORWARD_BOX = thrusts (daggers, rapiers, spears)
	let HITBOX_CONFIG = {
		VERTICAL_PLANE: { duration: 4, shake: 0.52, swingPitch: 2.3, swingYaw: 0.5 },
		HORIZONTAL_PLANE: { duration: 3, shake: 0.36, swingPitch: 0.3, swingYaw: 2.1 },
		FORWARD_BOX: { duration: 3, shake: 0.19, swingPitch: -0.6, swingYaw: 0.3 },
	};
	let DEFAULT_CONFIG = { duration: 3, shake: 0.30, swingPitch: 0.8, swingYaw: 1.1 };
	let ROLL_FACTOR = 0.3;
	let REFERENCE_ATTACK_SPEED = 1.6;
	let REFERENCE_ATTACK_DAMAGE = 8.0;
	let MAX_SCALE = 1.6;

	// --- SHAKE STATE ---
	if (global.shakeEnabled === undefined) global.shakeEnabled = true;
	let shakeTicksRemaining = 0;
	let shakeTotalTicks = 0;
	let shakeIntensity = 0;
	let swingPitchAmount = 0;
	let swingYawAmount = 0;
	let recoilDirection = 1;
	let lastTickCount = 0;

	// --- TRIGGER: Better Combat ATTACK_HIT ---
	ClientEvents.init((event) => {
		let $BetterCombatClientEvents = Java.loadClass(
			"net.bettercombat.api.client.BetterCombatClientEvents",
		);
		let $PlayerAttackHit = Java.loadClass(
			"net.bettercombat.api.client.BetterCombatClientEvents$PlayerAttackHit",
		);

		$BetterCombatClientEvents.ATTACK_HIT.register(
			new JavaAdapter($PlayerAttackHit, {
				onPlayerAttackStart: function (player, attackHand, targets, cursorTarget) {
					if (!targets || targets.isEmpty()) return;
					if (!player) return;
					if (!global.shakeEnabled) return;

					try {
						let attack = attackHand.attack();
						let hitboxName = attack.hitbox().toString();
						let animName = attack.animation().toString();

						// Get config for this hitbox type
						let config = HITBOX_CONFIG[hitboxName] || DEFAULT_CONFIG;

						// Scale by attack speed (slower = stronger) and damage (harder = stronger)
						let attackSpeed = player.getAttributeValue(
							"minecraft:generic.attack_speed",
						);
						let attackDamage = player.getAttributeValue(
							"minecraft:generic.attack_damage",
						);
						let speedScale =
							REFERENCE_ATTACK_SPEED / Math.max(0.5, attackSpeed);
						let damageScale =
							Math.max(0.5, attackDamage) / REFERENCE_ATTACK_DAMAGE;
						let scaleFactor = Math.min(MAX_SCALE, Math.sqrt(speedScale * damageScale));

						// Determine swing direction for recoil
						let isExplicitLeft =
							animName.includes("left") || animName.includes("lr");
						let isRight = !attackHand.isOffHand() && !isExplicitLeft;
						recoilDirection = isRight ? 1 : -1;

						// Apply
						shakeTotalTicks = Math.round(
							config.duration * Math.max(0.6, Math.min(1.5, scaleFactor)),
						);
						shakeTicksRemaining = shakeTotalTicks;
						shakeIntensity = config.shake * scaleFactor;
						swingPitchAmount = config.swingPitch * scaleFactor;
						swingYawAmount = config.swingYaw * scaleFactor;
					} catch (error) {
						console.log("[screen_shake] Error in ATTACK_HIT: " + error);
					}
				},
			}),
		);
	});

	// --- FALLBACK: Vanilla attacks (not handled by Better Combat) ---
	ForgeEvents.onEvent(
		"net.minecraftforge.event.entity.player.AttackEntityEvent",
		(event) => {
			// Skip if Better Combat already triggered a shake this tick
			if (shakeTicksRemaining > 0) return;

			let player = event.getEntity();
			if (!player) return;
			if (!player.isLocalPlayer()) return;
			if (!global.shakeEnabled) return;

			let weapon = player.getMainHandItem();
			if (!weapon || weapon.isEmpty()) return;

			let attackSpeed = player.getAttributeValue(
				"minecraft:generic.attack_speed",
			);
			let attackDamage = player.getAttributeValue(
				"minecraft:generic.attack_damage",
			);
			let speedScale =
				REFERENCE_ATTACK_SPEED / Math.max(0.5, attackSpeed);
			let damageScale =
				Math.max(0.5, attackDamage) / REFERENCE_ATTACK_DAMAGE;
			let scaleFactor = Math.sqrt(speedScale * damageScale);

			shakeTotalTicks = Math.round(
				DEFAULT_CONFIG.duration * Math.max(0.6, Math.min(1.5, scaleFactor)),
			);
			shakeTicksRemaining = shakeTotalTicks;
			shakeIntensity = DEFAULT_CONFIG.shake * scaleFactor;
			swingPitchAmount = DEFAULT_CONFIG.swingPitch * scaleFactor;
			swingYawAmount = DEFAULT_CONFIG.swingYaw * scaleFactor;
			recoilDirection = 1;
		},
	);

	// --- TICK COUNTER: decrements remaining ticks each client tick ---
	ForgeEvents.onEvent(
		"net.minecraftforge.event.TickEvent$ClientTickEvent",
		(event) => {
			if (event.phase.toString() !== "END") return;
			if (shakeTicksRemaining > 0) shakeTicksRemaining--;
		},
	);

	// --- CAMERA SHAKE RENDERER ---
	ForgeEvents.onEvent(
		"net.minecraftforge.client.event.ViewportEvent$ComputeCameraAngles",
		(event) => {
			if (shakeTicksRemaining <= 0) return;

			let decay = shakeTicksRemaining / shakeTotalTicks;
			let shakeT = decay * decay * decay;
			let swingT = decay * decay;

			let randPitch = (Math.random() - 0.5) * 2 * shakeIntensity * shakeT;
			let randYaw = (Math.random() - 0.5) * 2 * shakeIntensity * shakeT;
			let randRoll =
				(Math.random() - 0.5) * 2 * shakeIntensity * shakeT * ROLL_FACTOR;

			let pitchOffset = swingPitchAmount * swingT;
			let yawOffset = swingYawAmount * swingT * recoilDirection;

			event.setPitch(event.getPitch() + randPitch + pitchOffset);
			event.setYaw(event.getYaw() + randYaw + yawOffset);
			event.setRoll(event.getRoll() + randRoll);
		},
	);
}
