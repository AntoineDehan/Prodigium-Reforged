let activeNpcBlocks = new Set();

let npcSpawnBlocks = [
  "minecraft:crafting_table",
  "doggytalents:dog_bed",
  "irons_spellbooks:alchemist_cauldron",
  "minecraft:barrel",
  "minecraft:red_wool",
  "numismatic-overhaul:shop",
  "cataclysm:mechanical_fusion_anvil",
  "minecraft:flower_pot",
  "quark:gunpowder_sack",
  "aquaculture:tackle_box",
];

let NPC_COMMANDS = {
  "minecraft:crafting_table":
    "easy_npc preset import data prodigiumreforged:preset/terraria/guide.npc.nbt ~ ~ ~",
  "minecraft:barrel":
    "easy_npc preset import data prodigiumreforged:preset/terraria/tavernkeep.npc.nbt ~ ~ ~",
  "doggytalents:dog_bed":
    "easy_npc preset import data prodigiumreforged:preset/terraria/zoologist.npc.nbt ~ ~ ~",
  "irons_spellbooks:alchemist_cauldron":
    "easy_npc preset import data prodigiumreforged:preset/terraria/wizard.npc.nbt ~ ~ ~",
  "minecraft:red_wool":
    "easy_npc preset import data prodigiumreforged:preset/terraria/nurse.npc.nbt ~ ~ ~",
  "numismatic-overhaul:shop":
    "easy_npc preset import data prodigiumreforged:preset/terraria/merchant.npc.nbt ~ ~ ~",
  "cataclysm:mechanical_fusion_anvil":
    "easy_npc preset import data prodigiumreforged:preset/terraria/goblin.npc.nbt ~ ~ ~",
  "minecraft:flower_pot":
    "easy_npc preset import data prodigiumreforged:preset/terraria/dryad.npc.nbt ~ ~ ~",
  "quark:gunpowder_sack":
    "easy_npc preset import data prodigiumreforged:preset/terraria/arms_dealer.npc.nbt ~ ~ ~",
  "aquaculture:tackle_box":
    "easy_npc preset import data prodigiumreforged:preset/terraria/angler.npc.nbt ~ ~ ~",
};

let NPC_HOME_COMMANDS = {
  "minecraft:crafting_table":
    "easy_npc navigation set home 3bd2ab72-41d7-4472-a480-5d849f76298c ~ ~ ~",
  "minecraft:barrel":
    "easy_npc navigation set home 407a8d48-2853-486f-85e0-b6a6abc04f63 ~ ~ ~",
  "doggytalents:dog_bed":
    "easy_npc navigation set home 3d380f27-8f30-4daa-aaf1-f720c34afb86 ~ ~ ~",
  "irons_spellbooks:alchemist_cauldron":
    "easy_npc navigation set home f5be7dde-967f-4b27-8b50-7e6a9ddb35ce ~ ~ ~",
  "minecraft:red_wool":
    "easy_npc navigation set home 88f7ac3f-9696-4c5b-bf4a-52e3b40e10ac ~ ~ ~",
  "numismatic-overhaul:shop":
    "easy_npc navigation set home 2d146e4f-6905-49b4-9163-62a5d5fb73f3 ~ ~ ~",
  "cataclysm:mechanical_fusion_anvil":
    "easy_npc navigation set home bc6503ee-44cf-42a9-a6fa-6a0f3d82af73 ~ ~ ~",
  "minecraft:flower_pot":
    "easy_npc navigation set home 31d2de80-97a0-41cf-a227-11ff3e097e25 ~ ~ ~",
  "quark:gunpowder_sack":
    "easy_npc navigation set home d4ef3e8d-ccc8-4ac5-a7e2-5199a0e27ecf ~ ~ ~",
  "aquaculture:tackle_box":
    "easy_npc navigation set home d4ef3e8d-ccc8-4ac5-a7e2-5199a0e27ecf ~ ~ ~",
};

let categoryBlocks = {
  chairs: ["valhelsia_furniture:oak_chair", "valhelsia_furniture:spruce_chair"],
  tables: ["valhelsia_furniture:oak_table"],
  doors: [
    "minecraft:oak_door",
    "minecraft:spruce_door",
    "minecraft:birch_door",
    "minecraft:jungle_door",
    "minecraft:acacia_door",
    "minecraft:dark_oak_door",
    "minecraft:iron_door",
  ],
  light: ["minecraft:torch", "minecraft:lantern"],
};

let npcRequirements = {
  "minecraft:crafting_table": ["chairs", "tables", "doors", "light"],
  "minecraft:barrel": ["chairs", "tables", "doors", "light"],
  "doggytalents:dog_bed": ["chairs", "tables", "doors", "light"],
  "irons_spellbooks:alchemist_cauldron": ["chairs", "tables", "doors", "light"],
  "minecraft:red_wool": ["chairs", "tables", "doors", "light"],
  "numismatic-overhaul:shop": ["chairs", "tables", "doors", "light"],
  "cataclysm:mechanical_fusion_anvil": ["chairs", "tables", "doors", "light"],
  "minecraft:flower_pot": ["chairs", "tables", "doors", "light"],
  "quark:gunpowder_sack": ["chairs", "tables", "doors", "light"],
  "aquaculture:tackle_box": ["chairs", "tables", "doors", "light"],
};

BlockEvents.placed((event) => {
  let block = event.block;
  let player = event.player;
  let level = event.level;
  let pos = block.pos;

  if (!(block.id in NPC_COMMANDS)) return;

  activeNpcBlocks.add(`${pos.x},${pos.y},${pos.z}`);

  let searchRadius = 10;
  let foundConditions = {};

  let requiredCategories = npcRequirements[block.id] || [];
  requiredCategories.forEach((category) => {
    foundConditions[category] = false;
  });

  for (let x = -searchRadius; x <= searchRadius; x++) {
    for (let y = -searchRadius; y <= searchRadius; y++) {
      for (let z = -searchRadius; z <= searchRadius; z++) {
        let nearbyPos = pos.offset(x, y, z);
        let nearbyBlock = level.getBlock(nearbyPos);

        for (let category of requiredCategories) {
          if (categoryBlocks[category].includes(nearbyBlock.id)) {
            foundConditions[category] = true;
          }
        }

        if (Object.values(foundConditions).every(Boolean)) break;
      }
      if (Object.values(foundConditions).every(Boolean)) break;
    }
    if (Object.values(foundConditions).every(Boolean)) break;
  }

  if (Object.values(foundConditions).every(Boolean)) {
    let command = NPC_COMMANDS[block.id].replace(
      "~ ~ ~",
      `${pos.x} ${pos.y} ${pos.z}`
    );
    player.server.runCommand(command);

    if (block.id in NPC_HOME_COMMANDS) {
      let homeCommand = NPC_HOME_COMMANDS[block.id].replace(
        "~ ~ ~",
        `${pos.x} ${pos.y} ${pos.z}`
      );
      player.server.runCommand(homeCommand);
    }
  }
});

BlockEvents.broken((event) => {
  let block = event.block;
  let pos = block.pos;

  if (npcSpawnBlocks.includes(block.id)) {
    activeNpcBlocks.delete(`${pos.x},${pos.y},${pos.z}`);
  }
});
