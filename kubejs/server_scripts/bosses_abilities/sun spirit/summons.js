let cooldown = false;

EntityEvents.hurt((event) => {
  const entity = event.entity;
  const server = event.server;

  if (entity.type != "aether:sun_spirit") return;

  if (!cooldown) {
    cooldown = true;

    if (event.player) {
      event.player.tell("Minions incoming!");
    }

    for (let i = 0; i < 3; i++) {
      let x = entity.x + (Math.random() - 0.5) * 4;
      let y = entity.y;
      let z = entity.z + (Math.random() - 0.5) * 4;

      entity.level.runCommand(`summon aether:fire_minion ${x} ${y} ${z}`);
    }

    server.scheduleInTicks(600, () => {
      cooldown = false;
    });
  }
});
