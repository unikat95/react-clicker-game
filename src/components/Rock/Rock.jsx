import React, { useContext } from "react";
import GameContext from "../../context/GameContext";

import RockImg from "../../assets/rock.svg";
import StoneIcon from "../StoneIcon/StoneIcon";
import PickaxeIcon from "../PickaxeIcon/PickaxeIcon";

export default function Rock({ rock, digRock, randomStoneDrop, canDig }) {
  const { rockCountdown, randomRockXp, rockStatus, rockClicker } =
    useContext(GameContext);
  console.log(rockClicker);
  return (
    <>
      <>
        {/* Tree button */}

        <div className="field__container__rock">
          <button
            disabled={rockStatus ? true : false}
            onClick={() => digRock()}
            className={
              !canDig
                ? "field__container__rock--rock shake"
                : "field__container__rock--rock "
            }
          >
            <img
              src={RockImg}
              alt=""
              className="field__container__rock--rock"
            />
          </button>
          <div className="field__container--timer">
            {rockStatus ? (
              <span>
                {rockCountdown < 10
                  ? `00:0${rockCountdown}`
                  : `00:${rockCountdown}`}
              </span>
            ) : (
              ""
            )}
          </div>
          {rockClicker ? (
            <div className="field__container__rock--pickaxe">
              <PickaxeIcon />
            </div>
          ) : null}

          {/* Hp bar */}

          <div className="field__container--hp-bar2">
            {document.documentElement.style.setProperty(
              "--hp-width2",
              rock.hp + "%"
            )}
          </div>

          {/* Drop */}

          <div
            className={
              rockStatus
                ? "field__container--drop anim"
                : "field__container--drop"
            }
          >
            <p className="field__container--drop--wood">
              <span>{randomStoneDrop}x</span>
              <StoneIcon />
            </p>
            <p className="field__container--drop--xp">
              +{randomRockXp} <span>XP</span>
            </p>
            {rock.levelUpMsg ? (
              <p className="field__container--drop--lvlup">
                <span>Level Up!</span>
              </p>
            ) : null}
          </div>
        </div>
      </>
    </>
  );
}
