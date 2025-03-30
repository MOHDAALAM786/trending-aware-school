import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AdmissionsPreview = () => {
  return (
    <section className="py-16 bg-primary-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Admissions Open for 2025-26</h2>
            <p className="text-lg mb-8">
              We're now accepting applications for all classes from Nursery to Class 9. Limited seats available - apply early to secure your child's place in our innovative learning community.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-secondary-light text-secondary-dark rounded-full p-2 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Admission Process</h3>
                  <p className="text-gray-200">Simple 3-step process: Application form, Interaction session, Admission confirmation</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary-light text-secondary-dark rounded-full p-2 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Documents Required</h3>
                  <p className="text-gray-200">Birth certificate, previous school report card (if applicable), address proof</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-primary-dark">Fee Structure Preview</h3>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span>Nursery (Monthly + Transport)</span>
                <span className="font-bold">₹1300/month</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span>Class 5 (Annual)</span>
                <span className="font-bold">₹19800/year</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span>Class 9 (Installment Plan)</span>
                <span className="font-bold">₹23800 total</span>
              </div>
              <Link 
                to="/admissions" 
                className="block w-full bg-secondary-dark hover:bg-secondary-darker text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
              >
                View Complete Fee Structure
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsPreview;