import '../styles/Home.css';
import React, { useRef, useState, useEffect } from 'react';
import products from '../data/products';
import Navbar from './Navbar';
import video1 from '../assets/videos/mainsection.mp4';
import aboutus from '../assets/images/aboutus.jpg';
import profilepic from '../assets/images/profilepic.png';
import banner from '../assets/images/Designer.jpg';
import Footer from './Footer';



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
    const [activeVideo, setActiveVideo] = useState(null);
    const serviceRowsRef = useRef(null);
    const homeRef = useRef(null); // Ref for the top video section
    const aboutRef = useRef(null);
    const serviceRef = useRef(null);
    const productRef = useRef(null);
    const feedbackRef = useRef(null);
    const contactRef = useRef(null);
    const [navBackground, setNavBackground] = useState('transparent');

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
            <div ref={aboutRef} className="container-fluid bg-dark text-success py-5" id='about'>
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
                        <p className="text-light">At Robotics Co., we are committed to pushing the boundaries of technology. Our expert team of engineers and innovators work tirelessly to bring you state-of-the-art robotic solutions that enhance efficiency, safety, and productivity. Here’s why you should choose us:</p>
                        {/* You can add a list or more content here */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<section ref={serviceRef} id='service'>
        <div className="container-fluid service-section">
            <div className="row">
                {/* Left Column */}
                <div className="col-md-4 left-column">
                    <div className="content">
                        <p className="tagline">Innovating the Future</p>
                        <h2 className="heading">Our Robotics Services</h2>
                        <p className="description">
                            At Robotics Co., we specialize in transforming industries with cutting-edge robotics solutions. From AI-powered systems to maintenance and consulting, our expertise is tailored to meet your unique needs.
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
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </div>
                            <div className="service-row">
                                <div className="icon">🚀</div>
                                <div className="text">
                                    <h4>Innovation</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </div>
                            <div className="service-row">
                                <div className="icon">🔒</div>
                                <div className="text">
                                    <h4>Security</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </div>
                            <div className="service-row">
                                <div className="icon">🛠️</div>
                                <div className="text">
                                    <h4>Maintenance</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </div>
                            <div className="service-row">
                                <div className="icon">💡</div>
                                <div className="text">
                                    <h4>Consulting</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </div>
                        </div>
                        <div className="arrow down-arrow" onClick={() => scrollDown(serviceRowsRef)}>▼</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
            <div ref={productRef} className="container-fluid product-page green-black-theme" id='#product'>
    {/* Centered Content */}
    <div className="centered-content">
        <p className="tagline">Our Robotics Products</p>
        <h2 className="heading">Innovative Robotics Solutions</h2>
        <p className="description">
            Explore our range of cutting-edge robotics products designed to revolutionize industries and automate your workflows.
        </p>
    </div>

    {/* Horizontal Scroll for Product Cards */}
    <div className='horizontal-scroll-container'>
        <div className="horizontal-scroll">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="product-card"
                    onClick={() => setActiveVideo(product.video)} // Keep this for potential video popup
                >
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-info">
                        <h4>{product.name}</h4>
                        <p>
                            {product.info}{' '}
                            {product.video && ( // Conditionally render a "Watch Video" link
                                <a href="#" className="watch-video-link" onClick={(e) => {
                                    e.preventDefault();
                                    setActiveVideo(product.video);
                                }}>
                                    Watch Video
                                </a>
                            )}
                            <a href="#" className="read-more-link">
                                Read more
                            </a>
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

{activeVideo && (
    <div className="video-popup">
        <div className="popup-overlay" onClick={() => setActiveVideo(null)}></div>
        <div className="popup-content">
            <button className="close-btn" onClick={() => setActiveVideo(null)}>
                ✖
            </button>
            <div className="video-container"> {/* New container for iframe */}
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
</div>
            {/* Feedback section */}
            <div ref={feedbackRef} className="container-fluid feedback-section" id="feedback">
    <h2>Customer Feedback</h2>
    <div className="row justify-content-center second-feedback">
        <div className="col-9 col-md-5 col-lg-3 feedback-box">
            <div className="feedback-content">
                <img src={profilepic} alt="Customer 1" className="feedback-image" />
                <div className="feedback-info">
                    <h4>John Doe</h4>
                    <p className="company">Tech Innovators Inc.</p>
                </div>
            </div>
            <p className="feedback">"Robotics Co. provided us with exceptional service. Their innovative solutions have transformed our business operations. Highly recommended!"</p>
        </div>
        <div className="col-9 col-md-5 col-lg-3 feedback-box">
            <div className="feedback-content">
                <img src={profilepic} alt="Customer 2" className="feedback-image" />
                <div className="feedback-info">
                    <h4>Jane Smith</h4>
                    <p className="company">Automation Experts Ltd.</p>
                </div>
            </div>
            <p className="feedback">"The team at Robotics Co. is incredibly knowledgeable and supportive. Their robotics solutions are top-notch and have greatly improved our efficiency."</p>
        </div>
        <div className="col-9 col-md-5 col-lg-3 feedback-box">
            <div className="feedback-content">
                <img src={profilepic} alt="Customer 3" className="feedback-image" />
                <div className="feedback-info">
                    <h4>Michael Johnson</h4>
                    <p className="company">FutureTech Solutions</p>
                </div>
            </div>
            <p className="feedback">"Working with Robotics Co. has been a game-changer for our company. Their expertise and dedication to customer satisfaction are unparalleled."</p>
        </div>
    </div>
</div>          

            
            {/* Contact us section */}
            <div ref={contactRef} className="contact-us-container" id='#contact'>
                <div className="contact-us-box">
                    <div className="contact-us-left">
                        <h2>Get in Touch</h2>
                        <p>Have any questions or inquiries? Reach out to us for more information about our services and offerings.</p>
                    </div>
                    <div className="contact-us-right">
                        <button onClick={() => window.location.href = '#contact'}>Contact Us</button> {/* Example of in-page link */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;