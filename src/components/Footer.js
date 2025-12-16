// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3>Unlox</h3>
          <p>Learning Reimagined.</p>
        </div>
        <div className="footer-col">
          <h4>Offerings</h4>
          <ul>
            <li>Job Bridge Program</li>
            <li>Global Internship</li>
            <li>Research Paper</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 Unlox. All rights reserved. Made with love in India.
      </div>
    </footer>
  );
};

export default Footer;