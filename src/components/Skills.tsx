import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import IconWrapper from './IconWrapper';

type SkillItem = {
  name: string;
  icon: keyof typeof FiIcons;
  category: string;
};

const Skills: React.FC = () => {
  const skills: SkillItem[] = [
    { name: 'Java', icon: 'FiCode', category: 'Programming' },
    { name: 'HTML', icon: 'FiCode', category: 'Frontend' },
    { name: 'CSS', icon: 'FiLayout', category: 'Frontend' },
    { name: 'JavaScript', icon: 'FiZap', category: 'Frontend' },
    { name: 'React', icon: 'FiCode', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: 'FiLayout', category: 'Frontend' },
    { name: 'Node.js', icon: 'FiZap', category: 'Backend' },
    { name: 'MongoDB', icon: 'FiDatabase', category: 'Backend' },
    { name: 'SQL', icon: 'FiDatabase', category: 'Backend' },
    { name: 'Git', icon: 'FiGithub', category: 'Tools' },
    { name: 'Machine Learning', icon: 'FiCpu', category: 'AI' },
    { name: 'TensorFlow', icon: 'FiServer', category: 'AI' },
    { name: 'scikit-learn', icon: 'FiBox', category: 'AI' },
    { name: 'DSA', icon: 'FiBarChart2', category: 'Computer Science' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill) => {
            const Icon = FiIcons[skill.icon];
            return (
              <motion.div
                key={skill.name}
                variants={item}
                className="bg-white dark:bg-slate-700 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center text-primary-600 dark:text-primary-400">
                  {Icon && <IconWrapper icon={Icon} className="w-8 h-8 mb-3" />}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{skill.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{skill.category}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 