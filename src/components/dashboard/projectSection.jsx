import React, { useState, useEffect, useRef, useCallback } from "react";
import projects from "../../utils/projects";

function ProjectSection() {
  const [showOverlay, setShowOverlay] = useState(null);
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const scrollToSlide = useCallback((index) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: index * containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, []);

  // Auto-scroll setiap 5 detik HANYA JIKA total halaman/slide > 1
  const startAutoScroll = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const isDesktop = window.innerWidth >= 650;
    const itemsPerPage = isDesktop ? 2 : 1;
    const totalSlides = Math.ceil(projects.length / itemsPerPage);

    if (totalSlides <= 1) return;

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % totalSlides;
        scrollToSlide(next);
        return next;
      });
    }, 5000);
  }, [scrollToSlide]);

  useEffect(() => {
    startAutoScroll();

    const handleResize = () => {
      startAutoScroll();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [startAutoScroll]);

  // Sync current index saat user scroll manual
  const handleScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      if (index !== current) {
        setCurrent(index);
        // Reset timer auto-scroll setelah user scroll manual
        startAutoScroll();
      }
    }
  };

  const handleCloseOverlay = () => {
    setShowOverlay(null);
  };

  return(
    <section className="projects-section" id="projectSection">
      <h1>PROJECTS</h1>
      <p>These are some of the projects I've worked on.</p>

      <div 
        className="projectContainer"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {projects.map((project) => (
          <div key={project.id} className="project-items review">
            <div className="project-img-wrapper">
              <img className="img-item" src={project.image} onClick={() => setShowOverlay(project)} alt={project.alt} />
            </div>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {showOverlay && (
        <div className="overlay">
          <i className="fa-solid fa-xmark closeBtn" onClick={handleCloseOverlay}></i>
          <div className="project-content">
            <div className="project-images">
              <img className="img-mac" src={showOverlay.detailImage} alt={showOverlay.alt} />
            </div>
            <div className="overlay-desc">
              <h2>{showOverlay.name}</h2>
              <h2>{showOverlay.description}</h2>
              <p>{showOverlay.details}</p>
              <div className="roleTeam">
                <p>
                  <span>Role</span><br/>{showOverlay.role}</p>
                <p>
                  <span>Team</span><br/>{showOverlay.team}</p>
              </div>
              <p>
                <span>Tech</span><br/>{showOverlay.tech}</p>
              <a href={showOverlay.link} target="_blank" rel="noopener noreferrer">
                visit website
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectSection;