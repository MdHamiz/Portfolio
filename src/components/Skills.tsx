import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 10 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 10},
        { name: 'TypeScript', level: 60 },
      ],
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 80 },
        //{ name: 'Docker', level: 0 },
        { name: 'AWS', level: 85 },
       // { name: 'Firebase', level: 0 },
       // { name: 'Figma', level: 0 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-6 text-white text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-1000 ease-out group-hover:scale-105 animate-fill-bar"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

     <style>{`
  @keyframes fillBar {
    from {
      width: 0%;
    }
    to {
      width: var(--width);
    }
  }
  .animate-fill-bar {
    animation: fillBar 1.5s ease-out both;
  }
`}</style>

    </section>
  );
};

export default Skills;