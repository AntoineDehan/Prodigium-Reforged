ItemEvents.rightClicked((event) => {
  let itemUsed = event.item;

  if (itemUsed.id == "kubejs:token_melee") {
    itemUsed.count--;

    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills category unlock @s melee`
    );
    event.server.runCommandSilent(
      `execute as ${event.player.username} run ftbquests change_progress @s complete 0CEBA9F62589E756`
    );
  } else if (itemUsed.id == "kubejs:token_mage") {
    itemUsed.count--;

    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills category unlock @s mage`
    );
    event.server.runCommandSilent(
      `execute as ${event.player.username} run ftbquests change_progress @s complete 444A7343CCD4A29A`
    );
  } else if (itemUsed.id == "kubejs:token_ranged") {
    itemUsed.count--;

    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills category unlock @s ranged`
    );
    event.server.runCommandSilent(
      `execute as ${event.player.username} run ftbquests change_progress @s complete 1606B07C6ECC6BBA`
    );
  } else {
    return;
  }
});
