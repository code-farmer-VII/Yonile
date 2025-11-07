import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { value: '1M+', label: 'Tickets Delivered This Month' },
    { value: '53K+', label: 'Active Customers Rate' },
    { value: '98.29%', label: 'Customer Satisfaction Rate' },
  ];

  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-white">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
