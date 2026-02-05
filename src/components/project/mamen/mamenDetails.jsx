import React from "react";
import { Link } from "react-router-dom";

import MamenMac from "../../../assets/pictures/projects/mamen-pack.png";

function MamenProject({ onClose }) {
  return(
    <div className="project-items overlay">
      <i className="fa-solid fa-xmark closeBtn" onClick={onClose}></i>
      <div className="project-content">
        <div className="project-images">
          <img className="img-mac" src={MamenMac} alt="Capstone Project MAMEN" />
        </div>
        <div className="overlay-desc">
          <h2>MAMEN <br/> Manado Micro Enterprises Website</h2>
          <p>
            Platform promosi UMKM terutama bagi mereka yang kesulitan dalam mempromosikan produk mereka, 
            guna memperluas jangkauan pasar, membantu visibilitas produk, dan meningkatkan daya saing.
          </p>
          <p>Tech<br/>HTML, SCSS, Javascript, Hapi </p>
          <a href="https://mamen-mdo.vercel.app">kunjungi website</a>
        </div>
      </div>
    </div>
  );
}

export default MamenProject;