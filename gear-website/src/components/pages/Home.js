import '../styles/Home.css';
import React, { useRef, useState, useEffect } from 'react';
import products from '../data/products';
import Navbar from './Navbar';
import video1 from '../assets/videos/mainsection.mp4';
import aboutus from '../assets/images/aboutus.jpg';
import profilepic from '../assets/images/profilepic.png';
import banner from '../assets/images/Designer.jpg';
import Footer from './Footer';
import CareerSideTag from './SideTag';
import ContactUs from './ContactUs';






function scrollUp(serviceRowsRef) {
    if (serviceRowsRef.current) {
        serviceRowsRef.current.scrollBy({ top: -60, behavior: 'smooth' });
    }
}

function scrollDown(serviceRowsRef) {
    if (serviceRowsRef.current) {
        serviceRowsRef.current.scrollBy({ top: 60, behavior: 'smooth' });
    }
}

function Home() {

    const [showPopup, setShowPopup] = useState(false);

    // Open and Close Popup
    const openPopup = () => {
      setShowPopup(true);
    };
  
    const closePopup = () => {
      setShowPopup(false);
    };
    const [activeVideo, setActiveVideo] = useState(null);
    const scrollRef = useRef(null);
    const serviceRowsRef = useRef(null);
    const homeRef = useRef(null); // Ref for the top video section
    const aboutRef = useRef(null);
    const serviceRef = useRef(null);
    const productRef = useRef(null);
    const feedbackRef = useRef(null);
    const contactRef = useRef(null);
    const [navBackground, setNavBackground] = useState('transparent');

    useEffect(() => {
        const container = scrollRef.current;
        let scrollSpeed = 1; // Speed of auto-scroll
     
        const autoScroll = () => {
            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0; // Reset scroll position
            } else {
                container.scrollLeft += scrollSpeed; // Move the scroll
            }
        };

        const interval = setInterval(autoScroll, 20); // Adjust interval for smoothness

        return () => clearInterval(interval); // Cleanup the interval
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavBackground('black');
            } else {
                setNavBackground('transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (elementRef) => {
        if (elementRef.current) {
            window.scrollTo({
                top: elementRef.current.offsetTop - 60, // Adjust offset for navbar if needed
                behavior: 'smooth',
            });
        }
    };

    return (
        <div>
            {/* Sticky Navbar with Dynamic Background */}
            <Navbar
                background={navBackground}
                scrollToHome={() => scrollToSection(homeRef)}
                scrollToAbout={() => scrollToSection(aboutRef)}
                scrollToServices={() => scrollToSection(serviceRef)}
                scrollToProducts={() => scrollToSection(productRef)}
                scrollToFeedback={() => scrollToSection(feedbackRef)}
                scrollToContact={() => scrollToSection(contactRef)}
            />
        <CareerSideTag/>
         <div ref={homeRef} className="container-fluid video-section" id='home' style={{ paddingTop: '60px' }}>
    {/* <div className="video-overlay">
        <h1>Revolutionizing Robotics for the Future</h1>
        <p>Our startup is at the forefront of innovation, developing cutting-edge robotics solutions to tackle the most challenging automation needs of today and tomorrow.</p>
        <button className="btn btn-primary" onClick={() => scrollToSection(contactRef)}>Contact Us</button>
    </div> */}
    {/* <video autoPlay muted loop className="video-background">
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
    </video> */}
    <img src={banner} className="video-background" alt="Banner Image" />
</div>
            <div ref={aboutRef} className="container-fluid bg-dark text-success py-5 section-height about-section-height" id='about'>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6">
                <div className="image-container position-relative">
                    <img src={aboutus} alt="Why Choose Us" className="img-fluid rounded shadow" style={{ position: 'relative', zIndex: 2 }} />
                </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
                <div className="why-choose-us-section p-4 rounded shadow">
                    <div className="content-container">
                        <h2 className="mb-3 text-success">Why Choose Us</h2>
                        <p className="text-light">At GEAR PVT LTD (Green Energy AI Robotics), we are pioneering the future of automation with cutting-edge AI-driven robotics powered by sustainable energy. Our mission is to create intelligent, energy-efficient solutions that enhance productivity while reducing environmental impact. By integrating advanced artificial intelligence with green energy technologies, we help businesses optimize operations, lower costs, and contribute to a cleaner planet. With a commitment to innovation, reliability, and sustainability, GEAR PVT LTD is your trusted partner in building a smarter, greener future.</p>
                        {/* You can add a list or more content here */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<section ref={serviceRef} id='service'>
        <div className="container-fluid service-section section-height">
            <div className="row">
                {/* Left Column */}
                <div className="col-md-4 left-column">
                    <div className="content">
                        <p className="tagline">Innovating the Future</p>
                        <h2 className="heading">Our Robotics Services</h2>
                        <p className="description">
                        We specialize in transforming industries with cutting-edge Gear solutions. Using Green Robotics in maintenance and consulting, our expertise is tailored to meet your unique needs.
                        </p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-md-5 right-column">
                    <div className="scrollable-container">
                        <div className="arrow up-arrow" onClick={() => scrollUp(serviceRowsRef)}>▲</div>
                        <div className="service-rows" ref={serviceRowsRef}>
                            <div className="service-row">
                                <div className="icon">🔧</div>
                                <div className="text">
                                    <h4>Technical Support</h4>
                                    <p>We provide reliable technical support to ensure seamless operation, optimal performance, and timely maintenance, helping you maximize efficiency and minimize downtime.</p>
                                </div>
                            </div>
                            <div className="service-row">
                                <div className="icon">🚀</div>
                                <div className="text">
                                    <h4>Innovation</h4>
                                    <p>We continuously innovate to develop cutting-edge solutions that enhance efficiency, drive sustainability, and shape the future of automation.</p>
                                </div>
                            </div>
                            <div className="service-row">
                                <div className="icon">🔒</div>
                                <div className="text">
                                    <h4>Security</h4>
                                    <p>We implement robust security measures to protect systems, ensure data integrity, and safeguard operations against potential threats.</p>
                                </div>
                            </div>
                            <div className="service-row">
                                <div className="icon">🛠️</div>
                                <div className="text">
                                    <h4>Maintenance</h4>
                                    <p>We provide proactive maintenance services to enhance reliability, extend system lifespan, and prevent operational disruptions.</p>
                                </div>
                            </div>
                            <div className="service-row">
                                <div className="icon">💡</div>
                                <div className="text">
                                    <h4>Consulting</h4>
                                    <p>We offer expert consulting services to help businesses optimize automation, integrate sustainable technologies, and drive innovation effectively.</p>
                                </div>
                            </div>
                        </div>
                        <div className="arrow down-arrow" onClick={() => scrollDown(serviceRowsRef)}>▼</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div  ref={productRef}  id='#product' className='section-height green-black-theme product-page '>
            <div className="container-fluid">
    {/* Centered Content */}
    <div className="centered-content">
        <p className="tagline">Our Gear Products</p>
        <h2 className="heading">Innovative Gear Solutions</h2>
        <p className="description">
            Explore our range of cutting-edge Gear products designed to revolutionize industries and automate your workflows.
        </p>
    </div>
    <div ref={scrollRef} className="horizontal-scroll-container">
            <div className="horizontal-scroll">
                {[...products, ...products, ...products].map((product, index) => (
                    <div
                        key={`${product.id}-${index}`}
                        className="product-card"
                        onClick={() => console.log(product.video)} // Placeholder for video popup
                    >
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-info">
                            <h4>{product.name}</h4>
                            <p>{product.info}{' '}
                            {/* {product.video && ( // Conditionally render a "Watch Video" link
                                <a href="#" className="watch-video-link" onClick={(e) => {
                                    e.preventDefault();
                                    setActiveVideo(product.video);
                                }}>
                                    Watch Video
                                </a>
                            )}
                            <a href="#" className="read-more-link">
                                Read more
                            </a> */}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

  
  

    {/* Enlarged Video Popup
    {activeVideo && (
        <div className="video-popup">
            <div className="popup-overlay" onClick={() => setActiveVideo(null)}></div>
            <div className="popup-content">
                <button className="close-btn" onClick={() => setActiveVideo(null)}>
                    ✖
                </button>
                <video src={activeVideo} controls autoPlay className="popup-video"></video>
            </div>
        </div>
    )} */}

{/* {activeVideo && (
    <div className="video-popup">
        <div className="popup-overlay" onClick={() => setActiveVideo(null)}></div>
        <div className="popup-content">
            <button className="close-btn" onClick={() => setActiveVideo(null)}>
                ✖
            </button>
            <div className="video-container"> 
                <iframe
                    src={activeVideo} // Assuming activeVideo now holds the iframe URL
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </div>
)}
 */}
</div>
</div>
            {/* Feedback section */}
            <div ref={contactRef} className="container-fluid feedback-section" id='#contact'>
    <h2>Clients' Feedback</h2>
    <div className="row justify-content-center second-feedback">
        <div className="col-9 col-md-5 col-lg-3 feedback-box">
            <div className="feedback-content">
                <img src={profilepic} alt="Customer 1" className="feedback-image" />
                <div className="feedback-info">
                    
                    <h4>JS Infra Developers</h4>
                </div>
            </div>
            <p className="feedback">"GEAR Gate's automated system makes vehicle entry fast and hassle-free. It's accurate, secure, and works seamlessly. Highly recommended!"</p>
        </div>
        <div className="col-9 col-md-5 col-lg-3 feedback-box">
            <div className="feedback-content">
                <img src={profilepic} alt="Customer 2" className="feedback-image" />
                <div className="feedback-info">
                    
                    <h4>Green Home Enterprises</h4>
                </div>
            </div>
            <p className="feedback">"AI-PR social media manager has made content posting effortless! It generates engaging images and text daily, keeping our accounts active and boosting engagement. A game-changer for social media management!"</p>
        </div>
        <div className="col-9 col-md-5 col-lg-3 feedback-box">
            <div className="feedback-content">
                <img src={profilepic} alt="Customer 3" className="feedback-image" />
                <div className="feedback-info">
                <h4>Crux-AI</h4>
                </div>
            </div>
            <p className="feedback">"The GEAR image generator creates stunning, tailored product visuals in seconds, making marketing faster, easier, and more effective"</p>
        </div>
    </div>
</div>          

            
            {/* Contact us section */}
            <div  className="contact-us-container" >
                <div className="contact-us-box">
                    <div className="contact-us-left">
                        <h2>Get in Touch</h2>
                        <p>Have any questions or inquiries? Reach out to us for more information about our services and offerings.</p>
                    </div>
                    <div className="contact-us-right">
                    <button className="contact-btn" onClick={openPopup}> 
                    Contact Us
      </button>

      {showPopup && <ContactUs closePopup={closePopup} />}{/* Example of in-page link */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;