import React from "react";
import { Link } from "react-router-dom";

import HeroSection from "../../assets/pictures/big-hero-6.jpg";
import ProfilePict from "../../assets/pictures/ice-bear.jpg";
import MamenPict from "../../assets/pictures/Macbook-Air-mamen-mdo.vercel.app.png";

function DashboardPage() {
  return (
    <div>
      <div id="dashboard" className="container">
        <section className="hero-section">
          <div className="pictBackground">
            <img src={HeroSection} alt="Hero Section" />
          </div>
          <div className="black-filter"></div>
            <div className="heroDesc">
              <h3>Code is an art, and the masterpiece is always a work in progress!!</h3>
              <button id="btn-hero">Track the Owner</button>
          </div>
        </section>
        <section id="aboutSection" className="aboutMe-section">
          <h1>ABOUT ME</h1>
          <div className="profilContainer">
            <div className="profil">
              <img src={ProfilePict} alt="Foto Profil" />
              <p><Link to="/about-me">Sesilia Pandejlaki</Link></p>
            </div>
            <p className="desc">
              I am a last-year Informatics Engineering student on <br />University of Catholic De La Salle Manado, Indonesia.
              I am a person who is very interested in the field of web development.
            </p>
          </div>
          <div className="iconConnection">
            <p>Ayo Terhubung</p>
            <div className="icon">
              <a href="https://www.linkedin.com/in/sesilia-pandejlaki/"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/srmpandejlaki"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.instagram.com/mutiarapandejlaki27/?hl=en"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-regular fa-envelope"></i></a>
            </div>
          </div>
        </section>
        <section className="projects-section">
          <h1>PROJECTS</h1>
          <div className="project-items review">
            <img className="img-item" src={MamenPict} alt="Capstone Project MAMEN" />
            <p>MAMEN<br/>Manado Micro Enterprises Website</p>
          </div>
          <div className="project-items none overlay">
            <img src={MamenPict} alt="Capstone Project MAMEN" />
            <div className="overlay-desc">
              <h2>MAMEN <br/> Manado Micro Enterprises Website</h2>
              <p>
                Platform promosi UMKM terutama bagi mereka yang kesulitan dalam mempromosikan produk mereka, 
                guna memperluas jangkauan pasar, membantu visibilitas produk, dan meningkatkan daya saing.
              </p>
              <a href="https://mamen-mdo.vercel.app">Kunjungi Websitenya</a>
            </div>
            <i className="fa-solid fa-xmark closeBtn"></i>
          </div>
        </section>
        <section className="message-section">
          <h1>MESSAGE</h1>
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;