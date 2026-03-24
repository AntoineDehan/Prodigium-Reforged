// requires: bettercombat
// script from EyesEyes on KubeJS discord
// prettier-ignore

if (Platform.isClientEnvironment()) {
	ClientEvents.init((event) => {
		// Immediately Invoked Function Expression to prevent polluting the global namespace
		(() => {
			// Reference for 1.20.1: https://github.com/ZsoltMolnarrr/BetterCombat/blob/8814f0297bb85f4513646e73d604069487ce7322/common/src/main/java/net/bettercombat/api/client/BetterCombatClientEvents.java
			let $BetterCombatClientEvents = Java.loadClass("net.bettercombat.api.client.BetterCombatClientEvents");
			let $PlayerAttackStart = Java.loadClass("net.bettercombat.api.client.BetterCombatClientEvents$PlayerAttackStart");
			let $PlayerAttackHit = Java.loadClass("net.bettercombat.api.client.BetterCombatClientEvents$PlayerAttackHit");

			// Register ATTACK_START
			$BetterCombatClientEvents.ATTACK_START.register(
				new JavaAdapter($PlayerAttackStart, {
					onPlayerAttackStart: function (player, attackHand) {
						global.playerAttackStart(player, attackHand);
					},
				}),
			);
			// Thank you squoshi. (Wayfarer, 539958518204203013) for base

			// Register ATTACK_HIT
			$BetterCombatClientEvents.ATTACK_HIT.register(
				new JavaAdapter($PlayerAttackHit, {
					onPlayerAttackStart: function (player, attackHand, targets, cursorTarget) {
						global.playerAttackHit(player, attackHand, targets, cursorTarget);
					},
				}),
			);
		})();
	});

	/**
	 * @param {Internal.LocalPlayer} player
	 * @param {Internal.AttackHand_} attackHand
	 */
	global.playerAttackStart = (player, attackHand) => {
		(() => {
			if (!player) return;
			console.log("--- ATTACK START ---");
		})();
	};

	/**
	 * @param {Internal.LocalPlayer} player
	 * @param {Internal.AttackHand_} attackHand
	 * @param {Internal.List<Internal.Entity>} targets
	 * @param {Internal.Entity} cursorTarget
	 */
	global.playerAttackHit = (player, attackHand, targets, cursorTarget) => {
		(() => {
			if (targets.isEmpty()) return;
			console.log("--- ATTACK HIT ---");
		})();
	};
}
