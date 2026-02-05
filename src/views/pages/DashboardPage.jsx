import React from "react";

import HeroSection from "../../components/dashboard/heroSection";
import AboutSection from "../../components/dashboard/aboutSection";
import ProjectSection from "../../components/dashboard/projectSection";

function DashboardPage() {
  return (
    <div>
      <div id="dashboard" className="container">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </div>
  );
}

export default DashboardPage;