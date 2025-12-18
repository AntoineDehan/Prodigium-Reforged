// Armors

ItemEvents.armorTierRegistry((event) => {
  event.add("bee", (tier) => {
    tier.durabilityMultiplier = 17;
    tier.slotProtections = [4, 5, 6, 4];
    tier.enchantmentValue = 20;
    tier.equipSound = "minecraft:item.armor.equip_leather";
    tier.repairIngredient = "prodigium_reforged:bee_wax";
    tier.toughness = 0.0;
    tier.knockbackResistance = 0.0;
  });

  event.add("frost", (tier) => {
    tier.durabilityMultiplier = 25;
    tier.slotProtections = [3, 5, 5, 3];
    tier.enchantmentValue = 14;
    tier.equipSound = "minecraft:item.armor.equip_leather";
    tier.repairIngredient = "prodigium_reforged:frostmaw_hide";
    tier.toughness = 0.0;
    tier.knockbackResistance = 0.0;
  });

  event.add("sunbird", (tier) => {
    tier.durabilityMultiplier = 25;
    tier.slotProtections = [3, 5, 6, 3];
    tier.enchantmentValue = 18;
    tier.equipSound = "minecraft:item.armor.equip_leather";
    tier.repairIngredient = "prodigium_reforged:umvuthi_feather";
    tier.toughness = 0.0;
    tier.knockbackResistance = 0.0;
  });

  event.add("holymarauder", (tier) => {
    tier.durabilityMultiplier = 35;
    tier.slotProtections = [6, 8, 8, 6];
    tier.enchantmentValue = 18;
    tier.equipSound = "minecraft:item.armor.equip_leather";
    tier.repairIngredient = "prodigium_reforged:dark_armor_scrap";
    tier.toughness = 0.5;
    tier.knockbackResistance = 0.1;
  });

  event.add("nether", (tier) => {
    tier.durabilityMultiplier = 38;
    tier.slotProtections = [6, 7, 7, 6];
    tier.enchantmentValue = 18;
    tier.equipSound = "minecraft:item.armor.equip_leather";
    tier.repairIngredient = "prodigium_reforged:sun_fragment";
    tier.toughness = 0.0;
    tier.knockbackResistance = 0.0;
  });

  event.add("necro", (tier) => {
    tier.durabilityMultiplier = 35;
    tier.slotProtections = [6, 7, 8, 6];
    tier.enchantmentValue = 14;
    tier.equipSound = "minecraft:item.armor.equip_leather";
    tier.repairIngredient = "prodigium_reforged:nether_bones";
    tier.toughness = 0.0;
    tier.knockbackResistance = 0.0;
  });

  event.add("wizard_skyjade", (tier) => {
    tier.durabilityMultiplier = 35;
    tier.slotProtections = [5, 8, 9, 5];
    tier.enchantmentValue = 18;
    tier.equipSound = "minecraft:item.armor.equip_generic";
    tier.repairIngredient = "deep_aether:skyjade";
    tier.toughness = 0.0;
    tier.knockbackResistance = 0.0;
  });

  event.add("wizard_ignitium", (tier) => {
    tier.durabilityMultiplier = 38;
    tier.slotProtections = [6, 9, 9, 6];
    tier.enchantmentValue = 20;
    tier.equipSound = "minecraft:item.armor.equip_generic";
    tier.repairIngredient = "deep_aether:skyjade";
    tier.toughness = 0.0;
    tier.knockbackResistance = 0.0;
  });

  event.add("plated_valkyrie", (tier) => {
    tier.durabilityMultiplier = 42;
    tier.slotProtections = [10, 12, 12, 10];
    tier.enchantmentValue = 18;
    tier.equipSound = "minecraft:item.armor.equip_leather";
    tier.repairIngredient = "prodigium_reforged:valkyrie_plate";
    tier.toughness = 3;
    tier.knockbackResistance = 0.2;
  });

  event.add("phoenix_ranger", (tier) => {
    tier.durabilityMultiplier = 38;
    tier.slotProtections = [6, 7, 8, 6];
    tier.enchantmentValue = 16;
    tier.equipSound = "minecraft:item.armor.equip_generic";
    tier.repairIngredient = "deep_aether:skyjade";
    tier.toughness = 0.0;
    tier.knockbackResistance = 0.0;
  });
});
