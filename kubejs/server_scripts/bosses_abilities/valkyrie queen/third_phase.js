EntityEvents.hurt((event) => {
  const entity = event.entity;

  if (!entity || entity.type !== "aether:valkyrie_queen") return;

  const maxHealth = entity.getMaxHealth();
  const currentHealth = entity.getHealth();

  if (
    currentHealth <= maxHealth * 0.5 &&
    !entity.persistentData.phase3BuffGiven
  ) {
    entity.persistentData.phase3BuffGiven = true;

    entity.level.runCommand(
      `tellraw @a [{"text":"You won't survive this battle!","color":"gold"}]`
    );

    let valkBerserking = MobEffects.get(
      ResourceLocation.of("aether_redux:adrenaline_rush", ":")
    );

    if (valkBerserking) {
      entity.addEffect(new MobEffectInstance(valkBerserking, 20 * 100, 0));
    }

    let speedAttr = entity.getAttribute("minecraft:generic.movement_speed");
    if (speedAttr) {
      speedAttr.setBaseValue(speedAttr.baseValue * 1.2);
    }
  }
});
