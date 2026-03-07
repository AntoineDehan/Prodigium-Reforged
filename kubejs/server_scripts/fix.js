ServerEvents.tick((event) => {
  if (event.server.tickCount % 20 !== 0) return;

  for (let level of event.server.getAllLevels()) {
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

        let box = AABB.of(
          entity.x - 30,
          entity.y - 30,
          entity.z - 30,
          entity.x + 30,
          entity.y + 30,
          entity.z + 30,
        );

        let adds = level
          .getEntitiesWithin(box)
          .filter(
            (e) =>
              e.isLiving() &&
              e.isAlive() &&
              e.type === "terra_entity:demon_eye",
          );

        for (let add of adds) {
          add.kill();
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
