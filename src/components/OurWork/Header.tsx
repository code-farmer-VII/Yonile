import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-secondary/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gray-400"></div>
            </div>
            <span className="text-lg font-semibold">Yonile</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About Us
            </a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="#work" className="text-gray-300 hover:text-white transition-colors">
              Our Work
            </a>
          </nav>

          <button className="hidden md:block px-6 py-2 bg-primary hover:bg-primary-dark transition-colors rounded-lg font-medium">
            Contact
          </button>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-secondary border-t border-gray-800/50">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors py-2">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors py-2">
              About Us
            </a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors py-2">
              Services
            </a>
            <a href="#work" className="text-gray-300 hover:text-white transition-colors py-2">
              Our Work
            </a>
            <button className="px-6 py-2 bg-primary hover:bg-primary-dark transition-colors rounded-lg font-medium mt-2">
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
