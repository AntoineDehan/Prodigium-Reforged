EntityEvents.hurt((event) => {
  const entity = event.entity;
  const player = event.source.player;

  if (!player) return;

  if (player.hasEffect("kubejs:frostburner")) {
    if (Math.random() < 0.25) {
      entity.potionEffects.add("cofh_core:chilled", 100, 0, true, false);
      if (Math.random() < 0.08) {
        entity.potionEffects.add("mowziesmobs:frozen", 60, 0, true, true);
      }
    }
  }
});
