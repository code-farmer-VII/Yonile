import React from 'react';
import { ArrowRight } from 'lucide-react';


const CTA: React.FC = () => {
  return (
<section className="py-20 px-6 bg-[#0a1628]">
      <div className="container mx-auto">
        <div className="relative max-w-4xl mx-auto">
          {/* background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />

          {/* main card */}
          <div className="relative bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-3xl p-12 text-center backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Interested In Collaborating With Us?
            </h2>

            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s build your brand&apos;s future together. Drop us a line.
            </p>

            {/* Custom button */}
            <button
              className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-200 group"
            >
              Grow Your Business Now
              <ArrowRight className="ml-2 w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
