
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-accent text-accent-foreground relative py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
          
          
          <p className="text-xs text-accent-foreground/60">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
      
      {/* Repositioned scroll-to-top button */}
      <button 
        onClick={scrollToTop}
        className="fixed right-8 bottom-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all hover:shadow-xl"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
