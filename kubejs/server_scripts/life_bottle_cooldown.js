ItemEvents.rightClicked((event) => {
  const { player } = event;
  const heldItems = player.getMainHandItem();
  const heldItemoff = player.getOffHandItem();
  event.server.schedule(1, (callback) => {
    if (
      (heldItems === "cardiac:life_bottle") &
      !player.cooldowns.isOnCooldown("cardiac:life_bottle")
    ) {
      event.player.addItemCooldown("cardiac:life_bottle", 240);
    }
    if (
      (heldItemoff === "cardiac:life_bottle") &
      !player.cooldowns.isOnCooldown("cardiac:life_bottle")
    ) {
      event.player.addItemCooldown("cardiac:life_bottle", 240);
    }
  });
});
