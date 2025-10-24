import { Quote } from 'lucide-react';

export default function Milestone() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-dark to-dark-lighter">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Milestone
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-dark-card border border-gray-800 rounded-2xl p-10 hover:border-primary transition-all">
            <div className="text-5xl lg:text-6xl font-bold text-white mb-2">200+</div>
            <p className="text-gray-400">Company trusted us</p>
          </div>

          <div className="bg-dark-card border border-gray-800 rounded-2xl p-10 hover:border-primary transition-all">
            <div className="text-5xl lg:text-6xl font-bold text-white mb-2">95%</div>
            <p className="text-gray-400">client satisfaction rate</p>
          </div>

          <div className="bg-dark-card border border-gray-800 rounded-2xl p-10 hover:border-primary transition-all">
            <Quote className="w-12 h-12 text-primary mb-4" />
            <p className="text-gray-300 text-lg">
              Millions of people reached through our campaigns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
