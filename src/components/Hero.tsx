import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import IconWrapper from './IconWrapper';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 text-slate-900 dark:text-white">
            <span className="block mb-2">Hi, I'm</span>
            <span className="text-primary-600 dark:text-primary-400">Kush Taneja</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 font-normal text-slate-700 dark:text-slate-300">
            CS & AI Student
          </h2>
          <p className="text-lg md:text-xl mb-8 text-slate-600 dark:text-slate-400">
            B.Tech student at NSUT with strong skills in Java, DSA, and web development.
            Passionate about creating intuitive applications and exploring new technologies.
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <motion.a
              href="https://github.com/Kush-Taneja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              aria-label="GitHub Profile"
            >
              <IconWrapper icon={FiGithub} className="w-7 h-7" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/kush-taneja27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              aria-label="LinkedIn Profile"
            >
              <IconWrapper icon={FiLinkedin} className="w-7 h-7" />
            </motion.a>
          </div>
          
          <motion.a
            href="/resume.pdf"
            download
            className="btn btn-primary inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconWrapper icon={FiDownload} className="mr-2" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 