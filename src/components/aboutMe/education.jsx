import React from "react";
import DeLaSaalleLogo from "../../assets/pictures/logo-delasalle.png";

function EducationLists() {
  return(
    <div className="study">
      <img src={DeLaSaalleLogo} alt="Foto Profil" />
      <div className="desc">
        <p className="bold">University of Catholic De La Salle Manado, Indonesia</p>
        <p>Informatics Engineering</p>
        <p>2022 - Present</p>
      </div>
    </div>
  );
}

export default EducationLists;