ServerEvents.recipes((event) => {
  // Misc
  event.remove({ output: "drinkbeer:trade_box_normal" });
  event.remove({ output: "irons_spellbooks:amethyst_rapier" });
  event.remove({ output: "minecraft:saddle" });

  // Armor
  event.remove({ output: "irons_spellbooks:netherite_mage_helmet" });
  event.remove({ output: "irons_spellbooks:netherite_mage_chestplate" });
  event.remove({ output: "irons_spellbooks:netherite_mage_leggings" });
  event.remove({ output: "irons_spellbooks:netherite_mage_boots" });

  // Pets

  event.remove({ output: "tameablebeasts:icepop" });
  event.remove({ output: "tameablebeasts:ice_helmet" });
  event.remove({ output: "tameablebeasts:ice_chestplate" });
  event.remove({ output: "domesticationinnovation:collar_tag" });

  /// Bosses Uncraftable items
  event.remove({ output: "gwrexpansions:lavapower_bullet" });
  event.remove({ output: "born_in_chaos_v1:bone_heart" });
  event.remove({ output: "born_in_chaos_v1:bone_handle" });
  event.remove({ output: "born_in_chaos_v1:sweet_sword" });
  event.remove({ output: "born_in_chaos_v1:sweet_axe" });

  /// NPC Uncraftable items
  // Guns
  event.remove({ output: "gwrexpansions:netherite_sniper" });
  event.remove({ output: "gwrexpansions:netherite_shotgun" });
  event.remove({ output: "gwrexpansions:netherite_gatling" });

  // Tom's Simple Storage
  event.remove({ mod: "toms_storage" });

  // Archery Expansion
  event.remove({ mod: "archeryexp" });
});
