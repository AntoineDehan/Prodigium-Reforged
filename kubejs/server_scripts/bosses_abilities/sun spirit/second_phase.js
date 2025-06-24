EntityEvents.hurt((event) => {
  const entity = event.entity;

  if (!entity || entity.type !== "aether:sun_spirit") return;

  const maxHealth = entity.getMaxHealth();
  const currentHealth = entity.getHealth();

  if (
    currentHealth <= maxHealth / 2 &&
    !entity.persistentData.phase2BuffGiven
  ) {
    entity.persistentData.phase2BuffGiven = true;
    entity.level.runCommand(
      `tellraw @a [{"text":"I will not go down so easily !","color":"red"}]`
    );

    const speedAttr = entity.getAttribute("minecraft:generic.movement_speed");
    if (speedAttr) {
      speedAttr.setBaseValue(speedAttr.baseValue * 1.7);
    }

    const armorAttr = entity.getAttribute("minecraft:generic.armor");
    if (armorAttr) {
      armorAttr.setBaseValue(armorAttr.baseValue + 20);
    }
  }
});
