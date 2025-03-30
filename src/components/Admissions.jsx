import { motion } from 'framer-motion';
import { useState } from 'react';
import ApplicationForm from './ApplicationForm';

const Admissions = () => {
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState('monthly');

  const feeStructure = [
    { class: 'Nursery', monthly: 500, transport: 800, annual: 15600, installment1: 8200, installment2: 8200, total: 16400 },
    { class: 'L.K.G', monthly: 500, transport: 800, annual: 15600, installment1: 8200, installment2: 8200, total: 16400 },
    { class: 'U.K.G', monthly: 550, transport: 800, annual: 16200, installment1: 8500, installment2: 8500, total: 17000 },
    { class: '1st', monthly: 700, transport: 800, annual: 18000, installment1: 9500, installment2: 9500, total: 19000 },
    { class: '2nd', monthly: 700, transport: 800, annual: 18000, installment1: 9500, installment2: 9500, total: 19000 },
    { class: '3rd', monthly: 700, transport: 800, annual: 18000, installment1: 9500, installment2: 9500, total: 19000 },
    { class: '4th', monthly: 850, transport: 800, annual: 19800, installment1: 10400, installment2: 10400, total: 20800 },
    { class: '5th', monthly: 850, transport: 800, annual: 19800, installment1: 10400, installment2: 10400, total: 20800 },
    { class: '6th', monthly: 1000, transport: 800, annual: 21600, installment1: 11300, installment2: 11300, total: 22600 },
    { class: '7th', monthly: 1000, transport: 800, annual: 21600, installment1: 11300, installment2: 11300, total: 22600 },
    { class: '8th', monthly: 1000, transport: 800, annual: 21600, installment1: 11300, installment2: 11300, total: 22600 },
    { class: '9th', monthly: 1100, transport: 800, annual: 22800, installment1: 11900, installment2: 11900, total: 23800 },
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
          <h1 className="text-4xl font-bold text-primary-dark mb-4">Admissions 2025-26</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of learners and innovators. Admissions are now open for all classes.
          </p>
        </motion.div>

        <motion.div
          className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-lg font-medium text-yellow-700">
                Admission Fee: ₹2100 (One-time payment)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Fee Structure Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          <button
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'monthly' ? 'text-secondary-dark border-b-2 border-secondary-dark' : 'text-gray-500 hover:text-primary-dark'}`}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly + Transport
          </button>
          <button
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'annual' ? 'text-secondary-dark border-b-2 border-secondary-dark' : 'text-gray-500 hover:text-primary-dark'}`}
            onClick={() => setActiveTab('annual')}
          >
            Annual
          </button>
          <button
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'installment' ? 'text-secondary-dark border-b-2 border-secondary-dark' : 'text-gray-500 hover:text-primary-dark'}`}
            onClick={() => setActiveTab('installment')}
          >
            Installment Plan
          </button>
        </div>

        {/* Fee Tables */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'monthly' && (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
                <thead className="bg-primary-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Class</th>
                    <th className="py-3 px-4 text-left">Monthly Fees (₹)</th>
                    <th className="py-3 px-4 text-left">Transport (₹)</th>
                    <th className="py-3 px-4 text-left">Total Monthly (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {feeStructure.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="py-3 px-4">{item.class}</td>
                      <td className="py-3 px-4">{item.monthly}</td>
                      <td className="py-3 px-4">{item.transport}</td>
                      <td className="py-3 px-4 font-medium">{item.monthly + item.transport}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'annual' && (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
                <thead className="bg-primary-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Class</th>
                    <th className="py-3 px-4 text-left">Annual Fees (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {feeStructure.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="py-3 px-4">{item.class}</td>
                      <td className="py-3 px-4 font-medium">{item.annual}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'installment' && (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
                <thead className="bg-primary-dark text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Class</th>
                    <th className="py-3 px-4 text-left">Installment I + Exam Fees (₹)</th>
                    <th className="py-3 px-4 text-left">Installment II + Exam Fees (₹)</th>
                    <th className="py-3 px-4 text-left">Total (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {feeStructure.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="py-3 px-4">{item.class}</td>
                      <td className="py-3 px-4">{item.installment1}</td>
                      <td className="py-3 px-4">{item.installment2}</td>
                      <td className="py-3 px-4 font-medium">{item.total}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button 
            onClick={() => setShowForm(true)}
            className="bg-secondary-dark hover:bg-secondary-darker text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Apply Now
          </button>
        </motion.div>
      </div>

      {/* Application Form Modal */}
      {showForm && <ApplicationForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Admissions;