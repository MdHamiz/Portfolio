import React from 'react';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    // {
    //   type: 'work',
    //   title: 'Software Developer Intern',
    //   company: 'TechCorp Solutions',
    //   location: 'San Francisco, CA',
    //   period: 'June 2023 - August 2023',
    //   description: [
    //     'Developed and maintained web applications using React and Node.js',
    //     'Collaborated with senior developers on feature implementation',
    //     'Improved application performance by 25% through code optimization',
    //     'Participated in daily standups and sprint planning meetings',
    //   ],
    // },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'codesoft',
      location: 'Remote',
      period: 'octuber 2024 - november 2024',
      description: [
        'Built responsive user interfaces using modern JavaScript frameworks',
        'Worked closely with designers to implement pixel-perfect designs',
        'Integrated third-party APIs and payment systems',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      company: 'Jahangirabad institute of technology',
      location: 'Barabanki, UP',
      period: '2021 - 2025',
      description: [
        'Relevant Coursework: Data Structures, Algorithms, Database Systems',
        'GPA: 7.3/10.0 - Dean\'s List recipient',
        'President of Computer Science Club',
         
      ],
    },
    {
      type: 'education',
      title: 'High School ',
      company: 'Oriental college patna',
      location: 'Patna City, Bihar',
      period: '2019 - 2021',
      description: [
        'Scored 63 percentage',
        'lead a team of "cricket" as captain'
      ],
    },

        {
      type: 'education',
      title: ' School ',
      company: 'Red Carpet High school',
      location: 'Patna City, Bihar',
      period: '2017 - 2019',
      description: [
        'Scored 67 percentage',
        
      ],
    },
  ];

  const certifications = [
      {name:'Mern Stack Certified by apna college',  file:'certificates/fullstack.pdf'},
    {name:'Workshop about JAVA Devlopment by BARRONNZ',file:'/certificates/java.pdf'},
   { name:'Frontend Developer Internship Certificate by Codesoft',file:'/certificates/frontend.pdf'},
    {name:'Cloud Computing by Skillup',file:'/certificates/cloud.pdf'},
   
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start mb-12">
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-2 ${
                    exp.type === 'work' 
                      ? 'bg-blue-500 border-blue-400' 
                      : 'bg-purple-500 border-purple-400'
                  }`}></div>
                  
                  <div className="ml-16 bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition-colors duration-300 w-full">
                    <div className="flex items-center gap-2 mb-2">
                      {exp.type === 'work' ? (
                        <Award className="w-5 h-5 text-blue-400" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-purple-400" />
                      )}
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        exp.type === 'work' 
                          ? 'bg-blue-500/20 text-blue-400' 
                          : 'bg-purple-500/20 text-purple-400'
                      }`}>
                        {exp.type === 'work' ? 'Work' : 'Education'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-medium mb-2">
                      {exp.company}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-2">
                          <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-1">
            <div className="bg-gray-700 p-6 rounded-2xl sticky top-24">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-400" />
                Certifications
              </h3>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  
                  <a
                    key={index}
                      href={cert.file}
                      target="_blank" rel="noopener noreferrer"

                     
                    className=" p-4 rounded-lg  transition-colors duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-120 transition-transform"></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {cert.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                <h4 className="text-white font-semibold mb-2">Current Goal</h4>
                <p className="text-gray-300 text-sm">
                  Working towards AWS Solutions Architect certification to deepen cloud expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;