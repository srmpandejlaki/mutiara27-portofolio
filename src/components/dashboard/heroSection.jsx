import React from "react";
import ProfilePict from "/public/character-blue-white.png";

function HeroSection() {

  const handleMouseEnter = () => {
    const goToAboutSection = document.getElementById("aboutSection");
    goToAboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <div className="pictBackground">
        <div className="black-background"></div>
      </div>
      <div className="heroContent">
        <div className="heroPict">
          <img src={ProfilePict} alt="Foto Profil" />
        </div>
        <div className="heroDesc">
          <div className="head">
            <h2 className="greeting">Hi! I'm Mutiara</h2>
            <h3 className="desc">An Undergraduate Informatics Engineering Student & Aspiring Software Developer</h3>
          </div>
          <h3 className="desc">I build web applications with React, SCSS, Next.JS, FastAPI, and PostgreSQL</h3>
          {/* <h3>Code is an art, and the masterpiece is always a work in progress.</h3> */}
          <button onClick={handleMouseEnter} className="bold">More Detail</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;