
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Twitter, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 px-4"
    >
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p
            className={`text-teal font-mono mb-5 transform transition-all duration-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Hi, my name is
          </p>
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-navy dark:text-lightest-slate mb-4 transform transition-all duration-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            John Doe.
          </h1>
          <h2
            className={`text-3xl md:text-5xl lg:text-6xl font-bold text-slate dark:text-light-slate mb-8 transform transition-all duration-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            I build exceptional web experiences.
          </h2>
          <p
            className={`text-slate dark:text-light-slate text-lg md:text-xl max-w-xl mb-10 transform transition-all duration-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            I'm a frontend developer specializing in building (and occasionally designing) 
            exceptional digital experiences. Currently, I'm focused on creating accessible, 
            human-centered products.
          </p>
          <div
            className={`flex flex-wrap gap-4 transform transition-all duration-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <Button className="bg-teal hover:bg-dark-teal text-navy text-base py-6 px-8">
              Check out my work
            </Button>
            <Button variant="outline" className="border-teal text-teal hover:text-teal text-base py-6 px-8">
              Contact me
            </Button>
          </div>

          <div
            className={`mt-16 flex items-center space-x-6 transform transition-all duration-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-teal dark:text-light-slate dark:hover:text-teal transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-teal dark:text-light-slate dark:hover:text-teal transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-teal dark:text-light-slate dark:hover:text-teal transition-colors"
            >
              <Twitter size={22} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-slate hover:text-teal dark:text-light-slate dark:hover:text-teal transition-colors"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate dark:text-light-slate hover:text-teal dark:hover:text-teal transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>

      {/* Background decorative elements */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-teal/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;
