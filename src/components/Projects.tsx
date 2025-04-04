
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
  
    {
      title: "Food Delivery App",
      description: "A food delivery platform integrating cultural food stories and blogs, enhancing the user experience beyond just ordering.",
      image: "del.png",
      tags: ["MERN Stack (Learning)", "React", "Node.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com", // Update with your actual repo
      liveUrl: "https://example.com" // Update if deployed
    },
    {
      title: "Book Website Landing Page",
      description: "A visually appealing landing page for book lovers, featuring book recommendations, reviews, and an intuitive UI.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      githubUrl: "https://github.com", // Update with your actual repo
      liveUrl: "https://example.com" // Update if deployed
    },
    {
      title: "KLiC MKCL Clone",
      description: "A functional clone of the KLiC MKCL website, built to replicate its design and features using frontend technologies.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      githubUrl: "https://github.com", // Update with your actual repo
      liveUrl: "https://example.com" // Update if deployed
    }

  ];

  return (
    <section id="projects" className="py-16 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title mb-8">Projects</h2>
        <p className="mt-6 mb-10 max-w-2xl">
          Here are some of my recent projects. Each one was developed with attention to code quality,
          user experience, and performance.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card group opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
