import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Cpu, Wifi, Database, MonitorSmartphone, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Derma Well – Smart Skin & Wellness Recommendation System',
    description: 'Developed a comprehensive skin wellness platform featuring skin type detection and personalized skincare routine logic (Cleanse - Treat - Moisturize - Protect). Designed with a sleek React UI and robust backend suggestions.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Java / Backend', 'PostgreSQL'],
    category: 'Software',
    liveUrl: '#',
    githubUrl: 'https://github.com/Sayali3-Nirdhar'
  },
  {
    title: 'Smart Home Automation',
    description: 'IoT network using ESP32 microcontrollers with a React dashboard to control home appliances and monitor power consumption. Bridges the gap between physical relays and a stunning digital interface.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80',
    tags: ['ESP32', 'C++', 'React', 'MQTT'],
    category: 'Both',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'VHDL Traffic Controller',
    description: 'FPGA-based traffic light controller using VHDL, implementing finite state machines, debouncing limits, and strict timing logic.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
    category: 'Hardware',
    tags: ['VHDL', 'FPGA', 'Digital Logic'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const PipelineStep = ({ icon: Icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center text-center max-w-[180px]"
  >
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-mustard/20 flex items-center justify-center border border-gold/30 mb-4 shadow-[0_0_15px_rgba(184,138,44,0.2)]">
      <Icon className="w-8 h-8 text-gold" />
    </div>
    <h4 className="font-bold text-cream mb-2">{title}</h4>
    <p className="text-xs text-cream/70">{desc}</p>
  </motion.div>
);

const PipelineConnector = () => (
  <motion.div 
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="hidden lg:flex flex-1 h-0.5 bg-gradient-to-r from-gold/50 to-mustard/50 items-center justify-end origin-left"
  >
    <ArrowRight className="w-4 h-4 text-mustard/70 translate-x-2" />
  </motion.div>
);

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter || p.category === 'Both');

  return (
    <section id="projects" className="py-24 relative bg-brown overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-40 right-[-10%] w-[40%] aspect-square rounded-full bg-mustard/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 left-[-10%] w-[40%] aspect-square rounded-full bg-gold/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold font-medium text-sm mb-6">
            <Cpu className="w-4 h-4" />
            ENTC + Software Engineer
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-cream">
            Bridging Atoms & <span className="text-gradient">Algorithms</span>
          </h2>
          <p className="text-cream/80 text-lg">
            As a student with an electronics background and software expertise, I build systems that span from the physical layer to elegant web interfaces.
          </p>
        </motion.div>

        {/* Sensors to Screens Pipeline */}
        <div className="mb-24">
          <h3 className="text-xl font-bold text-center mb-10 text-cream border-b border-gold/10 mx-auto max-w-max pb-3">
            The "Sensors to Screens" Pipeline
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 max-w-5xl mx-auto">
            <PipelineStep icon={Cpu} title="Hardware & PCBs" desc="Sensors, Microcontrollers & Custom Schematics" delay={0.1} />
            <PipelineConnector />
            <PipelineStep icon={Wifi} title="Edge Firmware" desc="C/C++, Networking Protocols & Signal Processing" delay={0.3} />
            <PipelineConnector />
            <PipelineStep icon={Database} title="Cloud & APIs" desc="Node.js, Databases & Data Aggregation" delay={0.5} />
            <PipelineConnector />
            <PipelineStep icon={MonitorSmartphone} title="Web & Mobile" desc="React, Modern UI/UX & Real-time Dashboards" delay={0.7} />
          </div>
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-black/20 backdrop-blur-md p-1.5 rounded-2xl border border-gold/10 shadow-lg mb-8">
            {['All', 'Hardware', 'Software', 'Both'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`relative px-6 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                  filter === tab 
                    ? 'text-brown shadow-md' 
                    : 'text-cream/70 hover:text-cream'
                }`}
              >
                {filter === tab && (
                  <motion.div
                    layoutId="active-filter-bg"
                    className="absolute inset-0 bg-gradient-to-r from-gold to-mustard rounded-xl"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (Split Screen Cards) */}
        <motion.div layout className="space-y-12 max-w-6xl mx-auto">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className={`flex flex-col lg:flex-row gap-8 glass-card rounded-3xl overflow-hidden group hover:border-gold/30 transition-colors ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2 relative overflow-hidden h-64 lg:h-auto min-h-[300px]">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  {/* Category Badge overlay */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-black/50 text-cream border border-gold/20">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-cream mb-4 group-hover:text-mustard transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-cream/80 text-lg leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-sm font-medium px-3 py-1.5 rounded-lg bg-white/5 text-cream border border-gold/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6 mt-auto">
                    <a href={project.liveUrl} className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gold text-brown font-semibold hover:bg-mustard transition-colors">
                      <ExternalLink className="w-4 h-4" /> View Project
                    </a>
                    <a href={project.githubUrl} className="flex items-center gap-2 font-medium text-cream/70 hover:text-cream transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-cream/60 text-lg">No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
