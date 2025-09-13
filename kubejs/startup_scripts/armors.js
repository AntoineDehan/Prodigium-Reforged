ItemEvents.modification((event) => {
  //// Misc armors

  //// Early Game armors

  // Copper T:10
  event.modify("simpleores:copper_boots", (item) => {
    item.armorProtection = 2;
  });
  event.modify("simpleores:copper_leggins", (item) => {
    item.armorProtection = 3;
  });

  // Iron T:15 B:+2
  event.modify("minecraft:iron_helmet", (item) => {
    item.armorProtection = 3;
  });
  event.modify("minecraft:iron_boots", (item) => {
    item.armorProtection = 3;
  });
  event.modify("minecraft:iron_leggings", (item) => {
    item.armorProtection = 6;
  });

  // Gold T:13 B:+1
  event.modify("minecraft:golden_helmet", (item) => {
    item.armorProtection = 3;
  });
  event.modify("minecraft:golden_boots", (item) => {
    item.armorProtection = 2;
  });

  // Cobalt T:14
  event.modify("prodigium:cobalt_helmet", (item) => {
    item.armorProtection = 3;
  });
  event.modify("prodigium:cobalt_leggings", (item) => {
    item.armorProtection = 4;
  });
  event.modify("prodigium:cobalt_boots", (item) => {
    item.armorProtection = 3;
  });

  // Wandering Magician T:15

  //// Bersekers armors

  // Adamantium T:18
  event.modify("simpleores:adamantium_helmet", (item) => {
    item.armorToughness = 0;
  });

  event.modify("simpleores:adamantium_chestplate", (item) => {
    item.armorProtection = 7;
    item.armorToughness = 0;
  });

  event.modify("simpleores:adamantium_leggings", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
  });

  event.modify("simpleores:adamantium_boots", (item) => {
    item.armorToughness = 0;
  });

  // Diamond T:22
  event.modify("minecraft:diamond_helmet", (item) => {
    item.armorProtection = 5;
    item.armorToughness = 0;
  });

  event.modify("minecraft:diamond_chestplate", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
  });

  event.modify("minecraft:diamond_leggings", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
  });

  event.modify("minecraft:diamond_boots", (item) => {
    item.armorProtection = 5;
    item.armorToughness = 0;
  });

  // Tungsten
  event.modify("stalwart_dungeons:tungsten_helmet", (item) => {
    item.armorProtection = 3;
    item.armorToughness = 0;
  });

  event.modify("stalwart_dungeons:tungsten_chestplate", (item) => {
    item.armorProtection = 7;
    item.armorToughness = 0;
  });

  event.modify("stalwart_dungeons:tungsten_leggings", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
  });

  event.modify("stalwart_dungeons:tungsten_boots", (item) => {
    item.armorProtection = 3;
    item.armorToughness = 0;
  });

  // Phoenix
  event.modify("aether:phoenix_helmet", (item) => {
    item.armorProtection = 4;
    item.armorToughness = 0;
  });

  event.modify("aether:phoenix_chestplate", (item) => {
    item.armorProtection = 8;
    item.armorToughness = 0;
  });

  event.modify("aether:phoenix_leggings", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
  });

  event.modify("aether:phoenix_boots", (item) => {
    item.armorProtection = 4;
    item.armorToughness = 0;
  });

  event.modify("aether:obsidian_helmet", (item) => {
    item.armorProtection = 4;
    item.armorToughness = 0;
  });

  event.modify("aether:obsidian_chestplate", (item) => {
    item.armorProtection = 8;
    item.armorToughness = 0;
  });

  event.modify("aether:obsidian_leggings", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
  });

  event.modify("aether:obsidian_boots", (item) => {
    item.armorProtection = 4;
    item.armorToughness = 0;
  });

  // Chorundum
  event.modify("stalwart_dungeons:chorundum_armor_helmet", (item) => {
    item.armorProtection = 4;
    item.armorToughness = 0;
  });

  event.modify("stalwart_dungeons:chorundum_armor_chestplate", (item) => {
    item.armorProtection = 8;
    item.armorToughness = 0;
  });

  event.modify("stalwart_dungeons:chorundum_armor_leggings", (item) => {
    item.armorProtection = 7;
    item.armorToughness = 0;
  });

  event.modify("stalwart_dungeons:chorundum_armor_boots", (item) => {
    item.armorProtection = 4;
    item.armorToughness = 0;
  });

  //// Ranger armors

  // Archer

  //// Gunner armors
  // Palladium T:16
  event.modify("prodigium:palladium_helmet", (item) => {
    item.armorProtection = 3;
  });
  event.modify("prodigium:palladium_leggings", (item) => {
    item.armorProtection = 5;
  });

  // Neptune
  event.modify("aether:neptune_helmet", (item) => {
    item.armorProtection = 4;
    item.armorToughness = 0;
  });

  event.modify("aether:neptune_chestplate", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
  });

  event.modify("aether:neptune_leggings", (item) => {
    item.armorProtection = 5;
    item.armorToughness = 0;
  });

  event.modify("aether:neptune_boots", (item) => {
    item.armorProtection = 4;
    item.armorToughness = 0;
  });

  //// Crusader armors

  // Mythril T:20 B:+3
  event.modify("simpleores:mythril_helmet", (item) => {
    item.armorProtection = 4;
  });

  event.modify("simpleores:mythril_chestplate", (item) => {
    item.armorProtection = 6;
  });

  event.modify("simpleores:mythril_leggings", (item) => {
    item.armorProtection = 6;
  });

  event.modify("simpleores:mythril_boots", (item) => {
    item.armorProtection = 4;
  });

  // Paladin T:25 B:+3
  event.modify("paladins:paladin_armor_head", (item) => {
    item.armorToughness = 5;
  });

  event.modify("paladins:paladin_armor_chest", (item) => {
    item.armorToughness = 8;
    item.armorToughness = 1;
  });

  event.modify("paladins:paladin_armor_legs", (item) => {
    item.armorToughness = 7;
  });

  event.modify("paladins:paladin_armor_feet", (item) => {
    item.armorToughness = 5;
  });

  // Crusader
  event.modify("paladins:crusader_armor_head", (item) => {
    item.armorToughness = 1;
  });

  event.modify("paladins:crusader_armor_chest", (item) => {
    item.armorToughness = 1;
  });

  event.modify("paladins:crusader_armor_legs", (item) => {
    item.armorToughness = 1;
  });

  event.modify("paladins:crusader_armor_feet", (item) => {
    item.armorToughness = 1;
  });

  // Valkyrie
  event.modify("aether:valkyrie_helmet", (item) => {
    item.armorProtection = 5;
    item.armorToughness = 3;
  });

  event.modify("aether:valkyrie_chestplate", (item) => {
    item.armorProtection = 9;
  });

  event.modify("aether:valkyrie_leggings", (item) => {
    item.armorProtection = 7;
  });

  event.modify("aether:valkyrie_boots", (item) => {
    item.armorProtection = 4;
    item.armorToughness = 2;
  });

  // Ignitium
  event.modify("cataclysm:ignitium_helmet", (item) => {
    item.armorProtection = 5;
  });

  event.modify("cataclysm:ignitium_chestplate", (item) => {
    item.armorProtection = 10;
  });

  event.modify("cataclysm:ignitium_leggings", (item) => {
    item.armorProtection = 8;
  });

  event.modify("cataclysm:ignitium_boots", (item) => {
    item.armorProtection = 4;
  });

  //// Wizard armors

  // Scarecrow
  event.modify("irons_spellbooks:pumpkin_helmet", (item) => {
    item.armorProtection = 2;
    item.armorToughness = 0;
  });

  event.modify("irons_spellbooks:pumpkin_chestplate", (item) => {
    item.armorProtection = 5;
    item.armorToughness = 0;
  });

  event.modify("irons_spellbooks:pumpkin_leggings", (item) => {
    item.armorProtection = 4;
    item.armorToughness = 0;
  });

  event.modify("irons_spellbooks:pumpkin_boots", (item) => {
    item.armorProtection = 2;
    item.armorToughness = 0;
  });

  //// Necromancer armors

  // Tattered

  event.modify("majruszsdifficulty:tattered_helmet", (item) => {
    item.armorProtection = 2;
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "33c4993a-970b-4ff8-9ff3-e73c07c11bc6",
      "max mana",
      25,
      "addition"
    );
  });
  event.modify("majruszsdifficulty:tattered_chestplate", (item) => {
    item.armorProtection = 4;
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "33c4993a-970b-4ff8-9ff3-e73c07c11bc5",
      "max mana",
      50,
      "addition"
    );
  });
  event.modify("majruszsdifficulty:tattered_leggings", (item) => {
    item.armorProtection = 3;
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "33c4993a-970b-4ff8-9ff3-e73c07c11bc4",
      "max mana",
      50,
      "addition"
    );
  });
  event.modify("majruszsdifficulty:tattered_boots", (item) => {
    item.armorProtection = 3;
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "33c4993a-970b-4ff8-9ff3-e73c07c11bc3",
      "max mana",
      25,
      "addition"
    );
  });

  // Phantasm armor
  event.modify("enemyexpansion:phantasm_helmet", (item) => {
    item.armorProtection = 3;
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "33c4993a-970b-4ff8-9ff3-e73c07c11ba1",
      "max mana",
      75,
      "addition"
    );
    item.addAttribute(
      "irons_spellbooks:summon_damage",
      "33c4993a-970b-4ff8-9ff3-e73c07c11ba2",
      "summon damage",
      0.01,
      "addition"
    );
  });

  event.modify("enemyexpansion:phantasm_chestplate", (item) => {
    item.armorProtection = 7;
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "33c4993a-970b-4ff8-9ff3-e73c07c11ba3",
      "max mana",
      75,
      "addition"
    );
    item.addAttribute(
      "irons_spellbooks:summon_damage",
      "33c4993a-970b-4ff8-9ff3-e73c07c11ba4",
      "summon damage",
      0.01,
      "addition"
    );
  });

  event.modify("enemyexpansion:phantasm_leggings", (item) => {
    item.armorProtection = 5;
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "33c4993a-970b-4ff8-9ff3-e73c07c11ba5",
      "max mana",
      75,
      "addition"
    );
    item.addAttribute(
      "irons_spellbooks:summon_damage",
      "33c4993a-970b-4ff8-9ff3-e73c07c11ba6",
      "summon damage",
      0.01,
      "addition"
    );
  });

  event.modify("enemyexpansion:phantasm_boots", (item) => {
    item.armorProtection = 3;
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "33c4993a-970b-4ff8-9ff3-e73c07c11ba7",
      "max mana",
      75,
      "addition"
    );
    item.addAttribute(
      "irons_spellbooks:summon_damage",
      "33c4993a-970b-4ff8-9ff3-e73c07c11ba8",
      "summon damage",
      0.01,
      "addition"
    );
  });

  // Netherite Battlemage armor
  event.modify("irons_spellbooks:netherite_mage_helmet", (item) => {
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "33c4993a-970b-4ff8-9ff3-e73c07c11bb1",
      "max mana",
      125,
      "addition"
    );
    item.addAttribute(
      "irons_spellbooks:summon_damage",
      "33c4993a-970b-4ff8-9ff3-e73c07c11bb1",
      "summon damage",
      0.1,
      "addition"
    );
  });

  event.modify("irons_spellbooks:netherite_mage_chestplate", (item) => {
    item.armorProtection = 5;
    item.armorToughness = 0;
  });

  event.modify("irons_spellbooks:netherite_mage_leggings", (item) => {
    item.armorProtection = 4;
    item.armorToughness = 0;
  });

  event.modify("irons_spellbooks:netherite_mage_boots", (item) => {
    item.armorProtection = 2;
    item.armorToughness = 0;
  });
});
