import React, { useContext } from "react";
import GameContext from "../../context/GameContext";

export default function UpgradeBtn({
  buildingUpgrade,
  canUpgrade,
  minutes,
  seconds,
  required,
  hours,
}) {
  const { disable } = useContext(GameContext);

  return (
    <div className="upgrade">
      <button
        disabled={canUpgrade ? true : false || !disable ? true : false}
        onClick={() => buildingUpgrade()}
      >
        {canUpgrade ? "Upgrading..." : "Upgrade"}
      </button>
      <div>
        Upgrade time: {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div
        className={required ? "upgrade__required show" : "upgrade__required"}
      >
        <p>You dont have required items</p>
      </div>
    </div>
  );
}
