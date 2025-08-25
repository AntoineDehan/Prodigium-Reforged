StartupEvents.registry("mob_effect", (event) => {
  event
    .create("well_fed")
    .color(0xffd27f) // Couleur dorée/orangée façon "nourriture"
    .beneficial()
    .effectTick((entity, lvl) => {
      // Heal toutes les secondes (0.5 coeur par niveau)
      if (entity.age % 20 != 0) return;
      entity.heal(0.5 * lvl);
    })
    // Armor
    .modifyAttribute(
      "minecraft:generic.armor",
      "c1d7e210-3d3f-11ee-be56-0242ac183754",
      2,
      "addition"
    )
    // Move Speed
    .modifyAttribute(
      "minecraft:generic.movement_speed",
      "c1d7e5b0-3d3f-11ee-be56-0242ac183754",
      0.2,
      "multiply_total"
    )
    // Damage
    .modifyAttribute(
      "minecraft:generic.attack_damage",
      "e0f4e796-3d3d-11ee-be56-0242ac183754",
      0.1,
      "multiply_base"
    )
    // Crit
    .modifyAttribute(
      "attributeslib:crit_chance",
      "1cf62d2c-c47f-4cee-998e-6a93ebb3874f",
      2,
      "addition"
    )

    // Mining Speed
    .modifyAttribute(
      "attributeslib:mining_speed",
      "c384ea73-4610-4670-b793-8188a3ce8e12",
      0.2,
      "multiply_total"
    )

    // Ranged Damage
    .modifyAttribute(
      "puffish_attributes:player.ranged_damage",
      "17a9915b-48f2-4436-a821-fe77660b94cb",
      0.1,
      "multiply_total"
    )

    // Mana Regen
    .modifyAttribute(
      "irons_spellbooks:mana_regen",
      "4e640627-50eb-4fab-aec1-644ca810b9d8",
      0.1,
      "addition"
    )

    // Spell Power
    .modifyAttribute(
      "irons_spellbooks:spell_power",
      "92fab521-1d61-4874-b2ae-81ddbff4f99d",
      0.1,
      "addition"
    );
});
