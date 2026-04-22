import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gold/10 bg-brown pt-12 pb-8 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold tracking-tighter mb-2"><span className="text-gradient">Portfolio.</span></span>
          <p className="text-sm text-cream/60">© {new Date().getFullYear()} Sayali Nirdhar. All rights reserved.</p>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center text-cream/70 hover:text-gold hover:bg-gold/10 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
