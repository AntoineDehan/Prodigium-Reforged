StartupEvents.registry("mob_effect", (event) => {
  // Well fed effect - When hunger is full
  event
    .create("well_fed")
    .color(0xffd27f)
    .beneficial()
    .effectTick((entity, lvl) => {
      if (entity.age % 20 != 0) return;
      entity.heal(0.5 * lvl);
    })
    // Armor
    .modifyAttribute(
      "minecraft:generic.armor",
      "c1d7e210-3d3f-11ee-be56-0242ac183754",
      2,
      "addition"
    )
    // Move Speed
    .modifyAttribute(
      "minecraft:generic.movement_speed",
      "c1d7e5b0-3d3f-11ee-be56-0242ac183754",
      0.1,
      "multiply_total"
    )
    // Damage
    .modifyAttribute(
      "minecraft:generic.attack_damage",
      "e0f4e796-3d3d-11ee-be56-0242ac183754",
      0.1,
      "multiply_base"
    )
    // Crit
    .modifyAttribute(
      "attributeslib:crit_chance",
      "1cf62d2c-c47f-4cee-998e-6a93ebb3874f",
      2,
      "addition"
    )

    // Mining Speed
    .modifyAttribute(
      "attributeslib:mining_speed",
      "c384ea73-4610-4670-b793-8188a3ce8e12",
      0.2,
      "multiply_total"
    )

    // Ranged Damage
    .modifyAttribute(
      "puffish_attributes:player.ranged_damage",
      "17a9915b-48f2-4436-a821-fe77660b94cb",
      0.1,
      "multiply_total"
    )

    // Mana Regen
    .modifyAttribute(
      "irons_spellbooks:mana_regen",
      "4e640627-50eb-4fab-aec1-644ca810b9d8",
      0.1,
      "multiply_base"
    )

    // Spell Power
    .modifyAttribute(
      "irons_spellbooks:spell_power",
      "92fab521-1d61-4874-b2ae-81ddbff4f99d",
      0.1,
      "addition"
    );

  // Golden Might - Gold Armor Effect
  event
    .create("golden_might")
    .color(0x4b0082)
    .beneficial()
    .effectTick((entity, lvl) => {
      if (!entity.isPlayer()) return;

      let y = Math.floor(entity.y);

      if (y < 60 && entity.age % 40 === 0) {
        let regenAmount = 0.5;
        if (y < 30) regenAmount = 1.5;
        if (y < 0) regenAmount = 2;

        entity.heal(regenAmount * (lvl + 1));
      }

      if (y < 0) {
        entity.modifyAttribute(
          "attributeslib:mining_speed",
          "71a5a9be-3a07-41bb-b49c-7c813e7de777",
          0.25,
          "addition"
        );
      } else {
        entity.modifyAttribute(
          "attributeslib:mining_speed",
          "71a5a9be-3a07-41bb-b49c-7c813e7de777",
          0,
          "addition"
        );
      }
    });

  // Bee Boost - Bee Armor Effect

  event
    .create("bee_boost")
    .color(0xffcc33)
    .beneficial()
    .displayName("Bee Boost")
    .effectTick((entity, lvl) => {
      const honey = entity.getEffect("confluence:honey");
      if (!honey) return;

      if (honey.amplifier >= 1) return;

      const duration = honey.duration;

      entity.removeEffect("confluence:honey");

      entity.potionEffects.add("confluence:honey", duration, 1, true, true);
    });

  // Frostburner -- Frost Armor Effect
  event
    .create("frostburner")
    .color(0x550000)
    .beneficial()
    .displayName("Frostburner");

  // Holy Touch
  event
    .create("holy_touch")
    .color(0xffd27f)
    .beneficial()
    // Holy Spell Power
    .modifyAttribute(
      "irons_spellbooks:holy_spell_power",
      "dc93ad1a-1760-4b99-9259-bedc817e034e",
      0.5,
      "addition"
    )
    // Mana Regeneration
    .modifyAttribute(
      "irons_spellbooks:mana_regen",
      "3f398bb1-fb44-46f6-b3a0-687bdea57ee1",
      0.4,
      "addition"
    );

  // Buff Galore
  event.create("buff_galore").color(0xffd27f).beneficial();

  // Crusader Aura
  event
    .create("crusader_aura")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.armor",
      "52c58c14-801d-4497-b5d6-bc1bdd15d1c6",
      2,
      "addition"
    );

  // Crusader Protection
  event
    .create("crusader_protection")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.armor",
      "040965a9-bf8d-435e-a06c-391086478ffc",
      5,
      "addition"
    )
    .modifyAttribute(
      "minecraft:generic.armor_toughness",
      "cefe7133-5059-43e7-baba-8fc08b306327",
      1,
      "addition"
    )
    .modifyAttribute(
      "puffish_attributes:player.healing",
      "36d9f52d-71f9-4e4f-b808-251b185a2c36",
      0.15,
      "addition"
    );

  // Sun's Light
  event.create("sun_light").color(0xffd27f).beneficial();

  // Prior's Faith
  event.create("prior_faith").color(0xffd27f).beneficial();

  // Holy Warmth
  event.create("holy_warmth").color(0xffd27f).beneficial();

  // Mana Regeneration
  event
    .create("mana_regeneration")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "irons_spellbooks:mana_regen",
      "a3ee1052-6453-4198-8b16-5139262464f4",
      0.15,
      "multiply_base"
    );

  // Wizard's Knowledge
  event.create("wizard_knowledge").color(0xffd27f).beneficial();

  // Aether Wizard Knowledge
  event
    .create("aether_wizard_knowledge")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "irons_spellbooks:mana_regen",
      "db623a34-49e0-4664-b970-d4e64a88c164",
      0.1,
      "multiply_base"
    );

  // Skyjade's Knowledge
  event.create("skyjade_knowledge").color(0xffd27f).beneficial();

  // Skyjade's Strength
  event
    .create("skyjade_strength")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "irons_spellbooks:mana_regen",
      "2936e1e2-b1e1-42f5-bec7-2ee9082c1c25",
      0.2,
      "addition"
    )
    .modifyAttribute(
      "irons_spellbooks:spell_power",
      "65e689ee-092f-4644-ae09-69f2e7435e07",
      0.15,
      "multiply_total"
    )
    .modifyAttribute(
      "irons_spellbooks:cast_time_reduction",
      "ac1b01d3-e434-4948-9e07-79a13d439817",
      0.3,
      "addition"
    );

  // Infernal Fire
  event.create("infernal_fire").color(0xffd27f).beneficial();

  // Enforcer's Wrath
  event
    .create("enforcer_wrath")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "gunswithoutroses:gwr.damage_total",
      "8348f621-3a38-4be8-8097-090c80b5e562",
      0.15,
      "multiply_total"
    )
    .modifyAttribute(
      "gunswithoutroses:gwr.chance_ammo",
      "d6568c78-d7eb-424c-923a-633a3f7fc7c6",
      -0.15,
      "multiply_total"
    )
    .modifyAttribute(
      "gunswithoutroses:gwr.fire_delay",
      "b1fd79b6-7573-49af-8cb7-d959ec728d1a",
      -0.15,
      "multiply_total"
    )
    .modifyAttribute(
      "minecraft:generic.movement_speed",
      "bd07556c-e05e-4b42-b148-7e9cb6606b30",
      0.15,
      "multiply_total"
    );

  // Soul Collector
  event.create("soul_collector").color(0xffd27f).beneficial();

  // Soul Gorged
  event
    .create("soul_gorged")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.movement_speed",
      "c2cd6b65-56f0-4d40-ae6a-29c0e3dacd38",
      0.02,
      "multiply_base"
    )
    .modifyAttribute(
      "minecraft:generic.luck",
      "1dcc85ea-7522-4664-931e-53fcdafbedcc",
      1,
      "addition"
    )
    .modifyAttribute(
      "gunswithoutroses:gwr.damage_total",
      "41fd5b15-fb09-49d7-b582-48d067f72f18",
      0.05,
      "multiply_total"
    )
    .modifyAttribute(
      "gunswithoutroses:gwr.knockback",
      "afd6be4a-8f21-4c02-baf5-694a820a8d8e",
      0.1,
      "addition"
    )
    .modifyAttribute(
      "sweet_charm_o_mine:bullet_armor_penetration",
      "05ec89f4-0740-419e-929a-478bdde9917c",
      0.01,
      "addition"
    );

  /// Holy Marauder armor set
  // Marauder Buff
  event.create("marauder_buff").color(0xffd27f).beneficial();

  // Marauder's Light
  event
    .create("marauder_light")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "irons_spellbooks:holy_spell_power",
      "ed45e531-d269-48f9-b351-1b6dcff8be27",
      0.2,
      "multiply_total"
    )
    .modifyAttribute(
      "irons_spellbooks:cast_time_reduction",
      "d8b07366-fbef-431c-8681-3c467d0de73b",
      0.3,
      "multiply_total"
    )
    .modifyAttribute(
      "irons_spellbooks:cooldown_reduction",
      "a1159f61-c9f6-4b41-a66b-43de4189a701",
      0.1,
      "multiply_total"
    )
    .modifyAttribute(
      "irons_spellbooks:mana_regen",
      "16fdfd55-7bb0-4f5f-9bc8-41f6888fdcb5",
      0.05,
      "multiply_total"
    )
    .modifyAttribute(
      "attributeslib:dodge_chance",
      "95b14b8f-c91e-4ef8-b7c5-af930bcd70b5",
      0.3,
      "addition"
    );

  /// Dargon armor set
  // Dragon Protection
  event.create("dragon_protection").color(0xffd27f).beneficial();

  // Dragon Bones
  event
    .create("dragon_bones")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.armor",
      "dc91cb60-3e8c-4283-a974-5e9f6ab5b1b0",
      3,
      "addition"
    )
    .modifyAttribute(
      "minecraft:generic.armor_toughness",
      "631daafd-8506-411f-a535-bc22b35312ae",
      0.5,
      "addition"
    )
    .modifyAttribute(
      "minecraft:generic.luck",
      "27f34463-b57d-48b2-943f-e4fbb169981f",
      1,
      "addition"
    );

  /// Valkyrie armor set
  // Valkyrie Aura
  event
    .create("valkyrie_aura")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.armor",
      "89c222af-5317-4738-bd55-7879ac848f9b",
      2,
      "addition"
    );

  // Valkyrie Protection
  event
    .create("valkyrie_protection")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.armor",
      "a9812fc8-ca1e-4067-b1ae-918d31f1881c",
      8,
      "addition"
    )
    .modifyAttribute(
      "minecraft:generic.armor_toughness",
      "3a6f9e1f-7b84-48f2-b15e-eb0e2e7ae9c2",
      2,
      "addition"
    )
    .modifyAttribute(
      "puffish_attributes:player.healing",
      "58f35cf0-e54b-4ff3-b647-cd4b08022ff9",
      0.2,
      "addition"
    );

  /// Plated Valkyrie armor set
  // Plated Valkyrie
  event.create("plated_valkyrie").color(0xffd27f).beneficial();

  // Plated Defense
  event
    .create("plated_defense")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.armor",
      "52257bd8-9089-4c66-be1e-ed392cb9daf9",
      4,
      "addition"
    )
    .modifyAttribute(
      "minecraft:generic.armor_toughness",
      "b7fedc14-2973-4226-a835-a528ddec8a79",
      1,
      "addition"
    )
    .modifyAttribute(
      "minecraft:generic.luck",
      "7b15cc24-2d3e-4b03-9145-2e7d5f6692fa",
      1.5,
      "addition"
    );

  /// Phoenix armor set
  // Phoneix Embrace
  event.create("phoenix_embrace").color(0xffd27f).beneficial();

  // Pheonix Rage
  event
    .create("phoenix_rage")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "puffish_attributes:player.resistance",
      "5c264b7c-4983-48a0-b540-f295b4875354",
      0.11,
      "addition"
    )
    .modifyAttribute(
      "minecraft:generic.attack_damage",
      "1b37f15d-9761-4cbc-a76e-1aca603bb4a6",
      0.06,
      "multiply_total"
    )
    .modifyAttribute(
      "minecraft:generic.movement_speed",
      "e0ba4151-b3da-434b-8379-e0e9a0946f33",
      0.05,
      "multiply_total"
    )
    .modifyAttribute(
      "attributeslib:crit_chance",
      "c83f5aeb-3808-41cd-b134-674f2d51a656",
      0.11,
      "addition"
    );

  /// Witherite armor set
  // Bloody Mind
  event.create("bloody_mind").color(0xffd27f).beneficial();

  // Bloody Skin
  event
    .create("bloody_skin")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.armor",
      "78b2985e-b9f3-4f7d-9437-8960c0b288d5",
      2,
      "addition"
    )
    .modifyAttribute(
      "puffish_attributes:player.healing",
      "4018f3b2-1e0e-460a-b20d-97d9af9e2609",
      0.2,
      "multiply_total"
    )
    .modifyAttribute(
      "combatroll:recharge",
      "ba6a9c64-8a37-478d-b077-69ed98c00cc4",
      0.25,
      "multiply_total"
    )
    .modifyAttribute(
      "minecraft:generic.luck",
      "f0cfd8f5-f19e-4865-b7bd-e41cbda6ed97",
      1,
      "addition"
    )
    .modifyAttribute(
      "minecraft:generic.max_health",
      "fdd49026-3e4d-4222-b2c6-5b8a799a04fe",
      0.15,
      "multiply_total"
    );

  // Bloody Strength
  event
    .create("bloody_strength")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.attack_damage",
      "4071533b-c296-45a4-8efa-447518871816",
      0.1,
      "multiply_total"
    )
    .modifyAttribute(
      "minecraft:generic.attack_speed",
      "8f162c61-cb8d-4212-bfdb-ab4b172d78bc",
      0.35,
      "addition"
    )
    .modifyAttribute(
      "attributeslib:current_hp_damage",
      "c5b539c3-0589-483a-9bc1-dba7a46f75c7",
      0.02,
      "addition"
    )
    .modifyAttribute(
      "attributeslib:armor_shred",
      "592c74bb-50a3-4b91-b98c-51deeab641d9",
      0.2,
      "addition"
    );

  /// Void Blossom armor set
  // Blossom Aura
  event.create("blossom_aura").color(0xffd27f).beneficial();

  // Thorned
  event
    .create("thorned")
    .color(0xffd27f)
    .harmful()
    .modifyAttribute(
      "minecraft:generic.movement_speed",
      "d694cf7e-8d39-4746-af87-bb3df8640487",
      -0.3,
      "multiply_total"
    )
    .modifyAttribute(
      "minecraft:generic.knockback_resistance",
      "3bfc427b-2fb9-4485-a9ed-bc5b777ed299",
      0.8,
      "multiply_total"
    );

  // Blossom Aroma
  event
    .create("blossom_aroma")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "gunswithoutroses:gwr.damage_total",
      "2555ddf3-0842-4722-becd-9c36e7fd4472",
      0.11,
      "multiply_total"
    )
    .modifyAttribute(
      "gunswithoutroses:gwr.chance_ammo",
      "7a1cdfd7-774d-40a9-853b-daa65b86bcee",
      -0.15,
      "multiply_total"
    )
    .modifyAttribute(
      "combatroll:count",
      "0e4cbf4e-ac5e-4c63-8f50-e34d9c06bfcf",
      1,
      "addition"
    )
    .modifyAttribute(
      "combatroll:recharge",
      "736b8ace-1184-4c82-894a-e84914688a28",
      0.1,
      "multiply_total"
    )
    .modifyAttribute(
      "minecraft:generic.movement_speed",
      "96c03997-8bf7-4286-82af-c0959fa45418",
      0.15,
      "multiply_total"
    );

  // Blossom Pollen
  event
    .create("blossom_pollen")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "gunswithoutroses:gwr.damage_total",
      "0dba627b-972e-44fc-a4d1-15ffc277efcc",
      0.05,
      "multiply_total"
    )
    .modifyAttribute(
      "gunswithoutroses:gwr.chance_ammo",
      "195022c3-19bf-4bae-b544-34150d929e6c",
      -0.5,
      "multiply_total"
    )
    .modifyAttribute(
      "combatroll:count",
      "f62b8975-075d-419a-8951-57548ebaeea2",
      1,
      "addition"
    )
    .modifyAttribute(
      "combatroll:recharge",
      "c60694ad-2790-4131-bc6f-28ddb4de5bb2",
      0.2,
      "multiply_total"
    )
    .modifyAttribute(
      "puffish_attributes:player.healing",
      "9d4daac3-80ff-4b3e-8616-6a8ba6049f0b",
      0.25,
      "multiply_total"
    )
    .modifyAttribute(
      "minecraft:generic.movement_speed",
      "ff077287-202a-424a-9601-ebe39408da60",
      0.2,
      "multiply_total"
    )
    .modifyAttribute(
      "attributeslib:dodge_chance",
      "73f2b36e-3b64-44e3-8794-2d0b24009827",
      0.1,
      "addition"
    );

  /// Another Gunner Set
  event.create("leviathan_call").color(0xffd27f).beneficial();

  // Shotgun Bonus
  event
    .create("shotgun_bonus")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "gunswithoutroses:gwr.damage_total",
      "44a63a8d-9f34-4dbb-809a-0de667383bfd",
      0.2,
      "multiply_total"
    )
    .modifyAttribute(
      "gunswithoutroses:gwr.shotgun_projectiles",
      "10128ecc-63c3-470a-8a33-2c4f24a5a290",
      1,
      "addition"
    )
    .modifyAttribute(
      "attributeslib:dodge_chance",
      "48d8bcb7-9349-46e1-b593-6e33ec45480b",
      0.15,
      "addition"
    )
    .modifyAttribute(
      "minecraft:generic.movement_speed",
      "0e4142b3-44b3-483e-b19a-675cea16337e",
      0.2,
      "multiply_total"
    )
    .modifyAttribute(
      "gunswithoutroses:gwr.spread",
      "087cca02-4bfb-489f-b51d-153c38584905",
      -0.25,
      "multiply_total"
    );

  // Gatling Bonus
  event
    .create("gatling_bonus")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "gunswithoutroses:gwr.damage_total",
      "eab65fd0-9801-4df1-998c-e09082f1a5d0",
      0.15,
      "multiply_total"
    )
    .modifyAttribute(
      "gunswithoutroses:gwr.chance_ammo",
      "5980e4aa-f8cf-4a23-8675-f8be716cbdc6",
      -0.2,
      "addition"
    )
    .modifyAttribute(
      "gunswithoutroses:gwr.fire_delay",
      "85e634fb-358e-4a4d-9b1e-600411f3f539",
      -0.05,
      "multiply_total"
    )
    .modifyAttribute(
      "gunswithoutroses:gwr.spread",
      "07468fc9-b495-4f72-9fcf-91896dcea1ef",
      -0.2,
      "multiply_total"
    )
    .modifyAttribute(
      "minecraft:generic.max_health",
      "52661e15-fc4d-40d7-94f6-b47be6205632",
      0.2,
      "multiply_total"
    );

  // Sniper Bonus
  event
    .create("sniper_bonus")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "gunswithoutroses:gwr.damage_total",
      "bebe3769-30d6-4db8-ab1e-8b30bfd69064",
      0.25,
      "multiply_total"
    )
    .modifyAttribute(
      "gunswithoutroses:gwr.sniper_crit_mult",
      "55380606-ed89-462c-ac8a-39a1099199d5",
      0.5,
      "addition"
    )
    .modifyAttribute(
      "gunswithoutroses:gwr.fire_delay",
      "c76aa636-4e2e-46d3-818f-e173fb34356d",
      -0.2,
      "multiply_total"
    )
    .modifyAttribute(
      "combatroll:count",
      "65d3ed58-9efe-4a5f-bc1b-b902b5070d0e",
      1,
      "addition"
    )
    .modifyAttribute(
      "combatroll:recharge",
      "3a20868c-67ed-4930-aea7-4f06c82d8e73",
      0.25,
      "multiply_total"
    );

  // Pistol Bonus
  event
    .create("pistol_bonus")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "gunswithoutroses:gwr.damage_total",
      "c7c6100b-e3db-4739-a437-4b28339cb401",
      0.3,
      "multiply_total"
    )
    .modifyAttribute(
      "gunswithoutroses:gwr.fire_delay",
      "261f38ad-50c4-4fbd-a90b-0741f5aad1b5",
      -0.15,
      "addition"
    )
    .modifyAttribute(
      "gunswithoutroses:gwr.spread",
      "54be21c3-c23d-461f-8194-9fc7dcf13051",
      -0.2,
      "multiply_total"
    )
    .modifyAttribute(
      "attributeslib:dodge_chance",
      "b8197be5-aec5-4971-8af1-1cbb072e0aca",
      0.05,
      "addition"
    )
    .modifyAttribute(
      "sweet_charm_o_mine:bullet_armor_penetration",
      "9d8488f3-fa62-4a5b-bdf0-0b18ca897d5d",
      0.05,
      "multiply_total"
    )
    .modifyAttribute(
      "minecraft:generic.luck",
      "f13a7f29-488a-4f2c-9109-be9c0f151921",
      2,
      "addition"
    );

  /// Cleric Nether set
  // Nether Embrace
  event.create("nether_embrace").color(0xffd27f).beneficial();

  // Nether Reinforcement
  event
    .create("nether_reinforcement")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "puffish_attributes:player.healing",
      "d2bc77bc-dfd2-48fa-9c97-95fcfd4525fb",
      0.2,
      "multiply_total"
    )
    .modifyAttribute(
      "irons_spellbooks:mana_regen",
      "9c708a05-1794-497f-b7a7-cc58d6757ec6",
      0.2,
      "multiply_total"
    );

  // Nether Protection
  event
    .create("nether_protection")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.armor",
      "f002aa2d-36ff-4dd5-8cef-76c5ba832fa8",
      8,
      "addition"
    )
    .modifyAttribute(
      "attributeslib:dodge_chance",
      "4f0a825e-8b68-4149-ba65-64008d1470e3",
      0.1,
      "addition"
    )
    .modifyAttribute(
      "puffish_attributes:player.healing",
      "ea3fe78d-addf-4a4d-8228-68b826a0fabc",
      0.2,
      "multiply_total"
    )
    .modifyAttribute(
      "minecraft:generic.movement_speed",
      "72fb538c-361b-4b54-9f71-2ba9fd40e5cd",
      0.2,
      "multiply_total"
    )
    .modifyAttribute(
      "combatroll:count",
      "8575e6e5-d9d4-4d29-8405-9e2d61fb640a",
      1,
      "addition"
    )
    .modifyAttribute(
      "puffish_attributes:player.resistance",
      "8aa59537-3764-4310-b84f-3fd7189bb041",
      0.03,
      "addition"
    );

  // Nether Heat
  event
    .create("nether_heat")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "gunswithoutroses:gwr.damage_total",
      "34532b0f-f794-42c7-b751-b9703b8497db",
      0.1,
      "multiply_total"
    )
    .modifyAttribute(
      "minecraft:generic.attack_damage",
      "fca8f5df-56d1-4553-af5c-57184e7f13a7",
      0.1,
      "multiply_total"
    )
    .modifyAttribute(
      "irons_spellbooks:spell_power",
      "2137d235-e8a7-498d-a301-12ee686ea3dc",
      0.1,
      "multiply_total"
    )
    .modifyAttribute(
      "attributeslib:arrow_damage",
      "2d1ba380-8d6e-4834-87b7-764f0b56e440",
      0.1,
      "multiply_total"
    )
    .modifyAttribute(
      "irons_spellbooks:mana_regen",
      "75789f15-c528-4d72-8b93-c643b14dbd30",
      0.1,
      "multiply_total"
    )
    .modifyAttribute(
      "attributeslib:armor_shred",
      "5bdb208c-680d-4f79-bc24-5358154a124d",
      0.05,
      "addition"
    );

  /// Wizard Ignitium set
  // Ignitium Magic
  event.create("ignitium_magic").color(0xffd27f).beneficial();

  // Ignitium Protection
  event
    .create("ignitium_protection")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.movement_speed",
      "e00cc9b8-9d20-45cd-941b-9597013d9d70",
      0.3,
      "multiply_total"
    )
    .modifyAttribute(
      "minecraft:generic.armor",
      "773d5451-8dd5-4373-94eb-c325af743d78",
      4,
      "addition"
    )
    .modifyAttribute(
      "puffish_attributes:player.healing",
      "00976447-7491-46c0-875c-b6a35a252830",
      0.25,
      "multiply_total"
    )
    .modifyAttribute(
      "irons_spellbooks:mana_regen",
      "ba9c2829-f187-4401-9ec9-891ffa5a4d30",
      0.25,
      "multiply_total"
    );

  // Ignitium Charge
  event
    .create("ignitium_charge")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "irons_spellbooks:cast_time_reduction",
      "4c312684-8423-454f-8a51-a69073a307ff",
      0.35,
      "multiply_total"
    )
    .modifyAttribute(
      "irons_spellbooks:cooldown_reduction",
      "4c312684-8423-454f-8a51-a69073a307ff",
      0.35,
      "multiply_total"
    )
    .modifyAttribute(
      "irons_spellbooks:spell_power",
      "658c1739-9457-44a6-ac18-5dde28fae455",
      0.32,
      "multiply_total"
    )
    .modifyAttribute(
      "irons_spellbooks:mana_regen",
      "eb918dea-b94f-4bd6-8415-bb6b2bc20fc4",
      0.25,
      "multiply_total"
    );

  // Overcharged
  event
    .create("overcharged")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "irons_spellbooks:cast_time_reduction",
      "8c8b0df1-fd38-47e0-81b3-bc1f8989a18b",
      0.45,
      "multiply_total"
    )
    .modifyAttribute(
      "irons_spellbooks:cooldown_reduction",
      "0bfb59df-a1a6-48d2-b98b-07cf4a3ee5a6",
      0.45,
      "multiply_total"
    )
    .modifyAttribute(
      "irons_spellbooks:spell_power",
      "683f110d-49d8-42c4-b2a1-c5258e591a06",
      0.5,
      "multiply_total"
    )
    .modifyAttribute(
      "irons_spellbooks:mana_regen",
      "8ce59d9b-d620-4de9-85a8-abd21e3bd6d7",
      0.5,
      "multiply_total"
    )
    .modifyAttribute(
      "minecraft:generic.movement_speed",
      "3cad4c69-9268-4c79-b393-b27e686d1097",
      0.45,
      "multiply_total"
    )
    .modifyAttribute(
      "minecraft:generic.armor",
      "4b6e8778-0006-48f6-8191-bc5c2f3f1fe3",
      -6,
      "addition"
    );

  // Nether Magic Knowledge
  event
    .create("nether_wizard_knowledge")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "irons_spellbooks:mana_regen",
      "10ecfbbb-bf79-4e33-90fb-80bf4d2fd06d",
      0.15,
      "multiply_total"
    )
    .modifyAttribute(
      "irons_spellbooks:cast_time_reduction",
      "20eb467c-0ea9-4c2f-80c8-18a710b0fb61",
      0.15,
      "multiply_base"
    )
    .modifyAttribute(
      "irons_spellbooks:cooldown_reduction",
      "a39a63f4-7f66-477b-bf4a-f5c3970d284c",
      0.15,
      "multiply_base"
    );

  /// Orichalcum armor set
  // Hunter
  event.create("hunter").color(0xffd27f).beneficial();

  // Hunter's Readyness
  event
    .create("hunter_readyness")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "combatroll:count",
      "6f2f25dd-6074-48ea-abb6-928171d1286f",
      1,
      "addition"
    )
    .modifyAttribute(
      "attributeslib:arrow_damage",
      "b63a16d7-d3a9-47b5-bea9-5a6419fabb0f",
      0.2,
      "multiply_total"
    )
    .modifyAttribute(
      "attributeslib:arrow_velocity",
      "60ce1fdf-0762-4d04-baa6-c51780bcda36",
      0.05,
      "multiply_base"
    )
    .modifyAttribute(
      "attributeslib:draw_speed",
      "a149473d-bad1-47e3-ad14-e6445d876147",
      0.1,
      "multiply_base"
    )
    .modifyAttribute(
      "attributeslib:crit_chance",
      "0521a07f-9723-4201-9ff2-c5ac908d6b91",
      0.15,
      "multiply_total"
    )
    .modifyAttribute(
      "minecraft:generic.luck",
      "812d9a3b-dc49-473e-b1bd-369dd144cd0d",
      1,
      "addition"
    );

  ///Ranger armor set
  //Ranger Mind
  event.create("ranger_mind").color(0xffd27f).beneficial();

  //Pet Cozyness
  event
    .create("pet_cozyness")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "attributeslib:crit_chance",
      "3a1b2c0a-a179-4bc1-8533-96bd3bcaff2f",
      0.15,
      "addition"
    )
    .modifyAttribute(
      "attributeslib:dodge_chance",
      "dcc49133-4ae5-4a8e-89e0-1c0200bbd619",
      0.05,
      "addition"
    );

  //Ranger Cozyness
  event
    .create("ranger_cozyness")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "combatroll:count",
      "8a641887-c7bf-4486-acba-9227502c1e48",
      1,
      "addition"
    )
    .modifyAttribute(
      "attributeslib:arrow_damage",
      "d490b754-6587-4b50-9a36-2e62b069899e",
      0.12,
      "multiply_total"
    )
    .modifyAttribute(
      "attributeslib:draw_speed",
      "675bb1c1-957e-4c69-bbb4-fc816b715036",
      0.08,
      "multiply_base"
    )
    .modifyAttribute(
      "attributeslib:dodge_chance",
      "822424da-e2c3-4e98-9fdf-b38cc11b1fce",
      0.15,
      "multiply_total"
    )
    .modifyAttribute(
      "minecraft:generic.movement_speed",
      "4a5f2ae7-b55d-4ed4-a335-f9a4ff2f6811",
      0.15,
      "multiply_total"
    )
    .modifyAttribute(
      "minecraft:generic.luck",
      "5fe187fb-ab31-4736-8655-a8a89e063cc0",
      1,
      "addition"
    );

  /// Neptune armor set
  //Placeholder name
  event.create("neptune_buff").color(0xffd27f).beneficial();

  // Neptune's Blessing
  event
    .create("neptune_blessing")
    .color(0xffd27f)
    .beneficial()
    .modifyAttribute(
      "attributeslib:arrow_damage",
      "0af972f1-3303-49d0-860e-4ab4e4307f76",
      0.12,
      "multiply_total"
    )
    .modifyAttribute(
      "attributeslib:draw_speed",
      "f659b62d-53e0-455d-96e3-eb412810a135",
      0.08,
      "multiply_base"
    )
    .modifyAttribute(
      "attributeslib:crit_chance",
      "f9023938-8fa3-4cef-bcf9-4ab063866790",
      0.09,
      "multiply_total"
    )
    .modifyAttribute(
      "attributeslib:crit_damage",
      "319cf852-da62-4ae2-9ff7-a0975a8882d1",
      0.05,
      "multiply_total"
    )
    .modifyAttribute(
      "puffish_attributes:player.healing",
      "204c7c4c-0aaa-4a1f-8521-d296ef98c61b",
      0.06,
      "multiply_total"
    )
    .modifyAttribute(
      "puffish_attributes:player.resistance",
      "d3d58bb8-3193-4e56-8026-18078d52966f",
      0.02,
      "addition"
    );

  //Rapid Healing
  event
    .create("rapid_healing")
    .color(0xffd27f)
    .beneficial()
    .effectTick((entity, lvl) => {
      if (entity.age % 20 != 0) return;
      entity.heal(1.25 * lvl);
    });
});
