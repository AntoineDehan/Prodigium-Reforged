let ticksSinceStart = 0;
let cleanupIntervalTicks = 18000;
let warningTimes = [16800, 17550, 17775, 17780, 17785, 17790, 17795];

ServerEvents.tick((event) => {
  const server = event.server;
  if (!server || !server.persistentData) return;

  ticksSinceStart++;

  if (ticksSinceStart === 16800) {
    server.runCommandSilent(
      `tellraw @a {"text":"Item cleanup in 1 minute.","color":"gold"}`
    );
  }

  if (warningTimes.includes(ticksSinceStart) && ticksSinceStart !== 16800) {
    let remaining = (cleanupIntervalTicks - ticksSinceStart) / 20;
    let message = `§eItem cleanup in §c${remaining}s§e...`;
    if (remaining === 30) message = `§eItem cleanup in §c30 seconds§e...`;
    server.runCommandSilent(`title @a actionbar "${message}"`);
  }

  if (ticksSinceStart >= cleanupIntervalTicks) {
    server.runCommandSilent("kill @e[type=item]");
    server.runCommandSilent(
      `title @a actionbar "§7All dropped items have been removed."`
    );
    ticksSinceStart = 0;
  }
});
