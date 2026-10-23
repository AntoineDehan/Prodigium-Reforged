// In Control applies the first matching "onjoin" rule of config/incontrol/spawn.json every time a mob joins a level,
// also when its chunk loads again from disk. It does not repeat an attribute action because it tags the mob with the
// action and the rule's position in the file (ctrlHealthM12, ctrlArmorA12, ctrlSpeedM12). The general hostile rules
// at positions 12 to 16 are picked by the Game Stages of the nearest player, so a mob saved near one player and loaded
// again near a player with other stages matched a second rule and took its health and armour boost on top.
//
// When a mob that already carries the tag of one general rule joins again, this adds the tags of all five, so the
// next rule finds them and changes nothing. KubeJS sees the join first: its event is forwarded at HIGH priority and
// In Control listens at LOWEST. A mob joining for the first time has none of these tags and gets its general rule as
// before. The list must follow the positions and actions of the general rules in spawn.json.
const INCONTROL_SEAL_TAGS = [
  "ctrlHealthM12", "ctrlHealthM13", "ctrlHealthM14", "ctrlHealthM15", "ctrlHealthM16",
  "ctrlArmorA12", "ctrlArmorA13", "ctrlArmorA14", "ctrlArmorA15", "ctrlArmorA16",
  "ctrlSpeedM12", "ctrlSpeedM13"
];

EntityEvents.spawned((event) => {
  const entity = event.entity;
  const tags = entity.tags;
  if (tags.isEmpty() || !INCONTROL_SEAL_TAGS.some((tag) => tags.contains(tag))) {
    return;
  }
  INCONTROL_SEAL_TAGS.forEach((tag) => entity.addTag(tag));
});
