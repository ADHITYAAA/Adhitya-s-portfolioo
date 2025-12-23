import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="shrink-0">
              <img 
                src={profilePhoto} 
                alt="Adhitya S - MERN Stack Developer"
                className="w-48 h-48 rounded-2xl object-cover border-2 border-border shadow-lg"
              />
            </div>
            
            <div className="flex-1">
              <p className="text-lg text-muted-foreground leading-relaxed">
                IT student with hands-on experience in front-end (HTML, CSS, JavaScript) and backend 
                development using Node.js. Skilled in building responsive web apps and writing clean, 
                modular code. Strong in debugging, collaboration, and delivering efficient solutions. 
                Actively seeking opportunities across software, web, or tech-related roles to apply 
                and grow practical skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
