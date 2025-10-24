import { ArrowRight } from 'lucide-react';

const stats = [
  {
    label: '200+ companies trusted us',
  },
  {
    label: '95% client satisfaction rate',
  },
  {
    label: 'Millions of people reached through our campaigns',
  },
];

export default function Results() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get Proven Results
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            We Combine Strategy, Creativity, And Measurable Results To Help Your Brand Grow And Stand Out.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center pb-8 border-b border-gray-800"
            >
              <p className="text-white text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <p className="text-gray-400 text-lg">Let's Create Something Great Together</p>
          <button className="group bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-full inline-flex items-center gap-2 transition-all hover:scale-105">
            Contact Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
