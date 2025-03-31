ServerEvents.recipes((event) => {
  // Misc
  event.remove({ output: "terrawhips_and_more:slime_crown" });
  event.remove({ output: "drinkbeer:trade_box_normal" });

  // Armor
  event.remove({ output: "irons_spellbooks:netherite_mage_helmet" });
  event.remove({ output: "irons_spellbooks:netherite_mage_chestplate" });
  event.remove({ output: "irons_spellbooks:netherite_mage_leggings" });
  event.remove({ output: "irons_spellbooks:netherite_mage_boots" });

  /// NPC Uncraftable items

  // Guns
  event.remove({ output: "gwrexpansions:netherite_sniper" });
  event.remove({ output: "gwrexpansions:netherite_shotgun" });
  event.remove({ output: "gwrexpansions:netherite_gatling" });

  // Tom's Simple Storage
  event.remove({ mod: "toms_storage" });
});
