StartupEvents.registry("item", (event) => {
  // Materials
  event
    .create("prodigium_reforged:bee_wax")
    .texture("prodigium_reforged:item/bee_wax");
  event
    .create("prodigium_reforged:dark_armor_scrap")
    .texture("prodigium_reforged:item/dark_armor_scrap");
  event
    .create("prodigium_reforged:lens")
    .texture("prodigium_reforged:item/lens");
  event
    .create("prodigium_reforged:wroughtnaut_plate")
    .texture("prodigium_reforged:item/wroughtnaut_plate");

  event
    .create("prodigium_reforged:palladium_belt")
    .texture("prodigium_reforged:item/palladium_belt");
  event
    .create("prodigium_reforged:orichalcum_belt")
    .texture("prodigium_reforged:item/orichalcum_belt");
  event
    .create("prodigium_reforged:frostmaw_hide")
    .texture("prodigium_reforged:item/frostmaw_hide");
  event
    .create("prodigium_reforged:ancient_cloth")
    .texture("prodigium_reforged:item/ancient_cloth");
  event
    .create("prodigium_reforged:arcane_infused_cloth")
    .texture("prodigium_reforged:item/arcane_infused_cloth");
  event
    .create("prodigium_reforged:aether_infused_cloth")
    .texture("prodigium_reforged:item/aether_infused_cloth");
  event
    .create("prodigium_reforged:nether_infused_cloth")
    .texture("prodigium_reforged:item/nether_infused_cloth");
  event
    .create("prodigium_reforged:diamond_shard")
    .texture("prodigium_reforged:item/diamond_shard");

  event
    .create("prodigium_reforged:neptune_ingot")
    .texture("prodigium_reforged:item/neptune_ingot");

  event
    .create("prodigium_reforged:umvuthi_feather")
    .texture("prodigium_reforged:item/umvuthi_feather");

  event
    .create("prodigium_reforged:knight_soul_fragment")
    .texture("prodigium_reforged:item/soul_knight");

  event
    .create("prodigium_reforged:slider_dust")
    .texture("prodigium_reforged:item/slider_dust");

  event
    .create("prodigium_reforged:sun_fragment")
    .texture("prodigium_reforged:item/sun_fragment");

  event
    .create("prodigium_reforged:phoenix_ingot")
    .texture("prodigium_reforged:item/phoenix_ingot");

  event
    .create("prodigium_reforged:leviathan_scale")
    .texture("prodigium_reforged:item/leviathan_scale");

  event
    .create("prodigium_reforged:nether_bone")
    .texture("prodigium_reforged:item/nether_bone");

  event
    .create("prodigium_reforged:necro_bone")
    .texture("prodigium_reforged:item/necro_bone");

  // Ranged Leather patches
  event
    .create("prodigium_reforged:frostmaw_leather_patch")
    .texture("prodigium_reforged:item/frostmaw_leather_patch");
  event
    .create("prodigium_reforged:archer_leather_patch")
    .texture("prodigium_reforged:item/archer_leather_patch");
  event
    .create("prodigium_reforged:ranger_leather_patch")
    .texture("prodigium_reforged:item/ranger_leather_patch");
  event
    .create("prodigium_reforged:phoenix_ranger_leather_patch")
    .texture("prodigium_reforged:item/phoenix_ranger_leather_patch");

  // Crusader Plates
  event
    .create("prodigium_reforged:mythril_plate")
    .texture("prodigium_reforged:item/mythril_plate");
  event
    .create("prodigium_reforged:diamond_plate")
    .texture("prodigium_reforged:item/diamond_plate");
  event
    .create("prodigium_reforged:onyx_plate")
    .texture("prodigium_reforged:item/onyx_plate");
  event
    .create("prodigium_reforged:valkyrie_plate")
    .texture("prodigium_reforged:item/valkyrie_plate");

  event
    .create("prodigium_reforged:compass_of_time")
    .texture("prodigium_reforged:item/compass_of_time");

  //// Boss summons

  // King Slime
  event
    .create("prodigium_reforged:slime_crown")
    .displayName("Slime Crown")
    .texture("prodigium_reforged:item/slime_crown")
    .use((level, player, hand) => true)
    .useDuration(() => 40)
    .useAnimation("bow")
    .finishUsing((itemstack, level, entity) => {
      if (!entity.player) return itemstack;

      let x = Math.floor(entity.x) + 10;
      let y = Math.floor(entity.y);
      let z = Math.floor(entity.z) + 8;

      entity.server.runCommandSilent(
        `summon terra_entity:king_slime ${x} ${y} ${z}`
      );

      itemstack.shrink(1);
      return itemstack;
    });

  // Eye Of Cthulhu
  event
    .create("prodigium_reforged:suspicious_looking_eye")
    .displayName("Suspicious Looking Eye")
    .use((level, player, hand) => true)
    .useDuration(() => 40)
    .useAnimation("bow")
    .finishUsing((itemstack, level, entity) => {
      if (!entity.player) return itemstack;

      let x = Math.floor(entity.x) + 10;
      let y = Math.floor(entity.y) + 3;
      let z = Math.floor(entity.z) + 8;

      entity.server.runCommandSilent(
        `summon terra_entity:eye_of_cthulhu ${x} ${y} ${z}`
      );

      itemstack.shrink(1);
      return itemstack;
    });

  // Eater of Worlds
  event
    .create("prodigium_reforged:worm_food")
    .displayName("Worm Food")
    .use((level, player, hand) => true)
    .useDuration(() => 40)
    .useAnimation("bow")
    .finishUsing((itemstack, level, entity) => {
      if (!entity.player) return itemstack;

      let x = Math.floor(entity.x) + 10;
      let y = Math.floor(entity.y);
      let z = Math.floor(entity.z) + 8;

      entity.server.runCommandSilent(
        `summon terra_entity:eater_of_worlds ${x} ${y} ${z}`
      );

      itemstack.shrink(1);
      return itemstack;
    });

  // Brain of Cthulhu
  event
    .create("prodigium_reforged:bloody_spine")
    .texture("prodigium_reforged:item/bloody_spine")
    .use((level, player, hand) => true)
    .useDuration(() => 40)
    .useAnimation("bow")
    .finishUsing((itemstack, level, entity) => {
      if (!entity.player) return itemstack;

      let x = Math.floor(entity.x) + 10;
      let y = Math.floor(entity.y) + 3;
      let z = Math.floor(entity.z) + 8;

      entity.server.runCommandSilent(
        `summon terra_entity:brain_of_cthulhu ${x} ${y} ${z}`
      );

      itemstack.shrink(1);
      return itemstack;
    });

  // Abeemination
  event
    .create("prodigium_reforged:abeemination")
    .displayName("Abeemination")
    .use((level, player, hand) => true)
    .useDuration(() => 40)
    .useAnimation("bow")
    .finishUsing((itemstack, level, entity) => {
      if (!entity.player) return itemstack;

      let x = Math.floor(entity.x) + 10;
      let y = Math.floor(entity.y) + 3;
      let z = Math.floor(entity.z) + 8;

      entity.server.runCommandSilent(
        `summon terra_entity:queen_bee ${x} ${y} ${z}`
      );

      itemstack.shrink(1);
      return itemstack;
    });
});
