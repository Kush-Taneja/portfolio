import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import IconWrapper from './IconWrapper';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-300">
              &copy; {currentYear} Kush Taneja. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/Kush-Taneja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-primary-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <IconWrapper icon={FiGithub} className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kush-taneja27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <IconWrapper icon={FiLinkedin} className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 