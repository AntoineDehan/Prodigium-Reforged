global.obliteratedItems = [
  "scalinghealth:heart_crystal",
  "scalinghealth:heart_crystal_shard",
  "scalinghealth:heart_dust",
  "scalinghealth:power_crystal",
  "scalinghealth:power_crystal_shard",
  "scalinghealth:cursed_heart",
  "scalinghealth:enchanted_heart",
  "scalinghealth:chance_heart",
  "scalinghealth:bandages",
  "scalinghealth:medkit",
  "simpleores:onyx_bow",
  "simpleores:mythril_bow",
];

const obliteratedTabs = [
  "scalinghealth:scaling_health",
  "simpleores:simplecore_tab",
];

obliteratedTabs.forEach((tab) => {
  StartupEvents.modifyCreativeTab(tab, (event) => {
    const filter = Ingredient.of(global.obliteratedItems);
    event.removeDisplay(filter);
    event.removeSearch(filter);
  });
});
