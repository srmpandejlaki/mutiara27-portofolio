import React from "react";

import HeroSection from "../../components/dashboard/heroSection";
import AboutSection from "../../components/dashboard/aboutSection";
import JourneySection from "../../components/dashboard/journeySection";
import ProjectSection from "../../components/dashboard/projectSection";

function DashboardPage() {
  return (
    <div>
      <div id="homeSection" className="container">
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <ProjectSection />
      </div>
    </div>
  );
}

export default DashboardPage;