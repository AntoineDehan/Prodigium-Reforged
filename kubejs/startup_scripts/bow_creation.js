StartupEvents.registry("item", (event) => {
  // Tests
  event.create("test_bow", "bow").bow((bow) => {
    bow
      .modifyBow((attribute) => {
        attribute.baseDamage(20);
      })
      .onUse((use) => {
        use.pullTick((event) => {
          const { player } = event;
          player.potionEffects.add(
            "kubejs:pulling_weakness",
            40,
            0,
            true,
            false
          );
        });
      });
  });

  // Chest drop
  event
    .create("ancient_cobalt_bow", "bow")
    .bow((bow) => {
      bow
        .modifyBow((attribute) => {
          attribute.arrowSpeed(7).baseDamage(8).fullChargeTick(35).infinity();
        })
        .onUse((use) => {
          use.pullTick((event) => {
            const { player } = event;
            player.potionEffects.add(
              "kubejs:pulling_weakness",
              40,
              0,
              true,
              false
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
          attribute.arrowSpeed(8).baseDamage(15).fullChargeTick(40).pierce(2);
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
              "kubejs:pulling_weakness",
              40,
              0,
              true,
              false
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
          attribute.arrowSpeed(7).baseDamage(8).fullChargeTick(35).pierce(1);
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
              "kubejs:pulling_weakness",
              40,
              0,
              true,
              false
            );
          });
        });
    })
    .maxDamage(2500)
    .repairWith(Ingredient.of("aether_redux:veridium_ingot"));
});

// Bows Modification

ItemEvents.modification((event) => {
  const $BowItem = Java.loadClass("net.minecraft.world.item.BowItem");
  event.modify("minecraft:bow", (item) => {
    if (item instanceof $BowItem) {
      item.bow((bow) => {
        bow
          .modifyBow((attributes) => {
            attributes.fullChargeTick(35).baseDamage(8).arrowSpeed(7);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:pulling_weakness",
                40,
                0,
                true,
                false
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
            attributes.fullChargeTick(50).baseDamage(12).arrowSpeed(8);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:pulling_weakness",
                40,
                0,
                true,
                false
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
            attributes.fullChargeTick(35).baseDamage(13).arrowSpeed(7);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:pulling_weakness",
                40,
                0,
                true,
                false
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
            attributes.fullChargeTick(50).baseDamage(19).arrowSpeed(8);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:pulling_weakness",
                40,
                0,
                true,
                false
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
            attributes.fullChargeTick(25).baseDamage(10).arrowSpeed(7);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:pulling_weakness",
                40,
                0,
                true,
                false
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
            attributes.fullChargeTick(35).baseDamage(18).arrowSpeed(7);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:pulling_weakness",
                40,
                0,
                true,
                false
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
            attributes.fullChargeTick(35).baseDamage(25).arrowSpeed(7);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:pulling_weakness",
                40,
                0,
                true,
                false
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
            attributes.fullChargeTick(25).baseDamage(17).arrowSpeed(7);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:pulling_weakness",
                40,
                0,
                true,
                false
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
            attributes.fullChargeTick(50).baseDamage(32).arrowSpeed(8);
          })
          .onUse((use) => {
            use.pullTick((event) => {
              const { player } = event;
              player.potionEffects.add(
                "kubejs:pulling_weakness",
                40,
                0,
                true,
                false
              );
            });
          });
      });
    }
  });
});
