import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: ' Institute Platform',
      description: 'Full-stack e-commerce application with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'express'],
      image: 'https://llbcoaching.in/wp-content/uploads/2017/03/01_classic.jpg',
      github: 'https://github.com/MdHamiz/Shams',
      live: 'http://shams-25kj2rzyl-mdhamizs-projects.vercel.app',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: ' Implemented state management with Redux Toolkit for efficient task handling and scalability.',
      technologies: ['React', 'react toolkit', 'Tailwind CSS','context api'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/MdHamiz/todo-with-contextapi',
      live: '#',
      featured: false,
    },
      {
       title: 'food recipe Dashboard',
       description: 'Developed a web application to store and manage food recipes with user authentication and authorization. Designed functionality for users to create, update, and view recipes, ensuring personalized access', 
       technologies: ['JavaScript', 'react.js', 'JWT Authentication'],
       image: 'https://cdn.dribbble.com/userupload/9087674/file/original-2082c0e2da738486dd5c9baeac5873b4.png?resize=1000x750&vertical=center',
       github: 'https://github.com/MdHamiz/Food-Recepi',
       live: '#',
       featured: false,
     },
    // {
    //   title: 'Machine Learning Classifier',
    //   description: 'Image classification model using Python and TensorFlow, with a web interface for real-time predictions and model visualization.',
    //   technologies: ['Python', 'TensorFlow', 'Flask', 'NumPy'],
    //   image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   github: '#',
    //   live: '#',
    //   featured: true,
    // },
    // {
    //   title: 'Social Media Dashboard',
    //   description: 'Analytics dashboard for social media management with post scheduling, engagement tracking, and performance metrics.',
    //   technologies: ['Vue.js', 'Express.js', 'PostgreSQL'],
    //   image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   github: '#',
    //   live: '#',
    //   featured: false,
    // },
    // {
    //   title: 'Blockchain Voting System',
    //   description: 'Secure voting system built on blockchain technology ensuring transparency, immutability, and voter privacy.',
    //   technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    //   image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   github: '#',
    //   live: '#',
    //   featured: true,
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg">
            A showcase of my recent work and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative -hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                    <Star size={12} />
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-blue-500 hover:text-white transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group/link"
                  >
                    <Github size={20} className="group-hover/link:rotate-12 transition-transform" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group/link"
                  >
                    <ExternalLink size={20} className="group-hover/link:rotate-12 transition-transform" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;