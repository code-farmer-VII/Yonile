import React, { useState } from 'react';
import image_1 from "../../assets/Image/Portfolio/image 1.png";
import image_2 from "../../assets/Image/Portfolio/image 2.png";
import image_3 from "../../assets/Image/Portfolio/image 3.png";

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Work [20]');

  const filters = [
    'All Work [20]',
    'Web Design [8]',
    'Digital Marketing [6]',
    'Branding [6]'
  ];

  const projects = [
    {
      title: 'Janboro Real Estate',
      description: 'Developed a robust brand identity that embodies trust and expertise.',
      image: image_3,
      category: 'branding'
    },
    {
      title: 'Marechaye',
      description: 'Designed a playful brand experience that celebrates imagination and learning in kids.',
      image: image_2,
      category: 'design'
    },
    {
      title: 'Flintstone Homes',
      description: 'Created a digital platform that builds trust and connects with homeowners.',
      image: image_1,
      category: 'web'
    }
  ];

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
            Our Latest Works
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-bright text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <button className="w-10 h-10 bg-blue-bright rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <p className="text-white/60 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
