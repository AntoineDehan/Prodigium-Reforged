let bossRef = null;
let running = false;
let waveCount = 0;

EntityEvents.hurt((event) => {
  const entity = event.entity;
  const server = event.server;

  if (entity.type !== "aether:sun_spirit") return;
  if (running) return;

  running = true;
  bossRef = entity;
  waveCount = 0;

  const summonMinions = () => {
    if (!bossRef || bossRef.isRemoved() || waveCount >= 5) {
      running = false;
      bossRef = null;
      waveCount = 0;
      return;
    }

    for (let i = 0; i < 3; i++) {
      const x = bossRef.x + (Math.random() - 0.5) * 4;
      const y = bossRef.y;
      const z = bossRef.z + (Math.random() - 0.5) * 4;
      bossRef.level.runCommandSilent(
        `summon aether:fire_minion ${x} ${y} ${z}`
      );
    }

    waveCount++;
    server.scheduleInTicks(400, summonMinions);
  };

  summonMinions();
});
