import React from 'react';
import { motion } from 'framer-motion';

const CTABanner = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-lime-500 text-white text-center"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          variants={variants}
        >
          Start Your Fitness Journey Today!
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-8"
          variants={variants}
        >
          Join thousands transforming their lives with FitVerse’s AI-powered fitness tracking.
        </motion.p>
        <motion.a
          href="#signup"
          className="inline-block bg-white text-emerald-600 font-medium py-3 px-8 rounded-full 
                     hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
          variants={variants}
        >
          Get Started for Free
        </motion.a>
      </div>
    </motion.section>
  );
};

export default CTABanner;