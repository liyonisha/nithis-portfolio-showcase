
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "AI-Driven Personalized Financial Planning",
      description: "Developing an AI-driven financial planning system that provides personalized, real-time investment plans using Big Data, LLMs, and machine learning techniques.",
      level: "Level 4 (Ongoing Research)",
      technologies: ["AI/ML", "Big Data", "LLMs", "Python", "Data Analytics"],
      status: "ongoing",
      highlights: ["AI-Driven High-Precision Expense Prediction", "Smart budgeting optimization", "Real-time market analysis"]
    },
    {
      title: "UI and API Testing Automation",
      description: "Comprehensive testing framework for web applications with automated end-to-end and API testing capabilities.",
      level: "Level 4",
      technologies: ["Selenium", "TestNG", "Cucumber", "API Testing", "Java"],
      status: "completed",
      highlights: ["GET, POST, PUT, DELETE query testing", "Response time optimization", "Test coverage improvement"]
    },
    {
      title: "Supermarket Management System",
      description: "A comprehensive supermarket management system focusing on effectiveness, security, and customer satisfaction.",
      level: "Level 3",
      technologies: ["Spring Boot", "MySQL", "MongoDB", "Java"],
      status: "completed",
      highlights: ["User-friendly customer interface", "Inventory management", "Security implementation"]
    },
    {
      title: "Intern Management System",
      description: "Digital platform connecting companies with intern pools and helping interns find opportunities.",
      level: "Level 2",
      technologies: ["React.js", "Spring Boot", "GraphQL", "Java"],
      status: "completed",
      highlights: ["Company-intern matching", "Opportunity discovery", "Modern GraphQL API"]
    },
    {
      title: "French Fry Machine",
      description: "Automated system for French fry production from potato, significantly reducing operational costs.",
      level: "Level 1",
      technologies: ["C", "Atmega", "Proteous", "Atmel Studio"],
      status: "completed",
      highlights: ["Cost reduction", "Process automation", "Hardware integration"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my technical projects spanning AI, web development, and automation
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      {project.status === "ongoing" && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-500/30">
                          Ongoing
                        </span>
                      )}
                    </div>
                    <p className="text-purple-400 font-medium mb-4">{project.level}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                      <Github size={20} />
                    </button>
                    <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Highlights:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
