// Armors

ItemEvents.armorTierRegistry((event) => {
  event.add("bee", (tier) => {
    tier.durabilityMultiplier = 15;
    tier.slotProtections = [4, 5, 6, 4];
    tier.enchantmentValue = 10;
    tier.equipSound = "minecraft:item.armor.equip_leather";
    tier.repairIngredient = "prodigium_reforged:bee_wax";
    tier.toughness = 0.0;
    tier.knockbackResistance = 0.0;
  });

  event.add("frost", (tier) => {
    tier.durabilityMultiplier = 30;
    tier.slotProtections = [3, 5, 5, 3];
    tier.enchantmentValue = 15;
    tier.equipSound = "minecraft:item.armor.equip_leather";
    tier.repairIngredient = "prodigium_reforged:frostmaw_hide";
    tier.toughness = 0.0;
    tier.knockbackResistance = 0.0;
  });
});
