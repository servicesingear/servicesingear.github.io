// src/components/Footer.js
import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons
import '../styles/Footer.css';
import logo from '../assets/images/logo.png';
import ContactUs from './ContactUs';

function Footer() {
     const [showPopup, setShowPopup] = useState(false);
  
    const openPopup = () => setShowPopup(true);
    const closePopup = () => setShowPopup(false);
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
              <Link to="/">About Us</Link>
              <Link to="/">Services</Link>
            </div>
            <div className="footer-links-column">
              <Link to="/">Products</Link>
              <Link to="/career">Career</Link>
              <Link > <button className='contactus' onClick={openPopup} >Contact Us</button></Link>
              {showPopup && <ContactUs closePopup={closePopup} />}
            </div>
            
          </div>
          
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://www.instagram.com/gear_services/#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
        <div className="footer-contact">
            <h4>Contact Us</h4>
            
            <p>Phone: +91 9502172867</p>
            <p>Email: utils.gear@gmail.com</p>
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