StartupEvents.registry("item", (e) => {
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
