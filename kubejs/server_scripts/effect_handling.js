// Well Fed & Honey Liquid
PlayerEvents.tick((event) => {
  const player = event.player;
  if (!player && !player.isPlayer()) return;

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
  if (event.server.tickCount % 45 === 0)
    if (player.hasEffect("kubejs:mending_grace")) {
      event.server.tell(player.getActiveEffects());
      player.heal(0.5 * player.getEffect("kubejs:mending_grace").amplifier + 1);
    }
});
