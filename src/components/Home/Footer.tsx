import React from "react";
import logo from "../../assets/Logo.png";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const footerLinks: Record<string, string> = {
    Home: "/",
    About: "/about",
    Services: "/services",
    "Contact Us": "/contact-us",
  };

  const location = useLocation();

  return (
    <footer className="bg-[#0a1628] border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img src={logo} alt="Yonile Logo" className="h-full w-auto" />
              </div>
              <span className="text-2xl font-bold text-white">Yonile</span>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, link], index) => {
            const isActive = location.pathname === link;
            return (
              <div key={index}>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={link}
                      className={`text-sm transition-colors ${
                        isActive ? "text-cyan-500" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {title}
                    </a>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-white/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Yonile. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
