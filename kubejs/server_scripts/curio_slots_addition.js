ItemEvents.rightClicked((event) => {
  const item = event.item;
  const player = event.player;

  console.log(item);

  if (
    !player.tags.contains("demon_heart") &&
    item === "prodigium_reforged:demon_heart"
  ) {
    event.server.runCommandSilent(
      `execute as ${player.username} run curios add accessory @s 1`,
    );
    player.addTag("demon_heart");
    item.count--;
  }
});
