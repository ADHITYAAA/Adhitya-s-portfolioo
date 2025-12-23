import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © 2025 Adhitya S. Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using React & TypeScript
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
