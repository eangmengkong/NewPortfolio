import React from 'react';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navigation />
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
