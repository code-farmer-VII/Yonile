'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Layout, Users, Heart } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Creative meets strategy',
    description: 'Data-driven results that elevate.',
  },
  {
    icon: Layout,
    title: 'Tailored, not templated.',
    description: 'Everything we do is custom-built to fit your brand.',
  },
  {
    icon: Users,
    title: 'Transparent collaboration.',
    description: "We're deeply in the loop, never in the dark.",
  },
  {
    icon: Heart,
    title: 'Passionate, local team.',
    description: "Dedicated to your brand's vision and success.",
  },
];

export default function WhyChoose() {
  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.section
      className="py-24 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-blue-bright">Yonile</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Think of us as more than an agency — we're your growth partners.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-blue-600/20 to-blue-900/40 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full backdrop-blur-sm hover:transform hover:scale-105"
                variants={cardVariants}
                whileHover={{ scale: 1.07 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 bg-blue-bright/20 rounded-xl flex items-center justify-center text-blue-bright mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
