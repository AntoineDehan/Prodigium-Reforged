LootJS.modifiers((event) => {
  // //// Dungeon's Arise structures \\\\

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/shiraz_palace/shiraz_palace_towers",
  // );

  event
    .addLootTableModifier(
      "dungeons_arise:chests/shiraz_palace/shiraz_palace_elite",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem")
    .randomChance(0.15)
    .addLoot("confluence:lucky_horseshoe");
  // event
  //   .addLootTableModifier(
  //     "dungeons_arise:chests/shiraz_palace/shiraz_palace_normal",
  //   )
  //   //Onyx
  //   .removeLoot("simpleores:onyx_gem");
  // event
  //   .addLootTableModifier(
  //     "dungeons_arise:chests/shiraz_palace/shiraz_palace_supply",
  //   )
  //   //Onyx
  //   .removeLoot("simpleores:onyx_gem");
  // event
  //   .addLootTableModifier(
  //     "dungeons_arise:chests/shiraz_palace/shiraz_palace_gardens",
  //   )
  //   //Onyx
  //   .removeLoot("simpleores:onyx_gem");

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/mushroom_mines/mushroom_mines_treasure",
  // );

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/mushroom_mines/mushroom_mines_barrels",
  // );

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/infested_temple/infested_temple_room_table",
  // );

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/infested_temple/infested_temple_room_forge",
  // );

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/infested_temple/infested_temple_room_normal",
  // );

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/infested_temple/infested_temple_room_bookshelf",
  // );

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/infested_temple/infested_temple_room_garden",
  // );

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/infested_temple/infested_temple_room_supply",
  // );

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/thornborn_towers/thornborn_towers_top_treasure",
  // );

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/giant_mushroom/twin_giant_mushroom",
  // );

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/giant_mushroom/red_giant_mushroom",
  // );

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/illager_fort/illager_fort_normal",
  // );

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/foundry/foundry_passage_exterior",
  // );

  event
    .addLootTableModifier("dungeons_arise:chests/foundry/foundry_lava_pit")
    //Onyx
    .removeLoot("simpleores:onyx_gem");
  event
    .addLootTableModifier("dungeons_arise:chests/foundry/foundry_treasure")
    //Onyx
    .removeLoot("simpleores:onyx_gem")
    .randomChance(0.15)
    .addLoot("confluence:lucky_horseshoe");
  event
    .addLootTableModifier("dungeons_arise:chests/foundry/foundry_normal")
    //Onyx
    .removeLoot("simpleores:onyx_gem");

  event
    .addLootTableModifier(
      "dungeons_arise:chests/heavenly_challenger/heavenly_challenger",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem");
  event
    .addLootTableModifier(
      "dungeons_arise:chests/heavenly_challenger/heavenly_challenger_supply",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem");
  event
    .addLootTableModifier(
      "dungeons_arise:chests/heavenly_challenger/heavenly_challenger_treasure",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem")
    .randomChance(0.15)
    .addLoot("confluence:lucky_horseshoe");
  event
    .addLootTableModifier(
      "dungeons_arise:chests/heavenly_challenger/heavenly_challenger_normal",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem");
  event
    .addLootTableModifier(
      "dungeons_arise:chests/heavenly_challenger/heavenly_challenger_theater",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem");

  event
    .addLootTableModifier(
      "dungeons_arise:chests/heavenly_rider/heavenly_rider_barrels",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem");
  event
    .addLootTableModifier(
      "dungeons_arise:chests/heavenly_rider/heavenly_rider_normal",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem");
  event
    .addLootTableModifier(
      "dungeons_arise:chests/heavenly_rider/heavenly_rider_treasure",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem")
    .randomChance(0.15)
    .addLoot("confluence:lucky_horseshoe");

  event
    .addLootTableModifier(
      "dungeons_arise:chests/heavenly_conqueror/heavenly_conqueror_barrels",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem");
  event
    .addLootTableModifier(
      "dungeons_arise:chests/heavenly_conqueror/heavenly_conqueror_treasure",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem")
    .randomChance(0.15)
    .addLoot("confluence:lucky_horseshoe");
  event
    .addLootTableModifier(
      "dungeons_arise:chests/heavenly_conqueror/heavenly_conqueror_normal",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem");

  event
    .addLootTableModifier(
      "dungeons_arise:chests/ceryneian_hind/ceryneian_hind_treasure",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem")
    .randomChance(0.15)
    .addLoot("confluence:lucky_horseshoe");

  event
    .addLootTableModifier(
      "dungeons_arise:chests/foundry/foundry_passage_normal",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem");

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/small_blimp/small_blimp_treasure",
  // );

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/jungle_tree_house/jungle_tree_house_normal",
  // );

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/jungle_tree_house/jungle_tree_house_barrels",
  // );

  event
    .addLootTableModifier(
      "dungeons_arise:chests/jungle_tree_house/jungle_tree_house_treasure",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem")
    .randomChance(0.15)
    .addLoot("confluence:lucky_horseshoe");

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/mining_system/mining_system_treasure",
  // );

  // event.addLootTableModifier("dungeons_arise:chests/mines_treasure_big");

  // event.addLootTableModifier("dungeons_arise:chests/mines_treasure_medium");

  // event.addLootTableModifier(
  //   "dungeons_arise:chests/plague_asylum/plague_asylum_treasure",
  // );

  event
    .addLootTableModifier(
      "dungeons_arise:chests/plague_asylum/plague_asylum_potions",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem");

  event
    .addLootTableModifier(
      "dungeons_arise:chests/bandit_village/bandit_village_tents",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem");
  event
    .addLootTableModifier(
      "dungeons_arise:chests/bandit_village/bandit_village_normal",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem");
  event
    .addLootTableModifier(
      "dungeons_arise:chests/bandit_village/bandit_village_barrels",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem");

  event
    .addLootTableModifier(
      "dungeons_arise:chests/bandit_towers/bandit_towers_rooms",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem");
  event
    .addLootTableModifier(
      "dungeons_arise:chests/bandit_towers/bandit_towers_treasure",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem");
  event
    .addLootTableModifier(
      "dungeons_arise:chests/bandit_towers/bandit_towers_normal",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem");
  event
    .addLootTableModifier(
      "dungeons_arise:chests/bandit_towers/bandit_towers_barrels",
    )
    //Onyx
    .removeLoot("simpleores:onyx_gem");

  event
    .addLootTableModifier("dungeons_arise:chests/aviary/aviary_treasure")
    //Onyx
    .removeLoot("simpleores:onyx_gem")
    .randomChance(0.15)
    .addLoot("confluence:lucky_horseshoe");
  event
    .addLootTableModifier("dungeons_arise:chests/aviary/aviary_normal")
    //Onyx
    .removeLoot("simpleores:onyx_gem");
  event
    .addLootTableModifier("dungeons_arise:chests/aviary/aviary_barrels")
    //Onyx
    .removeLoot("simpleores:onyx_gem");

  //// Minecraft \\\\
  event
    .addLootTableModifier("minecraft:chests/abandoned_mineshaft")

    .randomChance(0.15)
    .addLoot("confluence:lucky_horseshoe");

  // event.addLootTableModifier("minecraft:chests/simple_dungeon");

  event
    .addLootTableModifier("minecraft:chests/jungle_temple")
    //Onyx
    .removeLoot("simpleores:onyx_gem")
    .randomChance(0.15)
    .addLoot("confluence:lucky_horseshoe");

  event
    .addLootTableModifier("minecraft:chests/ruined_portal")
    //Onyx
    .removeLoot("simpleores:onyx_gem");

  event
    .addLootTableModifier("minecraft:chests/desert_pyramid")
    //Onyx
    .removeLoot("simpleores:onyx_gem");

  event
    .addLootTableModifier("minecraft:chests/bastion_other")
    .randomChance(0.1)
    .addLoot("confluence:lucky_horseshoe");

  event
    .addLootTableModifier("minecraft:chests/bastion_treasure")
    .randomChance(0.15)
    .addLoot("confluence:lucky_horseshoe");

  //// Loot Integrations \\\\
  event
    .addLootTableModifier("lootintegrations:chests/easy")
    //Onyx
    .removeLoot("simpleores:onyx_gem")
    .randomChance(0.1)
    .addLoot("confluence:hermes_boots")
    .randomChance(0.12)
    .addLoot("kubejs:ancient_cobalt_bow");

  event
    .addLootTableModifier("lootintegrations:chests/medium")
    //Onyx
    .removeLoot("simpleores:onyx_gem")
    .randomChance(0.15)
    .addLoot("confluence:hermes_boots");

  event
    .addLootTableModifier("lootintegrations:chests/hard")
    .randomChance(0.15)
    .addLoot("confluence:lucky_horseshoe");
});
