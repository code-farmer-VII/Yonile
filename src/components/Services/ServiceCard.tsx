import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-[#0a1628] p-6 rounded-2xl flex flex-col items-start gap-4 border border-white/10 shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-transform duration-300"
      variants={cardVariants}
    >
      <div className="p-4 rounded-full bg-cyan-500/10 text-cyan-400 inline-flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
}
