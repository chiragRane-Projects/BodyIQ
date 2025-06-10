import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-emerald-900/20 to-lime-800/20 py-16 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          className="font-bold text-4xl md:text-6xl text-emerald-600 mb-6 tracking-tight"
          variants={childVariants}
        >
          FitVerse
        </motion.h1>
        <motion.p
          className="font-light text-lg md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={childVariants}
        >
          Train smarter, eat wiser, and level up your body — powered by AI and real data.
        </motion.p>
        <motion.div variants={childVariants}>
          <Button
            asChild
            className="inline-block bg-emerald-600 text-lg text-white font-medium py-1 px-4 rounded-xl hover:bg-emerald-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
          >
            <Link to="/login">Start Your Journey</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;