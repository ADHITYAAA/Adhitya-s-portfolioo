import { Code2, Globe, Database, Coffee, Users, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Basics",
      icon: Code2,
      skills: ["C", "C++", "Python"],
    },
    {
      title: "Frontend",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js"],
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB"],
    },
    {
      title: "Other Programming",
      icon: Coffee,
      skills: ["Java (Intermediate)"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Problem-solving techniques",
        "Effective Time Management",
        "Communication proficiency",
        "Leadership qualities",
        "Collaborative teamwork",
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern web applications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="bg-card rounded-2xl p-6 border border-border card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
