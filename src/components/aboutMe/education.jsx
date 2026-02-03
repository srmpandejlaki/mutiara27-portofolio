import React from "react";
import DeLaSalleLogo from "../../assets/pictures/logo-delasalle.png";
import DicodingLogo from "../../assets/pictures/logo-dicoding.png";

function EducationLists() {
  return(
    <div className="studyLists">
      <div className="study">
        <img src={DeLaSalleLogo} alt="Logo De La Salle Manado" />
        <div className="desc">
          <p className="bold">University of Catholic De La Salle Manado, Indonesia</p>
          <p>Informatics Engineering</p>
          <p>2022 - Present</p>
        </div>
      </div>
      <div className="line2"></div>
      <div className="study">
        <img src={DicodingLogo} alt="Logo Dicoding" />
        <div className="desc">
          <p className="bold">Dicoding Bootcamp</p>
          <p>Batch 3 - Front-End & Back-End Web Developer</p>
          <p>Aug 2024 - Jan 2025</p>
        </div>
      </div>
    </div>
  );
}

export default EducationLists;