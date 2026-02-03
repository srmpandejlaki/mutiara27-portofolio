import React from "react";

import HeroSectionPict from "../../assets/pictures/big-hero-6.jpg";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="pictBackground">
        <img src={HeroSectionPict} alt="Hero Section" />
      </div>
      <div className="black-filter"></div>
        <div className="heroDesc">
          <h3>Code is an art, and the masterpiece is always a work in progress!!</h3>
          <button id="btn-hero" className="bold">More Detail</button>
      </div>
    </section>
  );
}

export default HeroSection;