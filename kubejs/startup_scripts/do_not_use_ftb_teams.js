ForgeEvents.onEvent("net.minecraftforge.event.CommandEvent", (event) => {
  let cmd = event.parseResults.reader.string;
  if (cmd.startsWith("ftb_teams") || cmd.startsWith("ftbteams")) {
    event.setCanceled(true);
    let player = event.parseResults.context.source.player;
    if (player) {
      player.tell(
        "§cFTB Teams is deactivated because of issues it creates. Use §e/party help §cinstead !",
      );
    }
  }
});
