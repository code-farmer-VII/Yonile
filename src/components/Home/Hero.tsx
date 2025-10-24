import React from 'react';
import { Play } from 'lucide-react';
import image_1 from "../../assets/Image/Hero/image-63.png"; 
import image_2 from "../../assets/Image/Hero/image-64.png"
import image_3 from "../../assets/Image/Hero/image-65.png"


const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-bright/10 border border-blue-bright/30 mb-8">
            <span className="text-blue-bright text-sm font-medium">Your Dream, Our Strategy</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Grow Your Business Online.
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            We're a results-driven digital marketing agency helping brands grow smarter and faster. From
            strategy to design, we build digital experiences that tell your story and drive results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="bg-blue-bright hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-bright/20 w-full sm:w-auto">
              See Our work
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-white/20 backdrop-blur-sm w-full sm:w-auto flex items-center justify-center gap-2">
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Video Player Mockup */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-white/10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play className="w-10 h-10 text-cyan-400 ml-1" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg overflow-hidden">
                <img
                  src={image_1}
                  alt="Team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg overflow-hidden">
                <img
                  src={image_2}
                  alt="Presentation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg overflow-hidden">
                <img
                  src={image_3}
                  alt="Working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
