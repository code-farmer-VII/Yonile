import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
      ),
      title: 'Branding & Strategy',
      description: 'From brand identity to strategic positioning, we help you stand out.',
      link: 'Start building now',
      gradient: 'from-blue-600/20 to-blue-900/40',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
        </svg>
      ),
      title: 'Website Design',
      description: 'Responsive, stunning websites that convert visitors into customers.',
      link: 'Start Exploring Now',
      gradient: 'from-purple-600/20 to-purple-900/40',
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
        </svg>
      ),
      title: 'Social Media Management',
      description: 'Engage your audience and grow your online community with strategic content.',
      link: 'Build your business now',
      gradient: 'from-orange-600/20 to-red-900/40',
      iconBg: 'bg-orange-500/20',
      iconColor: 'text-orange-400'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm6 10h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V9h4v2zm0-4h-4V5h4v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
        </svg>
      ),
      title: 'Media Production',
      description: 'Visual storytelling that captures attention and delivers your message.',
      link: 'Kickstart your journey',
      gradient: 'from-blue-700/20 to-indigo-900/40',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h9v2H5zm0-3h9v2H5zm0 6h5v2H5z"/>
        </svg>
      ),
      title: 'Advertising',
      description: 'Strategic placement and creative design for ads that deliver results.',
      link: 'Begin the change',
      gradient: 'from-purple-700/20 to-pink-900/40',
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      ),
      title: 'Experiential Marketing',
      description: 'Immersive events that connect and engage audiences.',
      link: 'Capture the opportunity',
      gradient: 'from-orange-700/20 to-red-900/40',
      iconBg: 'bg-orange-500/20',
      iconColor: 'text-orange-400'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-bright/10 border border-blue-bright/30 mb-4">
            <span className="text-blue-bright text-sm font-medium">Learn More No filter</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions to Elevate Your Brand
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`relative bg-gradient-to-br ${service.gradient} p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full backdrop-blur-sm hover:transform hover:scale-105`}>
                {/* Icon */}
                <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center ${service.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center text-white/90 hover:text-white font-medium group/link"
                >
                  {service.link}
                  <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
