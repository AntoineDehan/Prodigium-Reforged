ServerEvents.tick((event) => {
  if (event.server.tickCount % 20 !== 0) return;

  for (let level of event.server.getAllLevels()) {
    let bosses = level
      .getEntities()
      .filter((e) => e.type === "terra_entity:eye_of_cthulhu" && e.isAlive());

    if (bosses.length === 0) continue;

    for (let boss of bosses) {
      let box = AABB.of(
        boss.x - 30,
        boss.y - 30,
        boss.z - 30,
        boss.x + 30,
        boss.y + 30,
        boss.z + 30
      );

      let entities = level.getEntitiesWithin(box);

      let adds = entities.filter(
        (e) => e.type === "terra_entity:demon_eye" && e.isAlive()
      );

      for (let add of adds) {
        add.kill();
      }
    }
  }
});
