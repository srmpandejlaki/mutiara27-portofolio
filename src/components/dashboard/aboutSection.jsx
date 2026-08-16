import React from "react";
import { Link } from "react-router-dom";
import IconLink from "../../components/base/iconLink";
import ProfilePict from "/public/character-blue-white.png";
import SkillLists from "../../components/aboutMe/technologies";

function AboutSection() {
  return (
    <section id="aboutSection" className="aboutMe-section">
      <h1>ABOUT ME</h1>
      <div className="profilContainer">
        <div className="profil">
          <img src={ProfilePict} alt="Foto Profil" />
          <p><Link to="/about-me">Sesilia Riliany<br />Mutiara Pandejlaki</Link></p>
        </div>
        <div className="desc">
          <p>
            Hi, I'm a final-year Informatics Engineering student from Indonesia 
            with a strong interest in web development.
          </p>
          <SkillLists />
        </div>
      </div>
      <div className="iconConnection">
        <p>Connect with me</p>
        <IconLink />
      </div>
    </section>
  );
}

export default AboutSection;