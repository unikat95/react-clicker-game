import { useState } from "react";

export const BuildingsContext = () => {
  const [disable, setDisable] = useState(true);

  const [woodcutter, setWoodcutter] = useState({
    name: "Woodcutter",
    level: 1,
    woodCost: 30,
    stoneCost: 15,
    upgradeTime: 20,
  });

  const [canWoodUpgrade, setCanWoodUpgrade] = useState(false);

  const [forge, setForge] = useState({
    name: "Forge",
    level: 1,
    woodCost: 30,
    stoneCost: 15,
    upgradeTime: 20,
  });

  const [canForgeUpgrade, setCanForgeUpgrade] = useState(false);
  return {
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
  };
};
