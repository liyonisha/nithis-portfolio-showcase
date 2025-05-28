
import { Code, Graduation, MapPin, Phone } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating innovative solutions and contributing to dynamic teams
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a highly motivated undergraduate student pursuing B.Sc. (Hons) in Information Technology 
              at the University of Moratuwa. With a strong foundation in programming and problem-solving, 
              I'm passionate about developing innovative software solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My experience as a Full Stack Software Engineer Intern at Techorin (Pvt.) Ltd has equipped me 
              with practical skills in React.js, Node.js, and MySQL. I've worked on user and vendor management 
              modules, designed reusable components, and collaborated with design teams to create seamless user experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently, I'm working on an exciting AI-driven financial planning research project that combines 
              Big Data, Large Language Models, and machine learning to provide personalized investment strategies.
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-400" />
                <span className="text-gray-300">+94 766739537</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-blue-400" />
                <span className="text-gray-300">Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Education & Stats */}
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <Graduation size={24} className="text-purple-400" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-400">University of Moratuwa</h4>
                  <p className="text-gray-300">B.Sc. (Hons) in Information Technology</p>
                  <p className="text-gray-400 text-sm">2021 - 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400">G.C.E Advanced Level</h4>
                  <p className="text-gray-300">Jaffna Central College</p>
                  <p className="text-gray-400 text-sm">Combined Maths-A | Chemistry-A | Physics-B</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <Code size={24} className="text-green-400" />
                <h3 className="text-xl font-semibold">Quick Facts</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">6+</div>
                  <div className="text-sm text-gray-400">Months Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">5+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">10+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">3</div>
                  <div className="text-sm text-gray-400">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
