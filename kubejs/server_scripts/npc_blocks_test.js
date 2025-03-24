let npcAlreadySpawned = false;

let activeNpcBlocks = new Set();

let npcSpawnBlocks = ["minecraft:crafting_table", "minecraft:yellow_wool"];

BlockEvents.placed((event) => {
  let block = event.block;
  let player = event.player;
  let level = event.level;
  let pos = block.pos;

  let NPC_COMMANDS = {
    "minecraft:crafting_table":
      "easy_npc preset import data prodigiumreforged:preset/terraria/guide.npc.nbt ~ ~ ~",
    "minecraft:yellow_wool":
      "easy_npc preset import data prodigiumreforged:preset/terraria/tavernkeep.npc.nbt ~ ~ ~",
  };

  let NPC_HOME_COMMANDS = {
    "minecraft:crafting_table":
      "easy_npc navigation set home 3bd2ab72-41d7-4472-a480-5d849f76298c ~ ~ ~",
    "minecraft:yellow_wool":
      "easy_npc navigation set home 8a15d5bf-b913-4f26-b9f1-e49e9d42b758 ~ ~ ~",
  };

  if (npcAlreadySpawned) {
    console.log(`[DEBUG] ❌ Un NPC est déjà présent, annulation.`);
    return;
  }

  if (!(block.id in NPC_COMMANDS)) return;

  console.log(`[DEBUG] ✅ Bloc ${block.id} posé à ${pos}`);

  activeNpcBlocks.add(`${pos.x},${pos.y},${pos.z}`);

  let searchRadius = 10;
  let foundChair = false;
  let foundTable = false;
  let foundDoor = false;
  let foundLight = false;

  let validChairs = [
    "valhelsia_furniture:oak_chair",
    "valhelsia_furniture:spruce_chair",
  ];
  let validTables = ["valhelsia_furniture:oak_table"];
  let validDoors = [
    "minecraft:oak_door",
    "minecraft:spruce_door",
    "minecraft:birch_door",
    "minecraft:jungle_door",
    "minecraft:acacia_door",
    "minecraft:dark_oak_door",
    "minecraft:iron_door",
  ];
  let validLight = ["minecraft:torch", "minecraft:lantern"];

  console.log("[DEBUG] 🔎 Début du scan des blocs autour...");

  for (let x = -searchRadius; x <= searchRadius; x++) {
    for (let y = -searchRadius; y <= searchRadius; y++) {
      for (let z = -searchRadius; z <= searchRadius; z++) {
        let nearbyPos = pos.offset(x, y, z);
        let nearbyBlock = level.getBlock(nearbyPos);

        console.log(`[DEBUG] Bloc détecté : ${nearbyBlock.id} à ${nearbyPos}`);

        if (validChairs.includes(nearbyBlock.id)) {
          foundChair = true;
          console.log(`[DEBUG] ✅ Chaise trouvée à ${nearbyPos}`);
        }
        if (validTables.includes(nearbyBlock.id)) {
          foundTable = true;
          console.log(`[DEBUG] ✅ Table trouvée à ${nearbyPos}`);
        }
        if (validDoors.includes(nearbyBlock.id)) {
          foundDoor = true;
          console.log(`[DEBUG] ✅ Porte trouvée à ${nearbyPos}`);
        }
        if (validLight.includes(nearbyBlock.id)) {
          foundLight = true;
          console.log(`[DEBUG] ✅ Lumière trouvée à ${nearbyPos}`);
        }

        if (foundChair && foundTable && foundDoor && foundLight) break;
      }
      if (foundChair && foundTable && foundDoor && foundLight) break;
    }
    if (foundChair && foundTable && foundDoor && foundLight) break;
  }

  if (foundChair && foundTable && foundDoor && foundLight) {
    let command = NPC_COMMANDS[block.id].replace(
      "~ ~ ~",
      `${pos.x} ${pos.y} ${pos.z}`
    );
    player.server.runCommand(command);
    console.log(`[DEBUG] 🎉 NPC Spawn: ${command}`);

    npcAlreadySpawned = true;

    if (block.id in NPC_HOME_COMMANDS) {
      let homeCommand = NPC_HOME_COMMANDS[block.id].replace(
        "~ ~ ~",
        `${pos.x} ${pos.y} ${pos.z}`
      );
      player.server.runCommand(homeCommand);
      console.log(`[DEBUG] 📍 Commande de Home: ${homeCommand}`);
    }
  } else {
    console.log(
      `[DEBUG] ❌ Conditions non remplies : ${
        !foundChair ? "Manque chaise" : ""
      } ${!foundTable ? "Manque table" : ""} ${
        !foundDoor ? "Manque porte" : ""
      }`
    );
  }
});

BlockEvents.broken((event) => {
  let block = event.block;
  let pos = block.pos;

  if (npcSpawnBlocks.includes(block.id)) {
    console.log(`[DEBUG] 🔨 Bloc ${block.id} cassé à ${pos}`);

    activeNpcBlocks.delete(`${pos.x},${pos.y},${pos.z}`);

    if (activeNpcBlocks.size === 0) {
      console.log(
        `[DEBUG] 🟢 Plus aucun bloc de spawn trouvé, reactivation possible.`
      );
      npcAlreadySpawned = false;
    } else {
      console.log(
        `[DEBUG] ⚠️ D'autres blocs spawn existent encore (${activeNpcBlocks.size} restants).`
      );
    }
  }
});
