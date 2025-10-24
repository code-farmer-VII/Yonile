import { Twitter, Facebook, Instagram, Github } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    { title: 'Lorem', links: ['Link', 'Link', 'Link', 'Link'] },
    { title: 'Lorem', links: ['Link', 'Link', 'Link', 'Link'] },
    { title: 'Lorem', links: ['Link', 'Link', 'Link', 'Link'] },
    { title: 'Lorem', links: ['Link', 'Link', 'Link', 'Link'] },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Github, href: '#' },
  ];

  return (
    <footer className="bg-dark-secondary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-gray-400"></div>
              </div>
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
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
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © Copyright 2025. All Rights Reserved by Yonile
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-dark-tertiary border border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:border-gray-600 transition-all"
                >
                  <Icon size={18} className="text-gray-400" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
