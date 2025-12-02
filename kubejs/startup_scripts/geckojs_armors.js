StartupEvents.registry("item", (event) => {
  // Wizard Ignitium armor
  event
    .create("kubejs:wizard_ignitium_helmet", "anim_helmet")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/wizard_ignitium.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/wizard_ignitium.png");
    })
    .rarity("rare")
    .displayName("Wizard Ignitium Hat")
    .tier("wizard_ignitium");

  event
    .create("kubejs:wizard_ignitium_chestplate", "anim_chestplate")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/wizard_ignitium.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/wizard_ignitium.png");
    })
    .rarity("rare")
    .displayName("Wizard Ignitium Robe")
    .tier("wizard_ignitium");

  event
    .create("kubejs:wizard_ignitium_leggings", "anim_leggings")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/wizard_ignitium.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/wizard_ignitium.png");
    })
    .rarity("rare")
    .displayName("Wizard Ignitium Leggings")
    .tier("wizard_ignitium");

  event
    .create("kubejs:wizard_ignitium_boots", "anim_boots")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/wizard_ignitium.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/wizard_ignitium.png");
    })
    .rarity("rare")
    .displayName("Wizard Ignitium Boots")
    .tier("wizard_ignitium");

  // Necro armor
  event
    .create("kubejs:necro_helmet", "anim_helmet")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/necro.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/necro.png");
    })
    .rarity("rare")
    .displayName("Necro Helmet")
    .tier("necro");

  event
    .create("kubejs:necro_chestplate", "anim_chestplate")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/necro.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/necro.png");
    })
    .rarity("rare")
    .displayName("Necro Chestplate")
    .tier("necro");

  event
    .create("kubejs:necro_leggings", "anim_leggings")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/necro.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/necro.png");
    })
    .rarity("rare")
    .displayName("Necro Leggings")
    .tier("necro");

  event
    .create("kubejs:necro_boots", "anim_boots")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/necro.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/necro.png");
    })
    .rarity("rare")
    .displayName("Necro Boots")
    .tier("necro");

  // Skyjade Armor
  event
    .create("kubejs:skyjade_helmet", "anim_helmet")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/skyjade_armor.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/skyjade_armor.png");
    })
    .rarity("rare")
    .displayName("Skyjade Hat")
    .tier("wizard_skyjade");

  event
    .create("kubejs:skyjade_chestplate", "anim_chestplate")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/skyjade_armor.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/skyjade_armor.png");
    })
    .rarity("rare")
    .displayName("Skyjade Robe")
    .tier("wizard_skyjade");

  event
    .create("kubejs:skyjade_leggings", "anim_leggings")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/skyjade_armor.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/skyjade_armor.png");
    })
    .rarity("rare")
    .displayName("Skyjade Leggings")
    .tier("wizard_skyjade");

  event
    .create("kubejs:skyjade_boots", "anim_boots")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/skyjade_armor.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/skyjade_armor.png");
    })
    .rarity("rare")
    .displayName("Skyjade Boots")
    .tier("wizard_skyjade");

  // Sol Armor
  event
    .create("kubejs:sol_chestplate", "anim_chestplate")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/sol.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/sol.png");
    })
    .rarity("rare")
    .displayName("Sol Robe")
    .tier("sunbird");

  event
    .create("kubejs:sol_leggings", "anim_leggings")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/sol.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/sol.png");
    })
    .rarity("rare")
    .displayName("Sol Leggings")
    .tier("sunbird");

  event
    .create("kubejs:sol_boots", "anim_boots")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/sol.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/sol.png");
    })
    .rarity("rare")
    .displayName("Sol Boots")
    .tier("sunbird");

  // Plated Valkyrie armor
  event
    .create("kubejs:plated_valkyrie_helmet", "anim_helmet")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/plated_valkyrie.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/plated_valkyrie.png");
      geo.setSimpleAnimation(
        "kubejs:animations/armor/plated_valkyrie.animation.json"
      );
    })
    .rarity("rare")
    .displayName("Plated Valkyrie Helmet")
    .tier("plated_valkyrie");

  event
    .create("kubejs:plated_valkyrie_chestplate", "anim_chestplate")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/plated_valkyrie.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/plated_valkyrie.png");
      geo.setSimpleAnimation(
        "kubejs:animations/armor/plated_valkyrie.animation.json"
      );
    })
    .rarity("rare")
    .displayName("Plated Valkyrie Chestplate")
    .tier("plated_valkyrie");

  event
    .create("kubejs:plated_valkyrie_leggings", "leggings")
    .rarity("rare")
    .displayName("Plated Valkyrie Leggings")
    .tier("plated_valkyrie");

  event
    .create("kubejs:plated_valkyrie_boots", "anim_boots")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/plated_valkyrie.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/plated_valkyrie.png");
      geo.setSimpleAnimation(
        "kubejs:animations/armor/plated_valkyrie.animation.json"
      );
    })
    .rarity("rare")
    .displayName("Plated Valkyrie Boots")
    .tier("plated_valkyrie");

  // Bee Armor
  event
    .create("kubejs:bee_helmet", "anim_helmet")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/thebeetop.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/beearmor.png");
      geo.setSimpleAnimation("kubejs:animations/armor/thebee.animation.json");
    })
    .rarity("rare")
    .displayName("Bee Helmet")
    .tier("bee");

  event
    .create("kubejs:bee_chestplate", "anim_chestplate")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/thebeetop.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/beearmor.png");
      geo.setSimpleAnimation("kubejs:animations/armor/thebee.animation.json");
    })
    .rarity("rare")
    .displayName("Bee Chestplate")
    .tier("bee");

  event
    .create("bee_leggings", "leggings")
    .rarity("rare")
    .displayName("Bee Leggings")
    .tier("bee");

  event
    .create("kubejs:bee_boots", "anim_boots")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/thebeetop.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/beearmor.png");
      geo.setSimpleAnimation("kubejs:animations/armor/thebee.animation.json");
    })
    .rarity("rare")
    .displayName("Bee Boots")
    .tier("bee");

  // Ranger Phoenix armor
  event
    .create("kubejs:phoenix_ranger_helmet", "anim_helmet")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/phoenix_ranger.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/phoenix_ranger.png");
    })
    .rarity("rare")
    .displayName("Phoenix Ranger Helmet")
    .tier("phoenix_ranger");

  event
    .create("kubejs:phoenix_ranger_chestplate", "anim_chestplate")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/phoenix_ranger.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/phoenix_ranger.png");
    })
    .rarity("rare")
    .displayName("Phoenix Ranger Chestplate")
    .tier("phoenix_ranger");

  event
    .create("kubejs:phoenix_ranger_leggings", "anim_leggings")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/phoenix_ranger.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/phoenix_ranger.png");
    })
    .rarity("rare")
    .displayName("Phoenix Ranger Leggings")
    .tier("phoenix_ranger");

  event
    .create("kubejs:phoenix_ranger_boots", "anim_boots")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/phoenix_ranger.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/phoenix_ranger.png");
    })
    .rarity("rare")
    .displayName("Phoenix Ranger Boots")
    .tier("phoenix_ranger");

  // Frost Armor
  event
    .create("frost_helmet", "anim_helmet")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/frost_armor.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/frost.png");
    })
    .rarity("rare")
    .displayName("Frost Hood")
    .tier("frost");

  event
    .create("kubejs:frost_chestplate", "anim_chestplate")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/frost_armor.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/frost.png");
    })
    .rarity("rare")
    .displayName("Frost Chestplate")
    .tier("frost");

  event
    .create("kubejs:frost_leggings", "anim_leggings")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/frost_armor.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/frost.png");
    })
    .rarity("rare")
    .displayName("Frost Leggings")
    .tier("frost");

  event
    .create("kubejs:frost_boots", "anim_boots")
    .geoModel((geo) => {
      geo.setSimpleModel("kubejs:geo/armor/frost_armor.geo.json");
      geo.setSimpleTexture("kubejs:textures/armor/frost.png");
    })
    .rarity("rare")
    .displayName("Frost Boots")
    .tier("frost");
});
