SkillEvents.registration(event => {

	event.add('stage_1', 'basic', skill => {
		skill.initialValue(false);
	});

});