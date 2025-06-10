import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SignIn } from '@clerk/clerk-react';

const LoginScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.1 }
    }
  };

  const slideVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const rightPanelVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 }
    }
  };

  return (
    <motion.div
      className="min-h-screen flex overflow-hidden bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Panel - Welcome Section */}
      <motion.div
        variants={slideVariants}
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-emerald-400 via-teal-500 to-green-600 relative overflow-hidden"
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-16 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/10 rounded-full blur-xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-start px-16 py-20 text-white w-full">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-sm">F</span>
                </div>
              </div>
              <span className="text-2xl font-bold">FitVerse</span>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Welcome Back!
            </h1>
            {isSignUp ? <p className="text-xl text-white/90 leading-relaxed max-w-md">
              To keep connected with us please login with your personal info
            </p> : <p className="text-xl text-white/90 leading-relaxed max-w-md">
              Lets embark this journey together. Please fill the form to proceed
            </p>}
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="px-8 py-3 border-2 border-white/30 rounded-full text-white hover:bg-white/10 transition-all duration-300 font-medium backdrop-blur-sm"
          >
            {isSignUp ? 'SIGN IN' : 'SIGN UP'}
          </button>
        </div>

        {/* Bottom Decorative Curve */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/10 to-transparent"></div>
      </motion.div>

      {/* Right Panel - Form Section */}
      <motion.div
        variants={rightPanelVariants}
        className="w-full lg:w-1/2 flex flex-col justify-center items-center px-8 sm:px-12 lg:px-16 py-12 bg-white relative min-h-screen lg:min-h-auto"
      >
        <div className="flex flex-col justify-center items-center h-full lg:h-auto w-full max-w-sm">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">FitVerse</span>
            </div>
          </div>
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-emerald-600 mb-2">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </h2>
            <p className="text-gray-500 text-sm">
              {isSignUp ? 'or use your email for registration:' : 'or use your email to sign in:'}
            </p>
          </div>

          {/* Clerk Form */}
          <div className="mb-6">
            <SignIn
              routing="path"
              path="/login"
              signUpUrl="/signup"
              appearance={{
                elements: {
                  formButtonPrimary: `
                    bg-gradient-to-r from-emerald-500 to-teal-600 
                    hover:from-emerald-600 hover:to-teal-700 
                    text-white font-semibold py-3 px-8 rounded-full 
                    transition-all duration-300 transform hover:scale-105 
                    shadow-lg hover:shadow-xl focus:ring-4 focus:ring-emerald-200
                    w-full text-sm tracking-wide
                  `,
                  card: 'bg-transparent shadow-none p-0',
                  headerTitle: 'hidden',
                  headerSubtitle: 'hidden',
                  socialButtonsContainer: 'hidden',
                  formFieldInput: `
                    w-full px-4 py-3 border border-gray-300 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-emerald-500 
                    focus:border-emerald-500 transition-all duration-300
                    bg-gray-50 focus:bg-white text-gray-800 
                    placeholder-gray-500 text-sm
                  `,
                  formFieldLabel: 'text-gray-700 font-medium text-sm mb-2 block',
                  footerActionLink: `
                    text-emerald-600 hover:text-emerald-700 font-medium
                    transition-colors duration-200 text-sm
                  `,
                  dividerLine: 'hidden',
                  dividerText: 'hidden',
                  formFieldInputShowPasswordButton: `
                    text-gray-500 hover:text-emerald-600 
                    transition-colors duration-200
                  `,
                  formFieldAction: `
                    text-emerald-600 hover:text-emerald-700 font-medium
                    transition-colors duration-200 text-sm
                  `,
                  form: 'space-y-4',
                  formField: 'space-y-1'
                }
              }}
            />
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden text-center">
            <p className="text-gray-600 text-sm">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{' '}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>

        {/* Bottom Security Info */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-4 text-xs text-gray-400">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              256-bit SSL
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              Secure
            </span>
          </div>
        </div>
      </motion.div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-300 to-pink-400 rounded-bl-full opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-300 to-orange-400 rounded-tr-full opacity-20 lg:hidden"></div>
    </motion.div>
  );
};

export default LoginScreen;