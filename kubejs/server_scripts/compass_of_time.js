ItemEvents.rightClicked("prodigium_reforged:compass_of_time", (event) => {
  let player = event.player;
  let server = event.server;

  let x = Math.floor(player.x);
  let y = Math.floor(player.y);
  let z = Math.floor(player.z);

  let commandSource = player.createCommandSourceStack().withPermission(4);
  server
    .getCommands()
    .performPrefixedCommand(
      commandSource,
      `respawningstructures structureRespawnStatus ${x} ${y} ${z}`,
    );
});
