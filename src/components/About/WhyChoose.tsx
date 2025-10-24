import { Lightbulb, Layout, Users, Heart } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Creative meets strategy',
    description: 'Data-driven results that elevate.',
  },
  {
    icon: Layout,
    title: 'Tailored, not templated.',
    description: 'Everything we do is custom-built to fit your brand.',
  },
  {
    icon: Users,
    title: 'Transparent collaboration.',
    description: "We're deeply in the loop, never in the dark.",
  },
  {
    icon: Heart,
    title: 'Passionate, local team.',
    description: "Dedicated to your brand's vision and success.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Yonile</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Think of us as more than an agency—we're your growth partners.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-dark-card to-dark-bg border border-white/10 rounded-2xl p-6 hover:border-cyan-accent/50 transition-all hover:scale-105"
              >
                <div className="w-12 h-12 bg-cyan-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-cyan-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
