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
    .create("prodigium_reforged:archer_leather_patch")
    .texture("prodigium_reforged:item/archer_leather_patch");
  event
    .create("prodigium_reforged:frostmaw_hide")
    .texture("prodigium_reforged:item/frostmaw_hide");
  event
    .create("prodigium_reforged:frostmaw_leather_patch")
    .texture("prodigium_reforged:item/frostmaw_leather_patch");
  event
    .create("prodigium_reforged:diamond_shard")
    .texture("prodigium_reforged:item/diamond_shard");

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

      level.runCommandSilent(`summon terra_entity:king_slime ${x} ${y} ${z}`);

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

      level.runCommandSilent(
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

      level.runCommandSilent(
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

      level.runCommandSilent(
        `summon terra_entity:brain_of_cthulhu ${x} ${y} ${z}`
      );

      itemstack.shrink(1);
      return itemstack;
    });
});
