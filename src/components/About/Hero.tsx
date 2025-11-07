import { motion, Variants } from 'framer-motion';

export default function Hero() {
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[450px] flex items-center justify-center pt-20 pb-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-accent/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 50% 20%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)',
      }}></div>
      <motion.div
        className="relative max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button variants={itemVariants} className="mb-8 px-4 py-2 rounded-full bg-blue-bright/10 border border-blue-bright/30 text-sm text-blue-bright hover:bg-blue-bright/20 transition-all">
          WHO WE ARE
        </motion.button>
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Crafting Experiences That Connect
        </motion.h1>
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          We strategize creative narratives to bring brands to life. From captivating visuals to meaningful storytelling, we ignite emotions and build lasting connections.
        </motion.p>
      </motion.div>
    </section>
  );
}
