BlockSkillEvents.register(event => {

  event.restrict(
    'undead_revamp2:bostroxore',
    r => r.replaceWithBlock('minecraft:stone').unless(player => player.can('skills:hidden_block', true))
);

  event.restrict(
    'born_in_chaos_v1:infected_deepslate_diamond_ore',
     r => r.replaceWithBlock('minecraft:deepslate').unless(player => player.can('skills:hidden_block', true))
  );

  event.restrict(
    'born_in_chaos_v1:infected_diamond_ore',
     r => r.replaceWithBlock('minecraft:stone').unless(player => player.can('skills:hidden_block', true))
  );

});