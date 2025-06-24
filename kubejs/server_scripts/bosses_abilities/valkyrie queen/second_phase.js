EntityEvents.hurt((event) => {
  const entity = event.entity;

  if (!entity || entity.type !== "aether:valkyrie_queen") return;

  const maxHealth = entity.getMaxHealth();
  const currentHealth = entity.getHealth();

  if (
    currentHealth <= maxHealth * 0.75 &&
    !entity.persistentData.phase2BuffGiven
  ) {
    entity.persistentData.phase2BuffGiven = true;

    entity.level.runCommand(
      `tellraw @a [{"text":"You dare challenge my divine might?!","color":"red","italic":true}]`
    );

    let valkEffect = MobEffects.get(
      ResourceLocation.of("minecraft:resistance", ":")
    );

    let bladestorm = MobEffects.get(
      ResourceLocation.of("simplyskills:earthshaker", ":")
    );

    entity.addEffect(new MobEffectInstance(valkEffect, 20 * 600, 0));
    if (bladestorm) {
      entity.addEffect(new MobEffectInstance(bladestorm, 20 * 600, 4));
    }

    let speedAttr = entity.getAttribute("minecraft:generic.movement_speed");
    if (speedAttr) {
      speedAttr.setBaseValue(speedAttr.baseValue * 1.1);
    }

    let valkStun = MobEffects.get(
      ResourceLocation.of("paladins:judgement", ":")
    );
    if (valkStun) {
      let RADIUS_SQR = 25 * 25;
      entity.level.players.forEach((player) => {
        if (player.distanceToSqr(entity) <= RADIUS_SQR) {
          player.addEffect(new MobEffectInstance(valkStun, 40, 0));
        }
      });
    }
  }
});
