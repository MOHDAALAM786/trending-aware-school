import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary-light to-secondary-light overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Innovative Education for Future Leaders
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Preparing students for the challenges of tomorrow with a world-class curriculum and mindset training.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link 
              to="/admissions" 
              className="bg-secondary-dark hover:bg-secondary-darker text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Admissions 2025-26
            </Link>
            <Link 
              to="/curriculum" 
              className="bg-white hover:bg-gray-100 text-primary-dark font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Our Curriculum
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-16 bg-white"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />
      
      {/* Scrolling animation */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;