import { useState } from "react";

export const RandomsContext = () => {
  const [randomTreeXp, setRandomTreeXp] = useState(
    Math.floor(Math.random() * (3 - 1 + 1) + 1)
  );
  const [randomWoodDrop, setRandomWoodDrop] = useState(
    Math.floor(Math.random() * (9 - 4 + 1) + 4)
  );
  const [randomRockXp, setRandomRockXp] = useState(
    Math.floor(Math.random() * (3 - 1 + 1) + 1)
  );
  const [randomStoneDrop, setRandomStoneDrop] = useState(
    Math.floor(Math.random() * (7 - 3 + 1) + 3)
  );

  // tree position -------------------------------------------------------------------

  const [randomTreeX, setRandomTreeX] = useState(
    Math.floor(Math.random() * 201) - 100
  );
  const [randomTreeY, setRandomTreeY] = useState(
    Math.floor(Math.random() * (-60 - -150 + 1) + -150)
  );
  document.documentElement.style.setProperty("--tree-x-pos", randomTreeX + "%");
  document.documentElement.style.setProperty("--tree-y-pos", randomTreeY + "%");

  const [randomRockX, setRandomRockX] = useState(
    Math.floor(Math.random() * 201) - 100
  );
  const [randomRockY, setRandomRockY] = useState(
    Math.floor(Math.random() * (60 - 150 + 1) + 150)
  );
  document.documentElement.style.setProperty("--rock-x-pos", randomRockX + "%");
  document.documentElement.style.setProperty("--rock-y-pos", randomRockY + "%");

  return {
    randomRockXp,
    setRandomRockXp,
    randomTreeXp,
    setRandomTreeXp,
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
    randomRockY,
    setRandomRockY,
  };
};
