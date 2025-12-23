import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  note?: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  date?: string;
  link?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  description: string;
  link?: string;
};

interface AddItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "project" | "certification" | "experience";
  onSave: (item: ProjectItem | CertificationItem | ExperienceItem) => void;
  editItem?: ProjectItem | CertificationItem | ExperienceItem | null;
}

const AddItemModal = ({
  isOpen,
  onClose,
  type,
  onSave,
  editItem,
}: AddItemModalProps) => {
  const { toast } = useToast();

  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    stack: "",
    link: "",
  });

  const [certData, setCertData] = useState({
    title: "",
    issuer: "",
    date: "",
    link: "",
  });

  const [expData, setExpData] = useState({
    role: "",
    company: "",
    description: "",
    link: "",
  });

  // Populate form when editing
  useEffect(() => {
    if (!isOpen) return;

    if (editItem && type === "project") {
      const p = editItem as ProjectItem;
      setProjectData({
        title: p.title,
        description: p.description,
        stack: (p.stack ?? []).join(", "),
        link: p.link ?? "",
      });
    } else if (editItem && type === "certification") {
      const c = editItem as CertificationItem;
      setCertData({
        title: c.title,
        issuer: c.issuer,
        date: c.date ?? "",
        link: c.link ?? "",
      });
    } else if (editItem && type === "experience") {
      const e = editItem as ExperienceItem;
      setExpData({
        role: e.role,
        company: e.company,
        description: e.description,
        link: e.link ?? "",
      });
    } else {
      // Reset when adding new
      setProjectData({ title: "", description: "", stack: "", link: "" });
      setCertData({ title: "", issuer: "", date: "", link: "" });
      setExpData({ role: "", company: "", description: "", link: "" });
    }
  }, [isOpen, editItem, type]);

  if (!isOpen) return null;

  const isEditing = !!editItem;

  const title =
    type === "project"
      ? isEditing
        ? "Edit Project"
        : "Add New Project"
      : type === "certification"
        ? isEditing
          ? "Edit Certification"
          : "Add New Certification"
        : isEditing
          ? "Edit Experience"
          : "Add New Experience";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (type === "project") {
      const payload: ProjectItem = {
        title: projectData.title.trim(),
        description: projectData.description.trim(),
        stack: projectData.stack
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        link: projectData.link.trim() || undefined,
      };
      onSave(payload);
    }

    if (type === "certification") {
      const payload: CertificationItem = {
        title: certData.title.trim(),
        issuer: certData.issuer.trim(),
        date: certData.date.trim() || undefined,
        link: certData.link.trim() || undefined,
      };
      onSave(payload);
    }

    if (type === "experience") {
      const payload: ExperienceItem = {
        role: expData.role.trim(),
        company: expData.company.trim(),
        description: expData.description.trim(),
        link: expData.link.trim() || undefined,
      };
      onSave(payload);
    }

    toast({
      title: isEditing ? "Updated!" : "Added!",
      description: isEditing
        ? "Your changes have been saved."
        : "Your item is now visible in your portfolio.",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-card rounded-2xl border border-border shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="font-heading text-2xl font-semibold">{title}</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {type === "project" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="project-title">Title *</Label>
                <Input
                  id="project-title"
                  placeholder="Project name"
                  value={projectData.title}
                  onChange={(e) =>
                    setProjectData({ ...projectData, title: e.target.value })
                  }
                  required
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="project-description">Description *</Label>
                <Textarea
                  id="project-description"
                  placeholder="Brief description of the project"
                  value={projectData.description}
                  onChange={(e) =>
                    setProjectData({
                      ...projectData,
                      description: e.target.value,
                    })
                  }
                  required
                  rows={4}
                  className="rounded-lg resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="project-stack">Tech Stack</Label>
                <Input
                  id="project-stack"
                  placeholder="e.g., React, Node.js, MongoDB"
                  value={projectData.stack}
                  onChange={(e) =>
                    setProjectData({ ...projectData, stack: e.target.value })
                  }
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="project-link">Link (Optional)</Label>
                <Input
                  id="project-link"
                  type="url"
                  placeholder="https://example.com"
                  value={projectData.link}
                  onChange={(e) =>
                    setProjectData({ ...projectData, link: e.target.value })
                  }
                  className="rounded-lg"
                />
              </div>
            </>
          )}

          {type === "certification" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="cert-title">Title *</Label>
                <Input
                  id="cert-title"
                  placeholder="Certification name"
                  value={certData.title}
                  onChange={(e) =>
                    setCertData({ ...certData, title: e.target.value })
                  }
                  required
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cert-issuer">Issuer *</Label>
                <Input
                  id="cert-issuer"
                  placeholder="Issued by (company / institute)"
                  value={certData.issuer}
                  onChange={(e) =>
                    setCertData({ ...certData, issuer: e.target.value })
                  }
                  required
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cert-date">Date (Optional)</Label>
                <Input
                  id="cert-date"
                  placeholder="e.g., Sep-2025"
                  value={certData.date}
                  onChange={(e) =>
                    setCertData({ ...certData, date: e.target.value })
                  }
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cert-link">Link (Optional)</Label>
                <Input
                  id="cert-link"
                  type="url"
                  placeholder="https://example.com"
                  value={certData.link}
                  onChange={(e) =>
                    setCertData({ ...certData, link: e.target.value })
                  }
                  className="rounded-lg"
                />
              </div>
            </>
          )}

          {type === "experience" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="exp-role">Role *</Label>
                <Input
                  id="exp-role"
                  placeholder="e.g., MERN Stack Development Internship"
                  value={expData.role}
                  onChange={(e) =>
                    setExpData({ ...expData, role: e.target.value })
                  }
                  required
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="exp-company">Company *</Label>
                <Input
                  id="exp-company"
                  placeholder="e.g., Ether Infotech"
                  value={expData.company}
                  onChange={(e) =>
                    setExpData({ ...expData, company: e.target.value })
                  }
                  required
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="exp-description">Description *</Label>
                <Textarea
                  id="exp-description"
                  placeholder="What you worked on / learned"
                  value={expData.description}
                  onChange={(e) =>
                    setExpData({ ...expData, description: e.target.value })
                  }
                  required
                  rows={4}
                  className="rounded-lg resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="exp-link">Link (Optional)</Label>
                <Input
                  id="exp-link"
                  type="url"
                  placeholder="https://example.com"
                  value={expData.link}
                  onChange={(e) =>
                    setExpData({ ...expData, link: e.target.value })
                  }
                  className="rounded-lg"
                />
              </div>
            </>
          )}

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 rounded-full"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1 rounded-full">
              {isEditing ? "Save" : "Add"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemModal;
