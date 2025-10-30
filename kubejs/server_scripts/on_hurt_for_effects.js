/// Handling of different effects or curios

// Frostburner
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

// Crusader Aura
ServerEvents.tick((event) => {
  if (event.server.tickCount % 20 !== 0) return;

  for (let player of event.server.players) {
    if (!player.hasEffect("kubejs:crusader_aura")) continue;

    let box = AABB.of(
      player.x - 8,
      player.y - 8,
      player.z - 8,
      player.x + 8,
      player.y + 8,
      player.z + 8
    );

    let entities = player.level.getEntitiesWithin(box);
    let allies = entities.filter((e) => e.isPlayer() && e != player);

    for (let ally of allies) {
      ally.potionEffects.add("kubejs:crusader_protection", 60, 0, true, true);
    }
  }
});

// Buff Galore
EntityEvents.death((event) => {
  const { source, entity } = event;
  const killer = source.player;
  if (!killer) return;

  if (killer.hasEffect("kubejs:buff_galore")) {
    if (Math.random() < 0.3) {
      const { x, y, z, level } = entity;

      const roll = Math.random();

      if (roll < 0.5) {
        level.runCommandSilent(`summon droppedbuffs:haste_buff ${x} ${y} ${z}`);
      } else if (roll < 0.8) {
        level.runCommandSilent(
          `summon droppedbuffs:absorption_buff ${x} ${y} ${z}`
        );
      } else {
        level.runCommandSilent(
          `summon droppedbuffs:strength_buff ${x} ${y} ${z}`
        );
      }
    }
  }
});

// Meat Charm and Meat Shield
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
