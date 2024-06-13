SkillEvents.registration(event => {

	event.add('stage_2', 'basic', skill => {
		skill.initialValue(false);
	});

});