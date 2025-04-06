import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-navy text-slate dark:text-light-slate">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="#home"
              className="text-slate hover:text-teal dark:text-light-slate dark:hover:text-teal transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-slate hover:text-teal dark:text-light-slate dark:hover:text-teal transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-slate hover:text-teal dark:text-light-slate dark:hover:text-teal transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-slate hover:text-teal dark:text-light-slate dark:hover:text-teal transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-slate hover:text-teal dark:text-light-slate dark:hover:text-teal transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
