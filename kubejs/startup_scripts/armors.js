ItemEvents.modification((event) => {
  //// Bersekers armors

  // Diamond
  event.modify("minecraft:diamond_helmet", (item) => {
    item.armorToughness = 0;
  })

  event.modify("minecraft:diamond_chestplate", (item) => {
    item.armorProtection = 7;
    item.armorToughness = 0;
  })

  event.modify("minecraft:diamond_leggings", (item) => {
    item.armorToughness = 0;
  })

  event.modify("minecraft:diamond_boots", (item) => {
    item.armorToughness = 0;
  })

  // Adamantium
  event.modify("simpleores:adamantium_helmet", (item) => {
    item.armorProtection = 3;
    item.armorToughness = 0;
  });

  event.modify("simpleores:adamantium_chestplate", (item) => {
    item.armorProtection = 6;
    item.armorToughness = 0;
  });

  event.modify("simpleores:adamantium_leggings", (item) => {
    item.armorProtection = 5;
    item.armorToughness = 0;
  });

  event.modify("simpleores:adamantium_boots", (item) => {
    item.armorProtection = 2;
    item.armorToughness = 0;
  });

  // Tungsten
  event.modify("stalwart_dungeons:tungsten_helmet", (item) => {
    item.armorProtection = 3;
    item.armorToughness = 0;
  });

  event.modify("stalwart_dungeons:tungsten_chestplate", (item) => {
    item.armorProtection = 8;
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

  // Chorundum
  event.modify("stalwart_dungeons:chorundum_armor_helmet", (item) => {
    item.armorProtection = 4;
    item.armorToughness = 0;
  });

  event.modify("stalwart_dungeons:chorundum_armor_chestplate", (item) => {
    item.armorProtection = 9;
    item.armorToughness = 0;
  });

  event.modify("stalwart_dungeons:chorundum_armor_leggings", (item) => {
    item.armorProtection = 8;
    item.armorToughness = 0;
  });

  event.modify("stalwart_dungeons:chorundum_armor_boots", (item) => {
    item.armorProtection = 4;
    item.armorToughness = 0;
  });

  //// Ranger armors

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

  // Valkyrie
  event.modify("aether:valkyrie_helmet", (item) => {
    item.armorProtection = 5;
    item.armorToughness = 3;
  });

  event.modify("aether:valkyrie_chestplate", (item) => {
    item.armorProtection = 8;
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

  // Wandering Magician
  event.modify("irons_spellbooks:wandering_magician_helmet", (item) => {
    item.armorProtection = 2;
    item.armorToughness = 0;
  });

  event.modify("irons_spellbooks:wandering_magician_chestplate", (item) => {
    item.armorProtection = 3;
    item.armorToughness = 0;
  });

  event.modify("irons_spellbooks:wandering_magician_leggings", (item) => {
    item.armorProtection = 3;
    item.armorToughness = 0;
  });

  event.modify("irons_spellbooks:wandering_magician_boots", (item) => {
    item.armorProtection = 2;
    item.armorToughness = 0;
  });

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
});
