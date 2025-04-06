import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.png';
import ContactUs from './ContactUs';

function Navbar({ scrollToHome, scrollToAbout, scrollToServices, scrollToProducts, scrollToContact }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isSolid, setIsSolid] = useState(false);

    const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setScrollPosition(currentPosition);

            // Adjust the scroll threshold as needed
            if (currentPosition > 50) {
                setIsSolid(true);
            } else {
                setIsSolid(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <nav
                className={`navbar navbar-expand-lg navbar-dark fixed-top ${
                    isSolid ? 'navbar-solid' : 'navbar-transparent'
                }`}
                style={{
                    backgroundColor: isSolid ? 'rgba(0, 0, 0, 0.8)' : 'transparent', // Semi-transparent black
                    transition: 'background-color 0.3s ease-in-out', // Optional smooth transition
                }}
            >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home" onClick={scrollToHome}>
                        <img src={logo} alt="Logo" className='logo'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <button className="nav-link btn btn-link text-white" onClick={scrollToHome}>Home</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link text-white" onClick={scrollToAbout}>About Us</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link text-white" onClick={scrollToServices}>Service</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link text-white" onClick={scrollToProducts}>Products</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link text-white" onClick={openPopup}>Contact Us</button>

                                   {/* Conditionally render ContactUs Popup */}
                                 {showPopup && <ContactUs closePopup={closePopup} />}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;