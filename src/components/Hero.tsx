import { Mail, Phone, MapPin, Github, Linkedin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-32 md:pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </div>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
          Hi, I'm <span className="gradient-text">Adhitya S</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          IT Student | MERN Stack Developer
        </p>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          Passionate about building responsive web applications with clean, modular code.
          Specializing in full-stack development with Node.js and modern JavaScript frameworks.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
          <Button size="lg" className="gap-2 rounded-full px-8 shadow-lg shadow-primary/20" asChild>
            <a href="#projects">
              <Code2 className="h-5 w-5" />
              View Projects
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
            <a href="#contact">
              <Mail className="h-5 w-5" />
              Get in Touch
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <a href="mailto:adhisivaraj10@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail className="h-4 w-4" />
            adhisivaraj10@gmail.com
          </a>
          <a href="tel:9159289052" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Phone className="h-4 w-4" />
            9159289052
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Melur, The Nilgiris
          </span>
        </div>

        <div className="flex justify-center gap-4 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <a href="https://github.com/ADHITYAAA" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <a href="https://www.linkedin.com/in/adhityasivaraj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <a href="https://leetcode.com/u/adhityaaa/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <Code2 className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
