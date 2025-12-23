import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology - Information Technology",
      institution: "SNS College of Technology, Coimbatore",
      period: "2023 - 2027",
    },
    {
      degree: "Higher Secondary",
      institution: "Sivasailam Chamraj Hr Secondary School",
      period: "Completed April 2023",
      gpa: "80%",
    },
  ];

  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Academic background and qualifications
        </p>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 border border-border card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground mb-1">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    {edu.gpa && <span>GPA: {edu.gpa}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
