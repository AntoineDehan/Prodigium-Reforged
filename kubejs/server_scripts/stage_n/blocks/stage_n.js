BlockSkillEvents.register(event => {

  event.restrict(
    'minecraft:ancient_debris',
    r => r.replaceWithBlock('minecraft:netherrack').unless(player => player.can('skills:stage_n', true))
);

});