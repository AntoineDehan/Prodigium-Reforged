# Streams Reflowing — Bank Styles and Bank Features Guide

This guide tells you how to change the land around your streams. It is written in
simplified technical English. The sentences are short. Each instruction is one step.

Streams Reflowing has two systems for the banks:

- **Bank style** — the blocks of a channel. It sets the block at the streambed, at the
  waterline, and on the bank above the water.
- **Bank feature** — the plants on a bank. It puts features (for example reeds, bushes, or
  trees) on the land next to the water.

You edit both systems with JSON files. The JSON is the same for the config folder and for a
datapack.

---

## 1. Before you start

Obey these three rules for both systems.

1. The mod reads the files one time, at game start.
2. A change applies to new chunks only. The mod does not change land that exists already.
3. After you edit a file, load the change again:
   - Config folder: stop the game. Then start the game again.
   - Datapack: run the `/reload` command, or make a new world.

---

## 2. Two ways to add a file

You can put a bank style or a bank feature in two places. Use the place that is correct for
your task.

| Place | Folder | Use it for |
|---|---|---|
| Config folder | `config/streamsreflowing/` on one instance | A quick change on your own game. It wins over a datapack. |
| Datapack | `data/<namespace>/streamsreflowing/` in a datapack or a mod | A change that you send with a modpack. |

`<namespace>` is a name that you choose. Use only lowercase letters, numbers, and the
`_` sign.

---

## 3. Bank styles

A bank style skins the carved channel in three zones.

```
        bank         (the cut slope above the water)
   ~~~~~~~~~~~~~~     (the waterline, a strip at the water surface)
        bed          (the floor below the water)
```

### 3.1 Where the file goes

- **Config folder:** `config/streamsreflowing/bank_styles/`
  At the first game start, the mod makes this folder. It puts a `README.md` file and an
  `examples/` folder in it. The `examples/` folder has a copy of each default style. The
  top folder is empty at the start.

  To change a style, do these steps:
  1. Copy a file from the `examples/` folder to the top folder.
  2. Edit the copy in the top folder.

  The mod loads the top-level files only. It does not load the `examples/` folder.

- **Datapack:** `data/<namespace>/streamsreflowing/bank_style/<name>.json`
  To replace a default style, use the same file name as the default.

### 3.2 The fields

Each field is optional, but you must give at least one block or set `enabled` to `false`.
Give each block as a block id. The mod uses the default state of the block.

| Field | Type | Default | Function |
|---|---|---|---|
| `biomes` | list of ids | none | Use this style in these exact biomes. |
| `tags` | list of tags | none | Use this style in a biome that has ALL of these tags. |
| `exclude_biomes` | list of ids | none | Never use this style in these exact biomes. |
| `exclude_tags` | list of tags | none | Never use this style in a biome that has ANY of these tags. |
| `enabled` | true or false | true | Set `false` to leave the carved land raw here. |
| `bed` | block or list | gravel | The block below the water. |
| `waterline` | block or list | coarse_dirt | The block at the water surface. |
| `bank` | block or list | grass_block | The block on the slope above the water. |
| `bed_enabled` | true or false | true | Set `false` to keep the natural bed block. |
| `waterline_enabled` | true or false | true | Set `false` to keep the natural waterline block. |
| `bank_enabled` | true or false | true | Set `false` to keep the natural bank block. |
| `waterline_below` | number | 1 | How many blocks the waterline goes down into the bed. |
| `waterline_above` | number | 1 | How many blocks the waterline goes up into the bank. |
| `underwater_noise` | 0.0 to 1.0 | 0.18 | How much the lower zones mix at the edge. 0 = a sharp line. |
| `above_water_noise` | 0.0 to 1.0 | 0.18 | How much the upper zones mix at the edge. 0 = a sharp line. |
| `cohesion` | 0.0 to 1.0 | inferred | How firmly the banks hold. 0 = loose sand or gravel: streams there spread wide and shallow and can form bars. 1 = clay or roots: narrow, deep, no bars. Leave it out and the mod infers it from the biome tags. |
| `point_bar` | block or list | the bed list | The coarse deposit on the inside of bends and on mid-channel bars (gravel, sand). Only used when the bend or bar settings are on. |

### 3.3 More than one block in a zone

You can put a list of blocks in `bed`, `waterline`, or `bank`. The mod divides the zone into
equal shares, one share for each block in the list.

- Example: `["minecraft:gravel", "minecraft:gravel", "minecraft:clay"]` gives two shares of
  gravel and one share of clay.
- To leave a share natural, put `minecraft:air` in the list. The mod does not change that
  share. Example: `["minecraft:mud", "minecraft:air", "minecraft:air"]` skins one third with
  mud. It leaves two thirds natural.

### 3.4 Which style the mod uses

For each column of a stream, the mod uses one style only. It selects the style by how
specific the style is. It does not use a priority number.

1. An exact biome match (`biomes`) wins over all tag matches.
2. A tag match (`tags`) is good only if the biome has EVERY tag in the list. If more than one
   tag style matches, the style with the most tags wins.
3. A style with no `biomes` and no `tags` is the default for all biomes.
4. `exclude_biomes` and `exclude_tags` are a block list. The mod does not use a style for a
   biome on its exclude list. The mod then uses the next style.
5. A config-folder style wins over a datapack style at the same level.

To write "all overworld biomes but not frozen biomes", do this:

```json
{ "tags": ["minecraft:is_overworld"], "exclude_tags": ["minecraft:is_frozen"] }
```

### 3.5 Bank style examples

**Sandy banks in a hot, dry biome:**
```json
{
  "tags": ["minecraft:is_badlands", "minecraft:is_hot"],
  "bed": "minecraft:sand",
  "waterline": "minecraft:sand",
  "bank": "minecraft:sandstone"
}
```

**Stone mountain streams, but not when frozen. Skin the bed and the waterline. Keep the bank
natural:**
```json
{
  "tags": ["minecraft:is_mountain"],
  "exclude_tags": ["minecraft:is_frozen"],
  "bed": "minecraft:stone",
  "waterline": "minecraft:gravel",
  "bank_enabled": false
}
```

**Leave the swamp streams raw:**
```json
{ "biomes": ["minecraft:swamp"], "enabled": false }
```

---

## 4. Bank features

A bank feature puts plants on the land next to the water. The mod ships no bank features. The
feature pass does nothing until you add a file.

The mod runs EVERY bank feature that matches a column. There is no selection contest.

### 4.1 Where the file goes

- **Config folder:** `config/streamsreflowing/bank_features/`
  At the first game start, the mod puts a `README.md` file and an `examples/example.json`
  file in this folder. To add a feature, copy the example to the top folder. Then edit it.
  The mod loads the top-level files only.

- **Datapack:** `data/<namespace>/streamsreflowing/bank_feature/<name>.json`

### 4.2 The fields

| Field | Type | Default | Function |
|---|---|---|---|
| `features` | list of ids | none (required) | The placed features to put on the bank. |
| `biomes` | list of ids | none | Run this feature in these exact biomes. |
| `tags` | list of tags | none | Run this feature in a biome that has ALL of these tags. |
| `exclude_biomes` | list of ids | none | Never run this feature in these exact biomes. |
| `exclude_tags` | list of tags | none | Never run this feature in a biome that has ANY of these tags. |
| `chance` | 0 to 100 | 100 | The chance, in percent, for each column next to water. |

You must give the `features` field. If you give no `biomes` and no `tags`, the feature runs
everywhere.

### 4.3 Which columns get the feature

For a column next to water, the mod runs a feature when both of these are true:

1. The biome is not excluded. The biome is not in `exclude_biomes`. The biome has none of the
   `exclude_tags`. An exclude always wins.
2. The biome is included. One of these is true:
   - `biomes` and `tags` are both empty, or
   - the biome is in `biomes`, or
   - the biome has every tag in `tags`.

Then the mod uses `chance` for each column.

**Warning:** The mod puts each feature on the bank as it is. The mod checks for solid ground
below only, so nothing floats. A tree feature makes trees at the water. Use small features
for the bank, unless you want trees at the water.

### 4.4 Bank feature examples

**Reeds and bushes on overworld banks, but not in frozen biomes:**
```json
{
  "features": ["minecraft:patch_sugar_cane", "minecraft:patch_berry_bush"],
  "tags": ["minecraft:is_overworld"],
  "exclude_tags": ["minecraft:is_frozen"],
  "chance": 30
}
```

**Palm trees in one modded biome only:**
```json
{
  "features": ["yourmod:palm_tree"],
  "biomes": ["yourmod:tropical_beach"],
  "chance": 15
}
```

---

## 5. Config toggles

These options are in the main config file:

- NeoForge and Forge: `config/streamsreflowing-common.toml`
- Fabric: `config/streamsreflowing.properties`

| Option | Values | Default | Function |
|---|---|---|---|
| `customBanks` | true or false | true | The main switch for bank styles. Set `false` to show raw carved land. |
| `allWaterBanks` | -1, 0, 1, 2 | -1 | The range of the bank style and the bank feature pass. |

The `allWaterBanks` values are:

- `0` — streams only.
- `1` — streams, lakes, and ponds.
- `2` — streams, lakes, ponds, and ocean shores.
- `-1` — the mod selects the value from the quality preset.

Bank features have no main switch. They do nothing until you add a file.

---

## 6. How to make a datapack

Do these steps to make a datapack for your bank files.

1. Make a folder for the datapack. Use any name.
2. Make a `pack.mcmeta` file in that folder. Put this text in it:

```json
{
  "pack": {
    "pack_format": 48,
    "description": "My custom stream banks"
  }
}
```

3. Set the correct `pack_format` number for your Minecraft version:

| Minecraft version | `pack_format` |
|---|---|
| 1.20.1 | 15 |
| 1.21 / 1.21.1 | 48 |

   The number is different for each Minecraft version, and it changes often. For a version
   that is not in the table, search online for its data pack format number.

   **Note:** Minecraft shows a warning for a wrong `pack_format`, but it loads the datapack in
   most cases. The bank files still work.

4. Make the folders for your files:
   - Bank styles: `data/<namespace>/streamsreflowing/bank_style/`
   - Bank features: `data/<namespace>/streamsreflowing/bank_feature/`
5. Put your JSON files in the correct folder.
6. Put the datapack folder in a world:
   - Put it in the `datapacks/` folder of the world save. Then run `/reload`, or make a new
     world.
7. To use the datapack in all worlds, use a global-datapack mod.

---

## 7. Quick reference

| Task | Action |
|---|---|
| Change the bank blocks in one biome | Make a bank style with `biomes` or `tags` and `bed`/`waterline`/`bank`. |
| Leave one biome's stream raw | Make a bank style: `{ "biomes": [...], "enabled": false }`. |
| "All overworld but not frozen" | Use `"tags": ["...is_overworld"]` and `"exclude_tags": ["...is_frozen"]`. |
| Keep the bank natural, skin the bed | Add `"bank_enabled": false`. |
| Put plants on the banks | Make a bank feature with a `features` list. |
| Send it with a modpack | Put the JSON in `data/<namespace>/streamsreflowing/bank_style` or `bank_feature`. |

