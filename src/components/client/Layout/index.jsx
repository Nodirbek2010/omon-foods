import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";

export default function LayoutClient() {

  return (
    <div>
      <Navbar />
      <Outlet />
      < Footer />
    </div>
  );
}