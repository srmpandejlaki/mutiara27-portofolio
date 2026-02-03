import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="navbar-list">
      <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}><i className="fa-solid fa-house"></i>Dashboard</NavLink>
      <NavLink to="/about-me" className={({ isActive }) => (isActive ? "active" : "")}><i class="fa-solid fa-user"></i>About Me</NavLink>
      {/* <NavLink to="/blog">Blog</NavLink> */}
    </div>
  );
}

export default NavigationBar;