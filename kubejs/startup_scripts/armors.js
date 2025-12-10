const $TierSortingRegistry = Java.loadClass(
  "net.minecraftforge.common.TierSortingRegistry"
);
const $Tiers = Java.loadClass("net.minecraft.world.item.Tiers");
const $ForgeTier = Java.loadClass("net.minecraftforge.common.ForgeTier");

ItemEvents.modification((event) => {
  //// Misc armors

  //// Early Game armors

  // Copper T:11
  event.modify("simpleores:copper_boots", (item) => {
    item.armorProtection = 2;
  });
  event.modify("simpleores:copper_leggins", (item) => {
    item.armorProtection = 4;
  });

  // Iron T:15 B:+2
  event.modify("minecraft:iron_helmet", (item) => {
    item.armorProtection = 3;
  });
  event.modify("minecraft:iron_chesplate", (item) => {
    item.armorProtection = 5;
  });
  event.modify("minecraft:iron_leggings", (item) => {
    item.armorProtection = 4;
  });
  event.modify("minecraft:iron_boots", (item) => {
    item.armorProtection = 3;
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
    item.addAttribute(
      "minecraft:generic.attack_damage",
      "27c72d42-c11e-404b-8577-0adf8e6c1863",
      "+1% Melee Damage",
      0.01,
      "multiply_total"
    );
  });

  event.modify("minecraft:diamond_chestplate", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_damage",
      "ce7b8f50-07d5-4a1c-ae82-277597a2c89b",
      "+1% Melee Damage",
      0.01,
      "multiply_total"
    );
  });

  event.modify("minecraft:diamond_leggings", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_damage",
      "07feca8b-d9f0-43a0-8e5a-22afb9c01ebd",
      "+1% Melee Damage",
      0.01,
      "multiply_total"
    );
  });

  event.modify("minecraft:diamond_boots", (item) => {
    item.armorProtection = 5;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_damage",
      "9c6eb986-b28d-43d0-a2cf-ac0e42c4be99",
      "+1% Melee Damage",
      0.01,
      "multiply_total"
    );
  });

  // Tungsten T:27
  event.modify("stalwart_dungeons:tungsten_helmet", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_damage",
      "2f22e6bf-ff6d-4faa-8adc-0fe21980bc41",
      "+2% Melee Damage",
      0.02,
      "multiply_total"
    );
  });

  event.modify("stalwart_dungeons:tungsten_chestplate", (item) => {
    item.armorProtection = 8;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_damage",
      "1c97b49d-c70e-441d-9cc3-45c827be3379",
      "+2% Melee Damage",
      0.02,
      "multiply_total"
    );
  });

  event.modify("stalwart_dungeons:tungsten_leggings", (item) => {
    item.armorProtection = 7;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_damage",
      "6abe2e9f-27ea-494a-9071-4d5a50502691",
      "+2% Melee Damage",
      0.02,
      "multiply_total"
    );
  });

  event.modify("stalwart_dungeons:tungsten_boots", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_damage",
      "41a8b4c4-d0bb-4d65-af78-af50f4a71d70",
      "+2% Melee Damage",
      0.02,
      "multiply_total"
    );
  });

  // warted Tungsten T:24
  event.modify("stalwart_dungeons:warted_tungsten_helmet", (item) => {
    item.armorProtection = 5;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_speed",
      "4a3b8c6b-9ff3-47e1-92a3-156aacd8bc05",
      "+2% Melee Damage",
      0.02,
      "multiply_total"
    );
  });

  event.modify("stalwart_dungeons:warted_tungsten_chestplate", (item) => {
    item.armorProtection = 7;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_speed",
      "cee44e70-9360-4df9-8efe-70d80df7e84f",
      "+2% Melee Damage",
      0.02,
      "multiply_total"
    );
  });

  event.modify("stalwart_dungeons:warted_tungsten_leggings", (item) => {
    item.armorProtection = 7;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_speed",
      "63bde0d9-fc14-45aa-a689-f2fa4a5829e6",
      "+2% Melee Damage",
      0.02,
      "multiply_total"
    );
  });

  event.modify("stalwart_dungeons:warted_tungsten_boots", (item) => {
    item.armorProtection = 5;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_speed",
      "03292cb2-3781-4f67-8b5c-9b5df937b694",
      "+2% Melee Damage",
      0.02,
      "multiply_total"
    );
  });

  // Phoenix T:31
  event.modify("aether:phoenix_helmet", (item) => {
    item.armorProtection = 7;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_damage",
      "742688b0-8e1b-460c-9af2-74b7345c8d16",
      "+3% Melee Damage",
      0.03,
      "multiply_total"
    );
  });

  event.modify("aether:phoenix_chestplate", (item) => {
    item.armorProtection = 9;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_damage",
      "129ea631-7e2c-4c3c-a927-dc286f335643",
      "+3% Melee Damage",
      0.03,
      "multiply_total"
    );
  });

  event.modify("aether:phoenix_leggings", (item) => {
    item.armorProtection = 8;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_damage",
      "46e568c7-b5df-40a5-ab8c-8b678d62526d",
      "+3% Melee Damage",
      0.03,
      "multiply_total"
    );
  });

  event.modify("aether:phoenix_boots", (item) => {
    item.armorProtection = 7;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_damage",
      "b6b2698c-076e-4d98-a280-c2c07a7f54de",
      "+3% Melee Damage",
      0.03,
      "multiply_total"
    );
  });

  event.modify("aether:obsidian_helmet", (item) => {
    item.armorProtection = 7;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_damage",
      "cb5f91b7-a8e2-43a2-b7a9-3decfea8b5dd",
      "+3% Melee Damage",
      0.03,
      "multiply_total"
    );
  });

  event.modify("aether:obsidian_chestplate", (item) => {
    item.armorProtection = 9;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_damage",
      "653ecba0-b4f1-49df-8d22-7cc35b3c5d3a",
      "+3% Melee Damage",
      0.03,
      "multiply_total"
    );
  });

  event.modify("aether:obsidian_leggings", (item) => {
    item.armorProtection = 8;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_damage",
      "04e11693-f009-455b-a4de-f16c51078435",
      "+3% Melee Damage",
      0.03,
      "multiply_total"
    );
  });

  event.modify("aether:obsidian_boots", (item) => {
    item.armorProtection = 7;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_damage",
      "016470ab-9fb5-4fbd-bd99-74b2b3483511",
      "+3% Melee Damage",
      0.03,
      "multiply_total"
    );
  });

  // Crystallized Blood
  event.modify("companions:crystallized_blood_helmet", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_speed",
      "3dadc5c3-7576-4951-aed8-9c024ced614d",
      "+3% Melee Damage",
      0.03,
      "multiply_total"
    );
  });

  event.modify("companions:crystallized_blood_chestplate", (item) => {
    item.armorProtection = 8;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_speed",
      "8c70489e-4907-4cc7-8bd6-53f28c554288",
      "+3% Melee Damage",
      0.03,
      "multiply_total"
    );
  });

  event.modify("companions:crystallized_blood_leggings", (item) => {
    item.armorProtection = 8;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_speed",
      "acc91070-bfd5-4404-bae8-3079aaee687e",
      "+3% Melee Damage",
      0.03,
      "multiply_total"
    );
  });

  event.modify("companions:crystallized_blood_boots", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
    item.addAttribute(
      "minecraft:generic.attack_speed",
      "64ce1140-3225-4f23-8836-876e4504f01a",
      "+3% Melee Damage",
      0.03,
      "multiply_total"
    );
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

  //// Archer armors

  // Archer set T:16

  // Bee T:19

  // Ranger T:20

  // Orichalcum T:21
  event.modify("prodigium:orichalcum_helmet", (item) => {
    item.armorProtection = 4;
    item.addAttribute(
      "attributeslib:arrow_damage",
      "4b9d003a-1d4d-41c1-82a4-ec2f8a737a8a",
      "+2% Arrow Damage",
      0.02,
      "multiply_total"
    );
  });
  event.modify("prodigium:orichalcum_chestplate", (item) => {
    item.armorProtection = 7;
    item.addAttribute(
      "attributeslib:arrow_damage",
      "fc409712-089d-4a35-929d-43d9ec61a3af",
      "+2% Arrow Damage",
      0.02,
      "multiply_total"
    );
  });
  event.modify("prodigium:orichalcum_leggings", (item) => {
    item.armorProtection = 6;
    item.addAttribute(
      "attributeslib:arrow_damage",
      "279917f0-5be3-406e-b587-7a376876f081",
      "+2% Arrow Damage",
      0.02,
      "multiply_total"
    );
  });
  event.modify("prodigium:orichalcum_boots", (item) => {
    item.armorProtection = 4;
    item.addAttribute(
      "attributeslib:arrow_damage",
      "63eb54ad-85c4-4929-b3b8-d04e4d8ac649",
      "+2% Arrow Damage",
      0.02,
      "multiply_total"
    );
  });

  // Neptune T:28
  event.modify("aether:neptune_helmet", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
    item.addAttribute(
      "attributeslib:arrow_damage",
      "cafaaa1d-5a4f-4752-bcf6-ff65ee2c660e",
      "+3% Arrow Damage",
      0.03,
      "multiply_total"
    );
  });

  event.modify("aether:neptune_chestplate", (item) => {
    item.armorProtection = 8;
    item.armorToughness = 0;
    item.addAttribute(
      "attributeslib:arrow_damage",
      "4c9c5f8c-6318-4455-ad84-8a720d1bcefe",
      "+3% Arrow Damage",
      0.03,
      "multiply_total"
    );
  });

  event.modify("aether:neptune_leggings", (item) => {
    item.armorProtection = 8;
    item.armorToughness = 0;
    item.addAttribute(
      "attributeslib:arrow_damage",
      "ed74d244-ee7f-4b1f-a7bf-b0c5074c1aee",
      "+3% Arrow Damage",
      0.03,
      "multiply_total"
    );
  });

  event.modify("aether:neptune_boots", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
    item.addAttribute(
      "attributeslib:arrow_damage",
      "30008a7d-c688-4e29-a6ef-1b9469cf5c7b",
      "+3% Arrow Damage",
      0.03,
      "multiply_total"
    );
  });

  // Phoenix Ranger T:29
  event.modify("kubbejs:phoenix_ranger_helmet", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
    item.addAttribute(
      "attributeslib:dodge_chance",
      "32a4804e-e24c-4bad-b96d-48cd8eedaf72",
      "+3% Dodge Chance",
      0.03,
      "addition"
    );
  });

  event.modify("kubbejs:phoenix_ranger_chestplate", (item) => {
    item.armorProtection = 8;
    item.armorToughness = 0;
    item.addAttribute(
      "attributeslib:dodge_chance",
      "9e950e1f-e80e-4667-8ded-e0a702d22bc0",
      "+3% Dodge Chance",
      0.03,
      "addition"
    );
  });

  event.modify("kubbejs:phoenix_ranger_leggings", (item) => {
    item.armorProtection = 7;
    item.armorToughness = 0;
    item.addAttribute(
      "attributeslib:dodge_chance",
      "33fc285b-b95f-4dd8-9184-e02ca7313e7c",
      "+3% Dodge Chance",
      0.03,
      "additio"
    );
  });

  event.modify("kubbejs:phoenix_ranger_boots", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
    item.addAttribute(
      "attributeslib:dodge_chance",
      "9797bcda-87b8-49bf-810f-68156a603efe",
      "+3% Dodge Chance",
      0.03,
      "addition"
    );
  });

  //// Gunner armors
  // Marauder T:15
  event.modify("bypowderandsteel:marauder_helmet", (item) => {
    item.armorProtection = 3;
  });
  event.modify("bypowderandsteel:marauder_chestplate", (item) => {
    item.armorProtection = 5;
  });
  event.modify("bypowderandsteel:marauder_leggings", (item) => {
    item.armorProtection = 4;
  });
  event.modify("bypowderandsteel:marauder_boots", (item) => {
    item.armorProtection = 3;
  });

  // Infernal Enforcer T:25
  event.modify("bypowderandsteel:infernal_enforcer_helmet", (item) => {
    item.armorProtection = 5;
    item.addAttribute(
      "gunswithoutroses:gwr.damage_base",
      "cd1cf87a-81a8-41f5-b1c0-64d0ee71972a",
      "+2% Gun Damage",
      0.02,
      "multiply_total"
    );
  });
  event.modify("bypowderandsteel:infernal_enforcer_chestplate", (item) => {
    item.armorProtection = 8;
    item.addAttribute(
      "gunswithoutroses:gwr.damage_base",
      "b1ea4ab8-3f2b-4dac-b470-e550c179ceaa",
      "+2% Gun Damage",
      0.02,
      "multiply_total"
    );
  });
  event.modify("bypowderandsteel:infernal_enforcer_leggings", (item) => {
    item.armorProtection = 7;
    item.addAttribute(
      "gunswithoutroses:gwr.damage_base",
      "eb1ec282-3c38-4edf-8ddb-753f82e73ba8",
      "+2% Gun Damage",
      0.02,
      "multiply_total"
    );
  });
  event.modify("bypowderandsteel:infernal_enforcer_boots", (item) => {
    item.armorProtection = 5;
    item.addAttribute(
      "gunswithoutroses:gwr.damage_base",
      "3b41498e-0dfd-4f78-850b-25e589368448",
      "+2% Gun Damage",
      0.02,
      "multiply_total"
    );
  });

  // Necro T:27
  event.modify("bypowderandsteel:infernal_enforcer_helmet", (item) => {
    item.armorProtection = 5;
    item.addAttribute(
      "gunswithoutroses:gwr.fire_delay",
      "96ef5a03-488f-422f-b8fd-87a07e4c39e4",
      "-2% Fire Delay",
      -0.02,
      "multiply_total"
    );
  });
  event.modify("bypowderandsteel:infernal_enforcer_chestplate", (item) => {
    item.armorProtection = 8;
    item.addAttribute(
      "gunswithoutroses:gwr.fire_delay",
      "0c8b0606-aacc-419c-834e-b1ad1dbd806c",
      "-2% Fire Delay",
      -0.02,
      "multiply_total"
    );
  });
  event.modify("bypowderandsteel:infernal_enforcer_leggings", (item) => {
    item.armorProtection = 7;
    item.addAttribute(
      "gunswithoutroses:gwr.fire_delay",
      "b621a7b9-96c1-48fb-b43e-3e8c88cc3678",
      "-2% Fire Delay",
      -0.02,
      "multiply_total"
    );
  });
  event.modify("bypowderandsteel:infernal_enforcer_boots", (item) => {
    item.armorProtection = 5;
    item.addAttribute(
      "gunswithoutroses:gwr.fire_delay",
      "6d316ab9-f928-47b8-bfba-bb1a300aabc0",
      "-2% Fire Delay",
      -0.02,
      "multiply_total"
    );
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

  // Paladin T:25 TO:4 B:+3

  // Crusader T:31 TO:5

  // Dragon T:35 TO:9

  event.modify("block_factorys_bosses:dragon_bones_chestplate", (item) => {
    item.armorProtection = 12;
    item.armorToughness = 3;
    item.addAttribute(
      "puffish_attributes:player.resistance",
      "1ba470c3-9218-4af3-895a-57231ef1d6c6",
      "+1% Damage Reduction",
      0.01,
      "addition"
    );
  });

  event.modify("block_factorys_bosses:dragon_bones_leggings", (item) => {
    item.armorProtection = 11;
    item.armorToughness = 2;
    item.addAttribute(
      "puffish_attributes:player.resistance",
      "ee8cf846-987b-497e-888a-216b2703ab21",
      "+1% Damage Reduction",
      0.01,
      "addition"
    );
  });

  event.modify("block_factorys_bosses:dragon_bones_boots", (item) => {
    item.armorProtection = 9;
    item.armorToughness = 2;
    item.addAttribute(
      "puffish_attributes:player.resistance",
      "e8dd8d6d-2294-4642-aa7e-36b86e495faf",
      "+1% Damage Reduction",
      0.01,
      "addition"
    );
  });

  // Plated Valkyrie T:44

  // Valkyrie T:35 TO:6
  event.modify("aether:valkyrie_helmet", (item) => {
    item.armorProtection = 8;
    item.armorToughness = 1.5;
    item.addAttribute(
      "puffish_attributes:player.resistance",
      "e8dd8d6d-2294-4642-aa7e-36b86e495faf",
      "+1% Damage Reduction",
      0.01,
      "addition"
    );
  });

  event.modify("aether:valkyrie_chestplate", (item) => {
    item.armorProtection = 10;
    item.armorToughness = 1.5;
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "da6b11e3-e8da-4c78-b889-c589921a0143",
      "max mana",
      50,
      "addition"
    );
  });

  event.modify("aether:valkyrie_leggings", (item) => {
    item.armorProtection = 9;
    item.armorToughness = 1.5;
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "6fb94a87-ca83-4313-b3e2-4cc7b2441f03",
      "max mana",
      50,
      "addition"
    );
  });

  event.modify("aether:valkyrie_boots", (item) => {
    item.armorProtection = 8;
    item.armorToughness = 1.5;
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "fdbdea44-e5ac-4e0f-8552-13a447b3930a",
      "max mana",
      50,
      "addition"
    );
  });

  // Ignitium (à faire)
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

  // Scarecrow T:20

  // Wizard T:23

  // Skyjade T:27
  event.modify("kubejs:skyjade_helmet", (item) => {
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "9a6674b4-7c51-42ec-a1d5-9aa7ac6cd0eb",
      "+90 Max Mana",
      90,
      "addition"
    );
    item.addAttribute(
      "irons_spellbooks:spell_power",
      "93aeca8b-2ff0-4b60-9c96-bad25f34d122",
      "+2% Spell Power",
      0.02,
      "multiply_total"
    );
  });
  event.modify("kubejs:skyjade_chestplate", (item) => {
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "ccafc8df-be58-42b8-98c5-2ad22aade9bb",
      "+90 Max Mana",
      90,
      "addition"
    );
    item.addAttribute(
      "irons_spellbooks:spell_power",
      "212736fa-bcaa-42aa-b9bb-0252da60913d",
      "+2% Spell Power",
      0.02,
      "multiply_total"
    );
  });
  event.modify("kubejs:skyjade_leggings", (item) => {
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "a735845c-cf0a-42ae-87f7-9a34c182f35e",
      "+90 Max Mana",
      90,
      "addition"
    );
    item.addAttribute(
      "irons_spellbooks:spell_power",
      "73be3319-be2c-408c-8fcf-ded2915816e4",
      "+2% Spell Power",
      0.02,
      "multiply_total"
    );
  });
  event.modify("kubejs:skyjade_boots", (item) => {
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "f87c290e-5c0a-4623-bcfa-c38ab281963b",
      "+90 Max Mana",
      90,
      "addition"
    );
    item.addAttribute(
      "irons_spellbooks:spell_power",
      "bfca86d7-5bbc-446f-9a59-881f6cd3cdb3",
      "+2% Spell Power",
      0.02,
      "multiply_total"
    );
  });

  // Wizard Ignitium T:31
  event.modify("kubejs:wizard_ignitium_helmet", (item) => {
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "3eec60e7-38d7-4404-bf3c-123141adb3d9",
      "+100 Max Mana",
      100,
      "addition"
    );
    item.addAttribute(
      "irons_spellbooks:spell_power",
      "2fb785b2-6a97-439e-8761-fce969e5be18",
      "+3% Spell Power",
      0.03,
      "multiply_total"
    );
  });
  event.modify("kubejs:wizard_ignitium_chestplate", (item) => {
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "6084491b-06d6-440b-9075-c23c04a473a2",
      "+100 Max Mana",
      100,
      "addition"
    );
    item.addAttribute(
      "irons_spellbooks:spell_power",
      "b0ad3373-1ad7-4a9e-85ac-249716aa9121",
      "+3% Spell Power",
      0.03,
      "multiply_total"
    );
  });
  event.modify("kubejs:wizard_ignitium_leggings", (item) => {
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "c1a14cf6-4a3f-4d3d-8283-05ba31e936a9",
      "+100 Max Mana",
      100,
      "addition"
    );
    item.addAttribute(
      "irons_spellbooks:spell_power",
      "17545a12-6ec8-4132-bc25-7bd79a2bce36",
      "+3% Spell Power",
      0.03,
      "multiply_total"
    );
  });
  event.modify("kubejs:wizard_ignitium_boots", (item) => {
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "e5321017-969d-42dc-a951-77206e17f04c",
      "+100 Max Mana",
      100,
      "addition"
    );
    item.addAttribute(
      "irons_spellbooks:spell_power",
      "bd86b2ee-d5c0-4194-a41b-c36ab2d9a51d",
      "+3% Spell Power",
      0.03,
      "multiply_total"
    );
  });

  //// Priest armors

  // Priest T:14

  // Sun Bird T:17
  event.modify("mowziesmobs:sol_visage", (item) => {
    item.armorProtection = 3;
  });

  // Prior T:22

  // Holy Marauder T:28 TO:2

  // Nether T:26
  event.modify("kubejs:nether_helmet", (item) => {
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "052f40cb-7b5e-480d-9ae4-c6959ad75f0d",
      "+40 Max Mana",
      40,
      "addition"
    );
    item.addAttribute(
      "irons_spellbooks:holy_spell_power",
      "0fb76dce-8a6b-4799-9e96-c3fafb3ff078",
      "+40 Max Mana",
      0.03,
      "multiply_total"
    );
  });
  event.modify("kubejs:nether_chestplate", (item) => {
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "251afff7-f4a7-4d6d-b601-da66001341ef",
      "+40 Max Mana",
      40,
      "addition"
    );
    item.addAttribute(
      "irons_spellbooks:holy_spell_power",
      "79cf74fd-bb3c-4fa7-83e5-47358d2da1bb",
      "+40 Max Mana",
      0.03,
      "multiply_total"
    );
  });
  event.modify("kubejs:nether_leggings", (item) => {
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "7c4b063f-9038-41b6-ae2b-c37a4c09b96a",
      "+40 Max Mana",
      40,
      "addition"
    );
    item.addAttribute(
      "irons_spellbooks:holy_spell_power",
      "5a1b77f3-be58-42e2-b0f9-592f5272c05d",
      "+40 Max Mana",
      0.03,
      "multiply_total"
    );
  });
  event.modify("kubejs:nether_boots", (item) => {
    item.addAttribute(
      "irons_spellbooks:max_mana",
      "93aeca8b-2ff0-4b60-9c96-bad25f34d122",
      "+40 Max Mana",
      40,
      "addition"
    );
    item.addAttribute(
      "irons_spellbooks:holy_spell_power",
      "242a6350-c9a8-4c6b-b36a-d2fcae0564ca",
      "+40 Max Mana",
      0.03,
      "multiply_total"
    );
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
