import { useState } from "react";
import "./App.css";
import Login from "./page/Login";
import Sign from "./page/Sign";
import Home from "./page/Home";
import Detailes from "./page/Detailes";
import Cheakout from "./page/Cheakout";
import Shopping from "./page/Shopping";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Sign />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/det/:emlid",
    element: <Detailes />,
  },
  {
    path: "/cheak",
    element: <Cheakout />,
  },
  {
    path: "/cart/:emlid",
    element: <Shopping />,
  },
]);
function App() {
  return (
    <>
      {" "}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
