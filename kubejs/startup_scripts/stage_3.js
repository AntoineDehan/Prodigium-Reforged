SkillEvents.registration(event => {

	event.add('stage_3', 'basic', skill => {
		skill.initialValue(false);
	});

});