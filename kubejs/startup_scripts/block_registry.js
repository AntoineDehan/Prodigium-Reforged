StartupEvents.registry("block", (event) => {
  event
    .create("prodigium:tungsten_ore")
    .displayName("Tungsten Ore")
    .soundType("netherrack")
    .hardness(1.0)
    .resistance(1.0)
    .tagBlock("forge:ores")
    .requiresTool(true)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_diamond_tool");
});
