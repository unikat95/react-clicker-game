import React, { useContext, useState } from "react";

import GameContext from "../../context/GameContext";
import StoneIcon from "../StoneIcon/StoneIcon";
import WoodIcon from "../WoodIcon/WoodIcon";
import { RiArrowUpSLine } from "react-icons/ri";

export default function Backpack() {
  const { character } = useContext(GameContext);

  const [open, setOpen] = useState(false);

  return (
    <div className={open ? "backpack open" : "backpack"}>
      <div className="backpack__container">
        <button
          className="backpack__container__switch"
          onClick={() => setOpen(!open)}
        >
          <span>
            <RiArrowUpSLine size="30" className={!open ? "active" : ""} />
          </span>
          <span>Backpack</span>
        </button>
        <div className="backpack__container__slot">
          <WoodIcon />
          {character.wood}
        </div>
        <div className="backpack__container__slot">
          <StoneIcon />
          {character.stone}
        </div>
      </div>
    </div>
  );
}
