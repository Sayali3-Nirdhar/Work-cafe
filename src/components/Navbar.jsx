import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      // Offset added so that active state triggers slightly before the top
      const scrollPosition = window.scrollY + 300; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', href: '#home', icon: Home },
    { name: 'About', id: 'about', href: '#about', icon: User },
    { name: 'Projects', id: 'projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', id: 'contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-28 bg-black/40 backdrop-blur-xl border-r border-gold/10 z-50 flex-col items-center py-10 justify-between">
        <a href="#home" className="text-xl font-bold tracking-tighter w-14 h-14 flex items-center justify-center rounded-2xl bg-gold/10 border border-gold/30 text-gold shadow-[0_0_15px_rgba(184,138,44,0.3)] hover:scale-105 transition-transform">
          S<span className="text-cream">N</span>
        </a>

        <div className="flex flex-col gap-6 w-full px-4">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.href}
              className={`relative flex flex-col items-center justify-center h-20 w-full rounded-2xl group transition-all duration-300 ${activeSection === link.id ? 'text-gold' : 'text-cream/60 hover:text-mustard'}`}
            >
              {activeSection === link.id && (
                <motion.div 
                  layoutId="active-desktop-nav"
                  className="absolute inset-0 bg-gold/10 rounded-2xl border border-gold/30 shadow-[0_0_20px_rgba(184,138,44,0.15)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {/* Icon Container */}
              <div className="relative z-10 flex flex-col items-center">
                <link.icon className={`w-6 h-6 mb-1 transition-transform duration-300 ${activeSection === link.id ? '-translate-y-1' : 'group-hover:-translate-y-2'}`} />
                <span className={`text-[10px] uppercase tracking-widest font-bold absolute bottom-[-16px] transition-all duration-300 ${activeSection === link.id ? 'opacity-100 translate-y-0 text-gold' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-mustard'}`}>
                  {link.name}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <a href="https://github.com/Sayali3-Nirdhar" target="_blank" rel="noreferrer" className="text-cream/50 hover:text-gold transition-colors hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/sayali-nirdhar-" target="_blank" rel="noreferrer" className="text-cream/50 hover:text-gold transition-colors hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>
      </nav>

      {/* Mobile Floating Pill */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm">
        <div className="bg-black/70 backdrop-blur-2xl border border-gold/30 rounded-3xl px-6 py-4 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.8)] shadow-gold/10">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.href}
              className={`relative flex flex-col items-center justify-center p-2 transition-colors ${activeSection === link.id ? 'text-gold' : 'text-cream/60 hover:text-mustard'}`}
            >
              {activeSection === link.id && (
                <motion.div 
                  layoutId="active-mobile-nav"
                  className="absolute -top-3 w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_10px_rgba(184,138,44,1)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <link.icon className={`w-6 h-6 transition-transform ${activeSection === link.id ? 'scale-110' : ''}`} />
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
