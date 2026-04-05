import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with a custom shopping cart, user authentication, and payment gateway integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'Stripe', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Dashboard Analytics',
    description: 'A data visualization dashboard providing real-time insights with interactive charts and customizable widgets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Social Media App',
    description: 'A real-time social platform featuring instant messaging, post sharing, and user profile management.',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Firebase', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-slate-400 text-lg">
            A selection of my recent work. Here are some of the projects I've built lately.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card overflow-hidden group flex flex-col h-full"
            >
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs font-medium px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a href={project.liveUrl} className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-secondary inline-flex items-center gap-2">
            View More on GitHub <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
