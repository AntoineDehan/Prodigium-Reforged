LootJS.modifiers((event) => {
  event
    .addEntityLootModifier(
      "pots_and_mimics:poison_pot_crab",
      "born_in_chaos_v1:mother_spider",
      "luminous_monsters:swamp_zombie"
    )
    .randomChance(0.05)
    .addWeightedLoot([1], [Item.of("confluence:bezoar")])
    .addWeightedLoot([1], [Item.of("confluence:shoe_spikes")]);
  event
    .addEntityLootModifier(
      "bygonenether:wither_skeleton_knight",
      "bygonenether:wither_skeleton_horse",
      "stalwart_dungeons:incomplete_wither"
    )
    .randomChance(0.05)
    .addWeightedLoot([1], [Item.of("confluence:holy_water")]);

  event
    .addEntityLootModifier("earthtojavamobs:viler_witch")
    .randomChance(0.05)
    .addWeightedLoot([1], [Item.of("confluence:vitamins")]);
  event
    .addEntityLootModifier(
      "luminous_monsters:glacial_skeleton",
      "luminous_monsters:glacial_zombie"
    )
    .randomChance(0.05)
    .addWeightedLoot([1], [Item.of("confluence:fast_clock")]);
  event
    .addEntityLootModifier(
      "bygonenether:wither_skeleton_knight",
      "bygonenether:wither_skeleton_horse",
      "stalwart_dungeons:incomplete_wither"
    )
    .randomChance(0.05)
    .addWeightedLoot([1], [Item.of("confluence:black_belt")]);
  event
    .addEntityLootModifier(
      "born_in_chaos_v1:skeleton_trasher",
      "born_in_chaos_v1:decrepit_skeleton",
      "born_in_chaos_v1:skeleton_demoman",
      "luminous_monsters:miner_skeleton",
      "luminous_monsters:swamp_skeleton",
      "luminous_monsters:savannah_skeleton",
      "luminous_monsters:dark_oak_skeleton"
    )
    .randomChance(0.05)
    .addWeightedLoot([1], [Item.of("confluence:ranger_emblem")]);
  event
    .addEntityLootModifier(
      "bygonenether:piglin_hunter",
      "luminous_nether:piglin_cultist",
      "luminous_nether:piglin_executioner"
    )
    .randomChance(0.05)
    .addWeightedLoot([1], [Item.of("confluence:flesh_knuckles")]);
  event
    .addEntityLootModifier("undead_revamp2:thesmoker")
    .randomChance(0.05)
    .addWeightedLoot([1], [Item.of("confluence:honey_comb")]);
  event
    .addEntityLootModifier("bygonenether:warped_enderman")
    .randomChance(0.05)
    .addWeightedLoot([1], [Item.of("confluence:rifle_scope")]);
  event
    .addEntityLootModifier(
      "stalwart_dungeons:giddy_blaze",
      "stalwart_dungeons:reinforced_blaze"
    )
    .randomChance(0.05)
    .addWeightedLoot([1], [Item.of("confluence:magma_stone")])
    .addWeightedLoot([1], [Item.of("confluence:lava_charm")]);
  event
    .addEntityLootModifier("earthtojavamobs:viler_witch")
    .randomChance(0.05)
    .addWeightedLoot([1], [Item.of("confluence:band_of_regneration")]);
  event
    .addEntityLootModifier(
      "luminous_monsters:miner_skeleton",
      "luminous_monsters:miner_zombie",
      "alexsmobs:underminer"
    )
    .randomChance(0.05)
    .addWeightedLoot([1], [Item.of("confluence:depth_meter")])
    .addWeightedLoot([1], [Item.of("confluence:compass")])
    .addWeightedLoot([1], [Item.of("confluence:radar")])
    .addWeightedLoot([1], [Item.of("confluence:life_form_analyzer")])
    .addWeightedLoot([1], [Item.of("confluence:tally_counter")])
    .addWeightedLoot([1], [Item.of("confluence:metal_detector")]);
  event
    .addEntityLootModifier(
      "pots_and_mimics:poison_pot_crab",
      "pots_and_mimics:pot_crab",
      "born_in_chaos_v1:mother_spider",
      "earthtojavamobs:bone_spider"
    )
    .randomChance(0.05)
    .addWeightedLoot([1], [Item.of("confluence:climbing_claws")]);
  event
    .addEntityLootModifier("luminous_monsters:hollow", "luminous_beasts:mummy")
    .randomChance(0.05)
    .addWeightedLoot([1], [Item.of("confluence:dunerider_boots")]);
});
