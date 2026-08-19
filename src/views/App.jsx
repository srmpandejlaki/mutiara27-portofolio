import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import DashboardPage from './pages/DashboardPage';

import NavigationBar from '../components/base/navBar';
import FooterSection from '../components/base/footerr';


function App() {
  const [showNavMobile, setShowNavMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("homeSection");

  const handleNavClick = () => {
    setShowNavMobile(true);
  };

  const handleCloseNav = () => {
    setShowNavMobile(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Deteksi section yang sedang terlihat di layar saat scroll
  useEffect(() => {
    const sections = ["homeSection", "aboutSection", "projectSection"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset header
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header className='header'>
        <div className="logo">
          <p>M<span>D</span>.io</p>
          <p className="descLogo">Mutiara Digital Portofolio</p>
        </div>
        <i className="fa-solid fa-bars navBtn hamburgerMenu" onClick={handleNavClick}></i>
        
        {showNavMobile && (
          <NavigationBar 
            handleCloseNav={handleCloseNav} 
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
        )}
        
        {/* Desktop Nav - selalu tampil */}
        <nav className="desktop-nav">
          <div className="navbar-list">
            <button 
              onClick={() => scrollToSection("homeSection")} 
              className={activeSection === "homeSection" ? "active" : ""}
            >
              <i className="fa-solid fa-house"></i>Home
            </button>
            <button 
              onClick={() => scrollToSection("aboutSection")} 
              className={activeSection === "aboutSection" ? "active" : ""}
            >
              <i className="fa-solid fa-user"></i>About
            </button>
            <button 
              onClick={() => scrollToSection("projectSection")} 
              className={activeSection === "projectSection" ? "active" : ""}
            >
              <i className="fa-solid fa-briefcase"></i>Projects
            </button>
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />}></Route>
          <Route path='/home' element={<DashboardPage />}></Route>
        </Routes>
      </main>

      <footer>
        <FooterSection />
      </footer>
    </div>
  )
}

export default App
