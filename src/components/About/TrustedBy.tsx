'use client';

import { motion } from 'framer-motion';
import img from "../../assets/Image/Hero/Yonile Companies.jpg";

export default function TrustedBy() {
  const logos = [
    'JENBORO REAL ESTATE',
    'Invictare',
    'Khil',
    'CANAL+',
    'Invictare',
    'Khil',
    'CANAL+',
    'Safaricom',
    'DStv',
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      className="py-16 px-4 border-t border-white/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Title and Image */}
          <motion.div
            variants={fadeLeft}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="text-blue-bright font-semibold text-sm uppercase tracking-wider bg-blue-900/20 px-4 py-2 rounded-full inline-block"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Trusted by 200+ companies
            </motion.h2>

            <motion.img
              src={img}
              alt="Trusted by Companies"
              className="w-full h-96 rounded-lg mt-6 object-cover shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Right side - Text and Logos */}
          <motion.div
            className="flex flex-col justify-center"
            variants={fadeRight}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <motion.p
              className="text-gray-400 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              We help brands define their vision, craft compelling stories, and captivate
              audiences. From branding and strategy to media production, social media
              marketing, and experiential campaigns — we turn ideas into unforgettable
              experiences.
            </motion.p>

            {/* Logos Grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
            >
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-center h-16 transition-all hover:bg-white/10 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.07 }}
                >
                  <span className="text-xs sm:text-sm font-semibold text-center">
                    {logo}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
