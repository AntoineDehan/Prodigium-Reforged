// priority: 0

JEIEvents.information((event) => {
  //// Misc
  event.addItem(
    [
      "aether_redux:veridium_ore",
      "aether_redux:raw_veridium",
      "aether_redux:veridium_ingot",
    ],
    ["Found at the top of the Aether (generate above y=165)"]
  );
  //// NPC items
  // Arms Dealer
  event.addItem(
    [
      "gunswithoutroses:bullet_bag",
      "gunswithoutroses:flint_bullet",
      "archers:auto_fire_hook",
      "confluence:magic_quiver",
      "gwrexpansions:netherite_sniper",
      "gwrexpansions:netherite_shotgun",
      "gwrexpansions:netherite_gatling",
      "sweet_charm_o_mine:gunpowder_bag",
    ],
    ["Sold by the Arms Dealer NPC"]
  );

  // Merchant
  event.addItem(
    [
      "farmersdelight:rope",
      "numismatic-overhaul:piggy_bank",
      "dummmmmmy:target_dummy",
      "minecraft:phantom_membrane",
    ],
    ["Sold by the Merchant NPC"]
  );

  // Tavernkeep
  event.addItem(
    [
      "prodigium:eternia_crystal",
      "naturescompass:naturescompass",
      "explorerscompass:explorerscompass",
      "waystones:waystone",
      "waystones:sandy_waystone",
      "irons_spellbooks:legendary_ink",
      "simplyskills:skill_chronicle",
      "simplyskills:malevolent_manuscript",
      "drinkbeer:recipe_board_package",
    ],
    ["Sold by the Tavernkeep NPC"]
  );

  // Nurse
  event.addItem(
    [
      "ennemyexpansion:healing_eye",
      "confluence:band_of_regeneration",
      "confluence:cross_necklace",
    ],
    ["Sold by the Nurse NPC"]
  );

  // Zoologist
  event.addItem(
    [
      "domesticationinnovation:collar_tag",
      "companions:book_ice_shard",
      "companions:book_ice_tornado",
      "companions:book_fire_mark",
      "companions:book_brace",
      "companions:book_heal_ring",
      "companions:book_stone_spikes",
      "companions:book_magic_ray",
      "companions:book_black_hole",
      "companions:book_naginata",
    ],
    ["Sold by the Zoologist NPC"]
  );

  // Goblin
  event.addItem(
    [
      "davespotioneering:potion_injector",
      "extractinator:extractinator",
      "aether:ambrosium_shard",
      "confluence:workshop",
      "confluence:dps_meter",
      "minecraft:firework_rocket",
    ],
    ["Sold by the Goblin Tinkerer NPC"]
  );

  // Wizard
  event.addItem(
    [
      "irons_spellbooks:blank_rune",
      "irons_spellbooks:silver_ring",
      "irons_spellbooks:cooldown_ring",
      "irons_spellbooks:cast_time_ring",
      "irons_spellbooks:common_ink",
      "irons_spellbooks:uncommon_ink",
      "irons_spellbooks:rare_ink",
      "irons_spellbooks:epic_ink",
    ],
    ["Sold by the Wizard NPC"]
  );

  // Steampunker
  event.addItem(
    [
      "toms_storage:ts.inventory_connector",
      "toms_storage:ts.trim",
      "toms_storage:ts.crafting_terminal",
      "toms_storage:ts.inventory_cable",
      "toms_storage:ts.inventory_cable_framed",
      "toms_storage:ts.inventory_cable_connector_framed",
      "toms_storage:ts.inventory_cable_connector",
      "toms_storage:ts.inventory_cable_connector_filtered",
      "toms_storage:ts.item_filter",
      "toms_storage:ts.item_filter",
      "toms_storage:ts.polymorphic_item_filter",
      "toms_storage:ts.tag_item_filter",
      "toms_storage:ts.inventory_hopper_basic",
      "toms_storage:ts.level_emitter",
      "toms_storage:ts.paint_kit",
      "sophisticatedstorage:stack_upgrade_tier_4",
      "sophisticatedbackpacks:stack_upgrade_tier_4",
    ],
    ["Sold by Steampunker NPC"]
  );
});
