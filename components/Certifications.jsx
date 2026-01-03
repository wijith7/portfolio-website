import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { certificationsData } from '@/assets/assets'
import Image from 'next/image'

const Certifications = ({ isDarkMode }) => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'unset';
  };

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    let animationFrameId;

    const autoScroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += 0.5;
        scrollContainer.scrollLeft = scrollPosition;

        // Reset scroll position when reaching the end
        if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollPosition = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      
      id="certifications" className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'>Professional Credentials</motion.h4>

      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-Ovo'>Certifications</motion.h2>

      <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Continuous learning and professional development are essential to my career growth. 
        These certifications validate my expertise and commitment to staying current with industry 
        best practices and emerging technologies.
      </motion.p>

      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}
        className='relative my-10'
      >
        {/* Horizontal Scrolling Container */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className='flex gap-6 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Duplicate items for seamless infinite scroll */}
          {[...certificationsData, ...certificationsData].map((cert, index) => (
            <motion.div
              whileHover={{scale: 1.05, y: -4}}
              transition={{duration: 0.3}}
              key={`${index}-${cert.title}`}
              className='flex-shrink-0 w-80 border border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover 
              hover:shadow-lg duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 
              flex flex-col items-center text-center group'
              onClick={() => openModal(cert)}
            >
              {/* Certificate Image */}
              <div className='w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center'>
                {cert.badgeImage ? (
                  <img 
                    src={cert.badgeImage} 
                    alt={cert.title}
                    className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-300'
                  />
                ) : (
                  <div className='w-full h-full flex items-center justify-center text-4xl'>
                    🏆
                  </div>
                )}
              </div>

              {/* Certification Details */}
              <h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors line-clamp-2'>
                {cert.title}
              </h3>
              
              <p className='text-sm text-gray-600 dark:text-gray-300 mb-3'>
                {cert.issuer}
              </p>

              <p className='text-xs text-gray-500 dark:text-gray-400 mb-4 flex-1 line-clamp-3'>
                {cert.description}
              </p>

              <div className='flex items-center justify-center w-full mt-auto pt-4 border-t border-gray-200 dark:border-gray-700'>
                <span className='text-xs text-gray-500 dark:text-gray-400'>
                  Issued: {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal for Certificate View */}
      <AnimatePresence>
        {selectedCert && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className='fixed inset-0 bg-black/80 dark:bg-black/90 z-50 flex items-center justify-center p-4'
            >
              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className='relative bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl'
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className='absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
                  aria-label='Close modal'
                >
                  <svg className='w-6 h-6 text-gray-800 dark:text-gray-200' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>

                {/* Certificate Image */}
                <div className='p-8'>
                  <div className='mb-4 text-center'>
                    <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-2'>
                      {selectedCert.title}
                    </h3>
                    <p className='text-gray-600 dark:text-gray-300'>
                      {selectedCert.issuer} • {selectedCert.date}
                    </p>
                  </div>
                  <div className='w-full bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden'>
                    <img
                      src={selectedCert.badgeImage}
                      alt={selectedCert.title}
                      className='w-full h-auto object-contain'
                    />
                  </div>
                  {selectedCert.description && (
                    <p className='mt-6 text-center text-gray-600 dark:text-gray-400'>
                      {selectedCert.description}
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Certifications
