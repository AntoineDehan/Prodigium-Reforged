// Armors

ItemEvents.armorTierRegistry((event) => {
  event.add("bee", (tier) => {
    tier.durabilityMultiplier = 15;
    tier.slotProtections = [3, 5, 5, 3];
    tier.enchantmentValue = 2;
    tier.equipSound = "minecraft:item.armor.equip_diamond";
    tier.repairIngredient = "minecraft:honeycomb";
    tier.toughness = 0.0;
    tier.knockbackResistance = 0.0;
  });
});
