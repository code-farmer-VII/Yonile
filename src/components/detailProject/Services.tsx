import { Palette, Monitor, Share2, Video, Megaphone, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Branding & Strategy',
  },
  {
    icon: Monitor,
    title: 'Website Design',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
  },
  {
    icon: Video,
    title: 'Media Production',
  },
  {
    icon: Megaphone,
    title: 'Advertising',
  },
  {
    icon: Sparkles,
    title: 'Experiential Marketing',
  },
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-dark-lighter to-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.slice(0, 4).map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-dark-card border border-gray-800 rounded-2xl p-8 hover:border-primary transition-all hover:scale-105 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{service.title}</h3>
                </div>
              );
            })}
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Service Provided
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor Lorem ipsum dolor sit
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.slice(4).map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-dark-card border border-gray-800 rounded-2xl p-8 hover:border-primary transition-all hover:scale-105 group"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-white font-semibold text-lg">{service.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
