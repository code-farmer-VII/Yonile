import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    category: 'Branding & Strategy',
    title: 'Branding & Strategy',
    image: 'https://images.pexels.com/photos/1406282/pexels-photo-1406282.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    category: 'Social Media Management',
    title: 'Social Media Management',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    category: 'Media Production',
    title: 'Media Production',
    image: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    category: 'Website Design',
    title: 'Website Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    category: 'Experiential Marketing',
    title: 'Experiential Marketing',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    category: 'Advertising',
    title: 'Advertising',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Some pieces of our work
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              From dynamic social media posts presents to immersive brand campaigns and events, we've brought ideas to life. Whether national, social, email, interactive in viral moments, video and beyond—each project delivers on 10 distinctive.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-6 py-3 border bg-blue-500 border-white/20 rounded-lg hover:border-cyan-accent hover:bg-cyan-accent/10 transition-all"
            >
              SHOW MORE
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl aspect-square bg-dark-card border border-white/10 hover:border-cyan-accent/50 transition-all"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-cyan-accent/20 text-cyan-accent text-xs rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <button className="flex items-center gap-1 text-sm text-white hover:text-cyan-accent transition-colors mt-2 bg-blue-500 rounded-lg px-3 ">
                    Read more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.slice(2).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl aspect-square bg-dark-card border border-white/10 hover:border-cyan-accent/50 transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-110 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block px-3 py-1 bg-cyan-accent/20 text-cyan-accent text-xs rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-base font-semibold">{project.title}</h3>
                <button className="flex items-center gap-1 text-sm text-white hover:text-cyan-accent transition-colors mt-2  bg-blue-500 rounded-lg px-3">
                  Read more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
