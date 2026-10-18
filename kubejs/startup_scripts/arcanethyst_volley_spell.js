StartupEvents.registry("irons_spellbooks:spells", (event) => {
  event
    .create("arcanethyst_volley")
    .setCastTime(0)
    .setCooldownSeconds(0)
    .setManaCostPerLevel(0)
    .setCastType("instant")
    .setSchool("irons_spellbooks:evocation")
    .setMinRarity("uncommon")
    .setMaxLevel(1)
    .setAllowLooting(false)
    .needsLearning(false)
    .onCast((ctx) => {
      const caster = ctx.entity;
      const level = caster.level;

      let look = caster.getLookAngle();
      let eyePos = caster.getEyePosition(1.0);
      let dist = 20;
      let targetX = eyePos.x() + look.x() * dist;
      let targetY = eyePos.y() + look.y() * dist;
      let targetZ = eyePos.z() + look.z() * dist;

      const ARROW_COUNT = 15;
      const SPAWN_HEIGHT = 12;
      const HEIGHT_VARIATION = 5;
      const SPREAD = 2.5;
      for (let i = 0; i < ARROW_COUNT; i++) {
        let dx = (Math.random() - 0.5) * SPREAD * 2;
        let dz = (Math.random() - 0.5) * SPREAD * 2;
        let dy = Math.random() * HEIGHT_VARIATION;
        let arrow = level.createEntity("irons_spellbooks:small_magic_arrow");
        arrow.setPosition(
          targetX + dx,
          targetY + SPAWN_HEIGHT + dy,
          targetZ + dz,
        );
        arrow.setMotion(0, -1.8, 0);
        arrow.setOwner(caster);
        arrow.mergeNbt({ Damage: 6.0 });
        level.addFreshEntity(arrow);
      }
    });
});
