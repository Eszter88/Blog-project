import React from "react";
import Navbar from "./Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

export default RootLayout;
