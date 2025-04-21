ServerEvents.tick((event) => {
  event.server.players.forEach((player) => {
    const mainHand = player.mainHandItem;

    // On vérifie si le joueur tient un arc "vanilla"
    const isBowEquipped = mainHand && mainHand.id === "minecraft:bow";

    const attr = player.getAttribute("puffish_attributes:player.ranged_damage");

    if (attr) {
      if (isBowEquipped && attr.baseValue !== 0.25) {
        attr.baseValue = 30.0; // Donne un bonus de 25% de dégâts à distance
      } else if (!isBowEquipped && attr.baseValue !== 0.0) {
        attr.baseValue = 0.0; // Retire le bonus si l'arc n’est plus équipé
      }
    }
  });
});
