import { useState } from "react";
import { BuildingsContext } from "./BuildingsContext";

export const CountdownsContext = () => {
  const { woodcutter, forge } = BuildingsContext();

  const [treeCountdownValue, setTreeCountdownValue] = useState(3);
  const [treeCountdown, setTreeCountdown] = useState(treeCountdownValue);

  const [rockCountdownValue, setRockCountdownValue] = useState(3);
  const [rockCountdown, setRockCountdown] = useState(rockCountdownValue);

  const [woodcutterCountdown, setWoodcutterCountdown] = useState(
    woodcutter.upgradeTime
  );
  const [forgeCountdown, setForgeCountdown] = useState(forge.upgradeTime);

  let woodcutterHours = Math.floor(woodcutterCountdown / 3600);
  let woodcutterMinutes = Math.floor((woodcutterCountdown % 3600) / 60);
  let woodcutterSeconds = woodcutterCountdown % 60;

  let forgeHours = Math.floor(forgeCountdown / 3600);
  let forgeMinutes = Math.floor((forgeCountdown % 3600) / 60);
  let forgeSeconds = forgeCountdown % 60;

  return {
    treeCountdownValue,
    setTreeCountdownValue,
    treeCountdown,
    setTreeCountdown,

    rockCountdownValue,
    setRockCountdownValue,
    rockCountdown,
    setRockCountdown,

    woodcutterCountdown,
    setWoodcutterCountdown,
    forgeCountdown,
    setForgeCountdown,
    woodcutterHours,
    woodcutterMinutes,
    woodcutterSeconds,
    forgeHours,
    forgeMinutes,
    forgeSeconds,
  };
};
