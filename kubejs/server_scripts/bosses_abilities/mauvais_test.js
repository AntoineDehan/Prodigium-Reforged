// const bossId = "minecraft:pillager"; // Boss type
// const summonCooldown = 30 * 20; // 30 seconds in ticks

// let lastHitTime = {}; // Holds the last hit time for each boss by UUID

// EntityEvents.hurt((event) => {
//   const entity = event.entity;
//   const source = event.source;

//   if (!entity || entity.type !== bossId) return;

//   let uuid = entity.uuid;
//   let currentTime = event.level.gameTime;

//   const player = source.player;
//   if (player) {
//     player.tell(`You hit the boss!`);
//   }

//   if (lastHitTime[uuid] && currentTime - lastHitTime[uuid] < summonCooldown) {

//     if (player) player.tell("Still on cooldown! Minions will spawn soon...");
//     return;
//   }

//   lastHitTime[uuid] = currentTime;

//   const spawnPos = entity.blockPosition();
//   for (let i = 0; i < 3; i++) {
//     let x = spawnPos.x + (Math.random() - 0.5) * 4;
//     let z = spawnPos.z + (Math.random() - 0.5) * 4;
//     let y = spawnPos.y;

//     // Summon minions (zombies in this case)
//     entity.level.server.runCommandSilent(
//       `summon minecraft:zombie ${x} ${y} ${z} {CustomName:'"Minion"'}`
//     );
//   }

//   // Notify the player that minions have been summoned
//   if (player) player.tell("Minions summoned!");
// });
