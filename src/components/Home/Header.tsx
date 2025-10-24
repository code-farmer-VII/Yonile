import React, { useState } from "react";
import { useNavigate } from "react-router";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Track active link
  // to navigate one route to another make sure to use this
  const navigate = useNavigate();
  const navLinks = [
    { id: " ", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "project", label: "Projects" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-bright rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">Yonile</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`/${link.id}`}
                onClick={() => setActiveLink(link.id)}
                className={`text-sm font-medium transition-colors ${
                  activeLink === link.id
                    ? "text-blue-400" // Active link color
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button onClick={()=>{navigate("/contact")}} className="hidden md:block bg-blue-bright hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105">
            Contact
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => {
                    setActiveLink(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-sm font-medium transition-colors ${
                    activeLink === link.id
                      ? "text-blue-400"
                      : "text-white/80 hover:text-white"
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
