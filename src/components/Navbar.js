// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Unlox</div>
      <ul className="navbar-links">
        <li><a href="#programs">Programs</a></li>
        <li><a href="#mentorship">Mentorship</a></li>
        <li><a href="#community">Community</a></li>
      </ul>
      <div className="navbar-auth">
        <button className="btn-login">Login</button>
        <button className="btn-signup">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;