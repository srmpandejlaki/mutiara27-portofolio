import React from "react";
import ProfilePict from "../../assets/pictures/ice-bear.jpg";
import HtmlIcon from "../../assets/pictures/tech-icon/html-icon.png";
import CssIcon from "../../assets/pictures/tech-icon/css-icon.png";
import JsIcon from "../../assets/pictures/tech-icon/js-icon.png";
import ReactIcon from "../../assets/pictures/tech-icon/react-icon.png";

function AboutMePage() {
  return (
    <div className="container aboutMe-section">
      <h1>About Me Page</h1>
      <div className="profilContainer">
        <div className="profil">
          <img src={ProfilePict} alt="Foto Profil" />
          <p>Sesilia Riliany Mutiara Pandejlaki</p>
        </div>
        <p className="desc">
          Hii, I use Mutiara as a nickname. I am a last-year Informatics Engineering student on University of Catholic De La Salle Manado, Indonesia. 
          I am a person who is very interested in the field of web development.
        </p>
      </div>
      <div className="techContainer">
        <h3>Technologies</h3>
        <div className="tech">
          <img src={HtmlIcon} alt="Foto Profil" />
        </div>
        <div className="tech">
          <img src={CssIcon} alt="Foto Profil" />
        </div>
        <div className="tech">
          <img src={JsIcon} alt="Foto Profil" />
        </div>
        <div className="tech">
          <img src={ReactIcon} alt="Foto Profil" />
        </div>
      </div>
      <div className="studyContainer">
        <h3>Studies</h3>
        <div className="study">
          <img src={ProfilePict} alt="Foto Profil" />
          <p>SMKN 2 Klaten</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;