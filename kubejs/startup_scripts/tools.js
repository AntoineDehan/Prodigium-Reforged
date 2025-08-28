ItemEvents.modification((event) => {
  // Berserker weapons

  // Other

  event.modify("born_in_chaos_v1:sweet_sword", (item) => {
    item.attackDamage = 7;
    item.attackSpeed = -2.4;
  });
  event.modify("irons_spellbooks:amethyst_rapier", (item) => {
    item.attackDamage = 6;
    item.attackSpeed = -2;
  });

  event.modify("alexsmobs:skelewag_sword", (item) => {
    item.attackSpeed = -1;
  });

  // Crusader Weapons
});
