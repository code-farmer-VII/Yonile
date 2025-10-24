import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>

      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">{description}</p>

      <button className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors group/btn">
        <span>Contact Us</span>
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
