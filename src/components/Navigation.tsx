import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Check system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);

    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");

    toast({
      title: darkMode ? "Light mode activated" : "Dark mode activated",
      duration: 1500,
    });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Resume", href: "#resume", id: "resume" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Work", href: "#work", id: "work" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-navy/90 backdrop-blur-md py-4 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-navy dark:text-white">
            Mengkong<span className="text-teal">Portfolio</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="nav-link font-medium"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.name}
            </button>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-navy py-4 px-6 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="nav-link text-lg font-medium py-2 text-left"
              >
                {link.name}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
