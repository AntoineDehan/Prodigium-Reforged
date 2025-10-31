StartupEvents.registry("item", (e) => {
  // Queen Bee armor
  e.create("bee_helmet", "helmet").tier("bee");
  e.create("bee_chestplate", "chestplate").tier("bee");
  e.create("bee_leggings", "leggings").tier("bee");
  e.create("bee_boots", "boots").tier("bee");

  // Frostmaw armor
  e.create("frost_helmet", "helmet").tier("frost");
  e.create("frost_chestplate", "chestplate").tier("frost");
  e.create("frost_leggings", "leggings").tier("frost");
  e.create("frost_boots", "boots").tier("frost");

  // Sunbird armor
  e.create("sol_chestplate", "chestplate").tier("sunbird");
  e.create("sol_leggings", "leggings").tier("sunbird");
  e.create("sol_boots", "boots").tier("sunbird");

  // Holy Marauder armor
  e.create("holy_marauder_helmet", "helmet").tier("holymarauder");
  e.create("holy_marauder_chestplate", "chestplate").tier("holymarauder");
  e.create("holy_marauder_leggings", "leggings").tier("holymarauder");
  e.create("holy_marauder_boots", "boots").tier("holymarauder");

  // Nether armor
  e.create("nether_helmet", "helmet").tier("nether");
  e.create("nether_chestplate", "chestplate").tier("nether");
  e.create("nether_leggings", "leggings").tier("nether");
  e.create("nether_boots", "boots").tier("nether");
});
