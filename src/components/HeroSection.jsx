import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Cpu, Code2, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-maroon/40 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mustard/20 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-6"
        >
          <div className="flex flex-wrap gap-3 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-xs font-medium text-gold">
              <Code2 className="w-3.5 h-3.5" /> Frontend Specialist
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mustard/10 border border-mustard/20 text-xs font-medium text-mustard">
              <Globe className="w-3.5 h-3.5" /> System Thinker
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/10 border border-cream/30 text-xs font-medium text-cream">
              <Cpu className="w-3.5 h-3.5" /> IoT + Web Developer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Sayali Nirdhar</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-cream">
            Full Stack Developer | Electronics & Telecommunication Engineer
          </h2>
          
          <p className="text-lg text-cream/80 max-w-lg leading-relaxed mt-2">
            Frontend-focused developer skilled in React.js and modern JavaScript, with a strong foundation in electronics and system-level thinking. I build responsive, scalable, and end-to-end solutions.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a href="#projects" className="btn-primary flex items-center gap-2 group">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-maroon/50 to-mustard/20 rounded-3xl transform rotate-6 border border-gold/10 glass-card transition-transform hover:rotate-12 duration-500 shadow-[0_0_30px_rgba(184,138,44,0.15)]"></div>
            <div className="absolute inset-0 bg-maroon/40 rounded-3xl transform -rotate-3 border border-gold/20 flex items-center justify-center overflow-hidden shadow-xl transition-transform hover:rotate-0 duration-500 z-10 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" 
                  alt="Developer Desk"
                  className="object-cover w-full h-full opacity-80"
                />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
