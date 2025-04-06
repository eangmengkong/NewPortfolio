import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Online Book Store",
    description: "A full-featured e-commerce platform for books with advanced search, filtering, and secure payment integration",
    link: "https://online-book-store-sand.vercel.app",
    image: "https://images.unsplash.com/photo-1543002604-0a00d5c3b5b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "https://github.com/yourusername/book-store"
  },
  {
    title: "E-commerce Store",
    description: "A modern e-commerce platform with product management, user authentication, and real-time inventory tracking",
    link: "https://ecommerce-store-one-inky.vercel.app",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "https://github.com/yourusername/ecommerce-store"
  },
  {
    title: "Food Store",
    description: "An online food ordering and delivery platform with real-time order tracking and restaurant management",
    link: "https://food-store-tau-one.vercel.app",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "https://github.com/yourusername/food-store"
  },
];

const Work = () => {
  return (
    <section id="work" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Work</h2>
          <p className="text-muted-foreground">Check out some of my recent projects</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex gap-3">
                <Button
                  variant="default"
                  className="flex-1"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  GitHub <Github className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work; 