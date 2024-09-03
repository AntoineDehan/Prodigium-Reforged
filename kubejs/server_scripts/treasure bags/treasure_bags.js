ServerEvents.tags('item', event => {
  event.add('prodigium:glow', 'prodigium:nether_gauntlet_treasure_bag')
  event.add('prodigium:immune', 'prodigium:nether_gauntlet_treasure_bag')
  event.add('prodigium:float', 'prodigium:nether_gauntlet_treasure_bag')
})


ItemEvents.rightClicked((event) => {
  let itemUsed = event.item;

  if (itemUsed.id == "prodigium:conjurer_treasure_bag") {
    itemUsed.count--;

    event.server.runCommandSilent(
      `execute as ${event.player.username} run loot give @s loot minecraft:entities/zombie`
    );
  } else {
    return;
  }
});
