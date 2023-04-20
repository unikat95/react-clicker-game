import React, { useContext } from "react";

import GameContext from "../../context/GameContext";
import { NavLink } from "react-router-dom";

import { BiBuildings } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { GiForest } from "react-icons/gi";

export default function Navbar() {
  const {
    canWoodUpgrade,
    woodcutterHours,
    woodcutterMinutes,
    woodcutterSeconds,
    canForgeUpgrade,
    forgeMinutes,
    forgeSeconds,
  } = useContext(GameContext);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul>
          <li>
            <NavLink to="/">
              <BsFillPersonFill />
              <p>Character</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/buildings">
              <BiBuildings />
              <p>Buildings</p>
              <div className={!canForgeUpgrade ? "nav-info none" : "nav-info"}>
                {forgeMinutes < 10 ? `0${forgeMinutes}` : forgeMinutes}:
                {forgeSeconds < 10 ? `0${forgeSeconds}` : forgeSeconds}
              </div>
              <div className={!canWoodUpgrade ? "nav-info none" : "nav-info"}>
                {woodcutterHours < 10 ? `0${woodcutterHours}` : woodcutterHours}
                :
                {woodcutterMinutes < 10
                  ? `0${woodcutterMinutes}`
                  : woodcutterMinutes}
                :
                {woodcutterSeconds < 10
                  ? `0${woodcutterSeconds}`
                  : woodcutterSeconds}
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/forest">
              <GiForest />
              <p>Forest</p>
            </NavLink>
          </li>
        </ul>
        <div className="navbar__container__xp-bar">
          <span></span>
        </div>
      </div>
    </nav>
  );
}
