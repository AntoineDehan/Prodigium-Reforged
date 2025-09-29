EntityEvents.hurt((event) => {
  const entity = event.entity;

  if (!event.source.player){
    return;
  }

  if (event.source.player.hasEffect("kubejs:debilitate")) {
    entity.potionEffects.add("minecraft:slowness", 200, 1, true, true);
  }
})