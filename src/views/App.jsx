import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import DashboardPage from './pages/DashboardPage';
import AboutMePage from './pages/AboutMePage';

import NavigationBar from '../components/base/navBar';
import FooterSection from '../components/base/footerr';


function App() {
  const [showNavMobile, setShowNavMobile] = useState(false);

  const handleNavClick = () => {
    setShowNavMobile(true);
  };

  const handleCloseNav = () => {
    setShowNavMobile(false);
  };

  return (
    <div>
      <header className='header'>
        <div className="logo">
          <p>M<span>D</span>.io</p>
          <p className="descLogo">Mutiara Digital Portofolio</p>
        </div>
        <i className="fa-solid fa-bars navBtn hamburgerMenu" onClick={handleNavClick}></i>
        
        {showNavMobile && <NavigationBar handleCloseNav={handleCloseNav} handleNavClick={handleNavClick} />}
        
        {/* Desktop Nav - selalu tampil */}
        <nav className="desktop-nav">
          <div className="navbar-list">
            <NavLink to="/home"><i className="fa-solid fa-house"></i>Home</NavLink>
            <NavLink to="/about-me"><i className="fa-solid fa-user"></i>About</NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />}></Route>
          <Route path='/home' element={<DashboardPage />}></Route>
          <Route path='/about-me' element={<AboutMePage />}></Route>
          <Route path='/blog' element={<DashboardPage />}></Route>
        </Routes>
      </main>

      <footer>
        <FooterSection />
      </footer>
    </div>
  )
}

export default App
