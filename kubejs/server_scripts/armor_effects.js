/// Handling of different effects or curios

// Hit of entities from the Player
EntityEvents.hurt((event) => {
  const entity = event.entity;
  const player = event.source.player;

  if (!player) return;

  if (player.hasEffect("kubejs:neptune_buff")) {
    if (Math.random() < 0.8) {
      player.potionEffects.add("kubejs:rapid_healing", 60, 1, true, false);
    }
  }

  if (player.hasEffect("kubejs:hunter")) {
    // const dx = entity.x - player.x;
    // const dy = entity.y - player.y;
    // const dz = entity.z - player.z;
    // const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

    if (event.source.getType() == "arrow") {
      if (entity.hasEffect("archers:hunters_mark")) {
        player.potionEffects.add("kubejs:hunter_readyness", 60, 0, false, true);
      }
      entity.potionEffects.add("archers:hunters_mark", 120, 0, false, true);
    }
  }

  // Cleric Nether armor set
  if (player.hasEffect("kubejs:nether_reinforcement")) {
    player.removeEffect("kubejs:nether_reinforcement");
    player.potionEffects.add("kubejs:nether_heat", 650, 0, true, false);
  }

  // Witherite armor set
  if (player.hasEffect("kubejs:bloody_mind")) {
    if (player.hasEffect("kubejs:bloody_skin")) return;
    if (player.hasEffect("kubejs:bloody_strength")) {
      player.potionEffects.add("kubejs:bloody_strength", 80, 1, false, false);
    }
    player.potionEffects.add("kubejs:bloody_strength", 80, 0, false, false);
  }

  // Void Blossom armor set
  if (player.hasEffect("kubejs:blossom_aura")) {
    if (entity.hasEffect("kubejs:thorned") && entity.isAlive) {
      player.potionEffects.add("kubejs:blossom_pollen", 250, 0, true, true);

      let box = AABB.of(
        player.x - 12,
        player.y - 12,
        player.z - 12,
        player.x + 12,
        player.y + 12,
        player.z + 12
      );

      let entities = player.level.getEntitiesWithin(box);
      let allies = entities.filter((e) => e.isPlayer() && e != player);

      for (let ally of allies) {
        if (Math.random() < 0.85) {
          ally.playSound("minecraft:entity.experience_orb.pickup", 0.6, 1.4);
          ally.potionEffects.add("kubejs:blossom_pollen", 250, 0, true, false);
        }
      }
    }

    if (Math.random() < 0.4 && !entity.isPlayer()) {
      entity.potionEffects.add("kubejs:thorned", 280, 1, true, false);
      entity.potionEffects.add(
        "majruszsdifficulty:bleeding",
        120,
        3,
        true,
        false
      );
    }
  }

  // Frost armor set
  if (player.hasEffect("kubejs:frostburner")) {
    if (Math.random() < 0.25) {
      entity.potionEffects.add("cofh_core:chilled", 100, 0, true, false);
      if (Math.random() < 0.08) {
        entity.potionEffects.add("mowziesmobs:frozen", 60, 0, true, true);
      }
    }
  }
});

const damageStock = {};

// Player Getting Hurt
EntityEvents.hurt((event) => {
  const player = event.getEntity();
  const damage = event.getDamage();

  if (!player.isPlayer()) return;
  let uuid = player.uuid;

  // Wizard Ignitium armor set
  if (player.hasEffect("kubejs:ignitium_magic")) {
    if (!damageStock[uuid]) {
      damageStock[uuid] = 0;
    }
    damageStock[uuid] = damageStock[uuid] + damage;
    if (
      damageStock[uuid] >= 80 &&
      !player.hasEffect("kubejs:ignitium_charge")
    ) {
      player.potionEffects.add(
        "kubejs:ignitium_protection",
        320,
        0,
        false,
        true
      );
      Client.player.playSound("cataclysm:ignis_hurt");
      Client.player.playSound("cataclysm:ignis_hurt");
      damageStock[uuid] = 0;
    } else if (
      damageStock[uuid] >= 80 &&
      player.hasEffect("kubejs:ignitium_charge")
    ) {
      player.removeEffect("kubejs:ignitium_protection");
      player.removeEffect("kubejs:ignitium_charge");
      player.potionEffects.add("kubejs:overcharged", 180, 0, false, true);
      Client.player.playSound("wizards:fire_wall_ignite");
      Client.player.playSound("cataclysm:ignis_death");
      Client.player.playSound("wizards:fire_wall_ignite");
      damageStock[uuid] = 0;
    }
  }

  // Nether armor set
  if (player.hasEffect("kubejs:nether_reinforcement")) {
    player.removeEffect("kubejs:nether_reinforcement");
    player.potionEffects.add("kubejs:nether_protection", 650, 0, true, false);
  }

  // Crystallized Blood armor set
  if (player.hasEffect("kubejs:bloody_mind")) {
    if (player.hasEffect("kubejs:bloody_strength")) return;
    if (player.hasEffect("kubejs:bloody_skin")) {
      player.potionEffects.add("kubejs:bloody_skin", 80, 1, true, false);
    }
    player.potionEffects.add("kubejs:bloody_skin", 80, 0, true, false);
  }

  // Plated Valkyrie armor set
  if (player.hasEffect("kubejs:plated_valkyrie")) {
    if (damage < 4) return;
    event.server.scheduleInTicks(1, () => {
      if (player.isLiving()) {
        player.heal(damage * 0.15);
      }
    });
  }

  // Valkyrie armor set
  if (player.hasEffect("kubejs:valkyrie_aura")) {
    if (damage < 3) return;

    let healAmount = damage * 0.25;

    let box = AABB.of(
      player.x - 12,
      player.y - 12,
      player.z - 12,
      player.x + 12,
      player.y + 12,
      player.z + 12
    );

    let entities = player.level.getEntitiesWithin(box);
    let allies = entities.filter((e) => e.isPlayer() && e != player);

    for (let ally of allies) {
      ally.heal(healAmount);
      ally.playSound("minecraft:entity.experience_orb.pickup", 0.6, 1.4);
      if (Math.random() < 0.1) {
        ally.potionEffects.add(
          "kubejs:valkyrie_protection",
          250,
          0,
          false,
          false
        );
      }
    }
  }

  // Holy Marauder armor set
  if (player.hasEffect("kubejs:marauder_buff")) {
    if (!damageStock[uuid]) {
      damageStock[uuid] = 0;
    }
    damageStock[uuid] = damageStock[uuid] + damage;
    if (damageStock[uuid] >= 70) {
      player.potionEffects.add("kubejs:marauder_light", 320, 0, false, false);
      Client.player.playSound("alshanex_familiars:healing_aura");
      damageStock[uuid] = 0;
    }
  }
});

const killStreak = {};

EntityEvents.death((event) => {
  const { source, entity } = event;
  const killer = source.player;
  const uuid = killer.uuid;

  console.log("entity: ", entity);

  if (!killer) return;

  if (
    killer.hasEffect("kubejs:blossom_aura") &&
    entity.hasEffect("kubejs:thorned")
  ) {
    if (killer.hasEffect("kubejs:blossom_aroma")) {
      // killer.potionEffects.add("kubejs:blossom_aroma", 200, 2, true, false);
      console.log("ici lvl 2 c'est true");
    }
    killer.potionEffects.add("kubejs:blossom_aroma", 200, 1, true, false);
  }

  // Necro Kill Streak system
  if (killer.hasEffect("kubejs:soul_collector")) {
    if (!killStreak[uuid]) {
      killStreak[uuid] = { count: 0, timer: 0 };
    }
    killStreak[uuid].count++;
    killStreak[uuid].timer = 200;
    if (killStreak[uuid].count === 5) {
      killer.potionEffects.add("kubejs:soul_gorged", 300, 0, false, false);
    }
    if (killStreak[uuid].count === 10) {
      killer.potionEffects.add("kubejs:soul_gorged", 300, 1, false, false);
    }
    if (killStreak[uuid].count === 15) {
      killer.potionEffects.add("kubejs:soul_gorged", 300, 2, false, false);
    }
    if (killStreak[uuid].count === 20) {
      killer.potionEffects.add("kubejs:soul_gorged", 300, 3, false, false);
    }
    if (killStreak[uuid].count === 25) {
      killer.potionEffects.add("kubejs:soul_gorged", 450, 4, false, false);
    }
  }

  // Buff Galore
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

ServerEvents.tick((event) => {
  for (const [uuid, data] of Object.entries(killStreak)) {
    if (data.timer > 0) {
      data.timer--;
    } else if (data.count > 0) {
      data.count = 0;
      killStreak[uuid].timer = 0;

      const player = Utils.server.getPlayer(uuid);
      if (player) {
        Client.player.playSound(
          "irons_rpg_tweaks:item.identification_scroll.identify"
        );
        Client.player.playSound(
          "irons_rpg_tweaks:item.identification_scroll.identify"
        );
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
      player.x - 12,
      player.y - 12,
      player.z - 12,
      player.x + 12,
      player.y + 12,
      player.z + 12
    );

    let entities = player.level.getEntitiesWithin(box);
    let allies = entities.filter((e) => e.isPlayer() && e != player);

    for (let ally of allies) {
      ally.potionEffects.add("kubejs:crusader_protection", 60, 0, false, false);
    }
  }
});

const stillTicks = {};
const lastPos = {};

PlayerEvents.tick((event) => {
  const player = event.player;
  const uuid = player.uuid;

  if (!player) return;

  if (player.hasEffect("kubejs:ranger_mind")) {
    let box = AABB.of(
      player.x - 12,
      player.y - 12,
      player.z - 12,
      player.x + 12,
      player.y + 12,
      player.z + 12
    );

    let entities = player.level.getEntitiesWithin(box);

    let pets = entities.filter((e) => {
      if (!e || !e.isLiving()) return false;
      if (typeof e.owner === "undefined") return false;
      if (!e.owner) return false;
      return e.owner === player;
    });

    for (let pet of pets) {
      pet.potionEffects.add("kubejs:pet_cozyness", 60, 0, false, false);
      if (pets.length >= 5) {
        player.potionEffects.add("kubejs:ranger_cosyness", 60, 0, false, true);
      }
    }
  }

  if (player.hasEffect("kubejs:neptune_buff")) {
    let ax = Math.floor(player.x);
    let ay = Math.floor(player.y);
    let az = Math.floor(player.z);

    if (!lastPos[uuid]) {
      lastPos[uuid] = { x: ax, y: ay, z: az };
      stillTicks[uuid] = 0;
    }

    let sameBlock =
      ax === lastPos[uuid].x &&
      ay === lastPos[uuid].y &&
      az === lastPos[uuid].z;

    if (sameBlock) {
      stillTicks[uuid]++;

      if (stillTicks[uuid] === 80) {
        player.potionEffects.add(
          "kubejs:neptune_blessing",
          100,
          0,
          false,
          true
        );
      }

      if (stillTicks[uuid] === 180) {
        player.potionEffects.add(
          "kubejs:neptune_blessing",
          120,
          1,
          false,
          true
        );
      }
      if (stillTicks[uuid] === 300) {
        player.potionEffects.add(
          "kubejs:neptune_blessing",
          120,
          2,
          false,
          true
        );
      }
      if (stillTicks[uuid] >= 420) {
        player.potionEffects.add(
          "kubejs:neptune_blessing",
          200,
          2,
          false,
          true
        );
      }
    } else {
      lastPos[uuid] = { x: ax, y: ay, z: az };

      if (stillTicks[uuid] > 0) stillTicks[uuid] = 0;
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

const guns = [
  "bypowderandsteel:desert_revolver",
  "bypowderandsteel:bloodfueled_revolver",
  "bypowderandsteel:peashooter",
  "bypowderandsteel:gunsteel_gun",
  "bypowderandsteel:buccaneer_flintlock",
  "bypowderandsteel:raygun",
  "bypowderandsteel:densgsten_revolver",
  "bypowderandsteel:buccaneer_cannon",
  "bypowderandsteel:buccaneer_cannon_diamond",
  "bypowderandsteel:gravitic_railgun",
  "gunswithoutroses:iron_gun",
  "gunswithoutroses:gold_gun",
  "gunswithoutroses:blaze_gun",
  "gwrexpansions:hellforge_revolver",
  "gwrexpansions:voidspike",
];

const gatlings = [
  "bypowderandsteel:corn_gatling",
  "bypowderandsteel:corn_gatling_diamond",
  "gunswithoutroses:diamond_gatling",
  "gwrexpansions:netherite_gatling",
  "gwrexpansions:ignitium_gatling",
];

const shotguns = [
  "meetyourfight:cocktail_shotgun",
  "bypowderandsteel:densgsten_shotgun_diamond",
  "gwrexpansions:netherite_shotgun",
  "gunswithoutroses:diamond_shotgun",
  "bypowderandsteel:desert_shotgun",
  "bypowderandsteel:desert_shotgun_diamond",
  "bypowderandsteel:densgsten_shotgun",
  "gwrexpansions:netherite_monster_shotgun",
];

const snipers = [
  "meetyourfight:phantasmal_rifle",
  "gwrexpansions:netherite_sniper",
  "gwrexpansions:cursium_sniper",
  "bypowderandsteel:arctic_sniper_diamond",
  "bypowderandsteel:arctic_sniper",
  "gunswithoutroses:diamond_sniper",
];

PlayerEvents.tick((event) => {
  let player = event.player;
  let item = player.mainHandItem;

  if (guns.includes(item.id) && player.hasEffect("kubejs:placeholder_gunner")) {
    player.potionEffects.add("kubejs:pistol_bonus", 40, 0, false, true);
  }
  if (
    snipers.includes(item.id) &&
    player.hasEffect("kubejs:placeholder_gunner")
  ) {
    player.potionEffects.add("kubejs:sniper_bonus", 40, 0, false, true);
  }
  if (
    shotguns.includes(item.id) &&
    player.hasEffect("kubejs:placeholder_gunner")
  ) {
    player.potionEffects.add("kubejs:shotgun_bonus", 40, 0, false, true);
  }
  if (
    gatlings.includes(item.id) &&
    player.hasEffect("kubejs:placeholder_gunner")
  ) {
    player.potionEffects.add("kubejs:gatling_bonus", 40, 0, false, true);
  }

  // Dragon armor set
  if (
    player.hasEffect("kubejs:dragon_protection") &&
    player.health / player.maxHealth < 0.45
  ) {
    player.potionEffects.add("kubejs:dragon_bones", 40, 0, false, false);
  }

  if (
    player.hasEffect("kubejs:dragon_protection") &&
    player.health / player.maxHealth < 0.2
  ) {
    player.potionEffects.add("kubejs:dragon_bones", 40, 2, false, false);
  }

  // Infernal Enforcer armor set
  if (
    player.hasEffect("kubejs:infernal_fire") &&
    player.health / player.maxHealth > 0.85
  ) {
    player.potionEffects.add("kubejs:enforcer_wrath", 40, 0, false, false);
  }

  // Plated Valkyrie armor set
  if (
    player.hasEffect("kubejs:plated_valkyrie") &&
    player.health / player.maxHealth < 0.25
  ) {
    player.potionEffects.add("kubejs:plated_defense", 40, 2, false, false);
  }

  // Phoenix armor set
  if (
    player.hasEffect("kubejs:phoenix_embrace") &&
    player.health / player.maxHealth < 0.6
  ) {
    player.potionEffects.add("kubejs:phoenix_rage", 40, 0, false, false);
  }

  if (
    player.hasEffect("kubejs:phoenix_embrace") &&
    player.health / player.maxHealth < 0.4
  ) {
    player.potionEffects.add("kubejs:phoenix_rage", 40, 2, false, false);
  }

  if (
    player.hasEffect("kubejs:phoenix_embrace") &&
    player.health / player.maxHealth < 0.2
  ) {
    player.potionEffects.add("kubejs:phoenix_rage", 40, 3, false, false);
  }
});
