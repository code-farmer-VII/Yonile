import { Circle } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Circle className="w-6 h-6 text-gray-400 fill-gray-400" />
            <span className="text-xl font-semibold text-white">Yonile</span>
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
              Projects
            </a>
            <button className="bg-cyan-accent hover:bg-cyan-accent/90 text-dark-bg px-6 py-2 rounded-lg font-medium transition-all hover:scale-105">
              Contact
            </button>
          </nav>

          <button className="md:hidden text-gray-300 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
