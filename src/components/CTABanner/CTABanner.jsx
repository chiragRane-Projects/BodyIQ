import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const CTABanner = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <motion.section
      className="py-16 px-4 bg-gradient-to-r from-emerald-700 to-lime-600 text-white text-center"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          variants={variants}
        >
          Start Your Fitness Journey Today!
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto"
          variants={variants}
        >
          Join thousands transforming their lives with FitVerse’s AI-powered fitness tracking.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row justify-center gap-4" variants={variants}>
          <Button
            asChild
            className="bg-emerald-600 text-lg text-white font-medium py-3 px-8 rounded-full hover:bg-emerald-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
            aria-label="Get started with FitVerse for free"
          >
            <Link to="/login">Get Started for Free</Link>
          </Button>
          
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTABanner;