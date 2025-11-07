import React from "react";
import { motion } from "framer-motion";

export default function ResearchingConsultant() {
  // Smooth fade & slide animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Section */}
          <motion.div
            className="space-y-6"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="inline-block">
              <span className="text-blue-bright font-semibold text-sm uppercase tracking-wider bg-blue-900/20 px-4 py-2 rounded-full">
                YONILE COMMUNICATION PROFILE
              </span>
            </div>
            <p className="text-lg text-white/70 leading-relaxed">
              Yonile Communication is a dynamic digital marketing agency based
              in Addis Ababa, Ethiopia, with a strong track record of over
              eighteen years in the industry. We are dedicated to helping
              businesses thrive in the digital landscape by offering innovative
              and results-driven communication strategies.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Our expertise spans a comprehensive range of services, including
              digital marketing, content creation, social media management, and
              media production. We pride ourselves on our customer-centric
              approach, delivering tailored solutions that connect brands with
              their target audiences and drive measurable success.
            </p>
          </motion.div>

          {/* Right Stats Cards Section */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* First Column */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-blue-900/20 p-8 rounded-2xl border border-blue-bright/20 hover:border-blue-bright/50 transition-colors"
              >
                <p className="text-4xl font-bold text-blue-bright mb-2">6+</p>
                <p className="text-white font-medium">Years Experience</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-blue-900/20 p-8 rounded-2xl border border-blue-bright/20 hover:border-blue-bright/50 transition-colors"
              >
                <p className="text-4xl font-bold text-blue-bright mb-2">99%</p>
                <p className="text-white font-medium">Client Satisfaction</p>
              </motion.div>
            </div>

            {/* Second Column */}
            <div className="space-y-6 pt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-blue-900/20 p-8 rounded-2xl border border-blue-bright/20 hover:border-blue-bright/50 transition-colors"
              >
                <p className="text-4xl font-bold text-blue-bright mb-2">10+</p>
                <p className="text-white font-medium">Active Clients</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-blue-900/20 p-8 rounded-2xl border border-blue-bright/20 hover:border-blue-bright/50 transition-colors"
              >
                <p className="text-4xl font-bold text-blue-bright mb-2">50+</p>
                <p className="text-white font-medium">Team Members</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
