import React from "react";
import HtmlIcon from "../../assets/pictures/tech-icon/html-icon.png";
import CssIcon from "../../assets/pictures/tech-icon/css-icon.png";
import JsIcon from "../../assets/pictures/tech-icon/js-icon.png";
import ReactIcon from "../../assets/pictures/tech-icon/react-icon.png";

function TechLists() {
  return(
    <div className="techLists">
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
  );
}

export default TechLists;