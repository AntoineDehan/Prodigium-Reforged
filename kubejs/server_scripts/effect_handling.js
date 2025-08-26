// Well Fed if you're not hungry

PlayerEvents.tick((event) => {
  const player = event.player;
  if (!player || player.level.isClientSide()) return;

  const food = player.foodData.foodLevel;

  if (food >= 18) {
    player.potionEffects.add("kubejs:well_fed", 40, 0, true, false);
  }
});

// Honey Liquid granting the Honey effect

PlayerEvents.tick((event) => {
  const player = event.player;
  if (!player || player.level.isClientSide()) return;

  const blockPos = player.blockPosition();
  const block = player.level.getBlock(blockPos);

  if (block.id === "kubejs:honey") {
    player.potionEffects.add("confluence:honey", 600, 0, true, false);
  }
});
