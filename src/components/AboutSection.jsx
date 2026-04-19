import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';

const skills = [
  { name: 'React', category: 'Frontend' },
  { name: 'JavaScript (ES6+)', category: 'Language' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Framer Motion', category: 'Animation' },
  { name: 'Git & GitHub', category: 'Tools' }
];

const features = [
  {
    icon: <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and beautifully structured code.'
  },
  {
    icon: <Palette className="w-6 h-6 text-pink-500 dark:text-pink-400" />,
    title: 'Premium Design',
    description: 'Crafting pixel-perfect user interfaces with modern aesthetics.'
  },
  {
    icon: <Zap className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
    title: 'High Performance',
    description: 'Optimizing web applications for speed and smooth interactions.'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            I'm a developer who bridges the gap between design and engineering. I strive to create web apps that look as good as they function.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[80px]" />
          
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            My Arsenal <span className="text-slate-400 dark:text-slate-500 text-sm font-normal">/ Technologies I use</span>
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-colors cursor-default"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
