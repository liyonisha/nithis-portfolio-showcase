
import { Code, Database, Globe, Settings, Palette, Languages } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "TypeScript", "JavaScript", "Java"],
      color: "blue"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "React.js", "Material UI", "Spring Boot"],
      color: "green"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "SQL Server", "MongoDB"],
      color: "purple"
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      skills: ["Git", "GitHub", "Cucumber", "Selenium", "TestNG", "Postman", "OpenCV"],
      color: "orange"
    },
    {
      title: "Design & Analysis",
      icon: Palette,
      skills: ["Canva", "Figma", "Adobe Photoshop", "GIMP", "RapidMiner", "Jupyter Notebook"],
      color: "pink"
    },
    {
      title: "Languages",
      icon: Languages,
      skills: ["English (Fluent)", "Tamil (Native)", "Sinhala (Intermediate)"],
      color: "indigo"
    }
  ];

  const softSkills = [
    "Project Management", "Leadership", "Communication", "Risk Management", 
    "Teamwork", "Debugging", "Writing Test Cases", "Creative Thinking"
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 border-blue-500/30 bg-blue-500/20 text-blue-300",
      green: "from-green-500 to-green-600 border-green-500/30 bg-green-500/20 text-green-300",
      purple: "from-purple-500 to-purple-600 border-purple-500/30 bg-purple-500/20 text-purple-300",
      orange: "from-orange-500 to-orange-600 border-orange-500/30 bg-orange-500/20 text-orange-300",
      pink: "from-pink-500 to-pink-600 border-pink-500/30 bg-pink-500/20 text-pink-300",
      indigo: "from-indigo-500 to-indigo-600 border-indigo-500/30 bg-indigo-500/20 text-indigo-300"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for modern software development
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div
                key={index}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]}`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm border ${colorClasses.split(' ').slice(2).join(' ')} hover:scale-105 transition-transform`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700">
          <h3 className="text-2xl font-bold text-center mb-8">
            Soft <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <span className="text-gray-300 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
