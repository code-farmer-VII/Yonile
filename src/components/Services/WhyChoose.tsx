import { Lightbulb, Grid3x3, Target, Users } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function WhyChoose() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Creative meets strategy.',
      description: 'We design visuals that convert.',
    },
    {
      icon: Grid3x3,
      title: 'Tailored, not templated.',
      description: 'Everything we do is custom-built for you.',
    },
    {
      icon: Target,
      title: 'Transparent collaboration.',
      description: "Yonile: always in the loop, never in the dark.",
    },
    {
      icon: Users,
      title: 'Passionate, local team.',
      description: "Invested in your brand's vision and success.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-dark-blue-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-cyan-400">Yonile</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Think of us as more than an agency, we're your growth partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
