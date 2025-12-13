ItemEvents.rightClicked((event) => {
  const player = event.player;
  const item = event.item;

  const books = [
    "companions:book_ice_shard",
    "companions:book_ice_tornado",
    "companions:book_fire_mark",
    "companions:book_brace",
    "companions:book_heal_ring",
    "companions:book_stone_spikes",
    "companions:book_magic_ray",
    "companions:book_black_hole",
    "companions:book_naginata",
  ];

  if (!books.includes(item.id)) return;
  event.cancel();
});
