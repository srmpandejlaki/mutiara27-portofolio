import React from "react";
import ProfilePict from "../../assets/pictures/ice-bear.jpg";
import TechLists from "../../components/aboutMe/technologies";
import EducationLists from "../../components/aboutMe/education";

function AboutMePage() {
  return (
    <div className="container aboutMe-page">
      <h1>About Me</h1>
      <div className="profilContainer">
        <div className="profil">
          <img src={ProfilePict} alt="Foto Profil" />
          <p>Sesilia Riliany Mutiara Pandejlaki</p>
        </div>
        <p className="desc">
          Hii, I'm a last-year Informatics Engineering student in Indonesia.
          I'm a person who is very interested in the field of web development.
        </p>
      </div>
      <div className="techContainer">
        <h3>Technologies</h3>
        <TechLists />
      </div>
      <div className="studyContainer">
        <h3>Education</h3>
        <EducationLists />
      </div>
    </div>
  );
}

export default AboutMePage;