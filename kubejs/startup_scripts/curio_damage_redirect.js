const SHOULDER_ID = "prodigium_reforged:wrought_shoulder_piece";
const SHOULDER_RADIUS = 12;
const SHOULDER_COOLDOWN = 40;
const SHOULDER_REDIRECT = 1;

// Wrought Shoulder Piece
ForgeEvents.onEvent(
  "net.minecraftforge.event.entity.living.LivingHurtEvent",
  (event) => {
    const ally = event.getEntity();
    if (!ally.isPlayer() || ally.level.isClientSide()) return;

    const amount = event.getAmount();
    if (amount <= SHOULDER_REDIRECT) return;

    const box = AABB.of(
      ally.x - SHOULDER_RADIUS,
      ally.y - SHOULDER_RADIUS,
      ally.z - SHOULDER_RADIUS,
      ally.x + SHOULDER_RADIUS,
      ally.y + SHOULDER_RADIUS,
      ally.z + SHOULDER_RADIUS,
    );

    const wearers = ally.level
      .getEntitiesWithin(box)
      .filter(
        (e) =>
          e.isPlayer() &&
          e != ally &&
          e.isAlive() &&
          e.isCuriosEquipped(SHOULDER_ID) &&
          !e.cooldowns.isOnCooldown(SHOULDER_ID),
      );

    for (const wearer of wearers) {
      event.setAmount(amount - SHOULDER_REDIRECT);
      wearer.attack(wearer.damageSources().generic(), SHOULDER_REDIRECT);
      wearer.addItemCooldown(SHOULDER_ID, SHOULDER_COOLDOWN);
      wearer.level.playSound(null, wearer.x, wearer.y, wearer.z, "minecraft:item.shield.block", "players", 0.5, 1.2);
      return;
    }
  },
);
