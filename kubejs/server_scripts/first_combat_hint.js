EntityEvents.hurt((event) => {
  const attacker = event.source.player;
  if (!attacker) return;
  if (attacker.isCreative() || attacker.isSpectator()) return;

  const target = event.entity;
  if (!target || target.type === "minecraft:player") return;

  if (attacker.tags.contains("seen_shake_hint")) return;

  attacker.tags.add("seen_shake_hint");

  event.server.runCommandSilent(
    `immersivemessages popup ${attacker.name.getString()} 7 ScreenShake Press 'J' to toggle screen shake effects.`,
  );
});
