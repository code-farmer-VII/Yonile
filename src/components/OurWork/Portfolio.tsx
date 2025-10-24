import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import img3 from '../../assets/Image/our-work/Rectangle 23871.png'
import img4 from '../../assets/Image/our-work/Rectangle 23873.png'
import img1 from '../../assets/Image/our-work/Rectangle 23876.png'
import img2 from '../../assets/Image/our-work/Rectangle 23877.png'

interface Project {
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('UI/UX Design[10]');

  const filters = [
    'All Work [20]',
    'UI/UX Design[10]',
    'Digital Marketing [5]',
    'Branding [4]',
  ];

  const projects: Project[] = [
    {
      title: 'Flintstone Homes',
      description: 'Created a digital presence that builds trust and connects with homebuyers.',
      image: img1,
      imagePosition: 'right',
    },
    {
      title: 'Meneshaye',
      description: 'Designed a playful brand experience that inspires imagination and learning in kids.',
      image: img2,
      imagePosition: 'left',
    },
    {
      title: 'Jenboro Real Estate',
      description: 'Developed a refined brand identity that mirrors modern urban living.',
      image: img3,
      imagePosition: 'right',
    },
    {
      title: 'Khix Academy',
      description: 'Enhanced online presence with creative campaigns that engage and educate aspiring learners.',
      image: img4,
      imagePosition: 'left',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Our <span className="text-primary">Work</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'bg-dark-tertiary border border-gray-700 text-gray-300 hover:border-gray-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`bg-dark-secondary rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all ${
        project.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="md:flex md:items-center">
        <div className="md:w-1/2 p-8 md:p-12">
          <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mb-4 md:mb-0 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
              <img src={project.image} alt="" />
            </div>
          </div>
        </div>

        <div className="md:w-1/2 p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-2 bg-dark-tertiary hover:bg-gray-700 border border-gray-700 rounded-lg font-medium transition-all text-sm">
              Learn More
            </button>
            <button className="px-6 py-2 bg-primary hover:bg-primary-dark rounded-lg font-medium transition-all flex items-center gap-2 text-sm">
              Contact Us
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
