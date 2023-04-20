import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { GameProvider } from "./context/GameContext";
import Root from "./Root";
import Home from "./pages/Home";
import Field from "./pages/Field";
import Buildings from "./pages/Buildings";
import Woodcutter from "./components/Woodcutter/Woodcutter";
import Forge from "./components/Forge/Forge";
import Choice from "./components/Choice/Choice";

function App() {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty("--vh", `${vh}px`);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/buildings" element={<Buildings />}>
          <Route index element={<Choice />} />
          <Route path="/buildings/woodcutter" element={<Woodcutter />} />
          <Route path="/buildings/forge" element={<Forge />} />
        </Route>
        <Route path="/forest" element={<Field />} />
      </Route>
    )
  );

  return (
    <GameProvider>
      <RouterProvider router={router}></RouterProvider>
    </GameProvider>
  );
}

export default App;
