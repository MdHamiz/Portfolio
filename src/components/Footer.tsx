import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Md Hamiz Imam
            </div>
            <p className="text-gray-400">
              Computer Science Student & Software Developer
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span>by    Imam</span>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Hamiz. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;