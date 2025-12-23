import { useState } from "react";
import { ExternalLink, Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddItemModal, { type ProjectItem } from "./AddItemModal";
import { useLocalStorageState } from "@/hooks/use-local-storage-state";
import { useToast } from "@/hooks/use-toast";

const Projects = () => {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [projects, setProjects] = useLocalStorageState<ProjectItem[]>(
    "portfolio_projects",
    () => [
      {
        title: "AI-Powered Personal Assistant for Kerala Farmers",
        description:
          "A digital assistant offering farm-related actionable guidance.",
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
    ]
  );

  const handleSave = (item: ProjectItem) => {
    if (editIndex !== null) {
      setProjects((prev) =>
        prev.map((p, i) => (i === editIndex ? item : p))
      );
    } else {
      setProjects((prev) => [item, ...prev]);
    }
  };

  const handleDelete = (idx: number) => {
    setProjects((prev) => prev.filter((_, i) => i !== idx));
    toast({ title: "Deleted", description: "Project removed." });
  };

  const openEdit = (idx: number) => {
    setEditIndex(idx);
    setIsModalOpen(true);
  };

  const openAdd = () => {
    setEditIndex(null);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-2">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground">
              Showcase of my technical work and innovations
            </p>
          </div>
          <Button
            onClick={openAdd}
            className="gap-2 rounded-full shadow-lg shadow-primary/20"
          >
            <Plus className="h-4 w-4" />
            Add More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 border border-border card-hover group relative"
            >
              {/* Edit / Delete buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => openEdit(idx)}
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Edit project"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(idx)}
                  className="p-2 rounded-full bg-destructive/10 hover:bg-destructive/20 text-destructive transition-colors"
                  aria-label="Delete project"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              {project.note && (
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                  {project.note}
                </span>
              )}
              <div className="flex items-start justify-between gap-4 pr-16">
                <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-background/40 p-2 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={`Open link for ${project.title}`}
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

      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="project"
        onSave={(item) => handleSave(item as ProjectItem)}
        editItem={editIndex !== null ? projects[editIndex] : null}
      />
    </section>
  );
};

export default Projects;
