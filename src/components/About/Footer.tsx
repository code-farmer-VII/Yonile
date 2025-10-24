import { Circle, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Lorem: ['Lorem', 'Lorem', 'Lorem', 'Lorem'],
  };

  return (
    <footer className="border-t border-white/5 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Circle className="w-6 h-6 text-gray-400 fill-gray-400" />
              <span className="text-xl font-semibold">Yonile</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {[...Array(3)].map((_, i) => (
            <div key={i}>
              <h3 className="font-semibold mb-4">Lorem</h3>
              <ul className="space-y-2">
                {[...Array(4)].map((_, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Lorem
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
          <p className="text-gray-400 text-sm">
            © Copyright 2025. All Rights Reserved by Yonile
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-cyan-accent/20 border border-white/10 hover:border-cyan-accent flex items-center justify-center transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-cyan-accent/20 border border-white/10 hover:border-cyan-accent flex items-center justify-center transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-cyan-accent/20 border border-white/10 hover:border-cyan-accent flex items-center justify-center transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
