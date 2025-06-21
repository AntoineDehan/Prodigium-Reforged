ServerEvents.recipes((event) => {
  // Misc
  event.remove({ output: "terrawhips_and_more:slime_crown" });
  event.remove({ output: "drinkbeer:trade_box_normal" });
  event.remove({ output: "irons_spellbooks:amethyst_rapier" });
  event.remove({ output: "gwrexpansions:lavapower_bullet" });

  // Armor
  event.remove({ output: "irons_spellbooks:netherite_mage_helmet" });
  event.remove({ output: "irons_spellbooks:netherite_mage_chestplate" });
  event.remove({ output: "irons_spellbooks:netherite_mage_leggings" });
  event.remove({ output: "irons_spellbooks:netherite_mage_boots" });

  // Stick issue kek
  event.remove({ output: "simple_weapons:ironwood_dagger" });
  event.remove({ output: "simple_weapons:ironwood_scythe" });
  event.remove({ output: "simple_weapons:ironwood_sickle" });
  event.remove({ output: "simple_weapons:ironwood_greatsword" });
  event.remove({ output: "simple_weapons:ironwood_katana" });
  event.remove({ output: "simple_weapons:ironwood_scimitar" });
  event.remove({ output: "simple_weapons:knightmetal_dagger" });
  event.remove({ output: "simple_weapons:knightmetal_scythe" });
  event.remove({ output: "simple_weapons:knightmetal_sickle" });
  event.remove({ output: "simple_weapons:knightmetal_fist" });
  event.remove({ output: "simple_weapons:knightmetal_spear" });
  event.remove({ output: "simple_weapons:knightmetal_greatsword" });
  event.remove({ output: "simple_weapons:knightmetal_katana" });
  event.remove({ output: "simple_weapons:knightmetal_scimitar" });
  event.remove({ output: "simple_weapons:steeleaf_dagger" });
  event.remove({ output: "simple_weapons:steeleaf_fist" });
  event.remove({ output: "simple_weapons:steeleaf_scythe" });
  event.remove({ output: "simple_weapons:steeleaf_sickle" });
  event.remove({ output: "simple_weapons:steeleaf_spear" });
  event.remove({ output: "simple_weapons:steeleaf_greatsword" });
  event.remove({ output: "simple_weapons:steeleaf_katana" });
  event.remove({ output: "simple_weapons:steeleaf_scimitar" });
  event.remove({ output: "simple_weapons:ironwood_fist" });
  event.remove({ output: "simple_weapons:ironwood_spear" });

  /// NPC Uncraftable items

  // Guns
  event.remove({ output: "gwrexpansions:netherite_sniper" });
  event.remove({ output: "gwrexpansions:netherite_shotgun" });
  event.remove({ output: "gwrexpansions:netherite_gatling" });

  // Tom's Simple Storage
  event.remove({ mod: "toms_storage" });
});
