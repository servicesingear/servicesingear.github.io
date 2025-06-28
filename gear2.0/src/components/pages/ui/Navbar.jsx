import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Phone,
  Briefcase,
  Mail,
  Package,
  UserRoundCheck,
  Users,
} from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  // Apply class to <html> for Tailwind dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "About Us", path: "/about", icon: <Users size={18} /> },
    { name: "Services", path: "/services", icon: <Briefcase size={18} /> },
    { name: "Products", path: "/products", icon: <Package size={18} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={18} /> },
    { name: "Career", path: "/career", icon: <UserRoundCheck size={18} /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolling || menuOpen
          ? "shadow-md bg-[#0F0F0F]/95 backdrop-blur border-b-4 border-green-600"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-[#90C67C] tracking-wide">
          <img src="/images/logo.png" alt="Gear Logo" className="w-20" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white font-medium items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => {
                  if (location.pathname === item.path) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`flex items-center gap-1 hover:text-[#67AE6E] transition duration-200 ${
                  location.pathname === item.path
                    ? "text-[#7ed957] font-bold"
                    : ""
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#90C67C]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-[#0F0F0F] px-6 pb-6 space-y-4 text-[#CCCCCC] font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => {
                  if (location.pathname === item.path) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  setMenuOpen(false);
                }}
                className={`flex items-center gap-2 py-2 px-3 rounded-md transition 
    hover:text-white hover:bg-green-700/20 
    ${
      location.pathname === item.path
        ? "text-green-400 bg-green-700/10 font-semibold"
        : "text-[#CCCCCC]"
    }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
