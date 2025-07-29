ItemEvents.modification((event) => {
  event.modify("cardiac:life_bottle", (item) => {
    item.maxStackSize = 16;
  });
});
