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
              Hello! I'm Mengkong Eang, a passionate developer Turning what I
              learned at RUPP into working websites and apps. My coding journey
              began when I built my first React application - that moment when
              "Hello World" became interactive sparked my love for creating
              digital experiences.
            </p>
            <p className="text-lg text-slate dark:text-light-slate mb-4">
              I've since developed several impactful projects including an{" "}
              <a href="#" className="text-teal hover:underline">
                E-commerce Platform
              </a>
              ,{" "}
              <a href="#" className="text-teal hover:underline">
                Online Bookstore
              </a>
              , and{" "}
              <a href="#" className="text-teal hover:underline">
                Food Ordering System
              </a>
              . Each project represents my commitment to solving real-world
              problems through clean code and intuitive interfaces. Currently,
              I'm focused on mastering full-stack development while contributing
              to meaningful projects.
            </p>
            <p className="text-lg text-slate dark:text-light-slate mb-6">
              When I'm not coding, you'll find me exploring the latest tech
              trends, or contributing to open-source projects. I believe great
              developers never stop learning.
            </p>

            <p className="text-slate dark:text-light-slate font-mono">
              Here are the technologies I build with:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
              {[
                "JavaScript (ES6+)",
                "React",
                "Tailwind CSS",
                "Next.js",
                "Node.js",
                "TypeScript",
              ].map((tech, i) => (
                <div key={i} className="flex items-start">
                  <span className="text-teal mr-2">▹</span>
                  <span className="text-slate dark:text-light-slate">
                    {tech}
                  </span>
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
