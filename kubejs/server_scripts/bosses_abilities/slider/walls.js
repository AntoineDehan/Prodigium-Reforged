let wallCooldown = false;

EntityEvents.hurt((event) => {
  const entity = event.entity;
  const server = event.server;

  if (entity.type != "aether:slider") return;
  if (wallCooldown) return;

  wallCooldown = true;

  const x = Math.floor(entity.x);
  const y = Math.floor(entity.y);
  const z = Math.floor(entity.z);

  // Coordonnées aléatoires autour du boss pour les murs, mais avec un écart de 15 au lieu de 5
  const offsets = [
    [Math.floor(Math.random() * 15) - 7, Math.floor(Math.random() * 8) - 4], // Mur 1
    [Math.floor(Math.random() * 15) - 7, Math.floor(Math.random() * 8) - 4], // Mur 2
  ];

  // Créer des murs 3x3 de bas en haut à des positions aléatoires autour du boss
  offsets.forEach((offset) => {
    const bx = x + offset[0]; // Décalage plus large sur l'axe X
    const bz = z + offset[1]; // Décalage plus large sur l'axe Z

    // Vérifie si la position est au-dessus du sol, sinon ajuste pour que le mur soit visible
    for (let dy = 0; dy <= 2; dy++) {
      // Pour chaque ligne du mur
      for (let dx = -1; dx <= 1; dx++) {
        // Colonnes du mur (3 blocs de largeur)
        // Placer les blocs pour un mur plat de 3x3
        entity.level.runCommand(`say Spawning wall at ${x} ${y} ${z}`);

        entity.level.runCommand(
          `setblock ${bx + dx} ${y + dy} ${bz} minecraft:cobblestone`
        );
      }
    }
  });

  // Supprimer les murs après 2 secondes (40 ticks)
  server.scheduleInTicks(40, () => {
    offsets.forEach((offset) => {
      const bx = x + offset[0]; // Décalage plus large sur l'axe X
      const bz = z + offset[1]; // Décalage plus large sur l'axe Z

      for (let dy = 0; dy <= 2; dy++) {
        // Pour chaque ligne du mur
        for (let dx = -1; dx <= 1; dx++) {
          // Colonnes du mur (3 blocs de largeur)
          entity.level.runCommand(`say Spawning wall at ${x} ${y} ${z}`);

          entity.level.runCommand(`setblock ${bx + dx} ${y + dy} ${bz} air`);
        }
      }
    });
  });
  server.scheduleInTicks(200, () => {
    wallCooldown = false;
  });
});
