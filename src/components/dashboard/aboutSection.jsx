import React from "react";
import { Link } from "react-router-dom";
import IconLink from "../../components/base/iconLink";
import ProfilePict from "../../assets/pictures/ice-bear.jpg";

function AboutSection() {
  return (
    <section id="aboutSection" className="aboutMe-section">
      <h1>ABOUT ME</h1>
      <div className="profilContainer">
        <div className="profil">
          <img src={ProfilePict} alt="Foto Profil" />
          <p><Link to="/about-me">Sesilia Pandejlaki</Link></p>
        </div>
        <p className="desc">
          Haii, I'm a last-year Informatics Engineering student in Indonesia.
          I'm also a person who is very interested in the field of web development.
        </p>
      </div>
      <div className="iconConnection">
        <p>Ayo Terhubung</p>
        <IconLink />
      </div>
    </section>
  );
}

export default AboutSection;