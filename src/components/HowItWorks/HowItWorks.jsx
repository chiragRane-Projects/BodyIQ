import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Target, Activity, Brain } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Create your free account in seconds and join the FitVerse community.'
    },
    {
      icon: Target,
      title: 'Set Your Goals',
      description: 'Define your fitness objectives, whether it’s weight loss, muscle gain, or overall health.'
    },
    {
      icon: Activity,
      title: 'Track Your Progress',
      description: 'Log workouts, meals, and metrics with our intuitive app interface.'
    },
    {
      icon: Brain,
      title: 'Get AI Insights',
      description: 'Receive personalized recommendations to optimize your fitness journey.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      className="py-16 px-4 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-emerald-600 mb-12"
          variants={stepVariants}
        >
          Your Path to Fitness, Simplified
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6"
              variants={stepVariants}
            >
              <div className="bg-emerald-100 p-4 rounded-full mb-4">
                <step.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;