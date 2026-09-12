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
    if (Math.random() < 0.05) {
      player.potionEffects.add("simplyskills:barrier", 140, 0, true, false);
    }
  }
});

let thirdHitCounter = {};
// Entity getting hurt by Player
EntityEvents.hurt((event) => {
  const entity = event.getEntity();

  if (!event.source.player) return;
  const player = event.source.player;
  let uuid = player.uuid;

  /// Gunner \\\
  if (event.source.getType() !== "gwrgun") return;

  if (player.tags.contains("armor_piercing_rounds")) {
    if (!thirdHitCounter[uuid]) {
      thirdHitCounter[uuid] = 0;
    }
    thirdHitCounter[uuid]++;
    if (thirdHitCounter[uuid] === 3) {
      entity.potionEffects.add("irons_spellbooks:rend", 80, 1, true, false);
      thirdHitCounter[uuid] = 0;
    }
  }
});

EntityEvents.death((event) => {
  const entity = event.getEntity();

  if (!event.source.player) return;
  const player = event.source.player;

  /// Gunner \\\
  if (event.source.getType() !== "gwrgun") return;

  if (player.tags.contains("scavenger") && Math.random() < 0.33) {
    if (Math.random() < 0.55) {
      let count = Math.floor(Math.random() * 7) + 6;
      entity.block.popItem(Item.of("gunswithoutroses:flint_bullet", count));
    } else {
      let slot = player.inventory.find(Item.of("minecraft:gunpowder"));
      if (slot !== -1) {
        player.inventory.extractItem(slot, 1, false);
        player.potionEffects.add("kubejs:fresh_reload", 100, 0, true, false);
      }
    }
  }
});

PlayerEvents.changeMana((event) => {
  const player = event.player;
  const magicData = event.getMagicData();
  const spellId = magicData.getCastingSpellId();

  if (!magicData || magicData.getCastSource() !== "SPELLBOOK") return;

  // Wizardery
  if (player.tags.contains("wizardery")) {
    const currentMana = event.getNewMana();

    const newSpellPower = Math.floor(currentMana / 100) * 0.02;
    player.modifyAttribute(
      "irons_spellbooks:spell_power",
      "wizardery",
      newSpellPower,
      "multiply_total",
    );
  }

  // Clericery
  if (player.tags.contains("clericery")) {
    const currentMana = event.getNewMana();

    const newMaxHealth = Math.floor(currentMana / 100) * 0.05;
    player.modifyAttribute(
      "minecraft:generic.max_health",
      "wizardery",
      newMaxHealth,
      "multiply_total",
    );
  }
});

PlayerEvents.tick((event) => {
  const player = event.player;

  // Ranged Awarness
  if (player.tags.contains("ranged_awareness")) {
    let healthRatio = player.health / player.maxHealth;

    if (healthRatio < 0.2) {
      player.modifyAttribute(
        "attributecore:stealth",
        "stealth",
        0.4,
        "addition",
      );
      player.modifyAttribute("confluence:aggro", "aggro", -200, "addition");
    } else if (healthRatio < 0.5) {
      player.modifyAttribute(
        "attributecore:stealth",
        "stealth",
        0.2,
        "addition",
      );
      player.modifyAttribute("confluence:aggro", "aggro", -100, "addition");
    } else if (healthRatio < 0.8) {
      player.modifyAttribute(
        "attributecore:stealth",
        "stealth",
        0.1,
        "addition",
      );
      player.modifyAttribute("confluence:aggro", "aggro", -50, "addition");
    }
  }
});
