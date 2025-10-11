ServerEvents.recipes((event) => {
  // Misc
  event.remove({ output: "drinkbeer:trade_box_normal" });
  event.remove({ output: "irons_spellbooks:amethyst_rapier" });
  event.remove({ output: "minecraft:saddle" });
  event.remove({ output: "iguanatweaksreborn:shortbow" });
  event.remove({ output: "undead_revamp2:luckysack" });
  event.remove({ output: "stalwart_dungeons:tungsten_axe" });
  event.remove({ output: "stalwart_dungeons:tungsten_sword" });
  event.remove({ output: "stalwart_dungeons:tungsten_hoe" });
  event.remove({ output: "stalwart_dungeons:tungsten_pickaxe" });
  event.remove({ output: "stalwart_dungeons:tungsten_shovel" });

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
  event.remove({ output: "sweet_charm_o_mine:sniper_scope" });

  // Tom's Simple Storage
  event.remove({ mod: "toms_storage" });

  // Archery Expansion
  event.remove({ mod: "archeryexp" });

  // GWR Expansion
  event.remove({ output: "gwrexpansions:skullcrusher_pulverizer" });
  event.remove({ output: "gwrexpansions:obsidian_launcher" });
  event.remove({ output: "gwrexpansions:obsidian_core" });
  event.remove({ output: "gwrexpansions:skull" });

  // Simply Swords
  event.remove({ output: "simplyswords:runic_tablet" });
  event.remove({ output: "simplyswords:runefused_gem" });
  event.remove({ output: "simplyswords:netherfused_gem" });
  event.remove({ output: "simplyswords:powered_remnant" });
  event.remove({ output: "simplyswords:contained_remnant" });
  event.remove({ output: "simplyswords:tampered_remnant" });

  event.remove({ output: "simplyswords:iron_longsword" });
  event.remove({ output: "simplyswords:iron_twinblade" });
  event.remove({ output: "simplyswords:iron_rapier" });
  event.remove({ output: "simplyswords:iron_katana" });
  event.remove({ output: "simplyswords:iron_sai" });
  event.remove({ output: "simplyswords:iron_spear" });
  event.remove({ output: "simplyswords:iron_glaive" });
  event.remove({ output: "simplyswords:iron_warglaive" });
  event.remove({ output: "simplyswords:iron_cutlass" });
  event.remove({ output: "simplyswords:iron_claymore" });
  event.remove({ output: "simplyswords:iron_greathammer" });
  event.remove({ output: "simplyswords:iron_greataxe" });
  event.remove({ output: "simplyswords:iron_chakram" });
  event.remove({ output: "simplyswords:iron_scythe" });
  event.remove({ output: "simplyswords:iron_halberd" });
  event.remove({ output: "simplyswords:gold_longsword" });
  event.remove({ output: "simplyswords:gold_twinblade" });
  event.remove({ output: "simplyswords:gold_rapier" });
  event.remove({ output: "simplyswords:gold_katana" });
  event.remove({ output: "simplyswords:gold_sai" });
  event.remove({ output: "simplyswords:gold_spear" });
  event.remove({ output: "simplyswords:gold_glaive" });
  event.remove({ output: "simplyswords:gold_warglaive" });
  event.remove({ output: "simplyswords:gold_cutlass" });
  event.remove({ output: "simplyswords:gold_claymore" });
  event.remove({ output: "simplyswords:gold_greathammer" });
  event.remove({ output: "simplyswords:gold_greataxe" });
  event.remove({ output: "simplyswords:gold_chakram" });
  event.remove({ output: "simplyswords:gold_scythe" });
  event.remove({ output: "simplyswords:gold_halberd" });
  event.remove({ output: "simplyswords:diamond_longsword" });
  event.remove({ output: "simplyswords:diamond_twinblade" });
  event.remove({ output: "simplyswords:diamond_rapier" });
  event.remove({ output: "simplyswords:diamond_katana" });
  event.remove({ output: "simplyswords:diamond_sai" });
  event.remove({ output: "simplyswords:diamond_spear" });
  event.remove({ output: "simplyswords:diamond_glaive" });
  event.remove({ output: "simplyswords:diamond_warglaive" });
  event.remove({ output: "simplyswords:diamond_cutlass" });
  event.remove({ output: "simplyswords:diamond_claymore" });
  event.remove({ output: "simplyswords:diamond_greathammer" });
  event.remove({ output: "simplyswords:diamond_greataxe" });
  event.remove({ output: "simplyswords:diamond_chakram" });
  event.remove({ output: "simplyswords:diamond_scythe" });
  event.remove({ output: "simplyswords:diamond_halberd" });
  event.remove({ output: "simplyswords:netherite_longsword" });
  event.remove({ output: "simplyswords:netherite_twinblade" });
  event.remove({ output: "simplyswords:netherite_rapier" });
  event.remove({ output: "simplyswords:netherite_katana" });
  event.remove({ output: "simplyswords:netherite_sai" });
  event.remove({ output: "simplyswords:netherite_spear" });
  event.remove({ output: "simplyswords:netherite_glaive" });
  event.remove({ output: "simplyswords:netherite_warglaive" });
  event.remove({ output: "simplyswords:netherite_cutlass" });
  event.remove({ output: "simplyswords:netherite_claymore" });
  event.remove({ output: "simplyswords:netherite_greathammer" });
  event.remove({ output: "simplyswords:netherite_greataxe" });
  event.remove({ output: "simplyswords:netherite_chakram" });
  event.remove({ output: "simplyswords:netherite_scythe" });
  event.remove({ output: "simplyswords:netherite_halberd" });
  event.remove({ output: "simplyswords:runic_longsword" });
  event.remove({ output: "simplyswords:runic_twinblade" });
  event.remove({ output: "simplyswords:runic_rapier" });
  event.remove({ output: "simplyswords:runic_katana" });
  event.remove({ output: "simplyswords:runic_sai" });
  event.remove({ output: "simplyswords:runic_spear" });
  event.remove({ output: "simplyswords:runic_glaive" });
  event.remove({ output: "simplyswords:runic_warglaive" });
  event.remove({ output: "simplyswords:runic_cutlass" });
  event.remove({ output: "simplyswords:runic_claymore" });
  event.remove({ output: "simplyswords:runic_greathammer" });
  event.remove({ output: "simplyswords:runic_greataxe" });
  event.remove({ output: "simplyswords:runic_chakram" });
  event.remove({ output: "simplyswords:runic_scythe" });
  event.remove({ output: "simplyswords:runic_halberd" });
});
