"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { assets, recoData } from '@/assets/assets'


const Recommendations = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="recommendations"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What People Say
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-Ovo"
      >
        Recommendations
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Here are some words from colleagues and professionals I've worked with.
        Their support and feedback have been invaluable in my career journey.
      </motion.p>

      {/* Swiper Slider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="my-10 w-screen h-auto"
      >
        <Swiper 
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
       
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full h-full"
        >

        {recoData.map((project, index) => (
            <SwiperSlide key={index} className="flex justify-center py-5 px-5 h-full w-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="border border-gray-400 rounded-lg px-8 py-10 hover:shadow-black cursor-pointer 
                           hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
              >
                <div className="flex items-center gap-4">
                  <Image src={project.image} alt="" width={50} height={50} className="rounded-full" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{project.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{project.title}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-5 mt-4 dark:text-white/80">{project.feedback}</p>
              </motion.div>
            </SwiperSlide>
          ))}

        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Recommendations;
