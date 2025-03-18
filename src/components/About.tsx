
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <p className="mb-4">
             Hello! I'm Bhakti Deshpande, a passionate frontend developer with a growing expertise in full-stack development. 
              My journey in web development started with HTML and CSS, 
              and now I'm expanding my skills in the MERN stack to build intuitive and dynamic web applications.
            </p>
            <p className="mb-4">
              I love transforming complex challenges into simple, elegant solutions that enhance user experience. 
              My goal is to develop applications that are not only functional but also visually engaging and accessible.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, working on personal projects, 
              or learning about UI/UX to improve my design approach.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img 
                src="/profile.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
