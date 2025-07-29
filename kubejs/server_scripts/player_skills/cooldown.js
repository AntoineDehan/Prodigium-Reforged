// global.hasCooldown = function (player, key, duration, label) {
//   label = label || "Ability";
//   let lastUsed = player.persistentData.getLong(key) || 0;
//   let currentTime = player.level.getGameTime();

//   if (currentTime - lastUsed < duration) {
//     let remaining = Math.ceil((duration - (currentTime - lastUsed)) / 20);
//     player.tell(`§c${label} is on cooldown! Wait ${remaining} seconds.`);
//     return true;
//   }
//   return false;
// };
