PlayerEvents.tick((event) => {
  const player = event.player;
  if (!player || player.level.isClientSide()) return;

  const food = player.foodData.foodLevel;

  if (food >= 18) {
    player.potionEffects.add("kubejs:well_fed", 40, 0, true, false);
  }
});
