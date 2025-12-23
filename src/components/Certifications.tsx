import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
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
  ];

  return (
    <section id="certifications" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-2">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <p className="text-muted-foreground">
            Recognized training and accomplishments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-6 border border-border card-hover relative group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-background/40 p-2 text-muted-foreground transition-colors hover:text-foreground"
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
    </section>
  );
};

export default Certifications;