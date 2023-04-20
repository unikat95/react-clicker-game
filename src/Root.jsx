import React from "react";

import { Outlet } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Backpack from "./components/Backpack/Backpack";

export default function Root() {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Outlet />
        <Backpack />
      </Wrapper>
    </>
  );
}
