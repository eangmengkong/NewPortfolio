import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Briefcase, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Resume = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      year: "2020 - 2024",
      description: "Specialized in Software Development and Web Technologies"
    }
  ];

  const experience = [
  
    {
      position: "Frontend Developer Intern",
      company: "Digital Creations",
      period: "2021 - 2022",
      description: "Worked on UI/UX improvements and implemented responsive designs"
    }
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "RESTful APIs"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "AWS", "Figma", "Agile/Scrum"]
    }
  ];

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Resume</h2>
          <p className="text-muted-foreground">A summary of my education, experience, and skills</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-6 w-6 text-teal" />
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              {education.map((edu, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                  <p className="mt-2">{edu.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Briefcase className="h-6 w-6 text-teal" />
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              {experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-semibold text-lg">{exp.position}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <p className="mt-2">{exp.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

    

        <div className="flex justify-center">
         
        </div>
      </div>
    </section>
  );
};

export default Resume; 