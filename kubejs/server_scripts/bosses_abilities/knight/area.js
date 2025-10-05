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
    if (!bossRef || bossRef.isRemoved() || waveCount >= 2) {
      running = false;
      bossRef = null;
      waveCount = 0;
      return;
    }

    let dimension = entity.level.dimension.toString();

    for (let i = 0; i < 4; i++) {
      const x = bossRef.x + (Math.random() - 0.5) * 4;
      const y = bossRef.y;
      const z = bossRef.z + (Math.random() - 0.5) * 4;
      bossRef.level.runCommandSilent(
        `execute in ${dimension} run summon block_factorys_bosses:soul_knight_wither_skeleton ${x} ${y} ${z}`
      );
    }

    waveCount++;
    server.scheduleInTicks(800, summonMinions);
  };

  summonMinions();
});
