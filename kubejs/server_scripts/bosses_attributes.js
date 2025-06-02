// // kubejs/server_scripts/bosses_attributes.js

// EntityEvents.spawned((event) => {
//   const entity = event.entity;
//   const id = entity.type.toString();

//   const masterBosses = [
//     "alexsmobs:void_worm",
//     "cataclysm:ender_golem",
//     "cataclysm:ancient_remnant",
//     "meetyourfight:rosalyne",
//   ];

//   const normalBosses = [
//     "terra_entity:king_slime",
//     "conjurer_illager:conjurer",
//     "irons_spellbooks:dead_king",
//     "mowziesmobs:umvuthi",
//     "meetyourfight:swampjaw",
//     "meetyourfight:bellringer",
//     "mowziesmobs:frostmaw",
//   ];

//   const expertBosses = [
//     "aether:valkyrie_queen",
//     "aether:sun_spirit",
//     "aether:slider",
//     "minecraft:ender_dragon",
//     "minecraft:wither",
//     "minecraft:elder_guardian",
//     "stalwart_dungeons:nether_keeper",
//     "stalwart_dungeons:awful_ghast",
//     "meetyourfight:dame_fortuna",
//   ];

//   let armorBoost = 0;

//   if (normalBosses.includes(id)) {
//     armorBoost = 5;
//   } else if (expertBosses.includes(id)) {
//     armorBoost = 10;
//   } else if (masterBosses.includes(id)) {
//     armorBoost = 12;
//   }

//   if (armorBoost > 0) {
//     const armorAttr = entity.getAttribute("minecraft:generic.armor");
//     if (armorAttr) {
//       armorAttr.baseValue += armorBoost;
//     }
//   }
// });
