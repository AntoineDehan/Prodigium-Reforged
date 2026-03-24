// startup_scripts


if (Platform.isClientEnvironment()) {
	// --- CONFIGURATION PER HITBOX TYPE ---
	// VERTICAL_PLANE = overhead chops (greatswords, hammers)
	// HORIZONTAL_PLANE = sweeps (swords, axes)
	// FORWARD_BOX = thrusts (daggers, rapiers, spears)
	let HITBOX_CONFIG = {
		VERTICAL_PLANE: { duration: 5, shake: 1.2, recoil: 0.8 },
		HORIZONTAL_PLANE: { duration: 4, shake: 0.8, recoil: 0.5 },
		FORWARD_BOX: { duration: 3, shake: 0.4, recoil: 0.3 },
	};
	let DEFAULT_CONFIG = { duration: 4, shake: 0.7, recoil: 0.4 };
	let ROLL_FACTOR = 0.3;
	let REFERENCE_ATTACK_SPEED = 1.6;

	// --- SHAKE STATE ---
	let shakeTicksRemaining = 0;
	let shakeTotalTicks = 0;
	let shakeIntensity = 0;
	let recoilIntensity = 0;
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

					try {
						let attack = attackHand.attack();
						let hitboxName = attack.hitbox().toString();
						let animName = attack.animation().toString();

						// Get config for this hitbox type
						let config = HITBOX_CONFIG[hitboxName] || DEFAULT_CONFIG;

						// Scale by attack speed (slower = stronger)
						let attackSpeed = player.getAttributeValue(
							"minecraft:generic.attack_speed",
						);
						let scaleFactor =
							REFERENCE_ATTACK_SPEED / Math.max(0.5, attackSpeed);

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
						recoilIntensity = config.recoil * scaleFactor;
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

			let weapon = player.getMainHandItem();
			if (!weapon || weapon.isEmpty()) return;

			let attackSpeed = player.getAttributeValue(
				"minecraft:generic.attack_speed",
			);
			let scaleFactor =
				REFERENCE_ATTACK_SPEED / Math.max(0.5, attackSpeed);

			shakeTotalTicks = Math.round(
				DEFAULT_CONFIG.duration * Math.max(0.6, Math.min(1.5, scaleFactor)),
			);
			shakeTicksRemaining = shakeTotalTicks;
			shakeIntensity = DEFAULT_CONFIG.shake * scaleFactor;
			recoilIntensity = DEFAULT_CONFIG.recoil * scaleFactor;
			recoilDirection = 1;
		},
	);

	// --- CAMERA SHAKE RENDERER ---
	ForgeEvents.onEvent(
		"net.minecraftforge.client.event.ViewportEvent$ComputeCameraAngles",
		(event) => {
			if (shakeTicksRemaining <= 0) return;
			if (!Client.player) return;

			let tickCount = Client.player.tickCount;
			if (tickCount !== lastTickCount) {
				shakeTicksRemaining--;
				lastTickCount = tickCount;
			}

			let decay = shakeTicksRemaining / shakeTotalTicks;
			let t = decay * decay;

			let randPitch = (Math.random() - 0.5) * 2 * shakeIntensity * t;
			let randYaw = (Math.random() - 0.5) * 2 * shakeIntensity * t;
			let randRoll =
				(Math.random() - 0.5) * 2 * shakeIntensity * t * ROLL_FACTOR;

			let recoilOffset = recoilIntensity * t * recoilDirection;

			event.setPitch(event.getPitch() + randPitch);
			event.setYaw(event.getYaw() + randYaw + recoilOffset);
			event.setRoll(event.getRoll() + randRoll);
		},
	);
}
