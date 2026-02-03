import React from "react";
import RsnLogo from "../../assets/pictures/logo-rsn.png";

function ExperienceLists() {
  return (
    <div className="experienceLists">
      <div className="experience">
        <img src={RsnLogo} alt="Logo PT. RSN" />
        <div className="desc">
          <a href="https://www.instagram.com/rsn_indonesia/" className="bold">PT. Rumah Seho Nusantara</a>
          <p>Internship</p>
          <p>Jun 2025 - Jan 2026</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceLists;