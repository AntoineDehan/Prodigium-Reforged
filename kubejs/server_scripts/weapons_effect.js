EntityEvents.hurt((event) => {
  const entity = event.entity;
  const attacker = event.source.player;

  if (!attacker || !attacker.isPlayer()) return;
  const weapon = attacker.mainHandItem;

  if (!entity.isAlive()) return;

  // Staves
  if (weapon.id === "kubejs:slime_staff") {
    entity.potionEffects.add("minecraft:slowness", 60, 0, true, false);
    attacker.server.runCommandSilent(`mana add ${attacker.username} 1`);
  }

  if (entity.hasEffect("kubejs:sticky")) {
    attacker.potionEffects.add("confluence:honey", 40, 1, true, false);
  }

  if (weapon.id === "kubejs:honey_staff") {
    entity.potionEffects.add("kubejs:sticky", 60, 0, true, false);
  }
});

PlayerEvents.spellOnCast((event) => {
  const player = event.entity;
  const weapon = player.mainHandItem;

  // Spawner Staff whimper thingy
  if (weapon.id === "kubejs:spawner_staff" && Math.random() < 0.9) {
    const WHIMPER_ID = "dungeonnowloading:whimper";
    const ownerTag = `whimper_pet_of_${player.username}`;
    let box = player.boundingBox.inflate(200);
    let nearby = player.level.getEntitiesWithin(box);
    for (let e of nearby) {
      if (e.getEncodeId() !== WHIMPER_ID) continue;
      if (e.tags.contains(ownerTag)) return;
    }

    let whimper = player.level.createEntity(WHIMPER_ID);
    whimper.setPos(player.x, player.y + 1, player.z);
    whimper.setOwnerUUID(player.uuid);
    whimper.addTag(ownerTag);
    player.level.addFreshEntity(whimper);
  }
});
