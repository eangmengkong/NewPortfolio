import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Code, 
  Layout, 
  Palette, 
  Smartphone, 
  Zap, 
  GitBranch,
  Package
} from "lucide-react";

const frontendSkills = [
  {
    category: "Core Technologies",
    icon: <Code className="h-6 w-6 text-teal" />,
    items: [
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: <Layout className="h-6 w-6 text-teal" />,
    items: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Intermediate" },
      
    ]
  },
  {
    category: "Styling & Design",
    icon: <Palette className="h-6 w-6 text-teal" />,
    items: [
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "CSS Modules", level: "Advanced" },
      { name: "Styled Components", level: "Intermediate" },
      { name: "Figma", level: "Basic" }
    ]
  },

  {
    category: "Development Tools",
    icon: <Package className="h-6 w-6 text-teal" />,
    items: [
      { name: "Git", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" },
      { name: "Chrome DevTools", level: "Advanced" },
     
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frontend Skills & Expertise</h2>
          <p className="text-muted-foreground">Technologies and tools I specialize in</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frontendSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="flex flex-row items-center gap-4">
                  {skill.icon}
                  <CardTitle>{skill.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skill.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-medium">{item.name}</span>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          item.level === 'Advanced' ? 'bg-teal/10 text-teal' :
                          item.level === 'Intermediate' ? 'bg-blue-500/10 text-blue-500' :
                          'bg-gray-500/10 text-gray-500'
                        }`}>
                          {item.level}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Continuously learning and expanding my frontend development skills to create better user experiences
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
