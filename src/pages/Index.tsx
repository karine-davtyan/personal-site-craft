import NetworkBackground from "@/components/NetworkBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NetworkBackground />
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </div>
  );
};

export default Index;
