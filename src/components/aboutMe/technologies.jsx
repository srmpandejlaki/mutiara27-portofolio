import React from "react";
import HtmlIcon from "../../assets/pictures/tech-icon/html-icon.png";
import CssIcon from "../../assets/pictures/tech-icon/css-icon.png";
import SassIcon from "../../assets/pictures/tech-icon/sass-icon.png";
import JsIcon from "../../assets/pictures/tech-icon/js-icon.png";
import ReactIcon from "../../assets/pictures/tech-icon/react-icon.png";
import PostgreIcon from "../../assets/pictures/tech-icon/postgre-icon.png";
import GitIcon from "../../assets/pictures/tech-icon/git-icon.png";
import GithubIcon from "../../assets/pictures/tech-icon/github-icon.png";
import VScodeIcon from "../../assets/pictures/tech-icon/vscode-icon.png";
import FigmaIcon from "../../assets/pictures/tech-icon/figma-icon.png";
import NotionIcon from "../../assets/pictures/tech-icon/notion-icon.png";
import PostmanIcon from "../../assets/pictures/tech-icon/postman-icon.png";

function TechLists() {
  return(
    <div className="techLists">
      <div className="tech">
        <img src={HtmlIcon} alt="Logo HTML" />
      </div>
      <div className="tech">
        <img src={CssIcon} alt="Logo CSS" />
      </div>
      <div className="tech">
        <img src={SassIcon} alt="Logo SASS" />
      </div>
      <div className="tech">
        <img src={JsIcon} alt="Logo JavaScript" />
      </div>
      <div className="tech">
        <img src={ReactIcon} alt="Logo React" />
      </div>
      <div className="tech">
        <img src={PostgreIcon} alt="Logo PostgreSQL" />
      </div>
      <div className="tech">
        <img src={GitIcon} alt="Logo Git" />
      </div>
      <div className="tech">
        <img src={GithubIcon} alt="Logo GitHub" />
      </div>
      <div className="tech">
        <img src={VScodeIcon} alt="Logo Visual Studio Code" />
      </div>
      <div className="tech">
        <img src={FigmaIcon} alt="Logo Figma" />
      </div>
      <div className="tech">
        <img src={PostmanIcon} alt="Logo Postman" />
      </div>
      <div className="tech">
        <img src={NotionIcon} alt="Logo Notion" />
      </div>
    </div>
  );
}

export default TechLists;