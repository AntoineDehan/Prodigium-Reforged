let treasureBags = [
  "prodigium:conjurer_treasure_bag",
  "prodigium:nether_gauntlet_treasure_bag",
  "prodigium:ancient_remnant_treasure_bag",
  "prodigium:awful_ghast_treasure_bag",
  "prodigium:dead_king_treasure_bag",
  "prodigium:ender_guardian_treasure_bag",
  "prodigium:frostmaw_treasure_bag",
  "prodigium:gautlet_treasure_bag",
  "prodigium:harbinger_treasure_bag",
  "prodigium:ignis_treasure_bag",
  "prodigium:leviathan_treasure_bag",
  "prodigium:nether_keeper_treasure_bag",
  "prodigium:netherite_monstrosity_treasure_bag",
  "prodigium:night_lich_treasure_bag",
  "prodigium:obsidilith_treasure_bag",
  "prodigium:sunbird_treasure_bag",
  "prodigium:void_blossom_treasure_bag",
  "prodigium:void_worm_treasure_bag",
  "prodigium:valkyrie_queen_treasure_bag",
  "prodigium:slider_treasure_bag",
  "prodigium:sun_spirit_treasure_bag",
  "prodigium:swampjaw_treasure_bag",
  "prodigium:bellringer_treasure_bag",
  "prodigium:dame_fortuna_treasure_bag",
  "prodigium:rosalynne_treasure_bag",
];

ServerEvents.tags("item", (event) => {
  event.add("prodigium:immune", treasureBags);
  event.add("prodigium:float", treasureBags);
});

ItemEvents.rightClicked((event) => {
  let itemUsed = event.item;

  for (let i = 0; i < treasureBags.length; i++) {
    if (itemUsed.id == treasureBags[i]) {
      itemUsed.count--;
      let name = treasureBags[i].replace("prodigium:", "");

      event.server.runCommandSilent(
        `execute as ${event.player.username} run loot give @s loot prodigiumreforged:treasure_bags/${name}`
      );
      return;
    }
  }
});
