SkillEvents.registration(event => {

	event.add('stage_a', 'basic', skill => {
		skill.initialValue(false);
	});

});