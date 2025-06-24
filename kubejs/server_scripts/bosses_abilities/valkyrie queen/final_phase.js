EntityEvents.hurt((event) => {
  const entity = event.entity;

  if (!entity || entity.type !== "aether:valkyrie_queen") return;

  const maxHealth = entity.getMaxHealth();
  const currentHealth = entity.getHealth();

  if (
    currentHealth <= maxHealth * 0.25 &&
    !entity.persistentData.phase4BuffGiven
  ) {
    entity.persistentData.phase4BuffGiven = true;

    entity.level.runCommand(
      `tellraw @a [{"text":"I won't fail...","color":"gold"}]`
    );

    let valkPanacea = MobEffects.get(
      ResourceLocation.of("cofh_core:panacea", ":")
    );
    let valkEarthshaker = MobEffects.get(
      ResourceLocation.of("simplyskills:earthshaker", ":")
    );

    entity.addEffect(new MobEffectInstance(valkPanacea, 20 * 600, 0));
    if (valkEarthshaker) {
      entity.addEffect(new MobEffectInstance(valkEarthshaker, 20 * 100, 3));
    }

    let valkStun = MobEffects.get(
      ResourceLocation.of("paladins:judgement", ":")
    );
    if (valkStun) {
      let RADIUS_SQR = 25 * 25;
      entity.level.players.forEach((player) => {
        if (player.distanceToSqr(entity) <= RADIUS_SQR) {
          player.addEffect(new MobEffectInstance(valkStun, 20, 0));
        }
      });
    }
  }
});
