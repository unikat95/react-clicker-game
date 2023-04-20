import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Buildings() {
  return (
    <div className="buildings">
      <div className="buildings__container">
        <ul className="buildings__container__nav">
          <li>
            <NavLink to="/buildings/woodcutter">Woodcutter</NavLink>
          </li>
          <li>
            <NavLink to="/buildings/forge">Forge</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
