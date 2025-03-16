ItemEvents.rightClicked((event) => {
  let itemUsed = event.item;

  if (itemUsed.id == "prodigium_reforged:slime_crown") {
    itemUsed.count--;
    event.server.runCommandSilent(
      `execute as ${event.player.username} at @s run summon terra_entity:king_slime ~ ~ ~`
    );
  }
});
