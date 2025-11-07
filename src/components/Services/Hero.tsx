import { Target, Monitor, Clapperboard, Megaphone, Sparkles } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    { icon: Target, title: 'Branding & Strategy', description: 'Distinctive identities that leave an impression.' },
    { icon: Monitor, title: 'Website Design', description: 'Seamless, engaging digital experiences.' },
    { icon: Clapperboard, title: 'Media Production', description: 'Visual storytelling that reaches and resonates.' },
    { icon: Megaphone, title: 'Advertising', description: 'Strategic placements that maximize reach and ROI.' },
    { icon: Sparkles, title: 'Experiential Marketing', description: 'Immersive events that connect and engage.' },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-dark-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore what we offer crafted to elevate your brand and create impactful experiences.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
