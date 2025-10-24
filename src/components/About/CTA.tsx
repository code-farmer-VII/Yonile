import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Interested in collaboration with us?
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We will help you reach your business goal
            </p>
            <button className="group flex items-center gap-2 px-8 py-4 bg-cyan-accent hover:bg-cyan-accent/90 text-dark-bg font-semibold rounded-lg transition-all hover:scale-105">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/20 to-blue-accent/20 rounded-2xl blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Collaboration"
                className="rounded-2xl w-full aspect-square object-cover border border-white/10"
              />
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team working"
                className="rounded-2xl w-full aspect-square object-cover border border-white/10 mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
