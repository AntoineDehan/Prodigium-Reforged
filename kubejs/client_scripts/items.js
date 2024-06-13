// priority: 0

ItemEvents.tooltip(event => {
    event.addAdvanced(['kubejs:defender_medal'], (item, advanced, text) => {
            text.add(1, [
                Text.of('Currency for trading with the Tavernkeep').darkPurple()
            ])
    })
    event.addAdvanced(['kubejs:eternia_crystal'], (item, advanced, text) => {
        text.add(1, [
            Text.of('Material for opening Gates').darkPurple()
        ])
})
    
})