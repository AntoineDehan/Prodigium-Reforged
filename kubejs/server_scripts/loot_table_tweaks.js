ServerEvents.loaded((event) => {
  event.server.runCommandSilent(
    `loot modify loot_tables/barrels/* remove cardiac:life_bottle 0.5`
  );
});
