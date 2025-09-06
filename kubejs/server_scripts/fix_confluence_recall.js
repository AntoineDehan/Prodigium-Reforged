ItemEvents.rightClicked((event) => {
  const player = event.player;
  const item = event.item;

  if (item.id != "confluence:cell_phone" && item.id != "confluence:magic_mirror") {
    return;
  }

  player.server.scheduleInTicks(18, () => {
    if (!player.isUsingItem() || player.mainHandItem.id != item.id) {
      return;
    }

    var pos = player.getRespawnPosition();
    var dim = player.getRespawnDimension().location();
    player.server.runCommandSilent(`execute in ${dim} run tp ${player.username} ${pos.x} ${pos.y} ${pos.z}`);
    player.server.runCommandSilent(`execute in ${dim} run playsound confluence:transmission master ${player.username} ${pos.x} ${pos.y} ${pos.z}`);
    player.sendData('displayItemActivation', {item: item.id});

    event.cancel();
  });
});
