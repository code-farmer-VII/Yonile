import { Circle } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto bg-gradient-to-r from-slate-800/80 to-cyan-900/80 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Circle className="w-8 h-8 fill-slate-600 text-slate-600" />
            <span className="text-white font-semibold text-lg">Yonile</span>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li>
              <a href="#home" className="text-slate-300 hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="text-white font-medium">
                Services
              </a>
            </li>
            <li>
              <a href="#work" className="text-slate-300 hover:text-white transition-colors">
                Projects
              </a>
            </li>
          </ul>

          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
}
