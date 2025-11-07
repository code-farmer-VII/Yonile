import React from 'react';
import { useNavigate } from 'react-router-dom';
import image_1 from "../../assets/Image/Portfolio/image-1.png";
import { motion, Variants } from 'framer-motion';
import image_2 from "../../assets/Image/Portfolio/imagethis.png";
import image_3 from "../../assets/Image/Portfolio/image-3.png";

const Portfolio: React.FC = () => {
  const navigate = useNavigate();
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
            Our Latest Works
          </h2>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
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
                <span className="inline-block px-3 py-1 bg-blue-bright/10 text-blue-bright text-xs rounded-full mb-4 capitalize">
                  {project.category}
                </span>
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
            </motion.div>
          ))}
        </motion.div>

        {/* See More Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate('/services')}
            className="bg-blue-bright hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-bright/20"
          >
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
