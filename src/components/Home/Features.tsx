import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      ),
      title: 'Authentic Brand Voice',
      description: 'Crafted to fit Your Brand\'s Voice, personality, and vision for genuine connections.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      ),
      title: 'Versatile Growth',
      description: 'From paid ads to content marketing, we offer a diverse toolkit for your success.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      title: 'Local Expertise, Global Reach',
      description: 'Deeply rooted in [Location]and fluent in international growth strategies.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-bright/10 border border-blue-bright/30 mb-4">
            <span className="text-blue-bright text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A blend of insight, creativity, and strategy that drives meaningful results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card with border gradient effect */}
              <div className="relative bg-gradient-to-br from-blue-900/30 to-transparent p-8 rounded-2xl border border-blue-bright/30 hover:border-blue-bright/50 transition-all duration-300 h-full backdrop-blur-sm">
                {/* Decorative corner line */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-bright rounded-tl-2xl"></div>

                {/* Icon */}
                <div className="w-14 h-14 bg-blue-bright/20 rounded-xl flex items-center justify-center text-blue-bright mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
