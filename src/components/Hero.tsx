import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Twitter, Mail } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content (unchanged from your original) */}
          <div className="max-w-3xl lg:max-w-2xl">
            <p
              className={`text-teal font-mono mb-5 transform transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Hi, my name is
            </p>
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold text-navy dark:text-lightest-slate mb-4 transform transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Eang Mengkong
            </h1>
            <h2
              className={`text-3xl md:text-5xl lg:text-6xl font-bold text-slate dark:text-light-slate mb-8 transform transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              I build exceptional web experiences.
            </h2>
            <p
              className={`text-slate dark:text-light-slate text-lg md:text-xl max-w-xl mb-10 transform transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              "As a frontend developer, I build fast, accessible websites with
              clean code. I also enjoy designing simple, intuitive interfaces."
            </p>
            <div
              className={`flex flex-wrap gap-4 transform transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <Button className="bg-teal hover:bg-dark-teal text-navy text-base py-6 px-8">
                Check out my work
              </Button>
              <Button
                variant="outline"
                className="border-teal text-teal hover:text-teal text-base py-6 px-8"
              >
                Contact me
              </Button>
            </div>

            <div
              className={`mt-16 flex items-center space-x-6 transform transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
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
                href="https://t.me/MengkongEang"
                className="text-slate hover:text-teal dark:text-light-slate dark:hover:text-teal transition-colors"
              >
                <FaTelegram size={22} />
              </a>
            </div>
          </div>

          {/* Enhanced Profile Picture */}
          <div
            className={`relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 transform transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-teal z-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/profile.jpg"
                alt="Eang Mengkong"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent animate-spin-slow z-0">
              <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-gradient-to-b from-teal/30 to-transparent rounded-tl-full"></div>
              <div className="absolute bottom-0 right-1/2 w-1/2 h-1/2 bg-gradient-to-t from-teal/30 to-transparent rounded-br-full"></div>
            </div>

            {/* Floating dots decoration */}
            <div className="absolute -top-4 -left-4 w-4 h-4 rounded-full bg-teal/70 animate-float opacity-70"></div>
            <div className="absolute -bottom-6 -right-2 w-3 h-3 rounded-full bg-teal/60 animate-float-delay opacity-70"></div>
            <div className="absolute top-8 -right-6 w-2 h-2 rounded-full bg-teal/50 animate-float-delay-2 opacity-70"></div>
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
