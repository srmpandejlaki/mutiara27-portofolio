import React from "react";
import { experiences, educations } from "../../utils/aboutMe";

function JourneySection() {
  return(
    <section id="journeySection" className="journey-section">
      <h1>MY JOURNEY</h1>
      <div className="twoSection">
        <div className="journeyContainer">
          <h3>Education</h3>
          {educations.map((education, index) => (
            <div className="studyLists">
              <div className="study" key={index}>
                <img src={education.logo} alt={education.school} />
                <div className="desc">
                  <a href={education.link} className="bold">{education.school}</a>
                  <p>{education.degree}</p>
                  <p>{education.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="journeyContainer">
          <h3>Experience</h3>
          {experiences.map((experience, index) => (
            <div className="experienceLists">
              <div className="experience" key={index}>
                <img src={experience.logo} alt={experience.company} />
                <div className="desc">
                  <a href={experience.link} className="bold">{experience.company}</a>
                  <p>{experience.desc}</p>
                  <p>{experience.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JourneySection;