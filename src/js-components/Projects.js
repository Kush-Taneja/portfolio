import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiPlusCircle } from 'react-icons/fi';
import IconWrapper from './IconWrapper';

// This is a placeholder until Kush adds real projects
const projects = [
  {
    id: 'placeholder-1',
    title: 'Project Coming Soon',
    description: 'I\'m currently working on exciting projects. Check back soon to see my latest work!',
    image: '/images/placeholder-project.jpg',
    technologies: ['Java', 'React', 'Node.js'],
    githubLink: 'https://github.com/Kush-Taneja',
    demoLink: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        {projects.length === 0 ? (
          <div className="text-center p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-md inline-block"
            >
              <IconWrapper icon={FiPlusCircle} className="w-16 h-16 mx-auto mb-4 text-primary-600 dark:text-primary-400" />
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Projects Coming Soon</h3>
              <p className="text-slate-600 dark:text-slate-300">
                I'm currently working on exciting projects that will be showcased here soon. 
                Check back later or contact me for more information!
              </p>
            </motion.div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <IconWrapper icon={FiGithub} className="mr-1" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <IconWrapper icon={FiExternalLink} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 