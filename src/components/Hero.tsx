import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Full Stack Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%234B5563%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-4xl font-bold">
          <img src="/hamiz.png" alt="profile"
          className='rounded-full overflow-hidden h-full w-full object-cover'
          />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            Md Hamiz Imam
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="border-r-2 border-blue-400 pr-2 animate-pulse">
              {displayText}
            </span>
          </div>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate Computer Science student with expertise in modern web technologies, 
            algorithms, and software development. Building innovative solutions that make a difference.
          </p>
        </div>
      
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
             <a href='/resumee.pdf' download>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 shadow-lg">
            <Download size={20} />
            Download Resume
          </button>
          </a>
         
          
          <div className="flex gap-4">
            <a href="https://github.com/MdHamiz" className="p-3 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/feed/" className="p-3 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="https://mail.google.com/mail/u/0/?hl=en#inbox?compose=CllgCHrhVNjSQpgbpQSSBqbKPJTRsRfZqbQmrhGJQVFvnQPswNvwbntwZxmZtnnQQDTGjcSltDV" className="p-3 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;