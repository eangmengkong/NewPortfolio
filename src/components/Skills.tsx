import React from "react";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "tools" | "design";
}

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills: Skill[] = [
    // Frontend
    { name: "HTML5", level: 5, category: "frontend" },
    { name: "CSS3", level: 5, category: "frontend" },
    { name: "JavaScript", level: 5, category: "frontend" },
    { name: "TypeScript", level: 4, category: "frontend" },
    { name: "React", level: 5, category: "frontend" },
    { name: "Next.js", level: 4, category: "frontend" },
    { name: "Tailwind CSS", level: 5, category: "frontend" },
  ];

  const categories = [{ id: "frontend", name: "Frontend" }];

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="section-heading">Skills & Expertise</h2>

        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category, idx) => (
            <div
              key={category.id}
              className={`mb-12 transition-all duration-700 delay-${idx * 100}`}
            >
              <h3 className="text-xl font-semibold text-navy dark:text-lightest-slate mb-4 flex items-center">
                <span className="text-teal mr-2">0{idx + 1}.</span>
                {category.name}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .sort((a, b) => b.level - a.level)
                  .map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="skill-tag text-sm font-mono"
                      variant="outline"
                    >
                      {skill.name}
                      <span className="ml-1 text-slate dark:text-light-slate">
                        {Array(skill.level).fill("•").join("")}
                      </span>
                    </Badge>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
