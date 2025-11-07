import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Award, LayoutTemplate, Share2, Clapperboard, Megaphone, PartyPopper } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Branding & Strategy',
      description: 'From brand identity to strategic positioning, we help you stand out.',
      link: 'Start building now',
      gradient: 'from-blue-600/20 to-blue-900/40',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: <LayoutTemplate className="w-8 h-8" />,
      title: 'Website Design',
      description: 'Responsive, stunning websites that convert visitors into customers.',
      link: 'Start Exploring Now',
      gradient: 'from-purple-600/20 to-purple-900/40',
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Social Media Management',
      description: 'Engage your audience and grow your online community with strategic content.',
      link: 'Build your business now',
      gradient: 'from-orange-600/20 to-red-900/40',
      iconBg: 'bg-orange-500/20',
      iconColor: 'text-orange-400',
    },
    {
      icon: <Clapperboard className="w-8 h-8" />,
      title: 'Media Production',
      description: 'Visual storytelling that captures attention and delivers your message.',
      link: 'Kickstart your journey',
      gradient: 'from-blue-700/20 to-indigo-900/40',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Advertising',
      description: 'Strategic placement and creative design for ads that deliver results.',
      link: 'Begin the change',
      gradient: 'from-purple-700/20 to-pink-900/40',
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: 'Experiential Marketing',
      description: 'Immersive events that connect and engage audiences.',
      link: 'Capture the opportunity',
      gradient: 'from-orange-700/20 to-red-900/40',
      iconBg: 'bg-orange-500/20',
      iconColor: 'text-orange-400',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-bright/10 border border-blue-bright/30 mb-4">
            <span className="text-blue-bright text-sm font-medium">Learn More No filter</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions to Elevate Your Brand
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <div className={`relative bg-gradient-to-br ${service.gradient} p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full backdrop-blur-sm hover:transform hover:scale-105`}>
                {/* Icon */}
                <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center ${service.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center text-white/90 hover:text-white font-medium group/link"
                >
                  {service.link}
                  <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
