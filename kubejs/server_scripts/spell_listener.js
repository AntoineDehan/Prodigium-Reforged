PlayerEvents.spellOnCast((event) => {
  function getCuriosItemList(player, slot) {
    let curio = player.nbt.ForgeCaps["curios:inventory"]["Curios"].find(
      (curio) => curio["Identifier"] === slot
    );
    return curio ? curio.StacksHandler.Stacks.Items : [];
  }
  const player = event.player;
  if (!player) return;

  // Feather Necklace granting the Holy Touch
  const curios = getCuriosItemList(player, "necklace");
  const hasFeatherNecklace = curios.some(
    (i) => i.id === "prodigium_reforged:feather_necklace"
  );

  if (hasFeatherNecklace && Math.random() < 0.3) {
    player.potionEffects.add("kubejs:holy_touch", 100, 0, true, true);
  }
});
