import React from "react";
import { Link } from "react-router-dom";

import WoodcutterImg from "../../assets/woodcutter.svg";
import ForgeImg from "../../assets/forge.svg";

export default function Choice() {
  return (
    <>
      <div className="choice">
        <div className="choice__details">
          <ul>
            <li>
              <Link to="/buildings/woodcutter">
                <span>Woodcutter</span>
                <img src={WoodcutterImg} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/buildings/forge">
                <span>Forge</span>
                <img src={ForgeImg} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
