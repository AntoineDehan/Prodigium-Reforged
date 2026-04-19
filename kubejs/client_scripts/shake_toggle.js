KeyBindEvents.firstKeyPress("kubejs:toggle_shake", (event) => {
	if (global.shakeEnabled === undefined) global.shakeEnabled = true;
	global.shakeEnabled = !global.shakeEnabled;

	if (Client.player) {
		Client.player.displayClientMessage(
			Text.of(
				global.shakeEnabled
					? "§aScreen shake enabled"
					: "§cScreen shake disabled",
			),
			false,
		);
	}
});
