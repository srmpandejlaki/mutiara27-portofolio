import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="navbar-list">
      <NavLink to="/"><i className="fa-solid fa-house"></i>Dashboard</NavLink>
      <NavLink to="/about-me"><i class="fa-solid fa-user"></i>About Me</NavLink>
      {/* <NavLink to="/blog">Blog</NavLink> */}
    </div>
  );
}

export default NavigationBar;