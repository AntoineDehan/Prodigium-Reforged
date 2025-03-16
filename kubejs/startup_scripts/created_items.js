StartupEvents.registry("item", (event) => {
  event
    .create("prodigium_reforged:slime_crown")
    .texture("prodigium_reforged:item/slime_crown")
    .useDuration((itemstack) => 60)
    .useAnimation("bow");
});
