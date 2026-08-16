import React from "react";
import { interests, technologies } from "../../utils/aboutMe";

function SkillLists() {
  const categoryTitles = {
    "language&framework": "Language & Framework",
    "database&tools": "Database & Tools",
  };

  // Mengambil daftar kategori unik secara otomatis
  const categories = Object.keys(categoryTitles);

  return(
    <div className="skills">
      <div className="interestItems">
        <h3>Interests</h3>
        <div className="interestLists">
          {interests.map((interest, index) => (
            <div className="interest" key={index}>
              <p>{interest.name}</p>
            </div>
          ))}
        </div>
      </div>
      {categories.map((category) => (
        <div className="techItems" key={category}>
          <h3>{categoryTitles[category]}</h3>
          <div className="techLists">
            {technologies
              .filter((tech) => tech.category === category)
              .map((technology) => (
                <div className="tech" key={technology.name}>
                  <img src={technology.icon} alt={technology.name} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillLists;