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
      "Right click while in a Boss structure to check it's respawning status",
    ),
  ]);
  event.add("prodigium_reforged:wroughtnaut_plate", [
    Text.gold("Can be used to reforge any item"),
  ]);

  event.add(
    [
      "numismatic-overhaul:bronze_coin",
      "numismatic-overhaul:silver_coin",
      "numismatic-overhaul:gold_coin",
    ],
    [Text.gray("Right Click while in Main Hand to add it in your purse!")],
  );

  event.add(
    [
      "endrem:black_eye",
      "endrem:cold_eye",
      "endrem:corrupted_eye",
      "endrem:lost_eye",
      "endrem:nether_eye",
      "endrem:old_eye",
      "endrem:rogue_eye",
      "endrem:cursed_eye",
      "endrem:evil_eye",
      "endrem:guardian_eye",
      "endrem:magical_eye",
      "endrem:wither_eye",
      "endrem:witch_eye",
      "endrem:undead_eye",
      "endrem:exotic_eye",
      "endrem:cryptic_eye",
    ],
    [Text.gray("Used to open the Ender Portal")],
  );

  event.add(
    [
      "companions:book_ice_shard",
      "companions:book_ice_tornado",
      "companions:book_fire_mark",
      "companions:book_brace",
      "companions:book_heal_ring",
      "companions:book_stone_spikes",
      "companions:book_magic_ray",
      "companions:book_black_hole",
      "companions:book_naginita",
    ],
    [Text.gray("Only usable by pets!")],
  );

  event.add("kybejs:ancient_cobalt_bow", [Text.gold("Infinite Arrows")]);

  // Bows
  event.add("kubejs:arcanethyst_bow", [Text.gold("Shoots two magic arrows")]);
  event.add("kubejs:twin_shadows", [Text.gold("Shoots a bonus arrow")]);
  event.add("kubejs:ancient_cobalt_bow", [Text.gold("Infinity included")]);
  event.add("kubejs:frostmaw_howl", [
    Text.gold("Chill and Pierce up to 2 entities"),
  ]);
  event.add("kubejs:aether_wind", [
    Text.gold("Summon a Lightning Bolt when hitting a block. Pierce 1 entity"),
  ]);
  event.add("kubejs:void_petal", [
    Text.gold(
      "Grants absorption on hit and has a chance to afflict Thorned. +1 bonus arrow",
    ),
  ]);
});
