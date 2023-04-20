import React, { useContext } from "react";
import GameContext from "../../context/GameContext";
import StoneIcon from "../StoneIcon/StoneIcon";
import UpgradeBtn from "../UpgradeBtn/UpgradeBtn";
import UpgradeDetails from "../UpgradeDetails/UpgradeDetails";
import WoodIcon from "../WoodIcon/WoodIcon";

export default function Forge() {
  const {
    character,
    setCharacter,
    forge,
    canForgeUpgrade,
    setCanForgeUpgrade,
    forgeHours,
    forgeMinutes,
    forgeSeconds,
    requiredForge,
    setRequiredForge,
  } = useContext(GameContext);

  function forgeUpgrade() {
    if (
      character.wood >= forge.woodCost &&
      character.stone >= forge.stoneCost
    ) {
      setCanForgeUpgrade(!canForgeUpgrade);
      setCharacter((prev) => {
        return {
          ...prev,
          wood: prev.wood - forge.woodCost,
          stone: prev.stone - forge.stoneCost,
        };
      });
    } else {
      setRequiredForge(true);
    }
  }

  return (
    <>
      <div className="buildings__container__details">
        <UpgradeDetails
          canUpgrade={canForgeUpgrade}
          building={forge}
          character={character}
          wood={character.wood}
          stone={character.stone}
          woodIcon={<WoodIcon />}
          stoneIcon={<StoneIcon />}
          toolLevel={character.pickaxeLevel}
          toolDmg={character.pickaxeDmg}
          toolDmgMax={character.pickaxeDmgMax}
        />
        <UpgradeBtn
          buildingUpgrade={forgeUpgrade}
          canUpgrade={canForgeUpgrade}
          hours={forgeHours}
          minutes={forgeMinutes}
          seconds={forgeSeconds}
          required={requiredForge}
        />
      </div>
    </>
  );
}
