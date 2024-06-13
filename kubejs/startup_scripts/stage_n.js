SkillEvents.registration(event => {

	event.add('stage_n', 'basic', skill => {
		skill.initialValue(false);
	});

});