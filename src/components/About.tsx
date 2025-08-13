import React from 'react';
import { Code, Coffee, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '5+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '10+' },
    { icon: Users, label: 'Team Projects', value: '10+' },
    { icon: Award, label: 'Certifications', value: '8' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Passionate About Technology & Innovation
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated Computer Science student with a strong foundation in software development, 
              data structures, and algorithms. My journey in tech started with curiosity about how things work, 
              and has evolved into a passion for creating efficient, scalable solutions.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Currently pursuing my Bachelor's degree in Computer Science, I'm actively involved in 
              various projects ranging from web applications to machine learning implementations. 
              I believe in continuous learning and staying updated with the latest technologies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me contributing to open source projects, 
              participating in hackathons, or exploring new programming paradigms.
            </p>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center text-6xl font-bold text-blue-400">
              🚀
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-700 p-6 rounded-2xl mb-4 group-hover:bg-gray-600 transition-colors duration-300">
                <stat.icon className="w-8 h-8 mx-auto text-blue-400 mb-2" />
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;