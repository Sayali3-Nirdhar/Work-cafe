import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-cream">Let's <span className="text-gradient">Connect</span></h2>
          <p className="text-cream/80 text-lg">
            Have a project in mind or want to explore potential collaborations? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-card p-6 flex items-center gap-6 hover:border-gold/30 transition-colors group">
              <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cream mb-1">Email</h3>
                <a href="mailto:nirdharsayali@gmail.com" className="text-cream/80 hover:text-gold transition-colors">
                  nirdharsayali@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-6 hover:border-mustard/30 transition-colors group">
              <div className="w-12 h-12 bg-mustard/10 text-mustard rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cream mb-1">Phone</h3>
                <a href="tel:+919284641579" className="text-cream/80 hover:text-mustard transition-colors">
                  +91 9284641579
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-6 hover:border-gold/30 transition-colors group">
              <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cream mb-1">Location</h3>
                <p className="text-cream/80">
                  Pune, Maharashtra, India
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/in/sayali-nirdhar-" target="_blank" rel="noreferrer" className="flex-1 glass-card p-4 flex justify-center items-center gap-2 hover:bg-gold/10 transition-colors group border-gold/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-linkedin text-gold group-hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span className="font-medium text-cream/90">LinkedIn</span>
              </a>
              <a href="https://github.com/Sayali3-Nirdhar" target="_blank" rel="noreferrer" className="flex-1 glass-card p-4 flex justify-center items-center gap-2 hover:bg-gold/10 transition-colors group border-gold/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-github text-gold group-hover:scale-110 transition-transform"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                <span className="font-medium text-cream/90">GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-10 border-gold/10"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-cream/90">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your Name"
                    className="bg-black/20 border border-gold/20 rounded-lg px-4 py-3 text-cream placeholder-cream/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-cream/90">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="you@example.com"
                    className="bg-black/20 border border-gold/20 rounded-lg px-4 py-3 text-cream placeholder-cream/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-cream/90">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="How can I help you?"
                  className="bg-black/20 border border-gold/20 rounded-lg px-4 py-3 text-cream placeholder-cream/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-cream/90">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Your message here..."
                  className="bg-black/20 border border-gold/20 rounded-lg px-4 py-3 text-cream placeholder-cream/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all resize-none"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 mt-2">
                Hire Me <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
