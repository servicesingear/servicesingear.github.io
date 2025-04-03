// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons
import '../styles/Footer.css';
import logo from '../assets/images/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-company-info">Committed to delivering exceptional services and cutting-edge solutions. Driving progress through automation and advanced technology.</p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <div className="footer-links-column">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
            </div>
            <div className="footer-links-column">
              <Link to="/products">Products</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/career">Career</Link>
            </div>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-paragraph">
        {/* <p>Empowering the future through innovation and technological excellence.</p> */}
        <p>© 2025 GEAR. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;