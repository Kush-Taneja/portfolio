import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiUser } from 'react-icons/fi';
import IconWrapper from './IconWrapper';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
      isValid = false;
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      // In a real application, you would send the form data to a server
      // Example: Sending to Kush's email: kushtaneja2712@gmail.com
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto">
          <motion.form 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8"
          >
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg">
                Thanks for your message! I'll get back to you soon.
              </div>
            )}
            
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-slate-700 dark:text-slate-300 font-medium">
                <div className="flex items-center">
                  <IconWrapper icon={FiUser} className="mr-2" />
                  <span>Name</span>
                </div>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-md border ${
                  errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                } bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-slate-700 dark:text-slate-300 font-medium">
                <div className="flex items-center">
                  <IconWrapper icon={FiMail} className="mr-2" />
                  <span>Email</span>
                </div>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-md border ${
                  errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                } bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500`}
                placeholder="Your email"
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-slate-700 dark:text-slate-300 font-medium">
                <div className="flex items-center">
                  <IconWrapper icon={FiSend} className="mr-2" />
                  <span>Message</span>
                </div>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-md border ${
                  errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                } bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none`}
                placeholder="Your message"
              />
              {errors.message && (
                <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-primary py-3 flex justify-center items-center disabled:opacity-70"
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <IconWrapper icon={FiSend} className="mr-2" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 