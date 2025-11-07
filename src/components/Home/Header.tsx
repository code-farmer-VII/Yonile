import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from '../../assets/logo.png'; // Assuming your logo is named logo.png and is in the assets folder

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isScrolled, setIsScrolled] = useState(false); // 👈 New state for scroll detection
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
  ];

  // 🖱️ Scroll Effect: Sets isScrolled to true when scrolled past 10px
  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled based on vertical scroll position
      setIsScrolled(window.scrollY > 10);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    // Remove the event listener when the component unmounts (cleanup)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array means this runs only on mount and unmount

  useEffect(() => {
    // Handle root path explicitly for 'home'
    if (location.pathname === '/') {
      setActiveLink('home');
    } else {
      setActiveLink(location.pathname.substring(1));
    }
  }, [location]);

  // 🎨 Base Tailwind classes that change on scroll
  const headerBaseClasses = "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out";
  const scrolledHeaderClasses = "bg-white border-b border-gray-200 shadow-md"; // White background, border, and shadow when scrolled
  const initialHeaderClasses = "bg-navy-dark/95 backdrop-blur-sm border-b border-white/10"; // Initial dark background
  
  const initialTextClasses = "text-white"; // Initial text color (white)
  const scrolledTextClasses = "text-blue-600"; // Scrolled text color (blue)

  return (
    <header className={`${headerBaseClasses} ${isScrolled ? scrolledHeaderClasses : initialHeaderClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="Yonile Logo" className="h-12 w-auto" />
            <div className="flex flex-col items-start">
              <span className={`text-xl font-bold transition-colors ${isScrolled ? scrolledTextClasses : initialTextClasses}`}>YONILE</span>
              {/* Note: Kept the horizontal line color constant for simplicity, adjust if needed */}
              <div className="w-full h-px bg-blue-400 my-0.5"></div>
              <span className={`text-xs transition-colors ${isScrolled ? "text-gray-600" : "text-white/70"}`}>Communications</span> {/* Changed secondary text color too */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`/${link.path || link.id}`}
                onClick={(e) => {
                  const path = link.path || `/${link.id}`;
                  e.preventDefault();
                  navigate(path);
                }}
                className={`text-sm font-medium transition-colors px-3 py-2 rounded-full ${
                  activeLink === link.id
                    ? "bg-blue-bright/10 text-blue-bright" // Active link style remains consistent
                    : isScrolled 
                      ? "text-blue-600 hover:text-blue-800 hover:bg-blue-100" // Blue text when scrolled
                      : "text-white/80 hover:text-white hover:bg-white/5" // White text initially
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Note: Kept CTA button color consistent for visual pop, adjust if needed */}
          <button onClick={()=>{navigate("/contact")}} className="hidden md:block bg-blue-bright hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105">
            Contact
          </button>

          {/* Mobile Menu Button - Changes color on scroll */}
          <button
            className={`md:hidden transition-colors ${isScrolled ? scrolledTextClasses : initialTextClasses}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Note: Adjusted background and text color for mobile menu when scrolled */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t transition-colors ${isScrolled ? "border-gray-200" : "border-white/10"} ${isScrolled ? "bg-white" : "bg-navy-dark"}`}>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`/${link.path || link.id}`}
                  onClick={(e) => {
                    const path = link.path || `/${link.id}`;
                    e.preventDefault();
                    navigate(path);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                    activeLink === link.id
                      ? "bg-blue-bright/10 text-blue-bright"
                      : isScrolled
                        ? "text-blue-600 hover:text-blue-800" // Blue text when scrolled
                        : "text-white/80 hover:text-white" // White text initially
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button onClick={()=>{navigate("/contact")}} className="bg-blue-bright hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 w-full">
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;