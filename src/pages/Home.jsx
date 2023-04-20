import React, { useContext } from "react";

import GameContext from "../context/GameContext";
import Viking from "../assets/viking.png";
import PickaxeIcon from "../components/PickaxeIcon/PickaxeIcon";
import AxeIcon from "../components/AxeIcon/AxeIcon";
import StoneIcon from "../components/StoneIcon/StoneIcon";
import WoodIcon from "../components/WoodIcon/WoodIcon";

export default function Home() {
  const { character } = useContext(GameContext);

  return (
    <>
      <div className="home">
        <div className="home__container">
          <div className="home__container__character">
            <div className="home__container__character--img">
              <img src={Viking} alt="" />
            </div>
            <div className="home__container__character--details">
              <p>Name:</p> {character.name}
            </div>
            <div className="home__container__character--details">
              <p>Level:</p> {character.level}
            </div>
            <div className="home__container__character--details">
              <p>Experience:</p> {character.experience}/
              {character.experienceNeeded}
            </div>
            <div className="home__container__character--details">
              <p>Wood: </p>
              <p className="home__container__character--details material">
                <WoodIcon />
                {character.wood}
              </p>
            </div>
            <div className="home__container__character--details">
              <p>Stone:</p>
              <p className="home__container__character--details material">
                <StoneIcon />
                {character.stone}
              </p>
            </div>
            <div className="home__container__character--details">
              <p>Axe dmg:</p>
              <p>
                <AxeIcon />
                {character.axeDmg}-{character.axeDmgMax}
              </p>
            </div>
            <div className="home__container__character--details">
              <p>Pickaxe dmg:</p>
              <p>
                <PickaxeIcon />
                {character.pickaxeDmg}-{character.pickaxeDmgMax}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
