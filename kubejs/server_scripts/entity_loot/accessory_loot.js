LootJS.modifiers((event) => {
  event
    .addEntityLootModifier(
      "pots_and_mimics:poison_pot_crab",
      "born_in_chaos_v1:mother_spider",
      "luminous_monsters:swamp_zombie"
    )
    .randomChance(0.1)
    .addWeightedLoot(
      [0, 1],
      [
        Item.of("confluence:bezoar").withChance(40),
        Item.of("confluence:shoe_spikes").withChance(60),
      ]
    );

  event
    .addEntityLootModifier(
      "bygonenether:wither_skeleton_knight",
      "bygonenether:wither_skeleton_horse",
      "stalwart_dungeons:incomplete_wither"
    )
    .randomChance(0.1)
    .addWeightedLoot([0, 1], [Item.of("confluence:holy_water")]);

  event
    .addEntityLootModifier("earthtojavamobs:viler_witch")
    .randomChance(0.1)
    .addWeightedLoot([0, 1], [Item.of("confluence:vitamins")]);

  event
    .addEntityLootModifier(
      "luminous_monsters:glacial_skeleton",
      "luminous_monsters:glacial_zombie"
    )
    .randomChance(0.1)
    .addWeightedLoot([0, 1], [Item.of("confluence:fast_clock")]);

  event
    .addEntityLootModifier(
      "bygonenether:wither_skeleton_knight",
      "bygonenether:wither_skeleton_horse",
      "stalwart_dungeons:incomplete_wither"
    )
    .randomChance(0.1)
    .addWeightedLoot([0, 1], [Item.of("confluence:black_belt")]);

  event
    .addEntityLootModifier(
      "born_in_chaos_v1:decrepit_skeleton",
      "born_in_chaos_v1:skeleton_demoman",
      "luminous_monsters:miner_skeleton",
      "luminous_monsters:swamp_skeleton",
      "luminous_monsters:savanna_skeleton",
      "luminous_monsters:dark_oak_skeleton",
      "quark:forgotten"
    )
    .randomChance(0.025)
    .addWeightedLoot([1], [Item.of("confluence:ranger_emblem")]);

  event
    .addEntityLootModifier(
      "bypowderandsteel:sunken_pirate",
      "luminous_monsters:sunken",
      "born_in_chaos_v1:barrel_zombie"
    )
    .randomChance(0.025)
    .addWeightedLoot([1], [Item.of("confluence:band_of_regneration")]);

  event
    .addEntityLootModifier(
      "savage_and_ravage:executioner",
      "savage_and_ravage:trickster"
    )
    .randomChance(0.045)
    .addWeightedLoot([1], [Item.of("confluence:warrior_emblem")]);

  event
    .addEntityLootModifier(
      "bygonenether:piglin_hunter",
      "luminous_nether:piglin_cultist",
      "luminous_nether:piglin_executioner"
    )
    .randomChance(0.1)
    .addWeightedLoot([0, 1], [Item.of("confluence:flesh_knuckles")]);

  event
    .addEntityLootModifier("undead_revamp2:thesmoker")
    .randomChance(0.1)
    .addWeightedLoot([0, 1], [Item.of("confluence:honey_comb")]);

  event
    .addEntityLootModifier("bygonenether:warped_enderman")
    .randomChance(0.1)
    .addWeightedLoot([0, 1], [Item.of("confluence:rifle_scope")]);

  event
    .addEntityLootModifier(
      "stalwart_dungeons:giddy_blaze",
      "stalwart_dungeons:reinforced_blaze"
    )
    .randomChance(0.1)
    .addWeightedLoot(
      [0, 1],
      [
        Item.of("confluence:magma_stone").withChance(50),
        Item.of("confluence:lava_charm").withChance(50),
      ]
    );

  event
    .addEntityLootModifier("earthtojavamobs:viler_witch")
    .randomChance(0.1)
    .addWeightedLoot([0, 1], [Item.of("confluence:band_of_regneration")]);

  event
    .addEntityLootModifier(
      "luminous_monsters:miner_skeleton",
      "luminous_monsters:miner_zombie",
      "alexsmobs:underminer"
    )
    .randomChance(0.1)
    .addWeightedLoot(
      [0, 1],
      [
        Item.of("confluence:depth_meter").withChance(10),
        Item.of("confluence:compass").withChance(10),
        Item.of("confluence:radar").withChance(10),
        Item.of("confluence:life_form_analyzer").withChance(10),
        Item.of("confluence:tally_counter").withChance(10),
        Item.of("confluence:metal_detector").withChance(10),
      ]
    );

  event
    .addEntityLootModifier("bypowderandsteel:zombie_seal")
    .randomChance(0.1)
    .addWeightedLoot([1], [Item.of("sweet_charm_o_mine:sniper_scope")]);

  event
    .addEntityLootModifier(
      "pots_and_mimics:poison_pot_crab",
      "pots_and_mimics:pot_crab",
      "born_in_chaos_v1:mother_spider",
      "earthtojavamobs:bone_spider"
    )
    .randomChance(0.1)
    .addWeightedLoot([0, 1], [Item.of("confluence:climbing_claws")]);

  event
    .addEntityLootModifier("luminous_monsters:hollow", "luminous_beasts:mummy")
    .randomChance(0.1)
    .addWeightedLoot([0, 1], [Item.of("confluence:dunerider_boots")]);
});
