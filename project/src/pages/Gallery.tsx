import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Gallery = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Wedding',
      title: 'Elegant Wedding Reception'
    },
    {
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      category: 'Birthday',
      title: 'Colorful Birthday Celebration'
    },
    {
      src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      category: 'Corporate',
      title: 'Corporate Event Setup'
    },
    {
      src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Wedding',
      title: 'Wedding Car Decoration'
    },
    {
      src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      category: 'Pre-Wedding',
      title: 'Romantic Pre-Wedding Shoot'
    },
    {
      src: 'https://images.pexels.com/photos/3593428/pexels-photo-3593428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Birthday',
      title: 'Birthday Party Decorations'
    },
    {
      src: 'https://images.pexels.com/photos/17315419/pexels-photo-17315419/free-photo-of-a-wedding-venue-decorated-with-white-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Wedding',
      title: 'Wedding Stage Decoration'
    },
    {
      src: 'https://images.pexels.com/photos/28179592/pexels-photo-28179592/free-photo-of-a-long-table-with-white-linens-and-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Catering',
      title: 'Elegant Catering Setup'
    },
    {
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      category: 'Corporate',
      title: 'Corporate Event Management'
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1681841200807-458beeca3d80?q=80&w=1873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D',
      category: 'Birthday',
      title: 'Kids Birthday Party'
    },

    {
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Wedding',
      title: 'Wedding Reception Decor'
    },
    {
      src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80',
      category: 'Photography',
      title: 'Professional Event Photography'
    },
    {
      src: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
      category: 'Gifts',
      title: 'Customized Gift Collection'
    },
    {
      src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      category: 'Special Effects',
      title: 'Event Special Effects'
    },
    {
      src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Entertainment',
      title: 'Live Entertainment Services'
    },
    {
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Catering',
      title: 'Elegant Catering Setup'
    }
  ];

  const categories = ['All', 'Wedding', 'Birthday', 'Corporate', 'Pre-Wedding', 'Photography', 'Gifts', 'Special Effects', 'Entertainment', 'Catering'];

  const filteredImages = filter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category.toLowerCase().trim() === filter.toLowerCase().trim());

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <motion.section
        ref={headerRef}
        className="relative py-20 bg-gradient-amber-pink text-white"
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: 'linear-gradient(to right, var(--color-amber-500), var(--color-pink-500))'
        }}
      >
        <div className="container text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md-text-5xl font-serif font-bold mb-4"
          >
            Our Event Gallery
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Browse through our portfolio of stunning events and creative services that we've had the pleasure of bringing to life.
          </motion.p>
        </div>
      </motion.section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? 'bg-gradient-amber-pink text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{
                  transition: 'all 0.3s ease',
                  backgroundImage: filter === category ?
                    'linear-gradient(to right, var(--color-amber-500), var(--color-pink-500))' : 'none'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm-grid-cols-2 md-grid-cols-3 lg-grid-cols-4 gap-4">
            {filteredImages.map((image, index) => {
              const [imageRef, imageInView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });

              return (
                <motion.div
                  key={index}
                  ref={imageRef}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={imageInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
                  onClick={() => openLightbox(image.src)}
                >
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform group-hover-scale-110"
                      style={{
                        transition: 'transform 0.5s ease'
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover-opacity-100 transition-opacity flex flex-col justify-end p-4"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    <span className="text-amber-400 text-sm font-medium">
                      {image.category}
                    </span>
                    <h3 className="text-white text-lg font-bold">
                      {image.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.9)'
          }}
        >

          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-90vh object-contain"

          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
