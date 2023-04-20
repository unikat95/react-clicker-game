import React, { useContext } from "react";
import GameContext from "../context/GameContext";

import Tree from "../components/Tree/Tree";
import Rock from "../components/Rock/Rock";

export default function Field() {
  const {
    randomWoodDrop,
    randomStoneDrop,
    canCut,
    tree,
    cutTree,
    canDig,
    rock,
    digRock,
  } = useContext(GameContext);

  return (
    <div className="field">
      <div className="field__container">
        <Tree
          tree={tree}
          cutTree={cutTree}
          randomWoodDrop={randomWoodDrop}
          canCut={canCut}
        />
        <Rock
          rock={rock}
          digRock={digRock}
          randomStoneDrop={randomStoneDrop}
          canDig={canDig}
        />
      </div>
    </div>
  );
}
