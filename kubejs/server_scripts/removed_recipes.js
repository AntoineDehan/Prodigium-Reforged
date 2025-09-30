ServerEvents.recipes((event) => {
  // Misc
  event.remove({ output: "drinkbeer:trade_box_normal" });
  event.remove({ output: "irons_spellbooks:amethyst_rapier" });
  event.remove({ output: "minecraft:saddle" });
  event.remove({ output: "iguanatweaksreborn:shortbow" });

  // Armor
  event.remove({ output: "irons_spellbooks:netherite_mage_helmet" });
  event.remove({ output: "irons_spellbooks:netherite_mage_chestplate" });
  event.remove({ output: "irons_spellbooks:netherite_mage_leggings" });
  event.remove({ output: "irons_spellbooks:netherite_mage_boots" });

  event.remove({ output: "prodigium:palladium_helmet" });
  event.remove({ output: "prodigium:palladium_chestplate" });
  event.remove({ output: "prodigium:palladium_leggings" });
  event.remove({ output: "prodigium:palladium_boots" });

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

  event.remove({ output: "sweet_charm_o_mine:gunpowder_bag" });

  ///

  // Sweet Charm o' Mine
  event.remove({ output: "sweet_charm_o_mine:bullet_shell_charm" });
  event.remove({ output: "sweet_charm_o_mine:tobacco_pipe" });
  event.remove({ output: "sweet_charm_o_mine:shotgun_shells" });
  event.remove({ output: "sweet_charm_o_mine:dunlop_pick" });

  // Tom's Simple Storage
  event.remove({ mod: "toms_storage" });

  // Archery Expansion
  event.remove({ mod: "archeryexp" });

  // GWR Expansion
  event.remove({ output: "gwrexpansions:skullcrusher_pulverizer" });
  event.remove({ output: "gwrexpansions:obsidian_launcher" });
  event.remove({ output: "gwrexpansions:obsidian_core" });
  event.remove({ output: "gwrexpansions:skull" });
});
