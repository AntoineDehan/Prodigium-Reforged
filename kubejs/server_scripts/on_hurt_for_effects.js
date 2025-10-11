EntityEvents.hurt((event) => {
  const entity = event.entity;
  const player = event.source.player;

  if (!player) return;

  if (player.hasEffect("kubejs:frostburner")) {
    if (Math.random() < 0.25) {
      entity.potionEffects.add("cofh_core:chilled", 100, 0, true, false);
      if (Math.random() < 0.08) {
        entity.potionEffects.add("mowziesmobs:frozen", 60, 0, true, true);
      }
    }
  }
});

EntityEvents.hurt((event) => {
  let entity = event.entity;
  let source = event.source;

  if (!entity.isPlayer()) return;
  let player = entity;

  function getCuriosItemList(player, slot) {
    let curio = player.nbt.ForgeCaps["curios:inventory"]["Curios"].find(
      (curio) => curio["Identifier"] === slot
    );
    return curio ? curio.StacksHandler.Stacks.Items : [];
  }

  let curios = getCuriosItemList(player, "necklace");
  let hasNecklace = curios.some(
    (i) => i.id === "prodigium_reforged:meat_charm"
  );

  if (hasNecklace && Math.random() < 0.5) {
    let attacker = source.actual;
    if (attacker && attacker.isLiving()) {
      attacker.potionEffects.add(
        "majruszsdifficulty:bleeding",
        160,
        5,
        true,
        true
      );
    }
  }

  let curiosAccessory = getCuriosItemList(player, "accessory");
  let hasShield = curiosAccessory.some(
    (i) => i.id === "prodigium_reforged:meat_shield"
  );

  if (hasShield && Math.random() < 0.5) {
    let attacker = source.actual;
    if (attacker && attacker.isLiving()) {
      attacker.potionEffects.add(
        "majruszsdifficulty:bleeding",
        180,
        6,
        true,
        true
      );
    }
  }
});
