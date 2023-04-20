import { useEffect, useState } from "react";

export const MaterialsContext = () => {
  const [canCut, setCanCut] = useState(true);
  const [treeClicker, setTreeClicker] = useState(false);
  const [tree, setTree] = useState({
    name: "Tree",
    hp: 100,
    maxHp: 100,
    available: true,
    levelUpMsg: false,
  });
  const [treeStatus, setTreeStatus] = useState(false);

  const [canDig, setCanDig] = useState(true);
  const [rockClicker, setRockClicker] = useState(false);
  const [rock, setRock] = useState({
    name: "Rock",
    hp: 100,
    maxHp: 100,
    available: true,
    levelUpMsg: false,
  });
  const [rockStatus, setRockStatus] = useState(false);

  useEffect(() => {
    if (!canCut) {
      const cutInterval = setInterval(() => {
        setCanCut(true);
      }, 200);

      return () => clearInterval(cutInterval);
    }
  }, [canCut, setCanCut]);

  useEffect(() => {
    if (!canDig) {
      const digInterval = setInterval(() => {
        setCanDig(true);
      }, 200);

      return () => clearInterval(digInterval);
    }
  }, [canDig, setCanDig]);

  return {
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
  };
};
