import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background floating circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* Tag */}
          <motion.div
            className="inline-block mb-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
            }}
          >
            <span className="px-6 py-2 border border-gray-700 rounded-full text-sm text-gray-300 backdrop-blur-sm">
              WHAT WE HAVE DONE
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
            }}
          >
            Work That Speaks for Itself.
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
            }}
          >
            From bold campaigns to unforgettable experiences, our projects show how creativity and strategy come together to make brands shine.
          </motion.p>

          {/* Button */}
          <motion.button
            className="px-8 py-3 bg-dark-tertiary hover:bg-gray-700 border border-gray-700 rounded-lg font-medium transition-all"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See Our Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
