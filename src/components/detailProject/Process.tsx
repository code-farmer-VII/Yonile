import { Search, FileText, Sparkles, Rocket, Target } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    title: 'Discover & Understand',
  },
  {
    icon: FileText,
    title: 'Strategy & Planning',
  },
  {
    icon: Sparkles,
    title: 'Creative Development',
  },
  {
    icon: Rocket,
    title: 'Launch & Activation',
  },
  {
    icon: Target,
    title: 'Measure & Optimize',
  },
];

export default function Process() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">
          Our Process
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-center gap-8">
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white text-sm font-medium text-center max-w-[140px]">
                    {step.title}
                  </p>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block w-16 h-[2px] border-t-2 border-dashed border-gray-700 mb-16"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
