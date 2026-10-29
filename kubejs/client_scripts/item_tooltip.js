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

  event.add("prodigium_reforged:mana_regeneration_band", [
    Text.gold("Slowly regenerates health over time"),
  ]);

  event.add("prodigium_reforged:magic_cuffs", [
    Text.gold("Gain mana equal to damage taken"),
  ]);

  event.add("prodigium_reforged:mana_flower", [
    Text.gold("Reduces the mana cost of all spells"),
  ]);

  event.add("confluence:mana_cloak", [
    Text.gold("Reduces the mana cost of all spells"),
    Text.gold("Causes stars to fall after taking damage"),
  ]);

  event.add("prodigium_reforged:restoration_shield", [
    Text.gold("Immune to knockback. Slowly regenerates health over time"),
  ]);

  event.add("prodigium_reforged:aloe_leaf", [
    Text.gold("Healing an ally applies Mending Grace to them"),
  ]);

  event.add("prodigium_reforged:ancient_aegis", [
    Text.gold("Nearby allies gain Protective Energy"),
  ]);

  event.add("prodigium_reforged:zealots_belt", [
    Text.gold("Healing an ally grants you Speed and Zealot Fervor"),
  ]);

  event.add("prodigium_reforged:covenant_bond", [
    Text.gold("Healing an ally applies Mending Grace to you and them"),
  ]);

  event.add("prodigium_reforged:fragrant_corsage", [
    Text.gold("Slowly regenerates health over time"),
  ]);

  event.add("prodigium_reforged:honey_heart", [
    Text.gold("Healing an ally applies Mending Grace and covers them in honey"),
  ]);

  event.add("prodigium_reforged:lost_cross", [
    Text.gold("Healing an ally grants them Holy Defense"),
  ]);

  event.add("prodigium_reforged:forgotten_cross_necklace", [
    Text.gold(
      "Healing an ally grants them Holy Defense. Extended invulnerability after being hit",
    ),
  ]);

  event.add("prodigium_reforged:turn_undead", [
    Text.gold(
      "You and nearby allies gain Protective Energy. Nearby undead attackers can be Confused",
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
  event.add("kubejs:honey_staff", [
    Text.aqua("Hits apply Sticky to enemies"),
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
