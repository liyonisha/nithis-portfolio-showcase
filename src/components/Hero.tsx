
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Suvasthikan
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-300">
              Software Engineer
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto md:mx-0">
              Highly motivated undergraduate with a strong foundation in programming and problem solving, 
              seeking challenging opportunities to develop innovative solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="mailto:suvasthikan20@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Mail size={24} />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Github size={24} />
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/lovable-uploads/08931b3a-0439-4463-9aa3-514c094d317d.png"
                    alt="Suvasthikan Nithiyanantham"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};
