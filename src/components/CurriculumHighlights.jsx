import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SCIENCE_TECH_TOPICS } from '../utils/constants';

const CurriculumHighlights = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Curriculum Highlights</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our forward-thinking curriculum prepares students for the careers of tomorrow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-primary-dark mb-4">Science & Technology Focus</h3>
            <p className="text-gray-600 mb-6">
              We expose students to cutting-edge topics that will shape the future, with hands-on learning experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              {SCIENCE_TECH_TOPICS.slice(0, 6).map((topic, index) => (
                <motion.span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full flex items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <span className="mr-2">{topic.icon}</span>
                  {topic.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-primary-dark mb-4">Bagless Learning</h3>
            <p className="text-gray-600 mb-6">
              Our innovative bagless approach reduces stress and fosters creativity through experiential learning.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary-light text-primary-dark rounded-full p-2 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700">No heavy textbooks - learning through projects and activities</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-light text-primary-dark rounded-full p-2 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700">Develops critical thinking and problem-solving skills</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-light text-primary-dark rounded-full p-2 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700">Encourages collaboration and social development</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/curriculum" 
            className="inline-block bg-secondary-dark hover:bg-secondary-darker text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Explore Full Curriculum
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CurriculumHighlights;