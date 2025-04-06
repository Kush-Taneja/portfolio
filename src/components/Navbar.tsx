import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import IconWrapper from './IconWrapper';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-slate-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link 
          to="hero" 
          spy={true} 
          smooth={true} 
          duration={500}
          className="text-2xl font-poppins font-bold text-primary-600 dark:text-primary-400 cursor-pointer"
        >
          Kush Taneja
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-primary-600 dark:text-primary-400"
              className="font-medium hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {darkMode ? (
              <IconWrapper icon={FiSun} className="w-5 h-5 text-yellow-400" />
            ) : (
              <IconWrapper icon={FiMoon} className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 mr-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {darkMode ? (
              <IconWrapper icon={FiSun} className="w-5 h-5 text-yellow-400" />
            ) : (
              <IconWrapper icon={FiMoon} className="w-5 h-5 text-slate-700" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {isOpen ? (
              <IconWrapper icon={FiX} className="w-6 h-6 text-slate-800 dark:text-white" />
            ) : (
              <IconWrapper icon={FiMenu} className="w-6 h-6 text-slate-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 shadow-lg absolute top-full left-0 right-0 transition-all duration-300">
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-primary-600 dark:text-primary-400"
                className="font-medium hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 