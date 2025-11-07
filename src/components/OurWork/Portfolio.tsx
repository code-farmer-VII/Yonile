import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import img3 from '../../assets/Image/our-work/Rectangle-23871.png';
import img4 from '../../assets/Image/our-work/Rectangle-23873.png';
import img1 from '../../assets/Image/our-work/Rectangle-23876.png';
import img2 from '../../assets/Image/our-work/Rectangle-23877.png';

interface Project {
  title: string;
  description: string;
  image: string;
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: 'Flintstone Homes',
      description: 'Created a digital presence that builds trust and connects with homebuyers.',
      image: img1,
    },
    {
      title: 'Meneshaye',
      description: 'Designed a playful brand experience that inspires imagination and learning in kids.',
      image: img2,
    },
    {
      title: 'Jenboro Real Estate',
      description: 'Developed a refined brand identity that mirrors modern urban living.',
      image: img3,
    },
    {
      title: 'Khix Academy',
      description: 'Enhanced online presence with creative campaigns that engage and educate aspiring learners.',
      image: img4,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We craft experiences that inspire, engage, and deliver results for our clients.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard project={project} reverse={index % 2 !== 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, reverse }: { project: Project; reverse?: boolean }) {
  return (
    <div
      className={`md:flex md:items-center md:gap-12 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Image */}
      <div className="md:w-1/2">
        <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Content */}
      <div className="md:w-1/2 p-8 md:p-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{project.title}</h3>
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
  );
}
