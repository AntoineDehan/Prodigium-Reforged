let wallCooldown = false;

EntityEvents.hurt((event) => {
  const entity = event.entity;
  const server = event.server;

  if (entity.type != "aether:slider") return;
  if (wallCooldown) return;

  wallCooldown = true;

  const x = Math.floor(entity.x);
  const y = Math.floor(entity.y);
  const z = Math.floor(entity.z);

  const offsets = [
    [Math.floor(Math.random() * 15) - 7, Math.floor(Math.random() * 8) - 4],
    [Math.floor(Math.random() * 15) - 7, Math.floor(Math.random() * 8) - 4],
  ];

  offsets.forEach((offset) => {
    const bx = x + offset[0];
    const bz = z + offset[1];

    for (let dy = 0; dy <= 3; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        entity.level.runCommandSilent(
          `setblock ${bx + dx} ${y + dy} ${bz} minecraft:cobblestone`
        );
      }
    }
  });

  server.scheduleInTicks(40, () => {
    offsets.forEach((offset) => {
      const bx = x + offset[0];
      const bz = z + offset[1];

      for (let dy = 0; dy <= 3; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          entity.level.runCommandSilent(
            `setblock ${bx + dx} ${y + dy} ${bz} air`
          );
        }
      }
    });
  });

  server.scheduleInTicks(200, () => {
    wallCooldown = false;
  });
});
