import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-300">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>

      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
