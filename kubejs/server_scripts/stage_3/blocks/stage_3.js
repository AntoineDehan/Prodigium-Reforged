BlockSkillEvents.register(event => {

  event.restrict(
    'simpleores:onyx_ore',
    r => r.replaceWithBlock('minecraft:netherrack').unless(player => player.can('skills:stage_3', true))
);

});