let cooldown = false;

EntityEvents.hurt((event) => {
  const entity = event.entity;
  const server = event.server;

  if (entity.type != "aether:slider") return;

  if (!cooldown) {
    cooldown = true;

    if (event.player) {
      event.player.tell("Minions incoming!");
    }

    let dimension = entity.level.dimension.toString();

    for (let i = 0; i < 3; i++) {
      let x = entity.x + (Math.random() - 0.5) * 4;
      let y = entity.y;
      let z = entity.z + (Math.random() - 0.5) * 4;

      entity.level.runCommandSilent(
        `execute in ${dimension} run summon aether:sentry ${x} ${y} ${z}`
      );
    }

    server.scheduleInTicks(800, () => {
      cooldown = false;
    });
  }
});
