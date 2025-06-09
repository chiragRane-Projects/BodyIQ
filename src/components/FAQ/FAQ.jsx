import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Is FitVerse suitable for beginners?',
      answer: 'Absolutely! FitVerse tailors workout and nutrition plans to all fitness levels, from beginners to advanced athletes.'
    },
    {
      question: 'How does the AI personalization work?',
      answer: 'Our AI analyzes your goals, fitness level, and progress to create customized plans and provide real-time insights.'
    },
    {
      question: 'Can I use FitVerse for free?',
      answer: 'Yes, Fitverse is absolutely free. All features of FitVerse are accessible at zero cost.'
    },
    {
      question: 'Is my data secure?',
      answer: 'We prioritize your privacy with industry-standard encryption and secure data handling practices.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const faqVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section
      className="py-16 px-4 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-emerald-600 mb-12"
          variants={faqVariants}
        >
          Got Questions? We’ve Got Answers
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-4"
              variants={faqVariants}
            >
              <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-emerald-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-emerald-600" />
                )}
              </button>
              {openIndex === index && (
                <motion.p
                  className="mt-2 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;