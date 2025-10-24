import { Palette, MonitorSmartphone, Share2, Video, TrendingUp, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Branding & Strategy',
    description: 'Blueprints identities that leave an impact and tell a story.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Website Design',
    description: 'Stunning, engaging digital experiences.',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Content strategies that connect and inspire.',
  },
  {
    icon: Video,
    title: 'Media Production',
    description: 'Award-level filming that captures real moments.',
  },
  {
    icon: TrendingUp,
    title: 'Advertising',
    description: 'Strategic placements that maximize your ROI.',
  },
  {
    icon: Sparkles,
    title: 'Experiential Marketing',
    description: 'Unforgettable experiences and campaigns.',
  },
];

export default function Services() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            We Offer
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Helping brands tell their story, engage audiences, and create memorable experiences through strategy, design, and media.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-dark-card border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition-all hover:scale-105 hover:border-cyan-accent/50"
              >
                <div className="w-12 h-12 bg-cyan-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
