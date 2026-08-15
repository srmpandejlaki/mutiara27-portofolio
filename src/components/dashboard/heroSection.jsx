import React from "react";

import HeroSectionPict from "../../assets/pictures/big-hero-6.jpg";

function HeroSection() {

  const handleMouseEnter = () => {
    const goToAboutSection = document.getElementById("aboutSection");
    goToAboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <div className="pictBackground">
        {/* <img src={HeroSectionPict} alt="Hero Section" /> */}
        <div className="black-background"></div>
      </div>
      <div className="black-filter"></div>
        <div className="heroDesc">
          <div className="head">
            <h2 className="greeting">Hi! I'm Mutiara</h2>
            <h3 className="desc">An Undergraduate Informatics Engineering Student & Aspiring Software Developer</h3>
          </div>
          <h3 className="desc">I build web applications with React, SCSS, Next.JS, FastAPI, and PostgreSQL</h3>
          {/* <h3>Code is an art, and the masterpiece is always a work in progress.</h3> */}
          <button onClick={handleMouseEnter} className="bold">More Detail</button>
      </div>
    </section>
  );
}

export default HeroSection;