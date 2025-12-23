import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Personal Assistant for Kerala Farmers",
      description: "A digital assistant offering farm-related actionable guidance.",
      stack: ["HTML", "CSS", "JS", "Node.js", "MongoDB"],
      note: "SIH-2025",
    },
    {
      title: "Cyber Awareness Game",
      description: "Gamified cybersecurity learning platform with leaderboard.",
      stack: ["HTML", "CSS", "JS", "Node.js", "Google Sheets", "Gemini AI"],
      note: "Internal Hackathon",
    },
    {
      title: "Smart File Converter",
      description: "Converts Word ↔ PDF with a simple workflow and clean UI.",
      stack: ["HTML", "CSS", "JavaScript", "REST APIs"],
      note: "Inspired by iLovePDF",
    },
    {
      title: "AI Quiz Generator App",
      description: "Streamlit web app that generates quizzes using Gemini AI.",
      stack: ["Python", "Streamlit", "Google Gemini API"],
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            Showcase of my technical work and innovations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 border border-border card-hover group relative"
            >
              {project.note && (
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                  {project.note}
                </span>
              )}
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-background/40 p-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {(project.stack ?? []).map((tech: string, techIdx: number) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;