ItemEvents.modification((event) => {
  // Berserker weapons

  // Scythe
  event.modify("simple_weapons:diamond_scythe", (item) => {
    item.attackDamage = 7;
    item.attackSpeed = -3.3;
  });
  event.modify("simple_weapons:iron_scythe", (item) => {
    item.attackDamage = 5;
    item.attackSpeed = -3.3;
  });
  event.modify("simple_weapons:stone_scythe", (item) => {
    item.attackDamage = 4;
    item.attackSpeed = -3.3;
  });
  event.modify("simple_weapons:corinthium_scythe", (item) => {
    item.attackDamage = 6;
    item.attackSpeed = -3.3;
  });
  event.modify("simple_weapons:fiery_scythe", (item) => {
    item.attackDamage = 8;
    item.attackSpeed = -3.3;
  });

  // Katana
  event.modify("simple_weapons:diamond_katana", (item) => {
    item.attackDamage = 5;
    item.attackSpeed = -2.95;
  });
  event.modify("simple_weapons:iron_katana", (item) => {
    item.attackDamage = 4;
    item.attackSpeed = -2.95;
  });
  event.modify("simple_weapons:stone_katana", (item) => {
    item.attackDamage = 3;
    item.attackSpeed = -2.95;
  });
  event.modify("simple_weapons:corinthium_katana", (item) => {
    item.attackDamage = 4.5;
    item.attackSpeed = -2.95;
  });
  event.modify("simple_weapons:fiery_katana", (item) => {
    item.attackDamage = 6;
    item.attackSpeed = -2.95;
  });
});
