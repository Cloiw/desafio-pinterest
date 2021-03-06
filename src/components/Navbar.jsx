import React from 'react';
import logo from '../img/logo.svg';
import './styles/Navbar.css';

const Navbar = () => (
  <header>
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">
            <img className="nav-logo-icon" src={logo} alt="logo" />
          </a>
        </div>
        <div className="nav-search" />
        <div className="nav-home">
          <span>Inicio</span>
        </div>
        <div className="nav-follow">
          <span>Siguiendo</span>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
