BlockEvents.placed((event) => {
  let block = event.block;
  let player = event.player;
  let level = event.level;
  let pos = block.pos;

  if (block.id !== "minecraft:yellow_wool") return;
  console.log(`Le joueur ${player.name} a posé de la laine jaune à ${pos}`);

  let searchRadius = 5;

  let found = false;

  for (let x = -searchRadius; x <= searchRadius; x++) {
    for (let y = -searchRadius; y <= searchRadius; y++) {
      for (let z = -searchRadius; z <= searchRadius; z++) {
        let nearbyBlock = level.getBlock(pos.offset(x, y, z));

        if (
          nearbyBlock.id === "minecraft:yellow_wool" &&
          !nearbyBlock.pos.equals(pos)
        ) {
          found = true;
          break;
        }
      }
    }
  }

  if (!found) {
    player.server.runCommand(`say La laine jaune a été posée !`);
  }
});
