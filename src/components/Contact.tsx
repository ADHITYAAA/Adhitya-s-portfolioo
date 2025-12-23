import { Mail, Phone, MapPin, Github, Linkedin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm actively seeking opportunities in software development, web development, 
          or tech-related roles. Let's discuss how I can contribute to your team.
        </p>

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:adhisivaraj10@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl bg-muted hover:bg-muted/70 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">adhisivaraj10@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:9159289052"
              className="flex items-center gap-3 p-4 rounded-xl bg-muted hover:bg-muted/70 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">9159289052</p>
              </div>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Melur, The Nilgiris - 643221</span>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full h-12 w-12" asChild>
              <a href="https://github.com/ADHITYAAA" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-12 w-12" asChild>
              <a href="https://www.linkedin.com/in/adhityasivaraj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-12 w-12" asChild>
              <a href="https://leetcode.com/u/adhityaaa/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                <Code2 className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
