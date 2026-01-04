import React from 'react'
import { motion } from "motion/react"

const Experience = ({ isDarkMode }) => {
  const companies = [
    {
      name: 'Entura',
      logo: '/entura-logo.jpg',
      position: 'Graduate Data Engineer',
      period: 'Present',
      description: 'Working as a Graduate Data Engineer'
    },
    {
      name: 'WSO2',
      logo: '/wso2-logo.png',
      position: 'Previous Position',
      period: 'Past',
      description: 'Worked as a Software Engineer'
    }
  ];

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id="experience" className='w-full px-[12%] py-10 scroll-mt-20'>
      
      <motion.h4
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'>Professional Journey</motion.h4>

      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-Ovo'>Work Experience</motion.h2>

      <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        I've had the privilege of working with innovative companies that have shaped my career 
        and contributed to my growth as a software engineer and data professional.
      </motion.p>

      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}
        className='flex flex-col md:flex-row items-center justify-center gap-12 my-10'
      >
        {companies.map((company, index) => (
          <motion.div
            key={index}
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.9 + index * 0.2}}
            whileHover={{scale: 1.05, y: -4}}
            className='flex flex-col items-center text-center p-8 border border-gray-400 dark:border-white rounded-xl 
            hover:bg-lightHover dark:hover:bg-darkHover/50 hover:shadow-lg transition-all duration-300 
            max-w-md w-full group'
          >
            {/* Company Logo */}
            <div className='w-32 h-32 mb-6 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-4 
            border border-gray-200 dark:border-gray-700 group-hover:border-gray-400 dark:group-hover:border-gray-500 
            transition-colors relative'>
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className='object-contain max-w-full max-h-full'
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.style.display = 'none';
                  const fallback = e.target.parentElement.querySelector('.logo-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div 
                className='logo-fallback hidden items-center justify-center w-full h-full text-4xl font-bold 
                text-gray-400 dark:text-gray-600 absolute inset-0'
              >
                {company.name.charAt(0)}
              </div>
            </div>

            {/* Company Details */}
            <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-gray-900 
            dark:group-hover:text-gray-100 transition-colors'>
              {company.name}
            </h3>
            
            <p className='text-sm text-gray-600 dark:text-gray-400 mb-2 font-semibold'>
              {company.position}
            </p>

            <p className='text-xs text-gray-500 dark:text-gray-500 mb-4'>
              {company.period}
            </p>

            <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
              {company.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Experience
