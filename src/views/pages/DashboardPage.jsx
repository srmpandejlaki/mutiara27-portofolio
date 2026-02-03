import React from "react";
import { Link } from "react-router-dom";

import MamenPict from "../../assets/pictures/projects/Macbook-Air-mamen-mdo.vercel.app.png";

import HeroSection from "../../components/dashboard/heroSection";
import AboutSection from "../../components/dashboard/aboutSection";

function DashboardPage() {
  return (
    <div>
      <div id="dashboard" className="container">
        <HeroSection />
        <AboutSection />
        <section className="projects-section">
          <h1>PROJECTS</h1>
          <div className="project-items review">
            <img className="img-item" src={MamenPict} alt="Capstone Project MAMEN" />
            <p>MAMEN<br/>Manado Micro Enterprises Website</p>
          </div>
          <div className="project-items none overlay">
            <i className="fa-solid fa-xmark closeBtn"></i>
            <img src={MamenPict} alt="Capstone Project MAMEN" />
            <div className="overlay-desc">
              <h2>MAMEN <br/> Manado Micro Enterprises Website</h2>
              <p>
                Platform promosi UMKM terutama bagi mereka yang kesulitan dalam mempromosikan produk mereka, 
                guna memperluas jangkauan pasar, membantu visibilitas produk, dan meningkatkan daya saing.
              </p>
              <a href="https://mamen-mdo.vercel.app">Kunjungi Websitenya</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;