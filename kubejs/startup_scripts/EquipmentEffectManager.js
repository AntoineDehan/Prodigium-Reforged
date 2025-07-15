//priority: 100
// Thanks to "vomiter" on the KubeJS discord for all of that

const $EffectInstance = Java.loadClass(
  "net.minecraft.world.effect.MobEffectInstance"
);
/**@param {String} descriptionId*/
const effectIdFix = (descriptionId) => {
  const [_, modId, effectId] = `${descriptionId}`.split(".");
  const id = `${modId}:${effectId}`;
  return id;
};

/**@param {Internal.MobEffectInstance_} effectInstance */
const copyEffectInstance = (effectInstance) => {
  const {
    effect: { descriptionId },
    duration,
    amplifier,
    ambient,
    visible,
  } = effectInstance;
  return new $EffectInstance(
    effectIdFix(descriptionId),
    duration,
    amplifier,
    ambient,
    visible
  );
};

const EquipmentEffectManager_ = function () {
  /**@param {Internal.Consumer<EquipmentEffectManager_>} equipEffectManage*/
  this.modify = (equipEffectManage) => {
    StartupEvents.postInit((event) => equipEffectManage(this));
    if (Utils.server) equipEffectManage(this);
  };
  /**@type {{filter: Internal.Ingredient, effect: Internal.MobEffectInstance, resist: Internal.MobEffect}[]} */ this.effectMap =
    [];
};

/**@param {Internal.Ingredient} itemFilter @param {Internal.MobEffectInstance} effectInstance*/
EquipmentEffectManager_.prototype.addEffect = function (
  itemFilter,
  effectInstance
) {
  this.effectMap.push({
    filter: Ingredient.of(itemFilter),
    effect: effectInstance,
  });
};
/**@param {Internal.Ingredient} itemFilter @param {Internal.MobEffect} effect*/
EquipmentEffectManager_.prototype.addResist = function (itemFilter, effect) {
  this.effectMap.push({ filter: Ingredient.of(itemFilter), resist: effect });
};

const EquipmentEffectHandler = function () {
  /**@type {{slot: slot, effect: Internal.MobEffectInstance[], resist: Internal.MobEffect[]}[]}*/ this.effects =
    [];
};
/**@param {Internal.CompoundTag} data @return {EquipmentEffectHandler}*/
EquipmentEffectHandler.prototype.fromData = function (data) {
  const /**@type {Internal.CompoundTag[]} */ effects = data.get("effects")
      ? data.get("effects").toArray()
      : [];
  this.effects = effects.map((ele) => {
    const /**@type {Internal.CompoundTag[]} */ effectDataArray = ele.get(
        "effectInstances"
      )
        ? ele.get("effectInstances").toArray()
        : [];
    const effectInstances = effectDataArray
      .map((effectData) => {
        const effectId = effectIdFix(effectData.getString("effect"));
        return new $EffectInstance(
          effectId,
          -1,
          effectData.getInt("amplifier"),
          effectData.getBoolean("ambient"),
          effectData.getBoolean("visible")
        );
      })
      .filter((effect) => effect != null);
    const resist = ele.get("resist") ? ele.get("resist").toArray() : [];
    return {
      slot: ele.getString("slot"),
      effect: effectInstances,
      resist: resist.map((resist) => resist.getAsString()),
    };
  });
  return this;
};
EquipmentEffectHandler.prototype.toData = function () {
  const $CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag");
  const $ListTag = Java.loadClass("net.minecraft.nbt.ListTag");
  const equipmentEffects = new $CompoundTag();
  const effects = $ListTag.of(
    this.effects.map((ele) => {
      const effectEle = new $CompoundTag();
      effectEle.putString("slot", ele.slot);
      effectEle.put("resist", $ListTag.of(ele.resist));
      effectEle.put(
        "effectInstances",
        $ListTag.of(
          ele.effect.map((effectInstance) => {
            const effectData = new $CompoundTag();
            effectData.putString("effect", effectInstance.effect.descriptionId);
            effectData.putInt("amplifier", effectInstance.amplifier);
            effectData.putBoolean("ambient", effectInstance.ambient);
            effectData.putBoolean("visible", effectInstance.visible);
            return effectData;
          })
        )
      );
      return effectEle;
    })
  );
  equipmentEffects.put("effects", effects);
  return equipmentEffects;
};

/** @param {Internal.LivingEntity} entity @param {String} slot @param {String} forceKey */
global.updateSlotEffect = (entity, slot, forceKey) => {
  forceKey = forceKey || "UNDEFINED";

  const equipmentEffectHandler = new EquipmentEffectHandler().fromData(
    entity.persistentData.getCompound("EquipmentEffect")
  );
  const equipEffect = equipmentEffectHandler.effects.find(
    (ele) => ele.slot == slot
  );
  if (equipEffect) {
    equipEffect.effect.forEach((effectInstance) => {
      server.scheduleInTicks(1, (_) => {
        const effectId = effectIdFix(effectInstance.descriptionId);
        entity.removeEffect(effectId);
      });
    });
    equipEffect.effect = [];
    equipEffect.resist = [];
  }
  EquipmentEffectManager.effectMap.forEach((ele) => {
    if (!ele.filter.test(to) && ele.forceKey != forceKey) return;
    const equipEffect = equipmentEffectHandler.effects.find(
      (ele) => ele.slot == slot
    );
    if (equipEffect) {
      if (ele.resist) {
        equipEffect.resist.push(ele.resist);
        return;
      }
      let effectIndex = equipEffect.effect.findIndex((instance) =>
        instance.effect.equals(ele.effect)
      );
      if (effectIndex == -1)
        equipEffect.effect.push(copyEffectInstance(ele.effect));
      else if (ele.effect.amplifier > equipEffect.effect[effectIndex].amplifier)
        equipEffect.effect[effectIndex] = copyEffectInstance(ele.effect);
    } else
      equipmentEffectHandler.effects.push({
        slot: slot,
        effect: [ele.effect].filter((effect) => effect != undefined),
        resist: [ele.resist].filter((effect) => effect != undefined),
      });
    if (ele.effect) entity.addEffect(copyEffectInstance(ele.effect));
  });
  entity.persistentData.put("EquipmentEffect", equipmentEffectHandler.toData());
};

ForgeEvents.onEvent(
  "top.theillusivec4.curios.api.event.CurioChangeEvent",
  (event) => {
    global.EquipmentEffect$CurioChangeEvent(event);
  }
);
/**@param {Internal.CurioChangeEvent} event*/
global.EquipmentEffect$CurioChangeEvent = (event) => {
  const {
    slotIndex,
    identifier,
    to,
    entity,
    entity: { server },
  } = event;
  const slot = `${identifier}${slotIndex}`;

  const equipmentEffectHandler = new EquipmentEffectHandler().fromData(
    entity.persistentData.getCompound("EquipmentEffect")
  );
  const equipEffect = equipmentEffectHandler.effects.find(
    (ele) => ele.slot == slot
  );
  if (equipEffect) {
    equipEffect.effect.forEach((effectInstance) => {
      server.scheduleInTicks(1, (_) => {
        const effectId = effectIdFix(effectInstance.descriptionId);
        entity.removeEffect(effectId);
      });
    });
    equipEffect.effect = [];
    equipEffect.resist = [];
  }
  EquipmentEffectManager.effectMap.forEach((ele) => {
    if (!ele.filter.test(to)) return;
    const equipEffect = equipmentEffectHandler.effects.find(
      (ele) => ele.slot == slot
    );
    if (equipEffect) {
      if (ele.resist) {
        equipEffect.resist.push(ele.resist);
        return;
      }
      let effectIndex = equipEffect.effect.findIndex((instance) =>
        instance.effect.equals(ele.effect)
      );
      if (effectIndex == -1)
        equipEffect.effect.push(copyEffectInstance(ele.effect));
      else if (ele.effect.amplifier > equipEffect.effect[effectIndex].amplifier)
        equipEffect.effect[effectIndex] = copyEffectInstance(ele.effect);
    } else
      equipmentEffectHandler.effects.push({
        slot: slot,
        effect: [ele.effect].filter((effect) => effect != undefined),
        resist: [ele.resist].filter((effect) => effect != undefined),
      });
    if (ele.effect) entity.addEffect(copyEffectInstance(ele.effect));
  });
  entity.persistentData.put("EquipmentEffect", equipmentEffectHandler.toData());
};

ForgeEvents.onEvent(
  "net.minecraftforge.event.entity.living.MobEffectEvent$Applicable",
  (event) => {
    global.EquipmentEffect$MobEffectEvent$Applicable(event);
  }
);
ForgeEvents.onEvent(
  "net.minecraftforge.event.entity.living.MobEffectEvent$Remove",
  (event) => {
    global.EquipmentEffect$MobEffectEvent$Remove(event);
  }
);

/**@param {Internal.MobEffectEvent$Applicable} event*/
global.EquipmentEffect$MobEffectEvent$Applicable = (event) => {
  const { entity, effectInstance } = event;
  if (!effectInstance) return;
  const effectId = effectIdFix(effectInstance.effect.descriptionId);
  const equipmentEffectHandler = new EquipmentEffectHandler().fromData(
    entity.persistentData.getCompound("EquipmentEffect")
  );
  const effectResist = equipmentEffectHandler.effects.find((ele) =>
    ele.resist.find((resist) => resist == effectId)
  );
  if (effectResist) event.setResult("deny");
};

/**@param {Internal.MobEffectEvent$Remove} event*/
global.EquipmentEffect$MobEffectEvent$Remove = (event) => {
  const {
    entity,
    entity: {
      level: { clientSide },
      server,
    },
    effectInstance,
  } = event;
  if (!effectInstance) return;
  if (clientSide) return;
  const equipmentEffectHandler = new EquipmentEffectHandler().fromData(
    entity.persistentData.getCompound("EquipmentEffect")
  );
  const equipmentEffects = equipmentEffectHandler.effects
    .map((ele) =>
      ele.effect.find((instance) =>
        instance.effect.equals(effectInstance.effect)
      )
    )
    .filter((effect) => effect != undefined);
  if (equipmentEffects.length == 0) return;
  const effectPersist = equipmentEffects.reduce((a, b) =>
    a.amplifier > b.amplifier ? a : b
  );

  if (effectPersist.amplifier >= effectInstance.amplifier) {
    event.setCanceled(true);
    return;
  }
  server.scheduleInTicks(1, (_) => {
    entity.addEffect(copyEffectInstance(effectPersist));
  });
};

const EquipmentEffectManager = new EquipmentEffectManager_();
