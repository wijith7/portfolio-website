import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { spring } from 'motion'

const Header = () => {
  const [showResume, setShowResume] = useState(false);

  const openResume = () => {
    setShowResume(true);
    document.body.style.overflow = 'hidden';
  };

  const closeResume = () => {
    setShowResume(false);
    document.body.style.overflow = 'unset';
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume_Wijith_Pathiranage.pdf';
    link.download = 'Resume_Wijith_Pathiranage.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className=' w-11/12 max-w-3xl text-center mx-auto h-auto flex flex-col items-center justify-center gap-1 pt-20'>
        <motion.div
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:0.8, type: 'spring',stiffness: 100}}
        >
            <Image src={assets.profile_img} alt='' className='rounded-full w-32 ' />
        </motion.div>

        <motion.h3 
          initial={{y: -20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration:0.6, delay:0.3}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hi I'm Wijith Pathiranage <Image src={assets.hand_icon} alt='' 
                className='w-6' /> 
        </motion.h3>

        <motion.h1
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration:0.8, delay:0.5}}
        
        className= 'text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Data Engineer with experience in software engineering and data analysis.
        </motion.h1>

        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration:0.6, delay:0.7}}
        
        className='max-w-2xl mx-auto font-Ovo'>
        I am a Data Engineer with experience in software engineering and data analysis. With a strong foundation in 
        both fields, I bring a unique perspective to building scalable data solutions and robust software systems. 
        Based in Australia, I am passionate about leveraging technology and data to solve complex problems and 
        drive innovation.
        </motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
            
            initial={{y:30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration:0.6, delay:1}}
            
            href="#contact"
            className= 'px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
            >contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/> </motion.a>


            <motion.button 
            
            initial={{y:30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration:0.6, delay:1.2}}

            onClick={openResume}
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-100 transition-colors'
            >my resume <Image src={assets.download_icon} alt='' className='w-4'/> </motion.button>
        </div>

      {/* Resume Viewer Modal */}
      <AnimatePresence>
        {showResume && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeResume}
              className='fixed inset-0 bg-black/80 dark:bg-black/90 z-50 flex items-center justify-center p-4'
            >
              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className='relative bg-white dark:bg-gray-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col'
              >
                {/* Header with Close and Download buttons */}
                <div className='flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900'>
                  <h2 className='text-xl font-bold text-gray-800 dark:text-white'>My Resume</h2>
                  <div className='flex items-center gap-3'>
                    <button
                      onClick={handleDownload}
                      className='px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors flex items-center gap-2 text-sm font-semibold'
                    >
                      <Image src={assets.download_icon} alt='Download' className='w-4 h-4' />
                      Download
                    </button>
                    <button
                      onClick={closeResume}
                      className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
                      aria-label='Close modal'
                    >
                      <svg className='w-6 h-6 text-gray-800 dark:text-gray-200' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* PDF Viewer */}
                <div className='flex-1 overflow-auto bg-gray-100 dark:bg-gray-900 p-4'>
                  <iframe
                    src="/Resume_Wijith_Pathiranage.pdf#toolbar=1"
                    className='w-full h-full min-h-[600px] border-0 rounded-lg'
                    title='Resume Viewer'
                  />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header
