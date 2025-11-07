import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-dark-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Interested in collaboration with us?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              We will help you reach your business goal
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Images */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.8 } },
              }}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden border-4 border-cyan-500 rotate-3 hover:rotate-0 transition-transform duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800">
                  <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                className="relative rounded-2xl overflow-hidden border-4 border-white -rotate-3 hover:rotate-0 transition-transform duration-300 mt-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              >
                <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800">
                  <img
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Team work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
