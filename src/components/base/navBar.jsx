import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="navbar-list">
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/about-me">About Me</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </div>
  );
}

export default NavigationBar;