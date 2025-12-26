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

          if (entity.getMaxHealth() > 1900) {
            entity.setMaxHealth(1800);
            entity.setHealth(1800);
          }
        }

        let box = AABB.of(
          entity.x - 30,
          entity.y - 30,
          entity.z - 30,
          entity.x + 30,
          entity.y + 30,
          entity.z + 30
        );

        let adds = level
          .getEntitiesWithin(box)
          .filter(
            (e) =>
              e.isLiving() && e.isAlive() && e.type === "terra_entity:demon_eye"
          );

        for (let add of adds) {
          add.kill();
        }
      }

      // King Slime
      if (entity.type === "terra_entity:king_slime") {
        if (!entity.persistentData.scaled) {
          entity.persistentData.scaled = true;

          if (entity.getMaxHealth() > 1300) {
            entity.setMaxHealth(1300);
            entity.setHealth(1300);
          }
        }
      }

      // BOC
      if (entity.type === "terra_entity:brain_of_cthulhu") {
        if (!entity.persistentData.scaled) {
          entity.persistentData.scaled = true;

          if (entity.getMaxHealth() > 2600) {
            entity.setMaxHealth(2600);
            entity.setHealth(2600);
          }
        }
      }
      if (entity.type === "terra_entity:brain_fake") {
        if (!entity.persistentData.scaled) {
          entity.persistentData.scaled = true;

          if (entity.getMaxHealth() > 2600) {
            entity.setMaxHealth(2600);
            entity.setHealth(2600);
          }
        }
      }

      // Queen Bee
      if (entity.type === "terra_entity:queen_bee") {
        if (!entity.persistentData.scaled) {
          entity.persistentData.scaled = true;

          if (entity.getMaxHealth() > 1800) {
            entity.setMaxHealth(1800);
            entity.setHealth(1800);
          }
        }
      }
    }
  }
});
