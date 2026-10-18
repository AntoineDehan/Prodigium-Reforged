ItemEvents.modification((event) => {
  //// Berserker weapons

  // Scythe
  event.modify("simple_weapons:diamond_scythe", (item) => {
    item.attackDamage = 7;
    item.attackSpeed = -3.3;
  });
  event.modify("simple_weapons:iron_scythe", (item) => {
    item.attackDamage = 5;
    item.attackSpeed = -3.3;
  });
  event.modify("simple_weapons:stone_scythe", (item) => {
    item.attackDamage = 4;
    item.attackSpeed = -3.3;
  });
  event.modify("simple_weapons:corinthium_scythe", (item) => {
    item.attackDamage = 6;
    item.attackSpeed = -3.3;
  });
  event.modify("simple_weapons:netherite_scythe", (item) => {
    item.attackDamage = 7.5;
    item.attackSpeed = -3.3;
  });

  event.modify("simple_weapons:fiery_scythe", (item) => {
    item.attackDamage = 8;
    item.attackSpeed = -3.3;
  });

  // Katana
  event.modify("simple_weapons:diamond_katana", (item) => {
    item.attackDamage = 5;
    item.attackSpeed = -2.95;
  });
  event.modify("simple_weapons:iron_katana", (item) => {
    item.attackDamage = 4;
    item.attackSpeed = -2.95;
  });
  event.modify("simple_weapons:stone_katana", (item) => {
    item.attackDamage = 3;
    item.attackSpeed = -2.95;
  });
  event.modify("simple_weapons:corinthium_katana", (item) => {
    item.attackDamage = 4.5;
    item.attackSpeed = -2.95;
  });
  event.modify("simple_weapons:netherite_katana", (item) => {
    item.attackDamage = 5.25;
    item.attackSpeed = -2.95;
  });

  event.modify("simple_weapons:fiery_katana", (item) => {
    item.attackDamage = 6;
    item.attackSpeed = -2.95;
  });

  // Katar
  event.modify("simple_weapons:iron_fist", (item) => {
    item.attackDamage = 4.5;
    item.attackSpeed = -2.75;
  });

  event.modify("simple_weapons:iron_fist", (item) => {
    item.attackDamage = 5;
    item.attackSpeed = -2.75;
  });

  event.modify("simple_weapons:stone_fist", (item) => {
    item.attackDamage = 3.5;
    item.attackSpeed = -2.75;
  });

  event.modify("simple_weapons:diamond_fist", (item) => {
    item.attackDamage = 6;
    item.attackSpeed = -2.75;
  });

  event.modify("simple_weapons:netherite_fist", (item) => {
    item.attackDamage = 7;
    item.attackSpeed = -2.75;
  });

  event.modify("simple_weapons:fiery_fist", (item) => {
    item.attackDamage = 7.5;
    item.attackSpeed = -2.75;
  });

  // Other

  event.modify("born_in_chaos_v1:sweet_sword", (item) => {
    item.attackDamage = 60;
    item.attackSpeed = -2;
  });
  event.modify("irons_spellbooks:amethyst_rapier", (item) => {
    item.attackDamage = 6;
    item.attackSpeed = -2;
  });

  event.modify("alexsmobs:skelewag_sword", (item) => {
    item.attackSpeed = -1;
  });

  //// Crusader Weapons

  // Great Sword
  event.modify("simple_weapons:diamond_greatsword", (item) => {
    item.attackDamage = 8;
    item.attackSpeed = -2.9;
  });
  event.modify("simple_weapons:iron_greatsword", (item) => {
    item.attackDamage = 6.5;
    item.attackSpeed = -2.9;
  });
  event.modify("simple_weapons:stone_greatsword", (item) => {
    item.attackDamage = 5.5;
    item.attackSpeed = -2.9;
  });
  event.modify("simple_weapons:corinthium_greatsword", (item) => {
    item.attackDamage = 7.25;
    item.attackSpeed = -2.9;
  });
  event.modify("simple_weapons:netherite_greatsword", (item) => {
    item.attackDamage = 8.5;
    item.attackSpeed = -2.9;
  });
  event.modify("simple_weapons:fiery_greatsword", (item) => {
    item.attackDamage = 9.75;
    item.attackSpeed = -2.9;
  });
});

StartupEvents.registry("item", (event) => {
  // Wizard's Staves \\

  // Slime Staff
  event
    .create("slime_staff", "irons_spells_js:staff")
    .setTier((tier) => {
      tier
        .setDamage(3.5)
        .setSpeed(-3)
        .addAttribute("irons_spellbooks:spell_power", 0.1, "multiply_total")
        .addAttribute(
          "irons_spellbooks:cooldown_reduction",
          0.03,
          "multiply_total",
        )
        .addAttribute("irons_spellbooks:mana_regen", 0.25, "multiply_total");
    })
    .maxDamage(850);

  // Palladium staff
  event
    .create("palladium_staff", "irons_spells_js:staff")
    .setTier((tier) => {
      tier
        .setDamage(4)
        .setSpeed(-3)
        .addAttribute("irons_spellbooks:spell_power", 0.15, "multiply_total")
        .addAttribute("irons_spellbooks:mana_regen", 0.25, "multiply_total");
    })
    .maxDamage(850);

  // Mythril staff
  event
    .create("myhtril_staff", "irons_spells_js:staff")
    .setTier((tier) => {
      tier
        .setDamage(4)
        .setSpeed(-3)
        .addAttribute("irons_spellbooks:spell_power", 0.1, "multiply_total")
        .addAttribute("irons_spellbooks:mana_regen", 0.3, "multiply_total")
        .addAttribute("irons_spellbooks:max_mana", 50, "addition");
    })
    .maxDamage(850);

  // Spawner staff
  event
    .create("spawner_staff", "irons_spells_js:staff")
    .setTier((tier) => {
      tier
        .setDamage(4)
        .setSpeed(-3)
        .addAttribute("irons_spellbooks:spell_power", 0.1, "multiply_total")
        .addAttribute("irons_spellbooks:mana_regen", 0.25, "multiply_total")
        .addAttribute("irons_spellbooks:summon_damage", 0.1, "multiply_total");
    })
    .maxDamage(1000);
});
