StartupEvents.registry("item", (event) => {
  event
    .create("prodigium_reforged:slime_crown")
    .texture("prodigium_reforged:item/slime_crown")
    .useDuration((itemstack) => 60)
    .useAnimation("bow");

  event
    .create("prodigium_reforged:dark_armor_scrap")
    .texture("prodigium_reforged:item/dark_armor_scrap");
});
