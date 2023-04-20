import { createContext, useCallback, useEffect, useState } from "react";

import { BuildingsContext } from "./BuildingsContext";
import { CharacterContext } from "./CharacterContext";
import { CountdownsContext } from "./CountdownsContext";
import { MaterialsContext } from "./MaterialsContext";
import { RandomsContext } from "./RandomsContext";

const GameContext = createContext();

export function GameProvider({ children }) {
  const { character, setCharacter, levelUp } = CharacterContext();
  const {
    canCut,
    setCanCut,
    tree,
    setTree,
    canDig,
    setCanDig,
    rock,
    setRock,
    treeStatus,
    setTreeStatus,
    rockStatus,
    setRockStatus,

    treeClicker,
    setTreeClicker,
    rockClicker,
    setRockClicker,
  } = MaterialsContext();
  const {
    disable,
    setDisable,
    woodcutter,
    setWoodcutter,
    canWoodUpgrade,
    setCanWoodUpgrade,
    forge,
    setForge,
    canForgeUpgrade,
    setCanForgeUpgrade,
  } = BuildingsContext();
  const {
    woodcutterCountdown,
    setWoodcutterCountdown,

    treeCountdown,
    setTreeCountdown,
    treeCountdownValue,
    setTreeCountdownValue,

    rockCountdownValue,
    setRockCountdownValue,
    rockCountdown,
    setRockCountdown,

    forgeCountdown,
    setForgeCountdown,
    woodcutterHours,
    woodcutterMinutes,
    woodcutterSeconds,
    forgeHours,
    forgeMinutes,
    forgeSeconds,
  } = CountdownsContext();
  const {
    randomRockXp,
    setRandomRockXp,
    randomWoodDrop,
    setRandomWoodDrop,
    randomStoneDrop,
    setRandomStoneDrop,
    randomTreeX,
    setRandomTreeX,
    randomTreeY,
    setRandomTreeY,
    randomRockX,
    setRandomRockX,
    randomTreeXp,
    setRandomTreeXp,
    randomRockY,
    setRandomRockY,
  } = RandomsContext();

  // tree clicker --------------------------------------------------------------------

  let axeDmg = Math.floor(
    Math.random() * (character.axeDmgMax - character.axeDmg + 1) +
      character.axeDmg
  );

  const cutTree = useCallback(
    function CutTree() {
      if (canCut) {
        if (tree.hp > 0) {
          setTree((prev) => {
            return { ...prev, hp: prev.hp - axeDmg };
          });
          setTreeClicker(true);
          setCanCut(false);
        }

        if (tree.hp <= 0 + axeDmg) {
          setTreeStatus(true);
          setCharacter((prev) => {
            return {
              ...prev,
              wood: prev.wood + randomWoodDrop,
            };
          });
          levelUp(randomTreeXp, setTree);
          setTreeClicker(false);
        }
      }
    },
    [
      axeDmg,
      canCut,
      levelUp,
      randomTreeXp,
      randomWoodDrop,
      setCanCut,
      setCharacter,
      setTree,
      setTreeClicker,
      setTreeStatus,
      tree.hp,
    ]
  );

  useEffect(() => {
    if (treeClicker) {
      if (canCut) {
        const inter = setInterval(() => {
          cutTree();
        }, 100);
        return () => clearInterval(inter);
      }
    }
  }, [treeClicker, cutTree, canCut]);

  // rock clicker --------------------------------------------------------------------

  let pickaxeDmg = Math.floor(
    Math.random() * (character.pickaxeDmgMax - character.pickaxeDmg + 1) +
      character.pickaxeDmg
  );

  const digRock = useCallback(
    function CutTree() {
      if (canDig) {
        if (rock.hp > 0) {
          setRock((prev) => {
            return { ...prev, hp: prev.hp - pickaxeDmg };
          });
          setRockClicker(true);
          setCanDig(false);
        }

        if (rock.hp <= 0 + pickaxeDmg) {
          setRockStatus(true);
          setCharacter((prev) => {
            return {
              ...prev,
              stone: prev.stone + randomStoneDrop,
            };
          });
          levelUp(randomRockXp, setRock);
          setRockClicker(false);
        }
      }
    },
    [
      pickaxeDmg,
      canDig,
      levelUp,
      randomRockXp,
      randomStoneDrop,
      setCanDig,
      setCharacter,
      setRock,
      setRockClicker,
      setRockStatus,
      rock.hp,
    ]
  );

  useEffect(() => {
    if (rockClicker) {
      if (canDig) {
        const inter = setInterval(() => {
          digRock();
        }, 100);
        return () => clearInterval(inter);
      }
    }
  }, [rockClicker, digRock, canDig]);

  // use effects ---------------------------------------------------------------------

  // woodcutter ----------------------------------------------------------------------

  useEffect(() => {
    if (canWoodUpgrade) {
      setDisable(false);
      const interval = setInterval(() => {
        if (woodcutterCountdown > 1) {
          setWoodcutterCountdown((prev) => prev - 1);
        }

        if (woodcutterCountdown === 1) {
          setWoodcutterCountdown(woodcutter.upgradeTime * 2);
          setWoodcutter((prev) => {
            return {
              ...prev,
              level: prev.level + 1,
              woodCost: prev.woodCost * 2,
              stoneCost: prev.stoneCost * 2,
              upgradeTime: prev.upgradeTime * 2,
            };
          });
          setCanWoodUpgrade(!canWoodUpgrade);
          setCharacter((prev) => {
            return {
              ...prev,
              axeLevel: prev.axeLevel + 1,
              axeDmg: Math.floor(prev.axeDmg + 2),
              axeDmgMax: Math.floor(prev.axeDmgMax + 2),
            };
          });
          setDisable(true);
        }
      }, 250);
      return () => clearInterval(interval);
    }
  }, [
    canWoodUpgrade,
    setCanWoodUpgrade,
    setCharacter,
    setWoodcutter,
    woodcutterCountdown,
    setWoodcutterCountdown,
    woodcutter.upgradeTime,
    disable,
    setDisable,
  ]);

  // forge ---------------------------------------------------------------------------

  useEffect(() => {
    if (canForgeUpgrade) {
      setDisable(false);
      const interval = setInterval(() => {
        if (forgeCountdown > 1) {
          setForgeCountdown((prev) => prev - 1);
        }

        if (forgeCountdown === 1) {
          setForgeCountdown(forge.upgradeTime * 2);
          setForge((prev) => {
            return {
              ...prev,
              level: prev.level + 1,
              woodCost: prev.woodCost * 2,
              stoneCost: prev.stoneCost * 2,
              upgradeTime: prev.upgradeTime * 2,
            };
          });
          setCanForgeUpgrade(!canForgeUpgrade);
          setCharacter((prev) => {
            return {
              ...prev,
              pickaxeLevel: prev.pickaxeLevel + 1,
              pickaxeDmg: prev.pickaxeDmg * 2,
              pickaxeDmgMax: prev.pickaxeDmgMax * 2,
            };
          });
          setDisable(true);
        }
      }, 250);
      return () => clearInterval(interval);
    }
  }, [
    canForgeUpgrade,
    setCanForgeUpgrade,
    setCharacter,
    setForge,
    forgeCountdown,
    setForgeCountdown,
    forge.upgradeTime,
    disable,
    setDisable,
    setRandomRockXp,
  ]);

  // tree ----------------------------------------------------------------------------

  useEffect(() => {
    if (treeStatus) {
      const treeInterval = setInterval(() => {
        if (treeCountdown > 0) {
          setTreeCountdown(treeCountdown - 1);
        }

        if (treeCountdown === 1) {
          setTree((prev) => {
            return { ...prev, hp: 100 };
          });
          setTreeStatus(false);
          setTreeCountdown(treeCountdownValue);
          setRandomTreeX(Math.floor(Math.random() * 201) - 100);
          setRandomTreeY(Math.floor(Math.random() * (-20 - -150 + 1) + -150));
          setRandomTreeXp(Math.floor(Math.random() * (3 - 1 + 1) + 1));
          setRandomWoodDrop(Math.floor(Math.random() * (9 - 4 + 1) + 4));
        }
      }, 1000);
      return () => clearInterval(treeInterval);
    }
  }, [
    treeCountdown,
    setTreeCountdown,
    treeCountdownValue,
    tree,
    setTree,
    setRandomTreeX,
    setRandomTreeY,
    setCharacter,
    randomWoodDrop,
    setRandomWoodDrop,
    setRandomTreeXp,
    treeStatus,
    setTreeStatus,
  ]);

  useEffect(() => {
    if (rockStatus) {
      const interval = setInterval(() => {
        if (rockCountdown > 0) {
          setRockCountdown(rockCountdown - 1);
        }

        if (rockCountdown === 1) {
          setRock((prev) => {
            return { ...prev, hp: 100 };
          });
          setRockStatus(false);
          setRockCountdown(rockCountdownValue);
          setRandomRockX(Math.floor(Math.random() * 201) - 100);
          setRandomRockY(Math.floor(Math.random() * (20 - 150 + 1) + 150));
          setRandomRockXp(Math.floor(Math.random() * (3 - 1 + 1) + 1));
          setRandomStoneDrop(Math.floor(Math.random() * (7 - 3 + 1) + 3));
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [
    rockCountdown,
    setRockCountdown,
    rockCountdownValue,
    rock,
    setRock,
    setRandomRockX,
    setRandomRockY,
    setCharacter,
    randomRockXp,
    randomStoneDrop,
    setRandomRockXp,
    setRandomStoneDrop,
    rockStatus,
    setRockStatus,
  ]);

  // req message ---------------------------------------------------------------------

  const [requiredWood, setRequiredWood] = useState(false);
  const [requiredForge, setRequiredForge] = useState(false);
  useEffect(() => {
    if (requiredWood) {
      const interval = setInterval(() => {
        setRequiredWood(!requiredWood);
      }, 1500);
      return () => clearInterval(interval);
    }
    if (requiredForge) {
      const interval = setInterval(() => {
        setRequiredForge(!requiredForge);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [requiredWood, requiredForge]);

  return (
    <GameContext.Provider
      value={{
        character,
        setCharacter,
        levelUp,

        canCut,
        setCanCut,
        tree,
        setTree,
        canDig,
        setCanDig,
        rock,
        setRock,
        treeStatus,
        setTreeStatus,
        rockStatus,
        setRockStatus,

        treeClicker,
        setTreeClicker,
        rockClicker,
        setRockClicker,

        disable,
        setDisable,
        woodcutter,
        setWoodcutter,
        canWoodUpgrade,
        setCanWoodUpgrade,
        forge,
        setForge,
        canForgeUpgrade,
        setCanForgeUpgrade,

        woodcutterCountdown,
        setWoodcutterCountdown,

        treeCountdown,
        setTreeCountdown,
        treeCountdownValue,
        setTreeCountdownValue,

        rockCountdownValue,
        setRockCountdownValue,
        rockCountdown,
        setRockCountdown,

        forgeCountdown,
        setForgeCountdown,
        woodcutterHours,
        woodcutterMinutes,
        woodcutterSeconds,
        forgeHours,
        forgeMinutes,
        forgeSeconds,

        randomRockXp,
        setRandomRockXp,
        randomWoodDrop,
        setRandomWoodDrop,
        randomStoneDrop,
        setRandomStoneDrop,
        randomTreeX,
        setRandomTreeX,
        randomTreeY,
        setRandomTreeY,
        randomRockX,
        setRandomRockX,
        randomTreeXp,
        setRandomTreeXp,
        randomRockY,
        setRandomRockY,

        requiredWood,
        setRequiredWood,
        requiredForge,
        setRequiredForge,

        cutTree,
        axeDmg,

        digRock,
        pickaxeDmg,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
