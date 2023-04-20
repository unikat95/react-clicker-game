import React, { useContext } from "react";
import GameContext from "../../context/GameContext";

import TreeImg from "../../assets/tree.svg";
import TreeIcon from "../TreeIcon/TreeIcon";
import AxeIcon from "../AxeIcon/AxeIcon";

export default function Tree({ tree, cutTree, randomWoodDrop, canCut }) {
  const { treeCountdown, randomTreeXp, treeStatus, treeClicker } =
    useContext(GameContext);

  return (
    <>
      <>
        {/* Tree button */}

        <div className="field__container__tree">
          <button
            disabled={treeStatus ? true : false}
            onClick={() => cutTree()}
            className={
              !canCut
                ? "field__container__tree--tree shake"
                : "field__container__tree--tree "
            }
          >
            <img
              src={TreeImg}
              alt=""
              className="field__container__tree--tree"
              disabled={treeStatus ? true : false}
            />
          </button>
          <div className="field__container--timer">
            {treeStatus ? (
              <span>
                {treeCountdown < 10
                  ? `00:0${treeCountdown}`
                  : `00:${treeCountdown}`}
              </span>
            ) : (
              ""
            )}
          </div>
          {treeClicker ? (
            <div className="field__container__tree--axe">
              <AxeIcon />
            </div>
          ) : null}

          {/* Hp bar */}

          <div className="field__container--hp-bar">
            {document.documentElement.style.setProperty(
              "--hp-width",
              tree.hp + "%"
            )}
          </div>

          {/* Drop */}

          <div
            className={
              treeStatus
                ? "field__container--drop anim"
                : "field__container--drop"
            }
          >
            <p className="field__container--drop--wood">
              <span>{randomWoodDrop}x</span>
              <TreeIcon />
            </p>
            <p className="field__container--drop--xp">
              +{randomTreeXp} <span>XP</span>
            </p>
            {tree.levelUpMsg ? (
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
