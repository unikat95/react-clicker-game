import { useState } from "react";

export const CharacterContext = () => {
  const [character, setCharacter] = useState({
    name: "Player",
    level: 1,
    levelUpMsg: false,
    experience: 0,
    experienceNeeded: 15,
    gold: 0,
    woodName: "wood",
    wood: 12,
    stoneName: "stone",
    stone: 12,
    axeLevel: 1,
    axeDmg: 3,
    axeDmgMax: 6,
    pickaxeLevel: 1,
    pickaxeDmg: 3,
    pickaxeDmgMax: 6,
  });

  document.documentElement.style.setProperty(
    "--xp-bar-width",
    ((character.experience / character.experienceNeeded) * 100).toFixed(2) + "%"
  );

  function levelUp(random, set) {
    if (character.experience >= character.experienceNeeded - random) {
      setCharacter((prev) => {
        return {
          ...prev,
          level: prev.level + 1,
          experience: prev.experience + random - prev.experienceNeeded,
          experienceNeeded: (prev.experienceNeeded * 1.35).toFixed(0),
        };
      });
      set((prev) => {
        return { ...prev, levelUpMsg: true };
      });
    } else {
      setCharacter((prev) => {
        return {
          ...prev,
          experience: prev.experience + random,
        };
      });
      set((prev) => {
        return { ...prev, levelUpMsg: false };
      });
    }
  }

  return { character, setCharacter, levelUp };
};
