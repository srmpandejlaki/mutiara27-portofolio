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
        <img src={HeroSectionPict} alt="Hero Section" />
      </div>
      <div className="black-filter"></div>
        <div className="heroDesc">
          <h3>Hi! I'm Mutiara<br/>I'm an Undergraduate Informatics Engineering Student</h3>
          <h3>Code is an art, and the masterpiece is always a work in progress!!</h3>
          <button onClick={handleMouseEnter} className="bold">More Detail</button>
      </div>
    </section>
  );
}

export default HeroSection;