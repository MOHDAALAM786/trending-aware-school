import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Mohd Asad Nawab',
      role: 'Parent of Class 5 student',
      content: 'The innovative curriculum at Trending Aware has transformed my child\'s approach to learning. She\'s now more curious and confident in her abilities.',
      image: '/assets/images/testimonials/parent1.jpg'
    },
    {
      id: 2,
      name: 'Mohd Tohid',
      role: 'Parent of Class 3 student',
      content: 'The bagless learning approach has reduced so much stress for my son. He actually looks forward to going to school now!',
      image: '/assets/images/testimonials/parent2.jpg'
    },
    {
      id: 3,
      name: 'Raqib Choudhary',
      role: 'Alumni (Batch of 2020)',
      content: 'The skills I learned at Trending Aware gave me a huge advantage in college. The focus on practical knowledge is unmatched.',
      image: '/assets/images/testimonials/student1.jpg'
    },
    {
      id: 4,
      name: 'Dr. Naseem',
      role: 'Parent of Class 7 student',
      content: 'The teachers here truly care about holistic development, not just academics. My daughter has grown so much in confidence and creativity.',
      image: '/assets/images/testimonials/parent3.jpg'
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

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
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">What Parents & Students Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our school community about their experiences.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={testimonials[currentTestimonial].id}
            className="bg-white p-8 md:p-12 rounded-xl shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <motion.div
                className="w-32 h-32 rounded-full overflow-hidden border-4 border-secondary-light shadow-md flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div>
                <FaQuoteLeft className="text-secondary-light text-3xl mb-4" />
                <p className="text-lg text-gray-700 mb-6">{testimonials[currentTestimonial].content}</p>
                <div>
                  <h4 className="text-xl font-bold text-primary-dark">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-500">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <FaChevronLeft className="text-primary-dark text-xl" />
          </button>

          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <FaChevronRight className="text-primary-dark text-xl" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-secondary-dark' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;