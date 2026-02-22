ServerEvents.tags("item", (event) => {
  event.add(
    "prodigium_reforged:classless_armors",
    "simpleores:copper_boots",
    "simpleores:copper_leggings",
    "simpleores:copper_chestplate",
    "simpleores:copper_helmet",
    "minecraft:iron_boots",
    "minecraft:iron_leggings",
    "minecraft:iron_chestplate",
    "minecraft:iron_helmet",
    "minecraft:golden_boots",
    "minecraft:golden_leggings",
    "minecraft:golden_chestplate",
    "minecraft:golden_helmet",
    "prodigium:cobalt_boots",
    "prodigium:cobalt_leggings",
    "prodigium:cobalt_chestplate",
    "prodigium:cobalt_helmet",
    "irons_spellbooks:wandering_magician_boots",
    "irons_spellbooks:wandering_magician_leggings",
    "irons_spellbooks:wandering_magician_chestplate",
    "irons_spellbooks:wandering_magician_helmet",
  );

  event.add(
    "prodigium_reforged:classless_helmet",
    "simpleores:copper_helmet",
    "minecraft:iron_helmet",
    "minecraft:golden_helmet",
    "prodigium:cobalt_helmet",
    "irons_spellbooks:wandering_magician_helmet",
  );

  event.add(
    "prodigium_reforged:classless_chestplate",
    "simpleores:copper_chestplate",
    "minecraft:iron_chestplate",
    "minecraft:golden_chestplate",
    "prodigium:cobalt_chestplate",
    "irons_spellbooks:wandering_magician_chestplate",
  );

  event.add(
    "prodigium_reforged:classless_leggings",
    "simpleores:copper_leggings",
    "minecraft:iron_leggings",
    "minecraft:golden_leggings",
    "prodigium:cobalt_leggings",
    "irons_spellbooks:wandering_magician_leggings",
  );

  event.add(
    "prodigium_reforged:classless_boots",
    "simpleores:copper_boots",
    "minecraft:iron_boots",
    "minecraft:golden_boots",
    "prodigium:cobalt_boots",
    "irons_spellbooks:wandering_magician_boots",
  );

  event.add(
    "prodigium_reforged:soul_mage_books",
    "companions:book_ice_shard",
    "companions:book_ice_tornado",
    "companions:book_fire_mark",
    "companions:book_brace",
    "companions:book_heal_ring",
    "companions:book_stone_spikes",
    "companions:book_magic_ray",
    "companions:book_black_hole",
    "companions:book_naginata",
  );

  event.add(
    "prodigium_reforged:hammers",
    "stalwart_dungeons:wooden_hammer",
    "stalwart_dungeons:stone_hammer",
    "stalwart_dungeons:iron_hammer",
    "stalwart_dungeons:golden_hammer",
    "stalwart_dungeons:diamond_hammer",
    "stalwart_dungeons:netherite_hammer",
    "stalwart_dungeons:tungsten_hammer",
    "stalwart_dungeons:nether_hammer",
    "aether:hammer_of_kingbdogz",
    "simplyswords:frostfall",
    "simplyswords:soulkeeper",
    "cataclysm:infernal_forge",
    "simplyswords:hearthflame",
  );
});

ServerEvents.tags("block", (event) => {
  event.add("minecraft:mineable/pickaxe", "prodigium:tungsten_ore");
});
