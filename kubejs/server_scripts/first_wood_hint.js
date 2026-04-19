BlockEvents.broken((event) => {
  const player = event.player;
  if (!player) return;
  if (player.isCreative() || player.isSpectator()) return;

  const block = event.block;
  if (!block.hasTag("minecraft:logs")) return;

  if (player.tags.contains("seen_first_wood_hint")) return;

  player.tags.add("seen_first_wood_hint");

  event.server.runCommandSilent(
    `immersivemessages popup ${player.name.getString()} 9 Lumberjack Chopping a tree while shifting will chop it down whole.`,
  );
});
