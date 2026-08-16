import React from "react";
import ProfilePict from "/public/character-blue-white.png";
import HeroBackground from './heroBackground';

function HeroSection() {

  const handleMouseEnter = () => {
    const goToAboutSection = document.getElementById("aboutSection");
    goToAboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <div className="pictBackground">
        <HeroBackground
          horizonColor="#F2E7D3"
          waveColor="#A37E51"
          crestColor="#FFFFFF"
          speed={0.4}
          amplitude={2.5}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1}
          height={5.5}
          fogDepth={15}
          detail="medium"
          brightness={1}
          opacity={1}
          mouseInteraction
          parallaxStrength={0.5}
          grain
          grainIntensity={0.05}
        />
      </div>
      <div className="heroContent">
        <div className="heroPict">
          <img src={ProfilePict} alt="Foto Profil" />
        </div>
        <div className="heroDesc">
          <div className="head">
            <h2 className="greeting">Hi! I'm Mutiara</h2>
            <h3 className="desc">Final-year Informatics Engineering Student | Aspiring Frontend & Fullstack Developer</h3>
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