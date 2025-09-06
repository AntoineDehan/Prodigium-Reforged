NetworkEvents.dataReceived('displayItemActivation', event => {
    let itemStack = Item.of(event.data.item);
    if (!itemStack.isEmpty()) {
        Client.gameRenderer.displayItemActivation(itemStack);
    }
})