import { useState } from "react";
import { Briefcase, Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddItemModal, { type ExperienceItem } from "./AddItemModal";
import { useLocalStorageState } from "@/hooks/use-local-storage-state";
import { useToast } from "@/hooks/use-toast";

const Experience = () => {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [experiences, setExperiences] = useLocalStorageState<ExperienceItem[]>(
    "portfolio_experience",
    () => [
      {
        role: "MERN Stack Development Internship",
        company: "Amypo Technologies",
        description:
          "Built a Netflix-inspired platform using HTML, CSS, JS, and Node.js.",
      },
      {
        role: "MERN Stack Development Internship",
        company: "Ether Infotech",
        description: "Learned HTML, CSS, JS, Node.js fundamentals.",
      },
    ]
  );

  const handleSave = (item: ExperienceItem) => {
    if (editIndex !== null) {
      setExperiences((prev) =>
        prev.map((e, i) => (i === editIndex ? item : e))
      );
    } else {
      setExperiences((prev) => [item, ...prev]);
    }
  };

  const handleDelete = (idx: number) => {
    setExperiences((prev) => prev.filter((_, i) => i !== idx));
    toast({ title: "Deleted", description: "Experience removed." });
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
    <section id="experience" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-2">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground">
              Hands-on learning and real-world project development
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

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 border border-border card-hover relative group"
            >
              {/* Edit / Delete buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => openEdit(idx)}
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Edit experience"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(idx)}
                  className="p-2 rounded-full bg-destructive/10 hover:bg-destructive/20 text-destructive transition-colors"
                  aria-label="Delete experience"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 pr-16">
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {exp.company}
                      </p>
                    </div>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        View
                      </a>
                    )}
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

      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="experience"
        onSave={(item) => handleSave(item as ExperienceItem)}
        editItem={editIndex !== null ? experiences[editIndex] : null}
      />
    </section>
  );
};

export default Experience;
