// Scaling HP des bosses Terraria — scan overworld uniquement
ServerEvents.tick((event) => {
  if (event.server.tickCount % 20 !== 0) return;

  for (let level of event.server.getAllLevels()) {
    if (level.dimension.toString() !== "minecraft:overworld") continue;
    let entities = level.getEntities();

    for (let entity of entities) {
      if (!entity.isLiving() || !entity.isAlive()) continue;

      // EOC
      if (entity.type === "terra_entity:eye_of_cthulhu") {
        if (!entity.persistentData.scaled) {
          entity.persistentData.scaled = true;

          if (entity.getMaxHealth() > 1000) {
            entity.setMaxHealth(1000);
            entity.setHealth(1000);
          }
        }
      }

      // King Slime
      if (entity.type === "terra_entity:king_slime") {
        if (!entity.persistentData.scaled) {
          entity.persistentData.scaled = true;

          if (entity.getMaxHealth() > 600) {
            entity.setMaxHealth(600);
            entity.setHealth(600);
          }
        }
      }

      // BOC
      if (entity.type === "terra_entity:brain_of_cthulhu") {
        if (!entity.persistentData.scaled) {
          entity.persistentData.scaled = true;

          if (entity.getMaxHealth() > 1000) {
            entity.setMaxHealth(1000);
            entity.setHealth(1000);
          }
        }
      }
      if (entity.type === "terra_entity:brain_fake") {
        if (!entity.persistentData.scaled) {
          entity.persistentData.scaled = true;

          if (entity.getMaxHealth() > 1000) {
            entity.setMaxHealth(1000);
            entity.setHealth(1000);
          }
        }
      }

      // Queen Bee
      if (entity.type === "terra_entity:queen_bee") {
        if (!entity.persistentData.scaled) {
          entity.persistentData.scaled = true;

          if (entity.getMaxHealth() > 900) {
            entity.setMaxHealth(900);
            entity.setHealth(900);
          }
        }
      }
    }
  }
});

// Cleanup des demon_eye autour du joueur quand EOC est dans la zone
PlayerEvents.tick((event) => {
  let player = event.player;
  if (player.age % 20 !== 0) return;
  if (player.level.dimension.toString() !== "minecraft:overworld") return;

  let scanBox = AABB.of(
    player.x - 80,
    player.y - 80,
    player.z - 80,
    player.x + 80,
    player.y + 80,
    player.z + 80,
  );

  let nearby = player.level.getEntitiesWithin(scanBox);
  let eoc = nearby.find(
    (e) => e.type === "terra_entity:eye_of_cthulhu" && e.isAlive(),
  );
  if (!eoc) return;

  for (let entity of nearby) {
    if (entity.type !== "terra_entity:demon_eye" || !entity.isAlive()) continue;
    if (Math.abs(entity.x - eoc.x) > 30) continue;
    if (Math.abs(entity.y - eoc.y) > 30) continue;
    if (Math.abs(entity.z - eoc.z) > 30) continue;
    entity.kill();
  }
});
