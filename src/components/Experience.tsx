
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Frontend Developer",
      company: "PRYM Aerospace",
      duration: "Jan 2025 - Nov 2025",
      location: "Jalna, MH, India",
      description: [
        "Worked on a company crop advisory web platform focused on agronomists and field experts",
        "Built responsive UI components using React and Tailwind CSS to enhance user experience",
        "Collaborating with the team to integrate satellite data for crop management solutions",
      ],
      skills: ["React", "Tailwind CSS", "Node.js", "REST API", "Git"]
    },
    {
      title: "Software Intern",
      company: "PRYM Aerospace",
      duration: "Oct 2024 – Jan 2025",
      location: "Jalna, MH, India",
      description: [
        "Worked on an AI/ML-based crop advisory web application",
        "Developed frontend components to visualize satellite-based insights for agriculture",
        "Gained experience in integrating APIs and optimizing web performance",
      ],
      skills: ["HTML", "CSS", "JavaScript", "Figma", "API Integration"]
    },
    
  ];

  return (
    <section id="experience" className="py-16 bg-card/30">
      <div className="section-container">
        <h2 className="section-title opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>Experience</h2>
        <p className="mt-6 mb-10 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          My professional journey as a developer over the time, including roles, responsibilities, and achievements.
        </p>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-10 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              {/* Timeline dot and line */}
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              {index < experiences.length - 1 && (
                <div className="absolute left-3 top-6 bottom-0 w-[1px] bg-border h-full"></div>
              )}
              
              <div className="bg-card/40 rounded-lg p-6 border border-border/60 hover:shadow-md transition-all duration-300 hover:border-primary/30">
                <div className="flex flex-wrap items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" /> 
                    <span>{exp.duration}</span>
                  </div>
                </div>
                
                <div className="mb-4 text-primary/90 font-medium">{exp.company} • {exp.location}</div>
                
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
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

export default Experience;
