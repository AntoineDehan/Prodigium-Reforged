BlockSkillEvents.register(event => {

  event.restrict(
    'minecraft:diamond_ore',
    r => r.replaceWithBlock('minecraft:stone').unless(player => player.can('skills:stage_2', true))
);

  event.restrict(
    'minecraft:deepslate_diamond_ore',
     r => r.replaceWithBlock('minecraft:deepslate').unless(player => player.can('skills:stage_2', true))
  );

});