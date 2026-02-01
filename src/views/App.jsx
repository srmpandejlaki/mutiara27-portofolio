import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';

import NavigationBar from '../components/base/navBar';
import FooterSection from '../components/base/footerr';


function App() {

  return (
    <div>
      <header className='header'>
        <div className="logo">
          <p>M<span>D</span>.io</p>
          <p className="descLogo">Mutiara Digital Portofolio</p>
        </div>
        <NavigationBar />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Navigate to="/dashboard" />}></Route>
          <Route path='/dashboard' element={<DashboardPage />}></Route>
          <Route path='/about-me' element={<DashboardPage />}></Route>
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
