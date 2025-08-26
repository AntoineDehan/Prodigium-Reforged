PlayerEvents.tick((event) => {
  const player = event.player;
  if (!player || player.level.isClientSide()) return;

  const blockPos = player.blockPosition();
  const block = player.level.getBlock(blockPos);

  if (block.id === "kubejs:honey") {
    player.potionEffects.add("confluence:honey", 600, 0, true, false);
  }
});
