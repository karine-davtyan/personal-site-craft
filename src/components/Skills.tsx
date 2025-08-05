const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C", "JavaScript", "SQL", "RISC-V", "Verilog"]
    },
    {
      title: "Technologies", 
      skills: ["Spring Boot", "Flask", "React", "Angular", "Node.js", "REST APIs", "Azure", "Ataccama"]
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "Linux", "Bash", "Pandas", "Scikit-learn", "Visual Studio"]
    },
    {
      title: "Methodologies",
      skills: ["Agile", "Test-Driven Development", "CI/CD", "Machine Learning", "Data Engineering"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Skills
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`fade-in fade-in-delay-${index + 1} bg-gradient-card rounded-xl p-6 glow-hover`}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-secondary-foreground border border-border hover:border-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;