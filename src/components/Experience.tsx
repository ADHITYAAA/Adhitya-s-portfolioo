import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "MERN Stack Development Internship",
      company: "Amypo Technologies",
      description: "Built a Netflix-inspired platform using HTML, CSS, JS, and Node.js.",
    },
    {
      role: "MERN Stack Development Internship",
      company: "Ether Infotech",
      description: "Learned HTML, CSS, JS, Node.js fundamentals.",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-2">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground">
            Hands-on learning and real-world project development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 border border-border card-hover relative group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;