import React, { useContext } from "react";

import GameContext from "../../context/GameContext";
import StoneIcon from "../StoneIcon/StoneIcon";
import UpgradeBtn from "../UpgradeBtn/UpgradeBtn";
import UpgradeDetails from "../UpgradeDetails/UpgradeDetails";
import WoodIcon from "../WoodIcon/WoodIcon";

export default function Woodcutter() {
  const {
    character,
    setCharacter,
    woodcutter,
    canWoodUpgrade,
    setCanWoodUpgrade,
    woodcutterHours,
    woodcutterMinutes,
    woodcutterSeconds,
    requiredWood,
    setRequiredWood,
  } = useContext(GameContext);

  function woodcutterUpgrade() {
    if (
      character.wood >= woodcutter.woodCost &&
      character.stone >= woodcutter.stoneCost
    ) {
      setCanWoodUpgrade(!canWoodUpgrade);
      setCharacter((prev) => {
        return {
          ...prev,
          wood: prev.wood - woodcutter.woodCost,
          stone: prev.stone - woodcutter.stoneCost,
        };
      });
    } else {
      setRequiredWood(true);
    }
  }

  return (
    <>
      <div className="buildings__container__details">
        <UpgradeDetails
          canUpgrade={canWoodUpgrade}
          building={woodcutter}
          character={character}
          wood={character.wood}
          stone={character.stone}
          woodIcon={<WoodIcon />}
          stoneIcon={<StoneIcon />}
          toolLevel={character.axeLevel}
          toolDmg={character.axeDmg}
          toolDmgMax={character.axeDmgMax}
        />
        <UpgradeBtn
          buildingUpgrade={woodcutterUpgrade}
          canUpgrade={canWoodUpgrade}
          hours={woodcutterHours}
          minutes={woodcutterMinutes}
          seconds={woodcutterSeconds}
          required={requiredWood}
        />
      </div>
    </>
  );
}
