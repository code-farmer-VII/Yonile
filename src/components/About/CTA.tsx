import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Interested in collaboration with us?
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We will help you reach your business goal
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-2 px-8 py-4 bg-blue-600 bg-cyan-accent hover:bg-cyan-accent/90 text-dark-bg font-semibold rounded-lg transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/20 to-blue-accent/20 rounded-2xl blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <motion.img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Collaboration"
                className="rounded-2xl w-full aspect-square object-cover border border-white/10"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team working"
                className="rounded-2xl w-full aspect-square object-cover border border-white/10 mt-8"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
