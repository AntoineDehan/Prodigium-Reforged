KeyBindEvents.modify((event) => {
  event.modifyKey("key.simplyskills.ability1", GLFW.GLFW_KEY_F);
  event.modifyKey("key.bestiary.open", GLFW.GLFW_KEY_H);
  event.modifyKey("key.puffish_skills.open", GLFW.GLFW_KEY_I);
  event.modifyKey("key.swapOffhand", GLFW.GLFW_KEY_L);

  event.remove("desc.seasonhud.keybind.options");
  event.remove("key.simplyskills.ability2");
  event.remove("key.block_factorys_bosses.dodge_roll");
  event.remove("dropoff.key.dump");
  event.remove("dropoff.key.deposit");
  event.remove("key.advancements");

  event.addHideKey("key.block_factorys_bosses.dodge_roll");
  event.addHideKey("dropoff.key.dump");
  event.addHideKey("dropoff.key.deposit");
});
