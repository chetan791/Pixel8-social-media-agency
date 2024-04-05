import React from "react";
import logo from "../assets/logo.png";
import "../css/Navbar.css";

export const Navbar = () => {
  return (
    <nav id="navbar">
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>services</li>
        <li>blogs</li>
        <li>about us</li>
      </ul>
    </nav>
  );
};
