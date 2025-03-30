import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: '/assets/images/gallery/1.jpg', alt: 'Students in classroom', category: 'classrooms' },
    { id: 2, src: '/assets/images/gallery/2.jpg', alt: 'Science lab', category: 'labs' },
    { id: 3, src: '/assets/images/gallery/3.jpg', alt: 'Sports day', category: 'events' },
    { id: 4, src: '/assets/images/gallery/4.jpg', alt: 'Computer lab', category: 'labs' },
    { id: 5, src: '/assets/images/gallery/5.jpg', alt: 'Library', category: 'facilities' },
    { id: 6, src: '/assets/images/gallery/6.jpg', alt: 'Art class', category: 'classrooms' },
    { id: 7, src: '/assets/images/gallery/7.jpg', alt: 'Annual function', category: 'events' },
    { id: 8, src: '/assets/images/gallery/8.jpg', alt: 'Playground', category: 'facilities' },
    { id: 9, src: '/assets/images/gallery/9.jpg', alt: 'Math class', category: 'classrooms' },
    { id: 10, src: '/assets/images/gallery/10.jpg', alt: 'Robotics lab', category: 'labs' },
    { id: 11, src: '/assets/images/gallery/11.jpg', alt: 'Music class', category: 'classrooms' },
    { id: 12, src: '/assets/images/gallery/12.jpg', alt: 'Science fair', category: 'events' },
  ];

  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openImage = (index) => {
    setSelectedImage(filteredImages[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(filteredImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary-dark mb-4">School Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our campus, facilities, and student life through these photos.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full capitalize ${selectedCategory === category ? 'bg-secondary-dark text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => openImage(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-600 capitalize">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button 
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeImage}
            >
              <FaTimes />
            </button>

            <button 
              className="absolute left-4 text-white text-3xl"
              onClick={() => navigate('prev')}
            >
              <FaChevronLeft size={36} />
            </button>

            <div className="max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
              <motion.img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={selectedImage.id}
              />
            </div>

            <button 
              className="absolute right-4 text-white text-3xl"
              onClick={() => navigate('next')}
            >
              <FaChevronRight size={36} />
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Gallery;