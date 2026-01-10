import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from "framer-motion"

const About = ({ isDarkMode }) => {
  return (
    <motion.div id='about' className='w-full px-6 sm:px-[8%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Titles */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-base sm:text-lg font-Ovo'
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-3xl sm:text-5xl font-Ovo'
      >
        About me
      </motion.h2>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col lg:flex-row items-start gap-10 lg:gap-20 my-12'
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='flex justify-center w-48 sm:w-64 lg:w-80 mx-auto rounded-3xl'
        >
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1 text-center sm:text-left'
        >
          <p className='mb-10 max-w-full text-sm sm:text-base leading-relaxed font-Ovo text-justify'>
            I am a Data Engineer with a strong foundation in Computer Science and a Master&apos;s degree in Data Science.
            My expertise lies in designing and developing scalable data solutions, optimizing data pipelines, and leveraging
            data-driven insights to drive innovation. With experience in both data engineering and software engineering, I enjoy
            solving complex problems using efficient algorithms and advanced data processing techniques. My skill set includes data pipeline
            development, database management, data visualization, frontend and backend development, and system optimization, making me well-suited
            for roles that bridge the gap between software development and data-driven decision-making. I am actively seeking opportunities in
            Data Engineering, Software Engineering, and Data Analysis, where I can apply my technical expertise to build robust data systems,
            optimize workflows, and extract valuable insights to enhance business performance.
          </p>

          {/* Information Cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full'
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className='border border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover 
                hover:-translate-y-1 duration-500 hover:shadow-lg dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                key={index}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3 mx-auto sm:mx-0' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white text-center sm:text-left'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80 text-center sm:text-left'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className='my-6 text-gray-700 font-Ovo dark:text-white/80 text-center sm:text-left'
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className='flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-5'
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className='flex items-center justify-center w-10 sm:w-14 aspect-square border border-gray-400
                rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                key={index}
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
