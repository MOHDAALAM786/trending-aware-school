import { motion } from 'framer-motion';

const Facilities = () => {
  const facilities = [
    {
      title: 'Smart Classrooms',
      description: 'Digitally equipped classrooms with interactive whiteboards and audio-visual learning aids.',
      image: '/assets/images/facilities/classroom.webp',
      features: ['Interactive whiteboards', 'Digital projectors', 'Comfortable seating', 'Ample natural light']
    },
    {
      title: 'Science Labs',
      description: 'State-of-the-art laboratories for physics, chemistry, and biology with modern equipment.',
      image: '/assets/images/facilities/lab.webp',
      features: ['Modern equipment', 'Safety-first design', 'Hands-on experiments', 'Research projects']
    },
    {
      title: 'Computer Lab',
      description: 'High-tech computer lab with latest hardware and software for digital learning.',
      image: '/assets/images/facilities/computer-lab.webp',
      features: ['Latest computers', 'High-speed internet', 'Programming tools', 'Robotics kits']
    },
    {
      title: 'Library',
      description: 'Extensive collection of books, journals, and digital resources for all age groups.',
      image: '/assets/images/facilities/library.jpeg',
      features: ['10,000+ books', 'Reading areas', 'Digital resources', 'Research support']
    },
    {
      title: 'Sports Facilities',
      description: 'Comprehensive sports infrastructure for physical education and competitive sports.',
      image: '/assets/images/facilities/sports.webp',
      features: ['Basketball court', 'Football field', 'Indoor games', 'Athletics track']
    },
    {
      title: 'Art & Music Rooms',
      description: 'Dedicated spaces for creative expression through visual and performing arts.',
      image: '/assets/images/facilities/art-room.webp',
      features: ['Art supplies', 'Musical instruments', 'Performance space', 'Exhibition areas']
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary-dark mb-4">Our Facilities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class infrastructure designed to support holistic learning and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden">
                <motion.img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-dark mb-2">{facility.title}</h3>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                <ul className="space-y-2">
                  {facility.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    >
                      <svg className="h-5 w-5 text-secondary-dark mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;