LootJS.modifiers((event) => {
  // Misc
  event
    .addEntityLootModifier(
      "luminous_nether:spirit",
      "luminous_nether:piglin_ghost",
      "luminous_nether:guzzleghast"
    )
    .randomChance(0.7)
    .addWeightedLoot([0, 1], [Item.of("quark:soul_bead")]);

  // Armor Scrap
  event
    .addEntityLootModifier(
      "born_in_chaos_v1:fallen_chaos_knight",
      "bygonenether:wither_skeleton_knight"
    )
    .randomChance(0.25)
    .addWeightedLoot([1], [Item.of("stalwart_dungeons:blaze_armor_scrap")]);

  // Heptacle
  event
    .addEntityLootModifier(
      "luminous_beasts:the_furnace",
      "luminous_nether:mushlin_king",
      "friendsandfoes:wildfire"
    )
    .randomChance(0.25)
    .addWeightedLoot([1], [Item.of("bypowderandsteel:heptacle")]);

  // Phantom Powder
  event
    .addEntityLootModifier(
      "minecraft:phantom",
      "born_in_chaos_v1:restless_spirit",
      "born_in_chaos_v1:infernal_spirit",
      "born_in_chaos_v1:spiritof_chaos",
      "luminous_nether:piglin_ghost",
      "luminous_nether:spirit",
      "luminous_nether:guzzleghast"
    )
    .randomChance(0.8)
    .addWeightedLoot([1, 2], [Item.of("born_in_chaos_v1:phantom_powder")]);

  // Gunsteel
  event
    .addEntityLootModifier(
      "luminous_beasts:mummy",
      "luminous_beasts:rare_mummy"
    )
    .randomChance(0.8)
    .addWeightedLoot([0, 1], [Item.of("bypowderandsteel:gunsteel_scrap")]);

  event
    .addEntityLootModifier(
      "creeperoverhaul:beach_creeper",
      "alexsmobs:gust",
      "luminous_monsters:hollow",
      "minecraft:husk",
      "enemyexpansion:scorpion",
      "enemyexpansion:starved"
    )
    .randomChance(0.7)
    .addWeightedLoot([1, 3], [Item.of("bypowderandsteel:gunsteel_nugget")]);

  //

  //Placeholder for the Tungsten Ore otherwise it drops it's own block... Does not work with fortune or anything for now
  event
    .addBlockLootModifier("prodigium:tungsten_ore")
    .replaceLoot("prodigium:tungsten_ore", "stalwart_dungeons:raw_tungsten");
});
