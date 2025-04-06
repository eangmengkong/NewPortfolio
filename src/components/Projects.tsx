import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderOpen } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  featured: boolean;
  category: string[];
}

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product listings, and cart functionality. ",
      technologies: ["React", "Next.js", "Node.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      featured: true,
      category: ["frontend"],
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A clean and modern portfolio website for a photographer showcasing their work with a custom image gallery and contact form.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      featured: true,
      category: ["frontend", "design"],
    },

    {
      id: 3,
      title: "Weather App",
      description:
        "A weather application that provides real-time weather data and forecasts based on user location.",
      technologies: ["JavaScript", "OpenWeather API", "Geolocation API", "CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "",
      featured: false,
      category: ["frontend"],
    },
  ];

  const [filter, setFilter] = useState<string>("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const otherProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="py-20 bg-secondary/30 dark:bg-light-navy/10"
    >
      <div className="container">
        <h2 className="section-heading">My Projects</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["all", "frontend", "fullstack", "backend", "design"].map(
            (category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={filter === category ? "bg-teal text-navy" : ""}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            )
          )}
        </div>

        <div
          ref={ref}
          className={`space-y-24 mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-8 ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-3/5 relative group">
                <div className="absolute inset-0 bg-teal/20 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={
                        project.imageUrl ||
                        "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                      }
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </a>
              </div>

              <div
                className={`lg:w-2/5 flex flex-col ${
                  idx % 2 !== 0 ? "items-start" : "lg:items-end"
                }`}
              >
                <h3 className="text-teal font-mono text-sm mb-1">
                  Featured Project
                </h3>
                <h4 className="text-2xl font-semibold text-navy dark:text-lightest-slate mb-4">
                  {project.title}
                </h4>
                <div
                  className={`p-6 bg-white dark:bg-light-navy rounded-lg shadow-md mb-4 text-slate dark:text-light-slate ${
                    idx % 2 !== 0 ? "" : "lg:text-right"
                  }`}
                >
                  {project.description}
                </div>
                <div
                  className={`flex flex-wrap gap-2 mb-4 ${
                    idx % 2 !== 0 ? "" : "lg:justify-end"
                  }`}
                >
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-slate dark:text-light-slate text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-teal dark:text-light-slate dark:hover:text-teal transition-colors"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-teal dark:text-light-slate dark:hover:text-teal transition-colors"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-navy dark:text-lightest-slate mb-6 text-center">
          Other Noteworthy Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <Card
              key={project.id}
              className="project-card h-full flex flex-col bg-white dark:bg-light-navy hover:shadow-teal/10 dark:hover:shadow-teal/5 hover:shadow-lg"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <FolderOpen className="text-teal" size={28} />
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-teal dark:text-light-slate dark:hover:text-teal transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-teal dark:text-light-slate dark:hover:text-teal transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-navy dark:text-lightest-slate mb-2">
                  {project.title}
                </h4>
                <p className="text-slate dark:text-light-slate mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-slate dark:text-light-slate text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
