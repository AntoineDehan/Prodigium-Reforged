// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	event.hide('undead_revamp2:bostroxset_helmet')
	event.hide('undead_revamp2:bostroxset_chestplate')
	event.hide('undead_revamp2:bostroxset_boots')
})