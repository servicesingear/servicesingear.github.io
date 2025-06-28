import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/ui/Home';
import AboutUs from './components/pages/ui/AboutUs';
import Service from './components/pages/ui/Service';
import Product from './components/pages/ui/Product';
import ContactUs from './components/pages/ui/ContactUs';
import Career from './components/pages/ui/Career';
import Navbar from './components/pages/ui/Navbar';
import Footer from './components/pages/ui/Footer';
import JobApply from './components/pages/ui/JobApply';
import ScrollToTop from './components/pages/ui/SrollToTop';



function App() {
const redirect = sessionStorage.redirect;
if (redirect) {
  sessionStorage.removeItem('redirect');
  window.history.replaceState(null, '', redirect);
}

  return (
    <div>
     
    <Router>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/career" element={<Career/>} />
        <Route path="/careers/:id" element={<JobApply/>} />

      </Routes>
      <Footer/>
    </Router>
    </div>

  );
}

export default App;
