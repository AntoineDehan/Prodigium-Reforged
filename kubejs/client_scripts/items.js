// priority: 0

ItemEvents.tooltip((event) => {
  event.addAdvanced(["kubejs:defender_medal"], (item, advanced, text) => {
    text.add(1, [
      Text.of("Currency for trading with the Tavernkeep").darkPurple(),
    ]);
  });
  event.addAdvanced(["kubejs:eternia_crystal"], (item, advanced, text) => {
    text.add(1, [Text.of("Material for opening Gates").darkPurple()]);
  });
  event.addAdvanced(["kubejs:reset_token_melee"], (item, advanced, text) => {
    text.add(1, [
      Text.of(
        "Right click to reset your Skill Tree and chose the Melee Class "
      ).darkRed(),
    ]);
  });
  event.addAdvanced(["kubejs:reset_token_ranged"], (item, advanced, text) => {
    text.add(1, [
      Text.of(
        "Right click to reset your Skill Tree and chose the Ranged Class "
      ).darkRed(),
    ]);
  });
  event.addAdvanced(["kubejs:reset_token_mage"], (item, advanced, text) => {
    text.add(1, [
      Text.of(
        "Right click to reset your Skill Tree and chose the Mage Class "
      ).darkRed(),
    ]);
  });
  event.addAdvanced(["kubejs:token_melee"], (item, advanced, text) => {
    text.add(1, [Text.of("Right click to select the Melee Class ")]);
  });
  event.addAdvanced(["kubejs:token_ranged"], (item, advanced, text) => {
    text.add(1, [Text.of("Right click to select the Ranged Class ")]);
  });
  event.addAdvanced(["kubejs:token_mage"], (item, advanced, text) => {
    text.add(1, [Text.of("Right click to select the Mage class")]);
  });
});
