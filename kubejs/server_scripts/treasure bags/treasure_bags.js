const $LootParams = Java.loadClass("net.minecraft.world.level.storage.loot.LootParams");
const $LootContextParamSets = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParamSets");
const $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
const $LootItem = Java.loadClass("net.minecraft.world.level.storage.loot.entries.LootItem");
const $ItemStack = Java.loadClass("net.minecraft.world.item.ItemStack");

const REQUIRED_FREE_SLOTS = 7;

let treasureBags = [
  "prodigium:conjurer_treasure_bag",
  "prodigium:nether_gauntlet_treasure_bag",
  "prodigium:ancient_remnant_treasure_bag",
  "prodigium:awful_ghast_treasure_bag",
  "prodigium:dead_king_treasure_bag",
  "prodigium:ender_guardian_treasure_bag",
  "prodigium:frostmaw_treasure_bag",
  "prodigium:harbinger_treasure_bag",
  "prodigium:ignis_treasure_bag",
  "prodigium:leviathan_treasure_bag",
  "prodigium:nether_keeper_treasure_bag",
  "prodigium:netherite_monstrosity_treasure_bag",
  "prodigium:night_lich_treasure_bag",
  "prodigium:obsidilith_treasure_bag",
  "prodigium:sunbird_treasure_bag",
  "prodigium:void_blossom_treasure_bag",
  "prodigium:void_worm_treasure_bag",
  "prodigium:valkyrie_queen_treasure_bag",
  "prodigium:slider_treasure_bag",
  "prodigium:sun_spirit_treasure_bag",
  "prodigium:swampjaw_treasure_bag",
  "prodigium:bellringer_treasure_bag",
  "prodigium:dame_fortuna_treasure_bag",
  "prodigium:rosalynne_treasure_bag",
  "prodigium:king_slime_treasure_bag",
  "prodigium:aerwhale_king_treasure_bag",
  "prodigium:eye_of_cthulhu_treasure_bag",
  "prodigium:ferrous_wroughtnaut_treasure_bag",
  "prodigium:eater_of_worlds_treasure_bag",
  "prodigium:brain_of_cthulhu_treasure_bag",
  "prodigium:skeletron_treasure_bag",
  "prodigium:queen_bee_treasure_bag",
  "prodigium:infernal_dragon_treasure_bag",
  "prodigium:sandworm_treasure_bag",
  "prodigium:underworld_knight_treasure_bag",
];

let bagLootInfo = {};

let FIELD_POOL_ENTRIES = null;
let FIELD_LOOTITEM_ITEM = null;

function findFieldOfType(cls, typeName) {
  let fields = cls.getDeclaredFields();
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].type.name === typeName) {
      fields[i].setAccessible(true);
      return fields[i];
    }
  }
  return null;
}

function classifyLootTable(lootTable) {
  let info = { conditionalItems: [], bulkPools: [] };
  let pools = lootTable.pools;
  if (!pools || pools.size() === 0) return info;

  if (FIELD_POOL_ENTRIES === null) {
    FIELD_POOL_ENTRIES = findFieldOfType(
      pools.get(0).class,
      "[Lnet.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer;"
    );
    if (FIELD_POOL_ENTRIES === null) {
      console.error("[TreasureBags] Could not find LootPool.entries field");
      return info;
    }
  }

  for (let i = 0; i < pools.size(); i++) {
    let pool = pools.get(i);
    let entries = FIELD_POOL_ENTRIES.get(pool);
    let itemIds = [];
    for (let j = 0; j < entries.length; j++) {
      let entry = entries[j];
      if (entry instanceof $LootItem) {
        if (FIELD_LOOTITEM_ITEM === null) {
          FIELD_LOOTITEM_ITEM = findFieldOfType(
            entry.class,
            "net.minecraft.world.item.Item"
          );
          if (FIELD_LOOTITEM_ITEM === null) {
            console.error("[TreasureBags] Could not find LootItem.item field");
            continue;
          }
        }
        let item = FIELD_LOOTITEM_ITEM.get(entry);
        itemIds.push(String(item.builtInRegistryHolder().key().location()));
      }
    }
    if (itemIds.length === 0) continue;

    let conditions = pool.conditions;
    let hasConditions = conditions && conditions.length > 0;

    if (itemIds.length === 1 && hasConditions) {
      info.conditionalItems.push(itemIds[0]);
    } else if (itemIds.length > 1) {
      info.bulkPools.push(itemIds);
    }
  }
  return info;
}

function loadBagInfo(server, bagName) {
  try {
    let rl = new $ResourceLocation(
      "prodigiumreforged",
      `treasure_bags/${bagName}`
    );
    let lootTable = server.getLootData().getLootTable(rl);
    if (lootTable === null) {
      console.warn(`Loot table not found: ${bagName}`);
      return null;
    }
    return classifyLootTable(lootTable);
  } catch (e) {
    console.error(`Failed to analyze loot table for ${bagName}: ${e}`);
    return null;
  }
}

let bagLootInfoReady = false;

function ensureBagInfoLoaded(server) {
  if (bagLootInfoReady) return;
  bagLootInfoReady = true;
  bagLootInfo = {};
  let loaded = 0;
  let failed = 0;
  for (let bagId of treasureBags) {
    let bagName = bagId.replace("prodigium:", "");
    let info = loadBagInfo(server, bagName);
    if (info) {
      bagLootInfo[bagName] = info;
      loaded++;
    } else {
      failed++;
    }
  }
  console.info(
    `[TreasureBags] Lazy-loaded ${loaded}/${treasureBags.length} loot tables (${failed} failed)`
  );
}

function coloredName(stack) {
  let name = stack.hoverName.copy();
  if (!name.style || !name.style.color) {
    name = name.withStyle(stack.rarity.color);
  }
  return name;
}

function countFreeSlots(player) {
  let inv = player.inventory;
  let count = 0;
  for (let i = 0; i < 36; i++) {
    if (inv.getItem(i).isEmpty()) count++;
  }
  return count;
}

// Bypasses Curios auto-equip mixin on Inventory.add() by using setItem directly
function insertBypassCurios(player, stack) {
  let inv = player.inventory;
  for (let slot = 0; slot < 36; slot++) {
    let existing = inv.getItem(slot);
    if (
      !existing.isEmpty() &&
      $ItemStack.isSameItemSameTags(existing, stack) &&
      existing.count + stack.count <= existing.maxStackSize
    ) {
      existing.count = existing.count + stack.count;
      return true;
    }
  }
  for (let slot = 0; slot < 36; slot++) {
    if (inv.getItem(slot).isEmpty()) {
      inv.setItem(slot, stack);
      return true;
    }
  }
  return false;
}

ServerEvents.tags("item", (event) => {
  event.add("prodigium:immune", treasureBags);
  event.add("prodigium:float", treasureBags);
});

ItemEvents.rightClicked((event) => {
  let bagId = event.item.id;
  if (treasureBags.indexOf(bagId) === -1) return;
  if (String(event.hand) !== "MAIN_HAND") return;

  let player = event.player;

  if (countFreeSlots(player) < REQUIRED_FREE_SLOTS) {
    player.tell(
      Text.red(
        `You need at least ${REQUIRED_FREE_SLOTS} free inventory slots to open a treasure bag!`
      )
    );
    return;
  }

  ensureBagInfoLoaded(event.server);

  let bagName = bagId.replace("prodigium:", "");
  let bagDisplayName = event.item.hoverName;

  let lootTable = event.server
    .getLootData()
    .getLootTable(
      new $ResourceLocation("prodigiumreforged", `treasure_bags/${bagName}`)
    );
  let params = new $LootParams.Builder(event.level).create(
    $LootContextParamSets.EMPTY
  );
  let items = lootTable.getRandomItems(params);

  let droppedCount = 0;
  let obtainedIds = new Set();
  let mergedById = new Map();
  let displayOrder = [];

  for (let item of items) {
    let id = String(item.getItem().builtInRegistryHolder().key().location());
    obtainedIds.add(id);
    if (mergedById.has(id)) {
      mergedById.get(id).count = mergedById.get(id).count + item.count;
    } else {
      let copy = item.copy();
      mergedById.set(id, copy);
      displayOrder.push(id);
    }
    if (!insertBypassCurios(player, item)) {
      player.drop(item, false);
      droppedCount++;
    }
  }

  let notObtained = [];
  let info = bagLootInfo[bagName];
  if (info) {
    for (let pool of info.bulkPools) {
      pool.forEach((id) => {
        if (!obtainedIds.has(id)) notObtained.push(id);
      });
    }
    for (let id of info.conditionalItems) {
      if (!obtainedIds.has(id)) notObtained.push(id);
    }
  }

  event.level.playSound(
    null,
    player.x,
    player.y,
    player.z,
    "gunswithoutroses:item.bullet_bag.close",
    "players",
    5.0,
    1.0
  );

  let separator = Text.gold("━━━━━━━━━━━━━━━━━━━━━━━");
  player.tell(separator);
  player.tell(
    Text.gold("Opened ").append(bagDisplayName).append(Text.gold(":"))
  );
  for (let id of displayOrder) {
    let stack = mergedById.get(id);
    let line = Text.of("  ");
    if (stack.count > 1) line = line.append(Text.of(`${stack.count} `));
    line = line.append(coloredName(stack));
    player.tell(line);
  }
  if (notObtained.length > 0) {
    player.tell(Text.gray("Not obtained:"));
    for (let id of notObtained) {
      let stack = Item.of(id);
      if (stack.isEmpty()) continue;
      player.tell(Text.of("  ").append(coloredName(stack)));
    }
  }
  if (droppedCount > 0) {
    player.tell(
      Text.red(
        `${droppedCount} item(s) dropped on the ground (inventory too full)`
      )
    );
  }
  player.tell(separator);

  event.item.count--;
});
