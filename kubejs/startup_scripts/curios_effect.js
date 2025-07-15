//priority: 10
// Thanks to "vomiter" on the KubeJS discord for all of that

EquipmentEffectManager.modify((equipEffect) => {
  equipEffect.addEffect(
    Ingredient.of("lost_aether_content:flaming_gemstone"),
    new $EffectInstance("minecraft:fire_resistance", -1, 0, true, false)
  );
  equipEffect.addEffect(
    Ingredient.of("lost_aether_content:flaming_gemstone"),
    new $EffectInstance("minecraft:absorption", -1, 1, true, false)
  );
  equipEffect.addResist(
    Ingredient.of("magicaljewelry:gold_amulet"),
    "minecraft:darkness"
  );
});
