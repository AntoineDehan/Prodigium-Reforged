/// Handling of curio effects

const bleedOnHitCurios = [
  { id: "prodigium_reforged:meat_charm", duration: 160, amplifier: 5 },
  { id: "prodigium_reforged:meat_shield", duration: 180, amplifier: 6 },
];

// Player getting hurt
EntityEvents.hurt((event) => {
  const player = event.entity;
  if (!player.isPlayer()) return;

  const attacker = event.source.actual;
  if (!attacker || !attacker.isLiving()) return;

  // Meat charms bleeding
  for (const curio of bleedOnHitCurios) {
    if (!player.isCuriosEquipped(curio.id)) continue;
    if (Math.random() >= 0.5) continue;

    attacker.potionEffects.add(
      "majruszsdifficulty:bleeding",
      curio.duration,
      curio.amplifier,
      true,
      true,
    );
  }

  // Frosted Amulet
  if (player.isCuriosEquipped("prodigium_reforged:frosted_amulet")) {
    player.potionEffects.add("kubejs:frost_augmented", 160, 0, true, false);
    player.potionEffects.add("cofh_core:cold_resistance", 160, 0, true, false);
  }
});

// Mobs getting hurt BY the Player
EntityEvents.hurt((event) => {
  const player = event.source.player;
  if (!player) return;

  const entity = event.entity;
  if (!entity || !entity.isLiving()) return;

  //Frozen Arrowhead
  if (
    player.isCuriosEquipped("prodigium_reforged:frozen_arrow_head") &&
    event.source.getType() == "arrow"
  ) {
    entity.potionEffects.add("cofh_core:chilled", 40, 0, true, false);
    entity.potionEffects.add("terra_entity:frost_burn", 60, 0, true, false);
  }

  // Acid Flask
  if (
    player.isCuriosEquipped("prodigium_reforged:phantasmal_bell") &&
    event.source.getType() == "gwrgun" &&
    Math.random() >= 0.8
  ) {
    entity.potionEffects.add("minecraft:poison", 50, 1, true, false);
  }

  // A REMOVE ////
  event.server.tell(`type dmg= ${event.source.getType()}`);
  ////////////////

  // Frosted Amulet (frost_augmented)
  if (
    player.hasEffect("kubejs:frost_augmented") &&
    [
      "blood_magic",
      "eldritch_magic",
      "ender_magic",
      "evocation_magic",
      "fire_magic",
      "holy_magic",
      "ice_magic",
      "lightning_magic",
      "nature_magic",
      "sound_magic",
    ].includes(event.source.getType())
  ) {
    entity.potionEffects.add("irons_spellbooks:chilled", 80, 1, true, false);
  }
});

// Phantasmal Bell
const BELL_ID = "prodigium_reforged:phantasmal_bell";
const BELL_RADIUS = 16;
const BELL_COOLDOWN = 220;

EntityEvents.hurt((event) => {
  const player = event.entity;
  if (!player.isPlayer()) return;
  if (player.cooldowns.isOnCooldown(BELL_ID)) return;
  if (!player.isCuriosEquipped(BELL_ID)) return;

  const box = AABB.of(
    player.x - BELL_RADIUS,
    player.y - BELL_RADIUS,
    player.z - BELL_RADIUS,
    player.x + BELL_RADIUS,
    player.y + BELL_RADIUS,
    player.z + BELL_RADIUS,
  );

  const monsters = player.level
    .getEntitiesWithin(box)
    .filter((e) => e.isMonster() && e.isAlive());

  let revealed = false;
  for (const mob of monsters) {
    mob.potionEffects.add("minecraft:glowing", 200, 0, true, false);
    mob.potionEffects.add("minecraft:slowness", 100, 0, true, false);
    mob.potionEffects.add("irons_spellbooks:rend", 100, 0, true, false);
    revealed = true;
  }

  if (!revealed) return;

  player.level.playSound(
    null,
    player.x,
    player.y,
    player.z,
    "minecraft:block.bell.resonate",
    "players",
    1.0,
    0.8,
  );
  player.addItemCooldown(BELL_ID, BELL_COOLDOWN);
});

PlayerEvents.spellPreCast((event) => {
  const player = event.entity;
  if (!player.isPlayer()) return;

  event.server.tell("je cast (pre)");
});

PlayerEvents.spellOnCast((event) => {
  const player = event.entity;
  if (!player.isPlayer()) return;

  event.server.tell("je cast (cast)");
});

//Magic Data\
const $MagicData = Java.loadClass(
  "io.redspace.ironsspellbooks.api.magic.MagicData",
);

// Lucky Card
PlayerEvents.tick((event) => {
  const player = event.player;
  if (player.age % 10 !== 0) return;
  if (!player.isCuriosEquipped("prodigium_reforged:lucky_card")) return;

  const magic = $MagicData.getPlayerMagicData(player);
  if (!magic || !magic.isCasting()) return;

  player.potionEffects.add("minecraft:luck", 30, 2, true, false);
  player.potionEffects.add("kubejs:mana_regeneration", 30, 0, true, false);
  player.potionEffects.add(
    "majruszsdifficulty:bleeding_immunity",
    30,
    0,
    true,
    false,
  );
  player.potionEffects.add(
    "majruszsdifficulty:glass_regeneration",
    30,
    0,
    true,
    false,
  );
});

// Ashlord's Roar
const ROAR_ID = "prodigium_reforged:ashlords_roar";
const ROAR_RADIUS = 12;
const ROAR_COOLDOWN = 900;

EntityEvents.hurt((event) => {
  const player = event.entity;
  if (!player.isPlayer()) return;
  if (player.cooldowns.isOnCooldown(ROAR_ID)) return;
  if (!player.isCuriosEquipped(ROAR_ID)) return;

  const box = AABB.of(
    player.x - ROAR_RADIUS,
    player.y - ROAR_RADIUS,
    player.z - ROAR_RADIUS,
    player.x + ROAR_RADIUS,
    player.y + ROAR_RADIUS,
    player.z + ROAR_RADIUS,
  );

  const monsters = player.level
    .getEntitiesWithin(box)
    .filter((e) => e.isMonster() && e.isAlive());

  let taunted = false;
  for (const mob of monsters) {
    if (mob.getTarget() == player) continue;
    mob.setTarget(player);
    taunted = true;
  }

  if (!taunted) return;

  player.level.playSound(
    null,
    player.x,
    player.y,
    player.z,
    "block_factorys_bosses:entity.dragon.roar",
    "hostile",
    1.0,
    2,
  );
  player.addItemCooldown(ROAR_ID, ROAR_COOLDOWN);
});

// King's Crown
const $SummonManager = Java.loadClass(
  "io.redspace.ironsspellbooks.capabilities.magic.SummonManager",
);

const CROWN_ID = "prodigium_reforged:ashlords_roar";
const CROWN_INTERVAL = 10;
const CROWN_DURATION = 40;

PlayerEvents.tick((event) => {
  const player = event.player;
  if (player.age % CROWN_INTERVAL !== 0) return;
  if (!player.isCuriosEquipped(CROWN_ID)) return;
  if ($SummonManager.getSummons(player).isEmpty()) return;

  player.potionEffects.add(
    "kubejs:kings_authority",
    CROWN_DURATION,
    0,
    true,
    false,
  );
});

// Magic Cuffs
const MAGIC_CUFFS_ID = "prodigium_reforged:magic_cuffs";
const MAGIC_CUFFS_MANA_CAP = 20;

EntityEvents.hurt((event) => {
  const player = event.entity;
  if (!player.isPlayer()) return;
  if (!player.isCuriosEquipped(MAGIC_CUFFS_ID)) return;

  const amount = Math.min(Math.round(event.damage), MAGIC_CUFFS_MANA_CAP);
  if (amount <= 0) return;
  player.server.runCommandSilent(`mana add ${player.username} ${amount}`);
});

// HP regen tick (Mana Regeneration Band, Restoration Shield)
const HP_REGEN_CURIOS = [
  "prodigium_reforged:mana_regeneration_band",
  "prodigium_reforged:restoration_shield",
];

PlayerEvents.tick((event) => {
  const player = event.player;
  if (player.age % 40 !== 0) return;
  if (player.health >= player.maxHealth) return;
  for (const id of HP_REGEN_CURIOS) {
    if (player.isCuriosEquipped(id)) {
      player.heal(1.0);
      return;
    }
  }
});

// Mana cost reduction (Mana Flower, Mana Cloak)
const MANA_COST_CURIOS = [
  { id: "prodigium_reforged:mana_flower", reduction: 0.08 },
  { id: "confluence:mana_cloak", reduction: 0.08 },
];

PlayerEvents.changeMana((event) => {
  const player = event.player;
  const oldMana = event.getOldMana();
  const newMana = event.getNewMana();
  if (newMana >= oldMana) return;

  let reduction = 0;
  for (const curio of MANA_COST_CURIOS) {
    if (player.isCuriosEquipped(curio.id) && curio.reduction > reduction) {
      reduction = curio.reduction;
    }
  }
  if (reduction === 0) return;

  const manaSpent = oldMana - newMana;
  event.setNewMana(oldMana - manaSpent * (1 - reduction));
});
