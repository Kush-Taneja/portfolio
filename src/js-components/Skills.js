import React from 'react';
import * as FiIcons from 'react-icons/fi';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', icon: 'FiCode', category: 'frontend' },
  { name: 'React', icon: 'FiLayers', category: 'frontend' },
  { name: 'Node.js', icon: 'FiServer', category: 'backend' },
  { name: 'TypeScript', icon: 'FiFileText', category: 'frontend' },
  { name: 'HTML/CSS', icon: 'FiLayout', category: 'frontend' },
  { name: 'SQL', icon: 'FiDatabase', category: 'backend' },
  { name: 'Git', icon: 'FiGitBranch', category: 'tools' },
  { name: 'Responsive Design', icon: 'FiSmartphone', category: 'frontend' },
  { name: 'RESTful APIs', icon: 'FiSend', category: 'backend' },
  { name: 'Java', icon: 'FiCoffee', category: 'backend' },
  { name: 'Python', icon: 'FiTerminal', category: 'backend' },
  { name: 'Testing', icon: 'FiCheckSquare', category: 'tools' },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'tools', name: 'Tools & Others' },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [filteredSkills, setFilteredSkills] = React.useState(skills);

  React.useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                ${activeCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {React.createElement(FiIcons[skill.icon], { className: "w-8 h-8 mb-3" })}
              <h3 className="font-medium text-slate-800 dark:text-white text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 