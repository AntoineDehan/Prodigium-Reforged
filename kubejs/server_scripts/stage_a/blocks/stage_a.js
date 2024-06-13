BlockSkillEvents.register(event => {

  event.restrict(
    'aether_redux:veridium_ore',
    r => r.replaceWithBlock('aether:holystone').unless(player => player.can('skills:stage_a', true))
);

});