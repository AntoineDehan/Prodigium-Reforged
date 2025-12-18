const holySpells = [
  "irons_spellbooks:blessing_of_life",
  "irons_spellbooks:fortify",
  "irons_spellbooks:greater_heal",
  "irons_spellbooks:healing_circle",
  "irons_spellbooks:heal",
  "irons_spellbooks:haste",
];

PlayerEvents.spellOnCast((event) => {
  function getCuriosItemList(player, slot) {
    let curio = player.nbt.ForgeCaps["curios:inventory"]["Curios"].find(
      (curio) => curio["Identifier"] === slot
    );
    return curio ? curio.StacksHandler.Stacks.Items : [];
  }
  const player = event.player;
  if (!player) return;

  // Feather Necklace granting the Holy Touch
  const curios = getCuriosItemList(player, "necklace");
  const hasFeatherNecklace = curios.some(
    (i) => i.id === "prodigium_reforged:feather_necklace"
  );

  if (hasFeatherNecklace && Math.random() < 0.3) {
    player.potionEffects.add("kubejs:holy_touch", 100, 0, true, true);
  }
});

const manaTracker = {};

PlayerEvents.changeMana((event) => {
  const player = event.player;
  const magicData = event.getMagicData();

  if (!magicData || magicData.getCastSource() !== "SPELLBOOK") return;

  if (
    player.hasEffect("kubejs:skyjade_knowledge") ||
    player.hasEffect("kubejs:ignitium_magic")
  ) {
    const oldMana = event.getOldMana();
    const newMana = event.getNewMana();

    if (newMana >= oldMana) return;

    const manaSpent = oldMana - newMana;

    if (!manaTracker[player.uuid]) manaTracker[player.uuid] = 0;

    manaTracker[player.uuid] += manaSpent;

    // Skyjade armor effect
    if (player.hasEffect("kubejs:skyjade_knowledge")) {
      if (manaTracker[player.uuid] >= 350) {
        player.potionEffects.add(
          "kubejs:skyjade_strength",
          200,
          0,
          false,
          true
        );
        Client.player.playSound("minecraft:block.enchantment_table.use");
        Client.player.playSound("minecraft:block.enchantment_table.use");
        Client.player.playSound("minecraft:block.enchantment_table.use");

        manaTracker[player.uuid] = 0;
      }
    }

    // Wizard Ignitium effect
    if (player.hasEffect("kubejs:ignitium_magic")) {
      if (
        !player.hasEffect("kubejs:ignitium_protection") &&
        manaTracker[player.uuid] >= 500
      ) {
        {
          player.potionEffects.add(
            "kubejs:ignitium_charge",
            300,
            0,
            false,
            true
          );
          Client.player.playSound("minecraft:block.enchantment_table.use");
          Client.player.playSound("minecraft:block.enchantment_table.use");
          Client.player.playSound("minecraft:block.enchantment_table.use");

          manaTracker[player.uuid] = 0;
        }
      } else if (
        player.hasEffect("kubejs:ignitium_protection") &&
        manaTracker[player.uuid] >= 500
      ) {
        player.removeEffect("kubejs:ignitium_protection");
        player.removeEffect("kubejs:ignitium_charge");
        player.potionEffects.add("kubejs:overcharged", 180, 0, false, true);
        Client.player.playSound("wizards:fire_wall_ignite");
        Client.player.playSound("cataclysm:ignis_death");
        Client.player.playSound("wizards:fire_wall_ignite");
        manaTracker[player.uuid] = 0;
      }
    }
  }

  // Wizard armor effect
  if (
    player.hasEffect("kubejs:wizard_knowledge") ||
    player.hasEffect("kubejs:aether_wizard_knowledge") ||
    player.hasEffect("kybejs:nether_magic_knowledge")
  ) {
    const oldMana = event.getOldMana();
    const newMana = event.getNewMana();

    const manaSpent = oldMana - newMana;
    if (player.hasEffect("kubejs:wizard_knowledge")) {
      const reducedManaSpent = manaSpent * 0.75;
      event.setNewMana(oldMana - reducedManaSpent);
    }
    if (player.hasEffect("kubejs:aether_wizard_knowledge")) {
      const reducedManaSpent = manaSpent * 0.65;
      event.setNewMana(oldMana - reducedManaSpent);
    }

    if (
      player.hasEffect("kubejs:nether_wizard_knowledge") &&
      player.health / player.maxHealth > 0.9
    ) {
      const reducedManaSpent = manaSpent * 0.5;
      event.setNewMana(oldMana - reducedManaSpent);
    } else if (player.hasEffect("kubejs:nether_wizard_knowledge")) {
      const reducedManaSpent = manaSpent * 0.6;
      event.setNewMana(oldMana - reducedManaSpent);
    }
  } else return;

  // Cleric Nether armor effect
  if (player.hasEffect("kubejs:nether_embrace")) {
    const spellTarget = magicData.additionalCastData.getTarget(player.level);
    const spellId = magicData.getCastingSpellId();
    if (
      spellTarget.hasEffect("kubejs:nether_protection") ||
      spellTarget.hasEffect("kubejs:nether_heat")
    ) {
      spellTarget.potionEffects.add(
        "minecraft:fire_resistance",
        400,
        0,
        true,
        false
      );
      return;
    } else if (holySpells.includes(spellId)) {
      spellTarget.potionEffects.add(
        "minecraft:fire_resistance",
        400,
        0,
        true,
        false
      );
      spellTarget.potionEffects.add(
        "kubejs:nether_reinforcement",
        400,
        0,
        true,
        false
      );
    }
  }
  // Handling of Sol armor effect
  if (player.hasEffect("kubejs:sun_light")) {
    const spellTarget = magicData.additionalCastData.getTarget(player.level);
    const spellId = magicData.getCastingSpellId();
    if (holySpells.includes(spellId)) {
      spellTarget.potionEffects.add(
        "minecraft:regeneration",
        120,
        1,
        true,
        true
      );
      spellTarget.potionEffects.add("minecraft:strength", 120, 0, true, true);
      spellTarget.potionEffects.add("minecraft:luck", 120, 0, true, true);
      spellTarget.potionEffects.add(
        "minecraft:health_boost",
        300,
        0,
        true,
        true
      );
    } else return;
  }

  if (player.hasEffect("kubejs:prior_faith")) {
    const spellTarget = magicData.additionalCastData.getTarget(player.level);
    const spellId = magicData.getCastingSpellId();
    if (holySpells.includes(spellId)) {
      if (spellTarget.hasEffect("kubejs:holy_warmth")) {
        spellTarget.removeEffect("kubejs:holy_warmth");
        spellTarget.potionEffects.add(
          "kubejs:mana_regeneration",
          120,
          0,
          true,
          true
        );
        spellTarget.potionEffects.add(
          "minecraft:resistance",
          50,
          0,
          true,
          true
        );
        spellTarget.potionEffects.add(
          "minecraft:regeneration",
          120,
          1,
          true,
          true
        );
        spellTarget.potionEffects.add("minecraft:luck", 120, 0, true, true);
        spellTarget.potionEffects.add("minecraft:strength", 120, 0, true, true);
        spellTarget.potionEffects.add(
          "minecraft:health_boost",
          300,
          1,
          true,
          true
        );
        spellTarget.heal(2);
        player.potionEffects.add(
          "kubejs:mana_regeneration",
          120,
          1,
          true,
          true
        );
        Client.player.playSound("simplyswords:elemental_sword_holy_attack_01");
      } else
        spellTarget.potionEffects.add("kubejs:holy_warmth", 150, 0, true, true);
    }
  } else return;
});
