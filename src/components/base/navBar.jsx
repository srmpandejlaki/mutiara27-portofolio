import React from "react";
import { NavLink } from "react-router-dom";

import IconLink from "./iconLink";

function NavigationBar({ handleCloseNav }) {
  return (
    <div className="nav-section">
      <div className="nav-head">
        <div className="logo">
          <p>M<span>D</span>.io</p>
          <p className="descLogo">Mutiara Digital Portofolio</p>
        </div>
        <i className="fa-solid fa-xmark closeBtn" onClick={handleCloseNav}></i>
      </div>
      <div className="navbar-list">
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}><i className="fa-solid fa-house"></i>Home</NavLink>
        <NavLink to="/about-me" className={({ isActive }) => (isActive ? "active" : "")}><i className="fa-solid fa-user"></i>About</NavLink>
        {/* <NavLink to="/blog">Blog</NavLink> */}
      </div>
      <div className="nav-footer">
        <IconLink />
      </div>
    </div>
  );
}

export default NavigationBar;