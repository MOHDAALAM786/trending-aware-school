import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">About Our School</h2>
            <p className="text-lg text-gray-600 mb-6">
              Trending Aware International School is committed to providing an education that combines global best practices with innovative approaches to learning. Our mission is to nurture future leaders who are not only academically excellent but also creative, resilient, and globally aware.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-secondary-light text-secondary-dark rounded-full p-2 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700">Global curriculum inspired by top education systems worldwide</p>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary-light text-secondary-dark rounded-full p-2 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700">Focus on 21st century skills and mindset development</p>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary-light text-secondary-dark rounded-full p-2 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700">Innovative teaching methods that make learning engaging and effective</p>
              </div>
            </div>
            <Link 
              to="/about" 
              className="inline-block bg-primary-dark hover:bg-primary-darker text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Learn More About Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src="/assets/images/about-section.jpeg" 
              alt="Students learning" 
              className="rounded-xl shadow-lg w-full"
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-secondary-dark text-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-lg">Years of Educational Excellence</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;