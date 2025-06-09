import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.footer
      className="py-12 px-4 bg-emerald-900 text-white"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">FitVerse</h3>
          <p className="text-gray-300 text-sm">
            Empowering your fitness journey with AI-driven insights and personalized plans.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-lime-300 transition-colors">Home</a></li>
            <li><a href="#features" className="hover:text-lime-300 transition-colors">Features</a></li>
            <li><a href="#pricing" className="hover:text-lime-300 transition-colors">Pricing</a></li>
            <li><a href="#contact" className="hover:text-lime-300 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Developed & Designed By</h3>
          <p className="text-gray-300 text-sm mb-2">Chirag Vaibhav Rane</p>
          <p className="text-gray-400 text-sm mb-4">Web Developer | Data Scientist</p>
          <div className="flex space-x-4">
            <a href="https://instagram.com/chiragrane04" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-lime-300 transition-colors" />
            </a>
            <a href="https://github.com/chiragRane-Projects" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-lime-300 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/chirag-rane-2a7ba5270" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-lime-300 transition-colors" />
            </a>
            <a href="mailto:beingchirag6@gmail.com">
              <Mail className="w-6 h-6 hover:text-lime-300 transition-colors" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} FitVerse. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;