StartupEvents.registry("item", (event) => {
  // Cactus Shield
  event
    .create("prodigium_reforged:cactus_shield")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "minecraft:generic.armor",
        UUID,
        4,
        "addition"
      )
    )
    .maxStackSize(1)
    .tag("curios:accessory");

  // Slimy Scarf - Dropped by King Slime
  event
    .create("prodigium_reforged:slimy_scarf")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "irons_spellbooks:mana_regen",
        UUID,
        0.05,
        "addition"
      )
    )
    .maxStackSize(1)
    .tag("curios:necklace");

  // Smoke Bombs
  event
    .create("prodigium_reforged:smoke_bombs")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "attributeslib:dodge_chance",
        UUID,
        0.05,
        "addition"
      )
    )
    .maxStackSize(1)
    .tag("curios:charm");

  // Feather Necklace
  event
    .create("prodigium_reforged:feather_necklace")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "irons_spellbooks:holy_spell_power",
        UUID,
        0.05,
        "addition"
      )
    )
    .maxStackSize(1)
    .tag("curios:necklace");

  // Sol Ring
  event
    .create("prodigium_reforged:sol_ring")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "attributeslib:life_steal",
        UUID,
        0.02,
        "addition"
      )
    )
    .maxStackSize(1)
    .tag("curios:ring");

  // Meat Charm
  event
    .create("prodigium_reforged:meat_charm")
    .attachCuriosCapability(CuriosJSCapabilityBuilder.create())
    .maxStackSize(1)
    .tag("curios:necklace");

  // Meat Shield
  event
    .create("prodigium_reforged:meat_shield")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "minecraft:generic.armor",
        UUID,
        6,
        "addition"
      )
    )
    .maxStackSize(1)
    .tag("curios:accessory");

  // Comfy Socks
  event
    .create("prodigium_reforged:comfy_socks")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "combatroll:count",
        UUID,
        1,
        "addition"
      )
    )
    .maxStackSize(1)
    .tag("curios:feet");

  // Desert Ring
  event
    .create("prodigium_reforged:desert_ring")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "combatroll:recharge",
        UUID,
        0.1,
        "multiply_base"
      )
    )
    .maxStackSize(1)
    .tag("curios:ring");

  // Lucky Cape
  event
    .create("prodigium_reforged:lucky_cape")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("combatroll:distance", UUID, 1, "addition")
        .addAttribute(
          "attributeslib:arrow_velocity",
          UUID,
          0.05,
          "multiply_base"
        )
    )
    .maxStackSize(1)
    .tag("curios:necklace");

  // Archery's Glove
  event
    .create("prodigium_reforged:archery_glove")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("attributeslib:arrow_damage", UUID, 0.08, "multiply_base")
        .addAttribute("attributeslib:draw_speed", UUID, 0.02, "multiply_base")
    )
    .maxStackSize(1)
    .tag("curios:hands");

  // Frozen's Arrow Tip
  event
    .create("prodigium_reforged:frozen_arrow_head")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "attributeslib:arrow_damage",
        UUID,
        0.1,
        "multiply_base"
      )
    )
    .maxStackSize(1)
    .tag("curios:belt");

  // Magic's Chains
  event
    .create("prodigium_reforged:magic_chains")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute(
          "irons_spellbooks:spell_power",
          UUID,
          0.05,
          "multiply_base"
        )
        .addAttribute("irons_spellbooks:max_mana", UUID, 30, "addition")
    )
    .maxStackSize(1)
    .tag("curios:charm");

  // Gunpowder's Sack
  event
    .create("prodigium_reforged:gunpowder_sack")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute(
          "gunswithoutroses:gwr.fire_delay",
          UUID,
          -0.05,
          "multiply_base"
        )
        .addAttribute(
          "gunswithoutroses:gwr.damage_total",
          UUID,
          0.03,
          "multiply_base"
        )
    )
    .maxStackSize(1)
    .tag("curios:belt");

  // Phantasmal Bell
  event
    .create("prodigium_reforged:phantasmal_bell")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "minecraft:generic.max_health",
        UUID,
        2,
        "addition"
      )
    )
    .maxStackSize(1)
    .tag("curios:belt");

  // Wrought Shoulder Piece
  event
    .create("prodigium_reforged:wrought_shoulder_piece")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("minecraft:generic.armor", UUID, 4, "addition")
        .addAttribute("confluence:aggro", UUID, 150, "addition")
    )
    .maxStackSize(1)
    .tag("curios:body");

  // Lucky Card
  event
    .create("prodigium_reforged:lucky_card")
    .attachCuriosCapability(CuriosJSCapabilityBuilder.create())
    .maxStackSize(1)
    .tag("curios:pocket_left")
    .tag("curios:pocket_right");

  // Acid Flask
  event
    .create("prodigium_reforged:acid_flask")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute(
          "sweet_charm_o_mine:bullet_armor_penetration",
          UUID,
          0.1,
          "addition"
        )
        .addAttribute(
          "gunswithoutroses:damage_total",
          UUID,
          0.1,
          "multiply_base"
        )
    )
    .maxStackSize(1)
    .tag("curios:charm");

  // Sunbird's Amulet
  event
    .create("prodigium_reforged:sunbird_amulet")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("minecraft:generic.max_health", UUID, 6, "addition")
        .addAttribute(
          "attributeslib:healing_received",
          UUID,
          0.2,
          "multiply_base"
        )
    )
    .maxStackSize(1)
    .tag("curios:charm");

  // Ashlord's Roar
  event
    .create("prodigium_reforged:ashlords_roar")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("minecraft:generic.armor_toughness", UUID, 2, "addition")
        .addAttribute("minecraft:generic.armor", UUID, 2, "addition")
        .addAttribute("confluence:aggro", UUID, 150, "addition")
    )
    .maxStackSize(1)
    .tag("curios:necklace");

  // King's Crown
  event
    .create("prodigium_reforged:kings_crown")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute(
          "irons_spellbooks:summon_damage",
          UUID,
          0.2,
          "multiply_base"
        )
        .addAttribute(
          "irons_spellbooks:spell_power",
          UUID,
          0.15,
          "multiply_base"
        )
        .addAttribute("irons_spellbooks:max_mana", UUID, 200, "addition")
    )
    .maxStackSize(1)
    .tag("curios:head");

  // Frosted Amulet
  event
    .create("prodigium_reforged:frosted_amulet")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute(
          "irons_spellbooks:ice_spell_power",
          UUID,
          0.08,
          "multiply_base"
        )
        .addAttribute(
          "irons_spellbooks:spell_power",
          UUID,
          0.1,
          "multiply_base"
        )
        .addAttribute("irons_spellbooks:max_mana", UUID, 150, "addition")
    )
    .maxStackSize(1)
    .tag("curios:head");

  // Band of Starpower
  event
    .create("prodigium_reforged:band_of_starpower")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("irons_spellbooks:max_mana", UUID, 50, "addition")
        .addAttribute(
          "irons_spellbooks:mana_regen",
          UUID,
          0.05,
          "multiply_base"
        )
    )
    .maxStackSize(1)
    .tag("curios:ring");

  // Mana Regeneration Band
  event
    .create("prodigium_reforged:mana_regeneration_band")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("irons_spellbooks:max_mana", UUID, 70, "addition")
        .addAttribute("irons_spellbooks:mana_regen", UUID, 0.08, "addition")
    )
    .maxStackSize(1)
    .tag("curios:ring");

  // Magic Cuffs
  event
    .create("prodigium_reforged:magic_cuffs")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("irons_spellbooks:max_mana", UUID, 40, "addition")
        .addAttribute("minecraft:generic.armor", UUID, 2, "addition")
    )
    .maxStackSize(1)
    .tag("curios:hands");

  // Mana Flower
  event
    .create("prodigium_reforged:mana_flower")
    .attachCuriosCapability(CuriosJSCapabilityBuilder.create())
    .maxStackSize(1)
    .tag("curios:pocket_left")
    .tag("curios:pocket_right");

  // Restoration Shield
  event
    .create("prodigium_reforged:restoration_shield")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("irons_spellbooks:max_mana", UUID, 80, "addition")
        .addAttribute("irons_spellbooks:mana_regen", UUID, 0.09, "addition")
        .addAttribute("minecraft:generic.armor", UUID, 3, "addition")
        .addAttribute(
          "minecraft:generic.knockback_resistance",
          UUID,
          1.0,
          "addition"
        )
    )
    .maxStackSize(1)
    .tag("curios:accessory");

  // Aloe Leaf
  event
    .create("prodigium_reforged:aloe_leaf")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "irons_spellbooks:holy_spell_power",
        UUID,
        0.04,
        "multiply_base"
      )
    )
    .maxStackSize(1)
    .tag("curios:necklace");

  // Ancient Aegis
  event
    .create("prodigium_reforged:ancient_aegis")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("minecraft:generic.armor", UUID, 3, "addition")
        .addAttribute(
          "irons_spellbooks:holy_spell_power",
          UUID,
          0.5,
          "multiply_total"
        )
    )
    .maxStackSize(1)
    .tag("curios:accessory");

  // Zealot's Belt
  event
    .create("prodigium_reforged:zealots_belt")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "irons_spellbooks:mana_regen",
        UUID,
        0.06,
        "addition"
      )
    )
    .maxStackSize(1)
    .tag("curios:belt");

  // Crystal Arcanite
  event
    .create("prodigium_reforged:crystal_arcanite")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("minecraft:generic.max_health", UUID, 4, "addition")
        .addAttribute("irons_spellbooks:max_mana", UUID, 40, "addition")
        .addAttribute(
          "irons_spellbooks:holy_spell_power",
          UUID,
          0.05,
          "multiply_base"
        )
    )
    .maxStackSize(1)
    .tag("curios:charm");

  // Covenant Bond
  event
    .create("prodigium_reforged:covenant_bond")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute(
          "irons_spellbooks:holy_spell_power",
          UUID,
          0.08,
          "multiply_base"
        )
        .addAttribute("irons_spellbooks:mana_regen", UUID, 0.05, "addition")
    )
    .maxStackSize(1)
    .tag("curios:necklace");

  // Fragrant Corsage
  event
    .create("prodigium_reforged:fragrant_corsage")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("irons_spellbooks:mana_regen", UUID, 0.1, "addition")
        .addAttribute(
          "irons_spellbooks:holy_spell_power",
          UUID,
          0.05,
          "multiply_base"
        )
    )
    .maxStackSize(1)
    .tag("curios:necklace");

  // Honey Heart
  event
    .create("prodigium_reforged:honey_heart")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("minecraft:generic.max_health", UUID, 2, "addition")
        .addAttribute(
          "attributeslib:healing_received",
          UUID,
          0.1,
          "multiply_base"
        )
    )
    .maxStackSize(1)
    .tag("curios:charm");

  // Life Gem
  event
    .create("prodigium_reforged:life_gem")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("minecraft:generic.max_health", UUID, 4, "addition")
        .addAttribute(
          "irons_spellbooks:holy_spell_power",
          UUID,
          0.03,
          "multiply_base"
        )
    )
    .maxStackSize(1)
    .tag("curios:charm");

  // Cleric Emblem
  event
    .create("prodigium_reforged:cleric_emblem")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute(
          "irons_spellbooks:holy_spell_power",
          UUID,
          0.15,
          "multiply_total"
        )
        .addAttribute(
          "irons_spellbooks:spell_power",
          UUID,
          0.08,
          "multiply_total"
        )
        .addAttribute(
          "irons_spellbooks:cooldown_reduction",
          UUID,
          0.08,
          "multiply_total"
        )
    )
    .maxStackSize(1)
    .tag("curios:necklace");

  // The Lost Cross
  event
    .create("prodigium_reforged:lost_cross")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "minecraft:generic.armor",
        UUID,
        2,
        "addition"
      )
    )
    .maxStackSize(1)
    .tag("curios:necklace");

  // Forgotten Cross Necklace
  event
    .create("prodigium_reforged:forgotten_cross_necklace")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("minecraft:generic.armor", UUID, 4, "addition")
        .addAttribute(
          "irons_spellbooks:spell_power",
          UUID,
          0.05,
          "multiply_base"
        )
    )
    .maxStackSize(1)
    .tag("curios:necklace");

  // Turn Undead
  event
    .create("prodigium_reforged:turn_undead")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("minecraft:generic.armor", UUID, 4, "addition")
        .addAttribute("confluence:aggro", UUID, -100, "addition")
    )
    .maxStackSize(1)
    .tag("curios:accessory");
});

// Modification
ItemEvents.modification((event) => {
  event.modify("confluence:ranger_emblem", (item) => {
    item.attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "attributeslib:arrow_damage",
        UUID,
        0.15,
        "multiply_total"
      )
    );
  });

  event.modify("confluence:magic_quiver", (item) => {
    item.attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "attributeslib:arrow_damage",
        UUID,
        0.1,
        "multiply_total"
      )
    );
  });

  event.modify("confluence:molten_quiver", (item) => {
    item.attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "attributeslib:arrow_damage",
        UUID,
        0.12,
        "multiply_total"
      )
    );
  });

  event.modify("confluence:stalkers_quiver", (item) => {
    item.attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "attributeslib:arrow_damage",
        UUID,
        0.12,
        "multiply_total"
      )
    );
  });

  event.modify("confluence:sniper_scope", (item) => {
    item.attachCuriosCapability(
      CuriosJSCapabilityBuilder.create().addAttribute(
        "attributeslib:arrow_damage",
        UUID,
        0.1,
        "multiply_total"
      )
    );
  });

  event.modify("confluence:avenger_emblem", (item) => {
    item.attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute(
          "attributeslib:arrow_damage",
          UUID,
          0.12,
          "multiply_total"
        )
        .addAttribute(
          "minecraft:generic.attack_damage",
          UUID,
          0.12,
          "multiply_total"
        )
        .addAttribute(
          "irons_spellbooks:spell_power",
          UUID,
          0.12,
          "multiply_total"
        )
    );
  });

  event.modify("confluence:destroyer_emblem", (item) => {
    item.attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("attributeslib:arrow_damage", UUID, 0.1, "multiply_total")
        .addAttribute("attributeslib:crit_chance", UUID, 0.15, "multiply_total")
    );
  });
});
