EntityEvents.death((event) => {
  const entity = event.entity;
  const level = entity.level;

  if (entity.type != "aether:fire_minion") return;

  const bosses = level
    .getEntities()
    .filter((e) => e.type === "aether:sun_spirit");

  for (let boss of bosses) {
    boss.health = Math.max(boss.health - 10, 0);
  }
});
