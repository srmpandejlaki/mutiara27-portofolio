import React, { useState } from "react";

import MamenProject from "./mamenDetails";
import MamenPict from "../../../assets/pictures/projects/Macbook-Air-mamen-mdo.vercel.app.png";

function MamenSection() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleImageClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };
  
  return (
    <div className="projectContainer">
      <div className="project-items review">
        <img className="img-item" src={MamenPict} onClick={handleImageClick} alt="Capstone Project MAMEN" />
        <p>MAMEN<br/>Manado Micro Enterprises Website</p>
      </div>

      {showOverlay && <MamenProject onClose={handleCloseOverlay} />}
    </div>
  );
}

export default MamenSection;