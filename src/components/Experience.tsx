const Experience = () => {
  const experiences = [
    {
      title: "Data and Information Discovery Analyst Co-op",
      company: "Teranet Inc.",
      location: "Toronto, ON", 
      period: "Jan 2025 – Present",
      description: [
        "Developed automated data governance workflows using Ataccama's ONE desktop platform, significantly reducing manual processes and streamlining operations.",
        "Engineered a data export feature that extracts location-level database data and automatically masks sensitive fields by leveraging GraphQL, Python, and Azure, ensuring enhanced data security.",
        "Implemented robust test data management routines with Python and GraphQL, establishing reliable validation processes to maintain high data integrity and quality.",
        "Partnered with cross-functional teams to gather and refine detailed table descriptions, resulting in enriched metadata and improved data discoverability across systems."
      ],
      type: "current"
    },
    {
      title: "Software Engineer Intern",
      company: "Arizet Labs Inc.",
      location: "Toronto, ON",
      period: "May 2023 – Aug 2023", 
      description: [
        "Developed a trading bot by utilizing live trading API, and integrating technical indicators (e.g., Moving Averages, RSI, MACD) as entry/exit conditions according to project specifications.",
        "Leveraged Scikit-learn to fine-tune client trading strategies by utilizing train/test splits, neural networks, and decision trees, achieving over 60% prediction accuracy on whether a given trade will be profitable or not.",
        "Integrated predictive model into trading strategies by adding it as an additional entry condition for a given trade, resulting in improved strategy profitability.",
        "Backtested client strategies with over 10 years of historical financial data, validating algorithm performance and minimizing risk.",
        "Utilized Pandas for advanced data analysis and visualization, delivering clear, actionable insights to clients and stakeholders."
      ],
      type: "past"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Experience
          </h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`fade-in fade-in-delay-${index + 1} bg-gradient-card rounded-xl p-8 glow-hover border-l-4 ${
                exp.type === 'current' ? 'border-l-primary' : 'border-l-accent'
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-xl font-medium text-foreground mb-1">
                    {exp.company}
                  </h4>
                  <p className="text-muted-foreground">
                    {exp.location}
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    exp.type === 'current' 
                      ? 'bg-primary/20 text-primary border border-primary/30' 
                      : 'bg-accent/20 text-accent border border-accent/30'
                  }`}>
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 fade-in fade-in-delay-3">
          <div className="bg-gradient-card rounded-xl p-8 text-center glow-hover">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Education
            </h3>
            <h4 className="text-lg font-medium mb-1">
              Bachelor of Science (Honours), Computer Science
            </h4>
            <p className="text-muted-foreground mb-2">
              York University – Lassonde School of Engineering, Toronto, ON
            </p>
            <p className="text-sm text-accent">
              Jan 2023 - Aug 2026 (Expected)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;