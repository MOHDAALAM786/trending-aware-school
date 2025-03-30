import { motion } from 'framer-motion';
import { FaYoutube, FaWhatsapp, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            
            <h3 className="text-xl font-bold mb-4">Trending Aware International School</h3>
            <p className="mb-4">
              Innovative education for future leaders. Combining global best practices with local relevance to create transformative learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-light transition-colors">
                <FaYoutube size={24} />
              </a>
              <a href="https://wa.me/6396735431" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-light transition-colors">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-light transition-colors">
                <FaFacebook size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-secondary-light transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary-light transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/curriculum" className="hover:text-secondary-light transition-colors">Curriculum</Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-secondary-light transition-colors">Facilities</Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-secondary-light transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary-light transition-colors">Contact</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <span>Bhawalpur bansli, Joya 244304 (Sambhal)</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3" />
                <div>
                  <a href="tel:6396735431" className="hover:text-secondary-light transition-colors">6396735431</a>
                  <br />
                  <a href="tel:9105652866" className="hover:text-secondary-light transition-colors">9105652866</a>
                </div>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" />
                <a href="mailto:info@trendingawareschool.com" className="hover:text-secondary-light transition-colors">eraalam0786@gmail.com</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">School Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 12:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                to="/admissions" 
                className="inline-block bg-secondary-light hover:bg-secondary-dark text-white font-bold py-2 px-6 rounded-full transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-700 mt-8 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>&copy; {currentYear} Trending Aware International School. All rights reserved.</p>
          <div className="mt-2">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors mx-2">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors mx-2">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;