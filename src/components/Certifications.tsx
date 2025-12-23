import { useState } from "react";
import { Award, Plus, ExternalLink, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddItemModal, { type CertificationItem } from "./AddItemModal";
import { useLocalStorageState } from "@/hooks/use-local-storage-state";
import { useToast } from "@/hooks/use-toast";

const Certifications = () => {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [certifications, setCertifications] = useLocalStorageState<
    CertificationItem[]
  >(
    "portfolio_certifications",
    () => [
      {
        title: "Blender Certificate",
        issuer: "Jansons Institute of Technology",
      },
      {
        title: "MERN Stack Web Development",
        issuer: "Ether Infotech, Amypo Technologies, Prepinsta Prime",
      },
      {
        title: "Hackathon Certificate",
        issuer: "SNS College of Technology",
        date: "Sep-2025",
      },
    ]
  );

  const handleSave = (item: CertificationItem) => {
    if (editIndex !== null) {
      setCertifications((prev) =>
        prev.map((c, i) => (i === editIndex ? item : c))
      );
    } else {
      setCertifications((prev) => [item, ...prev]);
    }
  };

  const handleDelete = (idx: number) => {
    setCertifications((prev) => prev.filter((_, i) => i !== idx));
    toast({ title: "Deleted", description: "Certification removed." });
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
    <section id="certifications" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-2">
              <span className="gradient-text">Certifications</span> &
              Achievements
            </h2>
            <p className="text-muted-foreground">
              Recognized training and accomplishments
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-6 border border-border card-hover relative group"
            >
              {/* Edit / Delete buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => openEdit(idx)}
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Edit certification"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(idx)}
                  className="p-2 rounded-full bg-destructive/10 hover:bg-destructive/20 text-destructive transition-colors"
                  aria-label="Delete certification"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-start justify-between gap-3 pr-16">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-background/40 p-2 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={`Open link for ${cert.title}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
              {cert.date && (
                <p className="text-xs text-muted-foreground">{cert.date}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="certification"
        onSave={(item) => handleSave(item as CertificationItem)}
        editItem={editIndex !== null ? certifications[editIndex] : null}
      />
    </section>
  );
};

export default Certifications;
