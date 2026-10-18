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

  event.add("prodigium_reforged:frozen_arrow_head", [
    Text.gold("Your arrows Chill hit entities"),
  ]);

  event.add("prodigium_reforged:wrought_shoulder_piece", [
    Text.gold("Redirect 1 point of damage from your nearby ally to you"),
  ]);

  event.add("prodigium_reforged:phantasmal_bell", [
    Text.gold("When hit, reveal and debuff hostile mobs within 16 blocks"),
  ]);

  event.add("prodigium_reforged:lucky_card", [
    Text.gold("Gain positive effects while casting a spell"),
  ]);

  event.add("prodigium_reforged:ashlords_roar", [
    Text.gold(
      "When hit, force nearby hostile mobs to target you. 45sec Cooldown",
    ),
  ]);

  event.add("prodigium_reforged:kings_crown", [
    Text.gold("While you have active summons, gain spell power and +5 armor"),
  ]);

  event.add("prodigium_reforged:acid_flask", [
    Text.gold("Your bullets have a high chance of inflicting poison"),
  ]);

  event.add("prodigium_reforged:frosted_amulet", [
    Text.gold(
      "When hit, gain Frost Resistance and your next spells inflict Chill on enemies",
    ),
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

  // Staves
  event.add("kubejs:slime_staff", [
    Text.aqua("+1 mana on hit and slows hit enemies"),
  ]);
  event.add("kubejs:spawner_staff", [
    Text.gray(
      "High chance of summoning a Whimper if casting a spell while wielding this staff",
    ),
  ]);

  //
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
