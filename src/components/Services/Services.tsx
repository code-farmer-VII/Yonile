import { Target, Monitor, Clapperboard, Megaphone, Sparkles } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      icon: Target,
      title: 'Branding & Strategy',
      description: 'Distinctive identities that leave an impression.',
    },
    {
      icon: Monitor,
      title: 'Website Design',
      description: 'Seamless, engaging digital experiences.',
    },
    {
      icon: Target,
      title: 'Branding & Strategy',
      description: 'Distinctive identities that leave an impression.',
    },
    {
      icon: Clapperboard,
      title: 'Media Production',
      description: 'Visual storytelling that reaches and resonates.',
    },
    {
      icon: Megaphone,
      title: 'Advertising',
      description: 'Strategic placements that maximize reach and ROI.',
    },
    {
      icon: Sparkles,
      title: 'Experiential Marketing',
      description: 'Immersive events that connect and engage.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-dark-blue-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Our <span className="text-cyan-400">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
