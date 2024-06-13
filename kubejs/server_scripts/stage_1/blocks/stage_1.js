BlockSkillEvents.register(event => {

  event.restrict(
    'prodigium:palladium_ore',
    r => r.replaceWithBlock('minecraft:stone').unless(player => player.can('skills:stage_1', true))
);

  event.restrict(
    'prodigium:deepslate_palladium_ore',
     r => r.replaceWithBlock('minecraft:deepslate').unless(player => player.can('skills:stage_1', true))
  );

  event.restrict(
    'simpleores:deepslate_adamantium_ore',
     r => r.replaceWithBlock('minecraft:deepslate').unless(player => player.can('skills:stage_1', true))
  );

  event.restrict(
    'simpleores:adamantium_ore',
     r => r.replaceWithBlock('minecraft:stone').unless(player => player.can('skills:stage_1', true))
  );

});