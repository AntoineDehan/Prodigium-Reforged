ServerEvents.tags("block", (event) => {
  // Tool level handling
  event.remove(
    "forge:needs_netherite_tool",
    "bygonenether:witherred_debris",
    "irons_spellbooks:arcane_debris"
  );

  event.remove("minecraft:needs_diamond_tool", "minecraft:ancient_debris");

  event.remove("minecraft:needs_iron_tool", "deep_aether:skyjade_ore");
  event.add("hltweaker:needs_onyx_tool", "deep_aether:skyjade_ore");

  event.remove("minecraft:needs_stone_tool", "aether_redux:veridium_ore");
  event.add(
    "hltweaker:needs_onyx_tool",
    "aether_redux:veridium_ore",
    "prodigium:tungsten_ore"
  );
});
