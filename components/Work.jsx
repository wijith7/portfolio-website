import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion } from "motion/react"
import { CardSkeleton } from './SkeletonLoader'

const Work = ({isDarkMode}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  // Get unique categories
  const categories = ['All', ...new Set(workData.map(item => item.category))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? workData
    : workData.filter(project => project.category === selectedCategory);

  // Simulate loading for images
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration:1}}

    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4
      initial={{y:-20, opacity: 0}}
      whileInView={{y:0, opacity: 1}}
      transition={{duration:0.5, delay:0.3}}
      
      className='text-center mb-2 text-lg font-Ovo'>My portfolio</motion.h4>

      <motion.h2
      initial={{y:-20, opacity: 0}}
      whileInView={{y:0, opacity: 1}}
      transition={{duration:0.5, delay:0.5}}
      
      className='text-center text-5xl font-Ovo'>My latest work</motion.h2>

      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration:0.7, delay:0.5}}
      
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >Throughout my journey as a Software Engineer and Data Scientist, I have worked on a variety of projects
       that reflect my passion for technology, problem-solving, and innovation. From academic research to client-driven solutions,
       each project has been an opportunity to apply my skills, explore new technologies, and deliver impactful results.Each project
       represents a step forward in my continuous learning and professional growth, and I am excited to share these with you.</motion.p>

      {/* Category Filter Buttons */}
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration:0.6, delay:0.7}}
      className='flex flex-wrap justify-center gap-3 mb-8'>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-Ovo transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-darkHover dark:text-white dark:hover:bg-darkHover/70'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <motion.div
      
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration:0.6, delay:0.9}}
      
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
        {isLoading ? (
          // Show skeleton loaders while loading
          Array.from({ length: 6 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))
        ) : (
          filteredProjects.map ((project,index)=>(

            <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            
           whileHover={{scale: 1.02, y: -4}}
           transition={{duration: 0.3}}
            
            key={index}
            className='border border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover 
            hover:shadow-lg duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 
            flex flex-col group'>
                
                {/* Thumbnail Image */}
                <div className='w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800'>
                    <img 
                        src={project.bgImage} 
                        alt={project.title}
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                </div>

                {/* Content */}
                <div className='flex-1 flex flex-col'>
                    {project.category && (
                        <span className='inline-block w-fit px-3 py-1 text-xs font-semibold rounded-full bg-lime-200 text-gray-800 mb-3'>
                            {project.category}
                        </span>
                    )}
                    
                    <h2 className='font-semibold text-lg text-gray-800 dark:text-white mb-2 line-clamp-2 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors'>
                        {project.title}
                    </h2>
                    
                    <p className='text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-1'>
                        {project.description}
                    </p>
                    
                    {project.readTime && (
                        <div className='flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-auto pt-2 border-t border-gray-200 dark:border-gray-700'>
                            <span>⏱️</span>
                            <span>{project.readTime} read</span>
                        </div>
                    )}
                </div>    

            </motion.a>
          ))
        )}
      </motion.div>

      <motion.a
      
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration:0.5, delay:1.1}}
      
      
      href="https://medium.com/@wijithpathiranage" target="_blank" className='w-max flex items-center justify-center gap-2
      text-gray-700 border-[0.5px] border-gray-700 rounded-full
      py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
        show more 
        <Image src={isDarkMode?assets.right_arrow_bold_dark:assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
      </motion.a>

    </motion.div>
  )
}

export default Work
