
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-secondary/30 dark:bg-light-navy/10">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        
        <div 
          ref={ref}
          className={`flex flex-col lg:flex-row gap-10 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="lg:w-2/3">
            <p className="text-lg text-slate dark:text-light-slate mb-4">
              Hello! I'm John, a passionate frontend developer with a keen eye for creating beautiful, 
              functional interfaces. My journey in web development began in 2018 when I decided to try 
              creating a custom theme for a WordPress site — turns out hacking together a custom theme 
              taught me a lot about HTML & CSS!
            </p>
            <p className="text-lg text-slate dark:text-light-slate mb-4">
              Fast-forward to today, and I've had the privilege of working at an 
              <a href="#" className="text-teal hover:underline"> advertising agency</a>,
              <a href="#" className="text-teal hover:underline"> a start-up</a>,
              <a href="#" className="text-teal hover:underline"> a large corporation</a>, and
              <a href="#" className="text-teal hover:underline"> a student-led design studio</a>. 
              My main focus these days is building accessible, inclusive products and digital experiences 
              for a variety of clients.
            </p>
            <p className="text-lg text-slate dark:text-light-slate mb-6">
              When I'm not at the computer, I'm usually rock climbing, going to the gym, or exploring 
              beautiful hiking trails in the area.
            </p>

            <p className="text-slate dark:text-light-slate font-mono">
              Here are a few technologies I've been working with recently:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
              {["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS"]
                .map((tech, i) => (
                <div key={i} className="flex items-start">
                  <span className="text-teal mr-2">▹</span>
                  <span className="text-slate dark:text-light-slate">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative group w-64 h-64">
              <div className="absolute inset-0 rounded-md bg-teal/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-md border-2 border-teal"></div>
              <div className="relative z-10 w-64 h-64 rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Developer portrait" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-teal/20 hover:bg-transparent transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
