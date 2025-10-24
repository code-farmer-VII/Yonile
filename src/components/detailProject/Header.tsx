import { Circle } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <Circle className="w-5 h-5 text-gray-400" fill="currentColor" />
            </div>
            <span className="text-white font-semibold text-lg">Yonile</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
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
          </div>

          <button className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-full transition-all hover:scale-105">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
