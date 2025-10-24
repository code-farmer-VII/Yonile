import { Circle, Twitter, Facebook, Instagram, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Circle className="w-10 h-10 fill-cyan-500 text-cyan-500" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Lorem</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Link
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Lorem</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Link
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Lorem</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Link
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Lorem</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © Copyright 2022, All Rights Reserved by Yonile
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-colors"
            >
              <Twitter className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-colors"
            >
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-colors"
            >
              <Instagram className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-colors"
            >
              <Github className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
