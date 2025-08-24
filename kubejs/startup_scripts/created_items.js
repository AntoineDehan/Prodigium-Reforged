StartupEvents.registry("item", (event) => {
  // Boss summons
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

  event
    .create("prodigium_reforged:dark_armor_scrap")
    .texture("prodigium_reforged:item/dark_armor_scrap");
});
