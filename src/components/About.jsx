import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-24 pb-16">
      <section className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary-dark mb-4">About Trending Aware International School</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering a new era in education with globally inspired curriculum and mindset training.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/assets/images/about-school.jpeg" 
              alt="Students learning" 
              className="rounded-xl shadow-lg w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-primary-dark mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-6">
              To create a learning environment that nurtures innovation, critical thinking, and global citizenship, preparing students to excel in an ever-changing world.
            </p>

            <div ref={ref} className="space-y-6">
              <motion.div
                className="p-6 bg-gray-50 rounded-lg"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-secondary-dark mb-3">Global Syllabus</h3>
                <p className="text-gray-600">
                  Our curriculum draws inspiration from the world's best education systems including Finland, Switzerland, Singapore, and Canada, adapted to our local context.
                </p>
              </motion.div>

              <motion.div
                className="p-6 bg-gray-50 rounded-lg"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-secondary-dark mb-3">Mindset Training</h3>
                <p className="text-gray-600">
                  We go beyond academics to develop growth mindset, resilience, and emotional intelligence through specialized programs and daily practices.
                </p>
              </motion.div>

              <motion.div
                className="p-6 bg-gray-50 rounded-lg"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h3 className="text-xl font-semibold text-secondary-dark mb-3">PISA Standards</h3>
                <p className="text-gray-600">
                  Aligned with Programme for International Student Assessment (PISA) standards, we focus on developing applied knowledge and problem-solving skills.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-primary-dark text-white py-16 mt-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Our History & Context</h2>
            <div className="space-y-6">
              <p>
                India participated in the Programme for International Student Assessment (PISA) in 2009 and ranked 72nd out of 74 countries. This result highlighted the need for educational reform in India.
              </p>
              <p>
                Trending Aware International School was founded with the mission to bridge this gap by implementing international best practices while maintaining cultural relevance.
              </p>
              <p>
                Since our establishment, we've focused on creating a learning environment that develops not just academic excellence but also the skills and mindset needed for success in the 21st century.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;