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

          if (entity.getMaxHealth() > 1300) {
            entity.setMaxHealth(1300);
            entity.setHealth(1300);
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

          if (entity.getMaxHealth() > 800) {
            entity.setMaxHealth(800);
            entity.setHealth(800);
          }
        }
      }

      // BOC
      if (entity.type === "terra_entity:brain_of_cthulhu") {
        if (!entity.persistentData.scaled) {
          entity.persistentData.scaled = true;

          if (entity.getMaxHealth() > 1500) {
            entity.setMaxHealth(1500);
            entity.setHealth(1500);
          }
        }
      }
      if (entity.type === "terra_entity:brain_fake") {
        if (!entity.persistentData.scaled) {
          entity.persistentData.scaled = true;

          if (entity.getMaxHealth() > 1500) {
            entity.setMaxHealth(1500);
            entity.setHealth(1500);
          }
        }
      }

      // Queen Bee
      if (entity.type === "terra_entity:queen_bee") {
        if (!entity.persistentData.scaled) {
          entity.persistentData.scaled = true;

          if (entity.getMaxHealth() > 1400) {
            entity.setMaxHealth(1400);
            entity.setHealth(1400);
          }
        }
      }
    }
  }
});
