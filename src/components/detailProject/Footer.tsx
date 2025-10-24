import { Circle, Twitter, Facebook, Instagram, Globe } from 'lucide-react';

const footerLinks = [
  { title: 'Lorem', links: ['Link 1', 'Link 2', 'Link 3'] },
  { title: 'Lorem', links: ['Link 1', 'Link 2', 'Link 3'] },
  { title: 'Lorem', links: ['Link 1', 'Link 2', 'Link 3'] },
  { title: 'Lorem', links: ['Link 1', 'Link 2', 'Link 3'] },
];

export default function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <Circle className="w-7 h-7 text-gray-400" fill="currentColor" />
              </div>
              <span className="text-white font-semibold text-xl">O</span>
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © Copyright 2022, All Rights Reserved by Yonile
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary hover:bg-primary-light rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Globe className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
