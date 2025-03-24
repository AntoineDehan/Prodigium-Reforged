ServerEvents.recipes((event) => {
  // Misc
  event.remove({ output: "terrawhips_and_more:slime_crown" });

  // Armor
  event.remove({ output: "irons_spellbooks:netherite_magee_helmet" });
  event.remove({ output: "irons_spellbooks:netherite_mage_chestplate" });
  event.remove({ output: "irons_spellbooks:netherite_mage_leggings" });
  event.remove({ output: "irons_spellbooks:netherite_mage_boots" });
});
