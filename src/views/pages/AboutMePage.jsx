import React from "react";
import ProfilePict from "../../assets/pictures/character-blue-white.png";

import TechLists from "../../components/aboutMe/technologies";
import EducationLists from "../../components/aboutMe/education";
import ExperienceLists from "../../components/aboutMe/experience";

function AboutMePage() {
  return (
    <div className="container aboutMe-page">
      <h1>About Me</h1>
      <div className="profilContainer">
        <div className="profil">
          <img src={ProfilePict} alt="Foto Profil" />
          <p className="desc">Sesilia Riliany Mutiara Pandejlaki</p>
        </div>
        <p className="desc">
          An Informatics Engineering student focused on Frontend Development using React and SCSS.
          Experienced in building web applications with API integration and a basic backend foundation.
        </p>
      </div>
      <div className="techContainer">
        <h3>Technologies</h3>
        <TechLists />
      </div>
      <div className="line"></div>
      <div className="twoSection">
        <div className="studyContainer">
          <h3>Education</h3>
          <EducationLists />
        </div>
        <div className="experienceContainer">
          <h3>Experience</h3>
          <ExperienceLists />
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;