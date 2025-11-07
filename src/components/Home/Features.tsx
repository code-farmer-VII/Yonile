import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Feather, Layers, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Feather className="w-6 h-6" />,
      title: 'Authentic Brand Voice',
      description: 'Crafted to fit Your Brand\'s Voice, personality, and vision for genuine connections.',
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Versatile Growth',
      description: 'From paid ads to content marketing, we offer a diverse toolkit for your success.',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Local Expertise, Global Reach',
      description: 'Deeply rooted in [Location] and fluent in international growth strategies.',
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-bright/10 border border-blue-bright/30 mb-4">
            <span className="text-blue-bright text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A blend of insight, creativity, and strategy that drives meaningful results
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              {/* Card with styles similar to Services.tsx */}
              <div className="relative bg-gradient-to-br from-blue-600/20 to-blue-900/40 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full backdrop-blur-sm hover:transform hover:scale-105">
                {/* Icon */}
                <div className="w-14 h-14 bg-blue-bright/20 rounded-xl flex items-center justify-center text-blue-bright mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
