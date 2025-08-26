LootJS.modifiers((event) => {
  event
    .addEntityLootModifier(
      "luminous_nether:ghost",
      "luminous_nether:piglin_ghost"
    )
    .randomChance(0.7)
    .addWeightedLoot([0, 1], [Item.of("quark:soul_bead")]);

  event
    .addEntityLootModifier(
      "born_in_chaos_v1:fallen_chaos_knight",
      "bygonenether:wither_skeleton_knight"
    )
    .randomChance(0.25)
    .addWeightedLoot([0, 1], [Item.of("stalwart_dungeons:blaze_armor_scrap")]);

  //Placeholder for the Tungsten Ore otherwise it drops it's own block... Does not work with fortune or anything for now
  event
    .addBlockLootModifier("prodigium:tungsten_ore")
    .replaceLoot("prodigium:tungsten_ore", "stalwart_dungeons:raw_tungsten");
});
