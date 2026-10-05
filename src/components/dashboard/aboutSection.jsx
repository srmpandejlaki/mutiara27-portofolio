import React from "react";
import { Link } from "react-router-dom";
import IconLink from "../../components/base/iconLink";
import ProfilePict from "/public/profile-photo.jpg";
import SkillLists from "../../components/aboutMe/technologies";
import FadeIn from "../animation/FadeIn";

function AboutSection() {
  return (
    <section id="aboutSection" className="aboutMe-section">
      <FadeIn delay={0.2} duration={1}>
        <h1>ABOUT ME</h1>
        <div className="profilContainer">
          <div className="profil">
            <img src={ProfilePict} alt="Foto Profil" />
            <p><Link to="/about-me">Sesilia Riliany<br />Mutiara Pandejlaki</Link></p>
          </div>
          <div className="desc">
            <p>
              Hi, I'm a Fresh Graduate Informatics Engineering Student from Indonesia 
              with a strong interest in web development.
            </p>
            <SkillLists />
          </div>
        </div>
        <div className="iconConnection">
          <p>Connect with me</p>
          <IconLink />
        </div>
        <div className="line"></div>
      </FadeIn>
    </section>
  );
}

export default AboutSection;