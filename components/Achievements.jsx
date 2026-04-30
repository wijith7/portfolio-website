import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion } from "motion/react"
import { AchievementSkeleton } from './SkeletonLoader'

const Achievements = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="achievements"
      className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='flex flex-col items-center mb-12'
      >
        <h4 className='mb-2 text-lg font-Ovo text-violet-600 dark:text-violet-400 tracking-wider'>My Journey</h4>
        <h2 className='text-5xl font-Ovo font-bold text-center'>Proud Moments</h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className='text-center max-w-2xl mx-auto mt-5 font-Ovo text-gray-600 dark:text-white/80 leading-relaxed'
        >
          I am incredibly grateful for the journey I’ve taken and the support I’ve received along the way.
          These achievements are a reflection of hard work, continuous learning, and the encouragement from mentors,
          peers, and loved ones.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-auto gap-8 my-10'>
        {isLoading ? (
          // Show skeleton loaders while loading
          Array.from({ length: 4 }).map((_, index) => (
            <AchievementSkeleton key={index} />
          ))
        ) : (
          serviceData.map(({ icon, title, description, link }, index) => (
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={link}
              target="_blank"
              key={index}
              className='group relative p-6 rounded-2xl border border-gray-200 dark:border-white/10 
              bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:bg-white dark:hover:bg-darkHover/50
              hover:shadow-xl dark:hover:shadow-violet-900/20 transition-all duration-300 cursor-pointer overflow-hidden'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

              <div className='relative z-10'>
                <div className='w-12 h-12 flex items-center justify-center bg-white dark:bg-darkTheme rounded-xl shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Image src={icon} alt='' className='w-7 h-7 object-contain' />
                </div>

                <h3 className='text-lg font-bold mb-3 text-gray-800 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors'>
                  {title}
                </h3>

                <p className='text-sm text-gray-600 dark:text-white/80 leading-relaxed mb-6'>
                  {description}
                </p>

                <div className='flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors'>
                  Read more
                  <Image src={assets.right_arrow} alt='' className='w-4 h-4 transition-transform group-hover:translate-x-1' />
                </div>
              </div>
            </motion.a>
          ))
        )}
      </motion.div>
    </motion.div>
  )
}

export default Achievements
