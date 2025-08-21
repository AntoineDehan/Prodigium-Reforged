LootJS.modifiers((event) => {
  event
    .addEntityLootModifier("luminous_nether:ghost")
    .addWeightedLoot([1, 1], [Item.of("quark:soul_bead").withChance(70)]);

  event
    .addEntityLootModifier("luminous_nether:piglin_ghost")
    .addWeightedLoot([1, 1], [Item.of("quark:soul_bead").withChance(70)]);

  event
    .addBlockLootModifier("prodigium:tungsten_ore")
    .replaceLoot("prodigium:tungsten_ore", "stalwart_dungeons:raw_tungsten");
});
