LootJS.modifiers((event) => {
  // Misc
  event
    .addEntityLootModifier(
      "luminous_nether:spirit",
      "luminous_nether:piglin_ghost",
      "luminous_nether:guzzleghast"
    )
    .randomChance(0.6)
    .addWeightedLoot([1], [Item.of("quark:soul_bead")]);

  // Armor Scrap
  event
    .addEntityLootModifier(
      "born_in_chaos_v1:fallen_chaos_knight",
      "bygonenether:wither_skeleton_knight",
      "born_in_chaos_v1:skeleton_thrasher"
    )
    .randomChance(0.25)
    .addWeightedLoot([1], [Item.of("stalwart_dungeons:blaze_armor_scrap")]);

  event
    .addEntityLootModifier(
      "piglinproliferation:piglin_traveler",
      "luminous_nether:piglin_cultist_leader",
      "luminous_beasts:piglin_executioner"
    )
    .randomChance(0.15)
    .addWeightedLoot([1], [Item.of("irons_spellbooks:hogskin")]);

  // Blood Sac
  event
    .addEntityLootModifier(
      "piglinproliferation:piglin_traveler",
      "terra_entity:demon",
      "terra_entity:hell_bat",
      "terra_entity:drippler"
    )
    .randomChance(0.1)
    .addWeightedLoot([1], [Item.of("alexsmobs:blood_sac")]);

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
      "born_in_chaos_v1:scarlet_persecutor",
      "born_in_chaos_v1:infernal_spirit",
      "born_in_chaos_v1:spiritof_chaos",
      "born_in_chaos_v1:dark_vortex",
      "luminous_nether:piglin_ghost",
      "luminous_nether:spirit",
      "luminous_nether:guzzleghast"
    )
    .randomChance(0.5)
    .addWeightedLoot([1, 2], [Item.of("born_in_chaos_v1:phantom_powder")]);

  // Nether Bones
  event
    .addEntityLootModifier(
      "minecraft:wither_skeleton",
      "born_in_chaos_v1:dark_vortex",
      "born_in_chaos_v1:bone_imp",
      "born_in_chaos_v1:bone_imp_minion",
      "bygonenether:wither_skeleton_knight",
      "bygonenether:corpor",
      "bygonenether:wraither"
    )
    .randomChance(0.4)
    .addWeightedLoot([1, 2], [Item.of("prodigium_reforged:nether_bone")]);

  // Gunsteel
  event
    .addEntityLootModifier(
      "luminous_beasts:mummy",
      "luminous_beasts:rare_mummy"
    )
    .randomChance(0.8)
    .addWeightedLoot([1], [Item.of("bypowderandsteel:gunsteel_scrap")]);

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
});
