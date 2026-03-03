// Well Fed & Honey Liquid
PlayerEvents.tick((event) => {
  const player = event.player;
  if (!player) return;

  if (event.server.tickCount % 100 === 0) {
    const food = player.foodData.foodLevel;
    if (food >= 18) {
      player.potionEffects.add("kubejs:well_fed", 220, 0, true, false);
    }
  }

  if (event.server.tickCount % 40 === 0) {
    const block = player.level.getBlock(player.blockPosition());
    if (block.id === "kubejs:honey") {
      player.potionEffects.add("confluence:honey", 600, 0, true, false);
    }
  }
});
