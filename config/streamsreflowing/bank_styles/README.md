# Streams Reflowing -- bank styles (config overrides)

A **bank style** is the blocks a stream lays where it cut into the ground (streambed / waterline / bank).

> **Full guide** (every field, more examples, datapacks, and bank features too): see `GUIDE.md` in this
> folder. This file is the quick reference.

The shipped defaults are NOT in this folder -- they're built into the mod as a datapack, and any other mod
or datapack can add to or override them. This folder is YOUR override layer, applied on top of all of that:
anything you put here wins over a datapack style of equal specificity, so it's the final say.

## How to override
1. Look in `examples/` -- it's a read-only copy of every shipped default, so you can see exactly what each
   biome uses. 2. Copy a file UP into this folder (or write your own) and edit it. 3. Relaunch.

(Files in `examples/` are reference-only and are NOT loaded. Only top-level `*.json` here is active.)

## Which style a stream uses (by specificity)
1. **Exact biome** (`biomes`) wins over every tag style.   2. Else the **most-specific tag** match (a `tags`
style matches only if the biome has EVERY listed tag; most tags wins).   3. Else the **catch-all**
(no `biomes`/`tags`). At each level, a config style here beats a datapack one.

## Turning things off
- `enabled: false` -- leave the carve completely RAW in those biomes (e.g. badlands, to show its strata).
- `bed_enabled` / `waterline_enabled` / `bank_enabled` (each default true) -- turn off a single ZONE to keep
  the natural terrain there (the shipped `default` + `climate_*` styles disable the bank this way).

## Fields
- `biomes` : exact biome ids.   `tags` : biome tags the biome must ALL have (more tags = more specific).
- `exclude_biomes` / `exclude_tags` : biomes/tags to SKIP this style for, applied on top of the match above
  -- a broad tag style can carve out exceptions (e.g. "all overworld but not frozen"); the next-best style
  then applies.
- `bed` / `waterline` / `bank` : the block(s) for each zone. Either ONE id (`"minecraft:mud"`) or a LIST
  (`["minecraft:mud", "minecraft:gravel", "minecraft:mossy_cobblestone"]`) -- a list is split EVENLY per
  column, so that example is 1/3 each. Repeat an id for more shares: `["minecraft:mud", "minecraft:mud",
  "minecraft:gravel"]` is 2/3 mud, 1/3 gravel.
- `waterline_below` / `waterline_above` : blocks the waterline strip extends below / above the surface.
- `underwater_noise` / `above_water_noise` : 0..1, how much the zones bleed across the divides (0 = crisp).
- `point_bar` : block(s) laid on the inner shelf of bends and on mid-channel bars (default: the bed list).
- `cohesion` : 0..1, how firmly these banks hold -- 0 = loose sand/gravel (streams spread wide, shallow,
  and may bar up), 1 = clay / root-bound soil (narrow, deep, never bars). Omit = inferred from the biome tags.

## Shipping a style with a mod / datapack
Put `<name>.json` files at `data/<namespace>/streamsreflowing/bank_style/` in any datapack or mod jar -- they
load automatically. Use the `streamsreflowing` namespace with a default's name to override one of ours.
