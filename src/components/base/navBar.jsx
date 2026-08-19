import React from "react";
import IconLink from "./iconLink";

function NavigationBar({ handleCloseNav }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

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
        <button 
          onClick={() => scrollToSection("homeSection")} 
        >
          <i className="fa-solid fa-house"></i>Home
        </button>
        <button 
          onClick={() => scrollToSection("aboutSection")} 
        >
          <i className="fa-solid fa-user"></i>About
        </button>
        <button 
          onClick={() => scrollToSection("journeySection")} 
        >
          <i className="fa-solid fa-graduation-cap"></i>Journey
        </button>
        <button 
          onClick={() => scrollToSection("projectSection")} 
        >
          <i className="fa-solid fa-briefcase"></i>Projects
        </button>
      </div>
      <div className="nav-footer">
        <IconLink />
      </div>
    </div>
  );
}

export default NavigationBar;