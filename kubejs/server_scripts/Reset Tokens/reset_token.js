ItemEvents.rightClicked((event) => {
  let itemUsed = event.item;

  if (itemUsed.id == "kubejs:token_melee") {
    itemUsed.count--;
    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills category lock @s melee`
    );
    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills category lock @s mage`
    );
    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills category lock @s ranged`
    );
    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills category unlock @s melee`
    );
    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills points set @s melee 10`
    );
  } else if (itemUsed.id == "kubejs:token_mage") {
    itemUsed.count--;
    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills category lock @s melee`
    );
    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills category lock @s mage`
    );
    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills category lock @s ranged`
    );
    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills category unlock @s mage`
    );
    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills points set @s mage 10`
    );
  } else if (itemUsed.id == "kubejs:token_ranged") {
    itemUsed.count--;
    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills category lock @s melee`
    );
    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills category lock @s mage`
    );
    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills category lock @s ranged`
    );
    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills category unlock @s ranged`
    );
    event.server.runCommandSilent(
      `execute as ${event.player.username} run puffish_skills points set @s ranged 10`
    );
  } else {
    return;
  }
});
