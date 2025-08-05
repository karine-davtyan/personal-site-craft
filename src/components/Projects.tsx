import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Invisibility Cloak",
      description: "PyQt5 GUI leveraging ML-based DeepLabV3 + ResNet101 segmentation models to \"erase\" people from a live webcam feed at ~30 FPS, with blur/threshold controls; Docker-packaged for one-command deployment.",
      technologies: ["Python", "PyQt5", "Machine Learning", "DeepLabV3", "ResNet101", "Docker", "Computer Vision"],
      featured: true
    },
    {
      title: "ASL Text-to-Sign Translator", 
      description: "HTML/CSS/JS web app mapping English input to ASL letter/number images, providing an accessible communication tool for the deaf and hard-of-hearing community.",
      technologies: ["HTML", "CSS", "JavaScript", "Accessibility", "ASL"]
    },
    {
      title: "QuiZone",
      description: "Spring Boot–backed quiz/flashcard platform with customizable settings and CI/CD–driven deployment, enabling interactive learning experiences with automated testing and deployment pipelines.",
      technologies: ["Spring Boot", "Java", "CI/CD", "Web Development", "Database"]
    },
    {
      title: "Barcode Scanner App",
      description: "A mobile barcode scanner app with a FastAPI backend that checks product authenticity using a mock product code database, demonstrating full-stack mobile development skills.",
      technologies: ["FastAPI", "Python", "Mobile Development", "REST API", "Database"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`fade-in fade-in-delay-${index + 1} bg-gradient-card rounded-xl p-8 glow-hover transition-all duration-300 hover:scale-105 ${
                project.featured ? 'lg:col-span-2 border border-primary/30' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className={`font-semibold text-primary ${
                  project.featured ? 'text-2xl' : 'text-xl'
                }`}>
                  {project.title}
                  {project.featured && (
                    <span className="ml-3 px-2 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30">
                      Featured
                    </span>
                  )}
                </h3>
                <div className="flex space-x-2">
                  <button className="p-2 bg-secondary rounded-full hover:bg-primary transition-colors group">
                    <Github className="w-4 h-4 group-hover:text-primary-foreground" />
                  </button>
                  <button className="p-2 bg-secondary rounded-full hover:bg-primary transition-colors group">
                    <ExternalLink className="w-4 h-4 group-hover:text-primary-foreground" />
                  </button>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-secondary-foreground border border-border hover:border-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center fade-in fade-in-delay-3">
          <div className="bg-gradient-card rounded-xl p-8 glow-hover">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              More Projects Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m constantly working on new projects and experiments. Check out my GitHub for the latest updates and contributions.
            </p>
            <a
              href="https://github.com/karine-davtyan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-glow transition-all duration-300 font-medium"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;