import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code, Database, Cpu, Wrench, Languages, Circle } from 'lucide-react';

const skills = [
  { category: 'Programming', icon: Code, items: ['Java (Core)'] },
  { category: 'Frontend', icon: Code, items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js'] },
  { category: 'Backend', icon: Database, items: ['REST APIs', 'PostgreSQL', 'MySQL (learning)'] },
  { category: 'Tools', icon: Wrench, items: ['VS Code', 'Eclipse', 'Git', 'GitHub'] },
  { category: 'Languages', icon: Languages, items: ['English', 'Marathi', 'Hindi'] }
];

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Thynk Technology',
    period: 'Sep 2025 – Present',
    points: [
      'Built responsive UI using React.js',
      'Integrated REST APIs and WebSocket APIs',
      'Worked on Shubha Viva App and created 10+ reusable components',
      'Improved performance and reduced API response time',
      'Collaborated with backend team and learning backend/API design'
    ]
  },
  {
    role: 'Java Full Stack Intern',
    company: 'J-Spiders, Pune',
    period: 'Past',
    points: [
      'Built responsive apps using React',
      'Learning Spring Boot backend',
      'Implemented REST APIs and integration'
    ]
  }
];

const education = [
  {
    degree: 'B.E. Electronics & Telecommunication',
    school: 'ISBM College of Engineering, Pune',
    period: '2023–2026',
    score: 'CGPA 8.81'
  },
  {
    degree: 'Diploma ENTC',
    school: 'Y.B. Patil Polytechnic, Pune',
    period: '2021–2023',
    score: '78%'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-cream">About <span className="text-gradient">Me</span></h2>
          <div className="glass-card p-8 text-lg text-cream/80 leading-relaxed rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-gold/20 text-center max-w-3xl mx-auto">
            <p>
              My journey started in <strong>Electronics and Telecommunication (ENTC)</strong>, where I developed a deep appreciation for how hardware and systems communicate at a fundamental level. I have since transitioned passionately into software development, discovering my love for creating interactive, user-focused applications. Today, I combine my system-level thinking from electronics with modern web technologies like React to build complete, functional, and beautiful systems from the ground up.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* Left Column: Experience & Education */}
          <div className="space-y-12">
            
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-cream">
                <Briefcase className="text-gold w-6 h-6" /> Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-gold/30">
                    <div className="absolute w-3 h-3 bg-gold rounded-full -left-[7px] top-2 shadow-[0_0_10px_rgba(184,138,44,0.5)]"></div>
                    <div className="glass-card p-6 rounded-xl border border-gold/10">
                      <h4 className="text-xl font-bold text-cream">{exp.role}</h4>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-mustard font-medium mb-4 mt-1">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.points.map((point, i) => (
                          <li key={i} className="text-cream/70 text-sm flex items-start gap-2">
                            <Circle className="w-1.5 h-1.5 mt-1.5 text-gold/80 shrink-0 fill-current" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-cream">
                <GraduationCap className="text-mustard w-6 h-6" /> Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="glass-card p-6 rounded-xl border border-gold/10 hover:-translate-y-1 transition-transform">
                    <h4 className="font-bold text-cream text-lg">{edu.degree}</h4>
                    <p className="text-cream/80 font-medium">{edu.school}</p>
                    <div className="flex justify-between items-center mt-3 text-sm">
                      <span className="text-mustard font-semibold">{edu.score}</span>
                      <span className="text-cream/50">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-cream">
              <Cpu className="text-gold w-6 h-6" /> Tech Arsenal
            </h3>
            <div className="grid gap-4">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="glass-card p-6 rounded-xl border border-gold/10">
                  <div className="flex items-center gap-2 mb-4">
                    <skillGroup.icon className="w-5 h-5 text-gold" />
                    <h4 className="font-semibold text-cream">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 text-sm rounded-lg bg-gold/5 border border-gold/20 text-cream/90 hover:bg-gold/10 hover:text-gold transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
