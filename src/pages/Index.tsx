import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex flex-col w-full">
        {/* Each section is given a standard container to fix alignment */}
        <section id="hero"><Hero /></section>
        <section id="about" className="section-container"><About /></section>
        <section id="skills" className="section-container"><Skills /></section>
        <section id="experience" className="section-container"><Experience /></section>
        <section id="projects" className="section-container"><Projects /></section>
        <section id="certifications" className="section-container"><Certifications /></section>
        <section id="education" className="section-container"><Education /></section>
        <section id="contact" className="section-container"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;