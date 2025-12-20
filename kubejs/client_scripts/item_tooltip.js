ItemEvents.tooltip((event) => {
  // Curios
  event.add("prodigium_reforged:meat_charm", [
    Text.gold("Being hit has a chance to bleed the attacker"),
  ]);

  event.add("prodigium_reforged:meat_shield", [
    Text.gold("Being hit has a chance to bleed the attacker"),
  ]);

  event.add("prodigium_reforged:feather_necklace", [
    Text.gold("Chance to obtain the Holy Touch effect after casting a spell"),
  ]);

  //Misc
  event.add("prodigium_reforged:compass_of_time", [
    Text.darkAqua(
      "Right click while in a Boss structure to check it's respawning status"
    ),
  ]);
});
