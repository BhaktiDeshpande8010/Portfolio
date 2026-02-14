
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'other';
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'React', level: 85, category: 'frontend' },
    { name: 'Figma', level: 80, category: 'frontend' },
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'Next.js', level: 80, category: 'frontend' },
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Express', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 75, category: 'backend' },
    { name: 'PostgreSQL', level: 70, category: 'backend' },
    { name: 'GraphQL', level: 65, category: 'backend' },
    { name: 'Git', level: 85, category: 'other' },
    // { name: 'Docker', level: 70, category: 'other' },
    { name: 'Github', level: 70, category: 'other' },
  ];

  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  // const backendSkills = skills.filter(skill => skill.category === 'backend');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  const SkillCategory = ({ title, skills }: { title: string, skills: Skill[] }) => (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <p className="mt-6 mb-10 max-w-2xl">
          I've worked with a variety of technologies in the web development world.
          Here are my main areas of expertise and the technologies I use daily.
        </p>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <SkillCategory title="Frontend Development" skills={frontendSkills} />
            <SkillCategory title="Other" skills={otherSkills} />
          </div>
          <div>
            <SkillCategory title="Backend Development" skills={backendSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
