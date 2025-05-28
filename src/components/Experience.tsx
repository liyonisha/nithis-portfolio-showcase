
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional experience in full-stack development and software engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>

            {/* Experience Item */}
            <div className="relative flex items-start space-x-8 pb-12">
              {/* Timeline Dot */}
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Briefcase size={24} className="text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Software Engineer Intern - Full Stack</h3>
                  <div className="flex items-center space-x-2 text-blue-400">
                    <Calendar size={16} />
                    <span className="text-sm">Feb 2024 - Aug 2024</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-6">
                  <h4 className="text-lg text-blue-400 font-semibold">Techorin (Pvt.) Ltd</h4>
                  <MapPin size={16} className="text-gray-400" />
                </div>

                <div className="space-y-4">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Developed and enhanced features for Type, users and vendors management modules using React.js and Material-UI</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Collaborated with the design team to align UI/UX with project standards</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Designed and implemented reusable components and responsive layouts for seamless user experiences</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Conducted testing, debugging, and presented demos to gather feedback and refine project features</span>
                    </li>
                  </ul>

                  {/* Technologies */}
                  <div className="mt-6">
                    <h5 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Node.js", "MySQL", "Material-UI", "JavaScript"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
