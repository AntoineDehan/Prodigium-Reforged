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
    .tag("curios:ring");
});
