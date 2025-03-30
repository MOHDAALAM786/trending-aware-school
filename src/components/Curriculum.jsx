import { motion } from 'framer-motion';
import { useState } from 'react';
import { SCIENCE_TECH_TOPICS, CAREER_FIELDS } from '../utils/constants';

const Curriculum = () => {
  const [activeTab, setActiveTab] = useState('science');

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary-dark mb-4">Our Curriculum</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A forward-thinking approach to education that prepares students for the future.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
          <button
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'science' ? 'text-secondary-dark border-b-2 border-secondary-dark' : 'text-gray-500 hover:text-primary-dark'}`}
            onClick={() => setActiveTab('science')}
          >
            Science & Technology
          </button>
          <button
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'careers' ? 'text-secondary-dark border-b-2 border-secondary-dark' : 'text-gray-500 hover:text-primary-dark'}`}
            onClick={() => setActiveTab('careers')}
          >
            Career Awareness
          </button>
          <button
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'bagless' ? 'text-secondary-dark border-b-2 border-secondary-dark' : 'text-gray-500 hover:text-primary-dark'}`}
            onClick={() => setActiveTab('bagless')}
          >
            Bagless Learning
          </button>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'science' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SCIENCE_TECH_TOPICS.map((topic, index) => (
                <motion.div
                  key={topic.name}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h3 className="text-xl font-semibold text-primary-dark">{topic.name}</h3>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'careers' && (
            <div>
              <h2 className="text-2xl font-bold text-primary-dark mb-6">50+ Career Fields Explored</h2>
              <div className="flex flex-wrap gap-3">
                {CAREER_FIELDS.map((field, index) => (
                  <motion.span
                    key={field}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    whileHover={{ backgroundColor: '#00cc66', color: 'white' }}
                  >
                    {field}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'bagless' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-primary-dark mb-6">Bagless Learning Approach</h2>
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-secondary-light text-secondary-dark rounded-full p-3 mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Fosters Creativity</h3>
                      <p className="text-gray-600">Reduces rote learning and encourages innovative thinking through hands-on activities.</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="bg-secondary-light text-secondary-dark rounded-full p-3 mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Reduces Stress</h3>
                      <p className="text-gray-600">Eliminates the burden of heavy school bags and promotes joyful learning.</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="bg-secondary-light text-secondary-dark rounded-full p-3 mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Practical Knowledge</h3>
                      <p className="text-gray-600">Focuses on experiential learning rather than textbook memorization.</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="bg-secondary-light text-secondary-dark rounded-full p-3 mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Social Development</h3>
                      <p className="text-gray-600">Encourages collaboration and communication through group activities.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Curriculum;