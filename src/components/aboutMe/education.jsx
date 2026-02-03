import React from "react";
import KaritasLogo from "../../assets/pictures/logo-karitas.png";
import DeLaSalleLogo from "../../assets/pictures/logo-delasalle.png";
import DicodingLogo from "../../assets/pictures/logo-dicoding.png";

function EducationLists() {
  return(
    <div className="studyLists">
      <div className="study">
        <img src={KaritasLogo} alt="Logo Karitas" />
        <div className="desc">
          <a href="https://www.instagram.com/smakaritas_tomohon/" className="bold">Karitas Catholic Senior High School Tomohon, Indonesia</a>
          <p>Science</p>
          <p>2019 - 2022</p>
        </div>
      </div>
      <div className="line2"></div>
      <div className="study">
        <img src={DeLaSalleLogo} alt="Logo De La Salle Manado" />
        <div className="desc">
          <a href="https://unikadelasalle.ac.id/" className="bold">University of Catholic De La Salle Manado, Indonesia</a>
          <p>Informatics Engineering</p>
          <p>2022 - Present</p>
        </div>
      </div>
      <div className="line2"></div>
      <div className="study">
        <img src={DicodingLogo} alt="Logo Dicoding" />
        <div className="desc">
          <p className="bold"><a href="https://www.dicoding.com/">Dicoding</a> Bootcamp</p>
          <p>Batch 3 - Front-End & Back-End Web Developer</p>
          <p>Aug 2024 - Jan 2025</p>
        </div>
      </div>
    </div>
  );
}

export default EducationLists;