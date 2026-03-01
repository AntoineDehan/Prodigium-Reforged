// Thanks to Andrezinh0 for the help with this function
// prettier-ignore
function shootProjectileCone( player, level, projectileEntity, count, spreadAngle, vel, damage) {
  let lookAngle = player.getLookAngle();

  let startAngle = 0;
  let angleStep = 0;

  if (count > 1) {
    startAngle = -(spreadAngle / 2);
    angleStep = spreadAngle / (count - 1);
  }

  for (let i = 0; i < count; i++) {
    let currentAngle = startAngle + i * angleStep;

    let rad = currentAngle * (3.141592653 / 180);
    let cos = Math.cos(rad);
    let sin = Math.sin(rad);

    let motionX = lookAngle.x() * cos - lookAngle.z() * sin;
    let motionZ = lookAngle.x() * sin + lookAngle.z() * cos;
    let motionY = lookAngle.y();

    let projectile = level.createEntity(projectileEntity);
    projectile.setPosition(
      player.x,
      player.y + player.eyeHeight * 0.85,
      player.z,
    );
    projectile.setMotion(motionX * vel, motionY * vel, motionZ * vel);
    projectile.setOwner(player);
    projectile.setNoGravity(false);
    projectile.mergeNbt({
      Damage: damage,
    });

    level.addFreshEntity(projectile);
  }
}

StartupEvents.registry("item", (event) => {
  event
    .create("arcanethyst_bow", "bow")
    .bow((bow) => {
      bow
        .modifyBow((attributes) => {
          attributes.arrowSpeed(5).baseDamage(11).fullChargeTick(40);
        })
        .onUse((use) => {
          use.release((event) => {
            const { player, level } = event;
            shootProjectileCone(
              player,
              level,
              "irons_spellbooks:small_magic_arrow",
              2,
              8,
              6.0,
              12.0,
            );
          });
          use.pullTick((event) => {
            const { player } = event;
            player.potionEffects.add(
              "kubejs:tunnel_vision",
              40,
              0,
              true,
              false,
            );
          });
        });
    })
    .maxDamage(2850);

  event
    .create("twin_shadows", "bow")
    .bow((bow) => {
      bow
        .modifyBow((attributes) => {
          attributes.arrowSpeed(5).baseDamage(7).fullChargeTick(40);
        })
        .onUse((use) => {
          use.release((event) => {
            const { player, level } = event;
            shootProjectileCone(
              player,
              level,
              "minecraft:arrow",
              1,
              7,
              10.0,
              3.0,
            );
          });
          use.pullTick((event) => {
            const { player } = event;
            player.potionEffects.add(
              "kubejs:tunnel_vision",
              40,
              0,
              true,
              false,
            );
          });
        });
    })
    .maxDamage(2000);

  // Chest drop
  event
    .create("ancient_cobalt_bow", "bow")
    .bow((bow) => {
      bow
        .modifyBow((attribute) => {
          attribute.arrowSpeed(4).baseDamage(3).fullChargeTick(35).infinity();
        })
        .onUse((use) => {
          use.pullTick((event) => {
            const { player } = event;
            player.potionEffects.add(
              "kubejs:tunnel_vision",
              40,
              0,
              true,
              false,
            );
          });
        });
    })
    .maxDamage(900)
    .repairWith(Ingredient.of("minecraft:string"));

  // Frostmaw drop
  event
    .create("frostmaw_howl", "bow")
    .bow((bow) => {
      bow
        .modifyBow((attribute) => {
          attribute.arrowSpeed(5).baseDamage(5.5).fullChargeTick(40).pierce(2);
        })
        .onArrowHit((arrow) => {
          arrow.hitEntity((event) => {
            const { entity } = event;
            entity.potionEffects.add("cofh_core:chilled", 80, 0, true, false);
          });
        })
        .onUse((use) => {
          use.pullTick((event) => {
            const { player } = event;
            player.potionEffects.add(
              "kubejs:tunnel_vision",
              40,
              0,
              true,
              false,
            );
          });
        });
    })
    .maxDamage(1500)
    .repairWith(Ingredient.of("irons_spellbooks:frosted_helve"));

  // Valkyrie Queen drop
  event
    .create("aether_wind", "bow")
    .bow((bow) => {
      bow
        .modifyBow((attribute) => {
          attribute.arrowSpeed(5).baseDamage(7).fullChargeTick(35).pierce(1);
        })
        .onArrowHit((arrow) => {
          arrow.hitBlock((event) => {
            event.arrow.block.createEntity("lightning_bolt").spawn();
          });
        })
        .onUse((use) => {
          use.pullTick((event) => {
            const { player } = event;
            player.potionEffects.add(
              "kubejs:tunnel_vision",
              40,
              0,
              true,
              false,
            );
          });
        });
    })
    .maxDamage(2500)
    .repairWith(Ingredient.of("aether_redux:veridium_ingot"));

  // Void Blossom drop
  event
    .create("void_petal", "bow")
    .bow((bow) => {
      bow
        .modifyBow((attributes) => {
          attributes.arrowSpeed(5).baseDamage(8).fullChargeTick(40);
        })
        .onArrowHit((arrow) => {
          arrow.hitEntity((event) => {
            const { player, entity } = event;
            let owner = event.arrow.getOwner();
            if (owner && owner.isPlayer() && Math.random() < 0.4) {
              owner.potionEffects.add(
                "minecraft:absorption",
                80,
                0,
                true,
                false,
              );
            }

            if (Math.random() < 0.45) {
              entity.potionEffects.add("kubejs:thorned", 100, 0, true, false);
            }
          });
        })

        .onUse((use) => {
          use.release((event) => {
            const { player, level } = event;
            shootProjectileCone(
              player,
              level,
              "minecraft:arrow",
              1,
              10,
              2.0,
              2.0,
            );
          });
          use.pullTick((event) => {
            const { player } = event;
            player.potionEffects.add(
              "kubejs:tunnel_vision",
              40,
              0,
              true,
              false,
            );
          });
        });
    })
    .maxDamage(2200);
});

/// Bow Modification \\\

ItemEvents.modification((event) => {
  const $BowItem = Java.loadClass("net.minecraft.world.item.BowItem");
  event.modify("minecraft:bow", (item) => {
    if (item instanceof $BowItem) {
      item.bow((bow) => {
        bow
          .modifyBow((attributes) => {
            attributes.fullChargeTick(35).baseDamage(14);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:tunnel_vision",
                40,
                0,
                true,
                false,
              );
            });
          });
      });
    }
  });

  event.modify("archers:composite_longbow", (item) => {
    if (item instanceof $BowItem) {
      item.bow((bow) => {
        bow
          .modifyBow((attributes) => {
            attributes.fullChargeTick(50).baseDamage(15).arrowSpeed(6);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:tunnel_vision",
                40,
                0,
                true,
                false,
              );
            });
          });
      });
    }
  });

  event.modify("prodigium:palladium_bow", (item) => {
    if (item instanceof $BowItem) {
      item.bow((bow) => {
        bow
          .modifyBow((attributes) => {
            attributes.fullChargeTick(35).baseDamage(3).arrowSpeed(5);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:tunnel_vision",
                40,
                0,
                true,
                false,
              );
            });
          });
      });
    }
  });

  event.modify("archers:royal_longbow", (item) => {
    if (item instanceof $BowItem) {
      item.bow((bow) => {
        bow
          .modifyBow((attributes) => {
            attributes.fullChargeTick(50).baseDamage(5).arrowSpeed(6);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:tunnel_vision",
                40,
                0,
                true,
                false,
              );
            });
          });
      });
    }
  });

  event.modify("archers:mechanic_shortbow", (item) => {
    if (item instanceof $BowItem) {
      item.bow((bow) => {
        bow
          .modifyBow((attributes) => {
            attributes.fullChargeTick(25).baseDamage(3).arrowSpeed(4);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:tunnel_vision",
                40,
                0,
                true,
                false,
              );
            });
          });
      });
    }
  });

  event.modify("prodigium:orichalcum_bow", (item) => {
    if (item instanceof $BowItem) {
      item.bow((bow) => {
        bow
          .modifyBow((attributes) => {
            attributes.fullChargeTick(35).baseDamage(8).arrowSpeed(5);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:tunnel_vision",
                40,
                0,
                true,
                false,
              );
            });
          });
      });
    }
  });

  event.modify("aether:phoenix_bow", (item) => {
    if (item instanceof $BowItem) {
      item.bow((bow) => {
        bow
          .modifyBow((attributes) => {
            attributes.fullChargeTick(35).baseDamage(12).arrowSpeed(5);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:tunnel_vision",
                40,
                0,
                true,
                false,
              );
            });
            use.release((event) => {
              const { player, level } = event;
              shootProjectileCone(
                player,
                level,
                "irons_spellbooks:firebolt",
                2,
                18,
                4.0,
                8.0,
              );
            });
          });
      });
    }
  });

  event.modify("archers:netherite_shortbow", (item) => {
    if (item instanceof $BowItem) {
      item.bow((bow) => {
        bow
          .modifyBow((attributes) => {
            attributes.fullChargeTick(25).baseDamage(7.5).arrowSpeed(5);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:tunnel_vision",
                40,
                0,
                true,
                false,
              );
            });
          });
      });
    }
  });

  event.modify("archers:netherite_longbow", (item) => {
    if (item instanceof $BowItem) {
      item.bow((bow) => {
        bow
          .modifyBow((attributes) => {
            attributes.fullChargeTick(50).baseDamage(20).arrowSpeed(6);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:tunnel_vision",
                40,
                0,
                true,
                false,
              );
            });
          });
      });
    }
  });
});
