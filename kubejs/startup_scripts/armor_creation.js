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
});
