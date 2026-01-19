//Spell Casts
PlayerEvents.spellOnCast((event) => {
  const player = event.player;
  if (!player) return;

  /// Mage \\\

  // Spell Precision
  if (player.tags.contains("spell_precision") && Math.random() < 0.2) {
    player.potionEffects.add("kubejs:spell_boosted", 120, 0, true, false);
  }
  // Eldritch Enfeeblement \\
  if (player.tags.contains("eldritch_enfeeblement") && Math.random() < 0.08) {
    player.playSound("spell_engine:generic_healing_release", 0.6, 1.4);
    if (player.tags.contains("stage_expert")) {
      player.heal(8);
    } else player.heal(5);
  }

  /// Ranger \\\
});

// Player Getting Hurt
EntityEvents.hurt((event) => {
  const player = event.getEntity();
  if (!player.isPlayer()) return;

  /// Mage \\\

  // Eldritch Enfeeblement \\
  if (player.tags.contains("eldritch_enfeeblement")) {
    player.potionEffects.add("slowness", 120, 0, true, false);
  }

  // Magic Defense \\

  if (player.tags.contains("magic_defense")) {
    player.potionEffects.add("kubejs:magic_defense", 120, 0, true, false);
    if (Math.random() < 0.07) {
      player.potionEffects.add("simplyskills:barrier", 140, 0, true, false);
    }
  }
});
