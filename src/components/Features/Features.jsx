import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Dumbbell, Utensils, BarChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Workouts',
      description: 'Personalized training plans tailored to your goals and fitness level using advanced AI algorithms.'
    },
    {
      icon: Dumbbell,
      title: 'Track Progress',
      description: 'Monitor your workouts, strength gains, and body metrics with detailed analytics.'
    },
    {
      icon: Utensils,
      title: 'Smart Nutrition',
      description: 'Custom meal plans and nutritional guidance based on your dietary needs and preferences.'
    },
    {
      icon: BarChart,
      title: 'Data-Driven Insights',
      description: 'Real-time feedback and insights to optimize your fitness journey and maximize results.'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      className="py-16 px-4 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-emerald-600 mb-12"
          variants={cardVariants}
        >
          Why Choose FitVerse?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <feature.icon className="w-12 h-12 text-emerald-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center text-sm md:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;