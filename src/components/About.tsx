import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src="/images/profile-photo.png" 
              alt="Kush Taneja's Profile"
              className="w-full h-auto object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">Who am I?</h3>
            <p className="text-lg mb-4 text-slate-700 dark:text-slate-300">
              I'm currently pursuing a B.Tech in Computer Science and Artificial Intelligence at NSUT. 
              I enjoy coding and have developed a strong grip on Data Structures and Algorithms (Java). 
              I also love diving into web development and creating intuitive, functional projects.
            </p>
            <p className="text-lg mb-4 text-slate-700 dark:text-slate-300">
              When I'm not coding, you'll likely find me playing sports, hitting the gym, or just 
              staying active—it helps me recharge and keep a balanced life.
            </p>
            <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
              I'm always open to learning new things, connecting with like-minded people, and taking 
              on challenges that push me out of my comfort zone.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-800 dark:text-slate-200">Problem Solver</span>
              <span className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-800 dark:text-slate-200">Team Player</span>
              <span className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-800 dark:text-slate-200">Fast Learner</span>
              <span className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-800 dark:text-slate-200">Enthusiastic</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 