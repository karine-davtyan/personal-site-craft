import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Karine Davtyan
          </h1>
        </div>
        
        <div className="fade-in fade-in-delay-1">
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Computer Science @ York University
          </h2>
        </div>
        
        <div className="fade-in fade-in-delay-2">
          <p className="text-lg md:text-xl text-foreground/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            I&apos;m a Computer Science student with a passion for machine learning, 
            data engineering, and building innovative solutions. Currently focused on 
            spiking neural networks research and developing energy-efficient AI systems.
          </p>
        </div>
        
        <div className="fade-in fade-in-delay-3">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/karine-davtyan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 glow-hover group"
            >
              <Github className="w-6 h-6 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/karineddavtyan/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 glow-hover group"
            >
              <Linkedin className="w-6 h-6 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="mailto:karineda@my.yorku.ca"
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 glow-hover group"
            >
              <Mail className="w-6 h-6 group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;