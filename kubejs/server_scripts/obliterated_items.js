ServerEvents.recipes((event) => {
  global.obliteratedItems.forEach((id) => {
    event.remove({ output: id });
    event.remove({ input: id });
  });
});

LootJS.modifiers((event) => {
  event.addLootTableModifier(/.*/).removeLoot(global.obliteratedItems);
});

ItemEvents.rightClicked((event) => {
  if (global.obliteratedItems.indexOf(event.item.id) === -1) return;
  event.cancel();
});

ItemEvents.entityInteracted((event) => {
  if (global.obliteratedItems.indexOf(event.item.id) === -1) return;
  event.cancel();
});
