let bossRef = null;
let running = false;
let waveCount = 0;

EntityEvents.hurt((event) => {
  const entity = event.entity;
  const server = event.server;

  if (entity.type !== "block_factorys_bosses:underworld_knight") return;
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

    let dimension = entity.level.dimension.toString();

    for (let i = 0; i < 2; i++) {
      const x = bossRef.x + (Math.random() - 0.5) * 3;
      const y = bossRef.y;
      const z = bossRef.z + (Math.random() - 0.5) * 5;
      bossRef.level.runCommandSilent(
        `execute in ${dimension} run summon block_factorys_bosses:poison_area ${x} ${y} ${z}`
      );
    }

    waveCount++;
    server.scheduleInTicks(1500, summonMinions);
  };

  summonMinions();
});
