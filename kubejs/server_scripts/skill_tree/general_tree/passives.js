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

// Entity getting hurt by Player
EntityEvents.hurt((event) => {
  const entity = event.getEntity();
  if (!event.source.player) return;
  const player = event.source.player;

  /// Crusader \\\

  if (!player.getMainHandItem()) return;
  const mainHand = player.getMainHandItem();
  if (
    player.tags.contains("paladin_hammer") &&
    mainHand.hasTag("prodigium_reforged:hammers") &&
    Math.random() < 0.16
  ) {
    entity.level.spawnParticles(
      "born_in_chaos_v1:stunstars",
      true,
      entity.x,
      entity.y + 2,
      entity.z,
      0.0,
      0.0,
      0.0,
      1,
      0.1,
    );
    entity.level.spawnParticles(
      "born_in_chaos_v1:stunstars",
      true,
      entity.x - 0.5,
      entity.y + 1.75,
      entity.z - 0.5,
      0.0,
      0.0,
      0.0,
      25,
      0.1,
    );

    entity.level.spawnParticles(
      "born_in_chaos_v1:stunstars",
      true,
      entity.x + 0.5,
      entity.y + 1.75,
      entity.z + 0.5,
      0.0,
      0.0,
      0.0,
      25,
      0.1,
    );
    entity.potionEffects.add("cataclysm:stun", 40, 0, false, true);
  }
});
