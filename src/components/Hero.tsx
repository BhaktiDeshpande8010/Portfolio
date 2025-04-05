
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-16 border-b border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-lg md:text-xl text-primary font-medium mb-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Hello, my name is
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Bhakti Deshpande.
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-muted-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            I build things for the web.
          </h3>
          <p className="text-lg max-w-xl text-muted-foreground mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            "I'm a frontend developer with experience in building intuitive and engaging web applications. Currently, I'm expanding my skills in full-stack development, focusing on creating accessible and user-friendly digital solutions."
          </p>
          
          <div className="flex space-x-5 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <a href="https://github.com/BhaktiDeshpande8010" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://in.linkedin.com/in/bhakti-deshpande-1735b1352" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:deshpandeb1204@gmail.com" className="hover:text-primary transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              View my work
              <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
