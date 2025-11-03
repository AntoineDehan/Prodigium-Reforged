StartupEvents.registry("mob_effect", (event) => {
  // Well fed effect - When hunger is full
  event
    .create("well_fed")
    .color(0xffd27f)
    .beneficial()
    .effectTick((entity, lvl) => {
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
      "multiply_base"
    )

    // Spell Power
    .modifyAttribute(
      "irons_spellbooks:spell_power",
      "92fab521-1d61-4874-b2ae-81ddbff4f99d",
      0.1,
      "addition"
    );

  // Golden Might - Gold Armor Effect
  event
    .create("golden_might")
    .color(0x4b0082)
    .beneficial()
    .effectTick((entity, lvl) => {
      if (!entity.isPlayer()) return;

      let y = Math.floor(entity.y);

      if (y < 60 && entity.age % 40 === 0) {
        let regenAmount = 0.5;
        if (y < 30) regenAmount = 1.5;
        if (y < 0) regenAmount = 2;

        entity.heal(regenAmount * (lvl + 1));
      }

      if (y < 0) {
        entity.modifyAttribute(
          "attributeslib:mining_speed",
          "71a5a9be-3a07-41bb-b49c-7c813e7de777",
          0.25,
          "addition"
        );
      } else {
        entity.modifyAttribute(
          "attributeslib:mining_speed",
          "71a5a9be-3a07-41bb-b49c-7c813e7de777",
          0,
          "addition"
        );
      }
    });

  // Bee Boost - Bee Armor Effect

  event
    .create("bee_boost")
    .color(0xffcc33)
    .beneficial()
    .displayName("Bee Boost")
    .effectTick((entity, lvl) => {
      const honey = entity.getEffect("confluence:honey");
      if (!honey) return;

      if (honey.amplifier >= 1) return;

      const duration = honey.duration;

      entity.removeEffect("confluence:honey");

      entity.potionEffects.add("confluence:honey", duration, 1, true, true);
    });

  // Frostburner -- Frost Armor Effect
  event
    .create("frostburner")
    .color(0x550000)
    .beneficial()
    .displayName("Frostburner");

  // Holy Touch
  event
    .create("holy_touch")
    .color(0xffd27f)
    .beneficial()
    // Holy Spell Power
    .modifyAttribute(
      "irons_spellbooks:holy_spell_power",
      "dc93ad1a-1760-4b99-9259-bedc817e034e",
      0.5,
      "addition"
    )
    // Mana Regeneration
    .modifyAttribute(
      "irons_spellbooks:mana_regen",
      "3f398bb1-fb44-46f6-b3a0-687bdea57ee1",
      0.4,
      "addition"
    );

  // Buff Galore
  event.create("buff_galore").color(0xffd27f).beneficial();

  // Archer's Protection
  event.create("archers_protection").color(0xffd27f).beneficial();

  // Crusader Aura
  event
    .create("crusader_aura")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.armor",
      "52c58c14-801d-4497-b5d6-bc1bdd15d1c6",
      2,
      "addition"
    );

  // Crusader Protection
  event
    .create("crusader_protection")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.armor",
      "040965a9-bf8d-435e-a06c-391086478ffc",
      5,
      "addition"
    )
    .modifyAttribute(
      "minecraft:generic.armor_toughness",
      "cefe7133-5059-43e7-baba-8fc08b306327",
      1,
      "addition"
    )
    .modifyAttribute(
      "puffish_attributes:player.healing",
      "36d9f52d-71f9-4e4f-b808-251b185a2c36",
      0.15,
      "addition"
    );

  // Sun's Light
  event.create("sun_light").color(0xffd27f).beneficial();

  // Prior's Faith
  event.create("prior_faith").color(0xffd27f).beneficial();

  // Holy Warmth
  event.create("holy_warmth").color(0xffd27f).beneficial();

  // Mana Regeneration
  event
    .create("mana_regeneration")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "irons_spellbooks:mana_regen",
      "a3ee1052-6453-4198-8b16-5139262464f4",
      0.15,
      "multiply_base"
    );

  // Wizard's Knowledge
  event.create("wizard_knowledge").color(0xffd27f).beneficial();

  // Skyjade's Knowledge
  event.create("skyjade_knowledge").color(0xffd27f).beneficial();

  // Skyjade's Strength
  event
    .create("skyjade_strength")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "irons_spellbooks:mana_regen",
      "2936e1e2-b1e1-42f5-bec7-2ee9082c1c25",
      0.2,
      "addition"
    )
    .modifyAttribute(
      "irons_spellbooks:spell_power",
      "65e689ee-092f-4644-ae09-69f2e7435e07",
      0.15,
      "multiply_total"
    )
    .modifyAttribute(
      "irons_spellbooks:cast_time_reduction",
      "ac1b01d3-e434-4948-9e07-79a13d439817",
      0.3,
      "addition"
    );
});
