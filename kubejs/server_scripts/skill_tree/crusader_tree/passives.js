// Entity getting hurt by Player

EntityEvents.hurt((event) => {
  const entity = event.getEntity();
  if (!event.source.player) return;
  const player = event.source.player;

  /// Crusader \\\
  if (!player.getMainHandItem()) return;
  const mainHand = player.getMainHandItem();

  // Paladin's Hammer
  if (
    player.tags.contains("paladin_hammer") &&
    mainHand.hasTag("prodigium_reforged:hammers") &&
    Math.random() < 0.16
  ) {
    entity.level.spawnParticles(
      "born_in_chaos_v1:stunstars",
      true,
      entity.x,
      entity.y + 2,
      entity.z,
      0.0,
      0.0,
      0.0,
      1,
      0.1,
    );
    entity.level.spawnParticles(
      "born_in_chaos_v1:stunstars",
      true,
      entity.x - 0.5,
      entity.y + 1.75,
      entity.z - 0.5,
      0.0,
      0.0,
      0.0,
      25,
      0.1,
    );

    entity.level.spawnParticles(
      "born_in_chaos_v1:stunstars",
      true,
      entity.x + 0.5,
      entity.y + 1.75,
      entity.z + 0.5,
      0.0,
      0.0,
      0.0,
      25,
      0.1,
    );
    entity.potionEffects.add("cataclysm:stun", 40, 0, false, true);
  }
});

PlayerEvents.tick((event) => {
  const player = event.getEntity();
  if (!player) return;
  if (!player.getMainHandItem()) return;

  const mainHand = player.getMainHandItem();

  // Crusader Strength
  if (
    event.server.tickCount % 20 === 0 &&
    player.tags.contains("crusader_strength") &&
    mainHand.hasTag("prodigium_reforged:hammers")
  ) {
    player.potionEffects.add("kubejs:crusader_strength", 40, 0, false, true);
  }
});
