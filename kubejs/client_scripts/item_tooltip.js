ItemEvents.tooltip((event) => {
  event.add("prodigium_reforged:meat_charm", [
    Text.gold("Being hit has a chance to bleed the attacker"),
  ]);

  event.add("prodigium_reforged:feather_necklace", [
    Text.gold("Chance to obtain the Holy Touch effect after casting a spell"),
  ]);
});
