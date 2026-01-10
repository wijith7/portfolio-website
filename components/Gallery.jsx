import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { assets } from '@/assets/assets';

// Categorized Image Data
const galleryData = {
    Adventure: [
        { src: '/Image gallery/Air Ballooning.jpg', title: 'Air Ballooning', description: 'Floating above the clouds' },
        { src: '/Image gallery/Campling in the wild.jpg', title: 'Camping in the Wild', description: 'Connecting with nature' },
        { src: '/Image gallery/Paint ball.jpg', title: 'Paintball', description: 'Strategy and fun' },
        { src: '/Image gallery/archery.jpg', title: 'Archery', description: 'Focus and precision' },
        { src: '/Image gallery/white water rafting.jpg', title: 'White Water Rafting', description: 'Adrenaline rush' },
    ],
    Travel: [
        { src: '/Image gallery/Pidurangala facing sigiriya.jpg', title: 'Pidurangala Rock', description: 'Breathtaking views' },
        { src: '/Image gallery/Travell around Delf Island.jpg', title: 'Delft Island Adventure', description: 'Exploring new places' },
        { src: '/Image gallery/Waterfall hunting.jpg', title: 'Waterfall Hunting', description: 'Chasing waterfalls' },
        { src: '/Image gallery/Worlds end cliff.jpg', title: 'World\'s End Cliff', description: 'On top of the world' },
        { src: '/Image gallery/malysia tour.jpg', title: 'Malaysia Tour', description: 'Cultural exploration' },
    ],
    Music: [
        { src: '/Image gallery/Singing and playing guitar.jpg', title: 'Music & Guitar', description: 'My creative outlet' },
    ]
};

const Gallery = ({ isDarkMode }) => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="w-full px-[12%] py-20 scroll-mt-20 overflow-hidden relative min-h-[800px]" id="gallery">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center mb-16"
            >
                <motion.h4
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mb-2 text-lg font-Ovo"
                >
                    My Adventures
                </motion.h4>
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center text-5xl font-Ovo"
                >
                    Life Beyond Code
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-center max-w-2xl mx-auto mt-5 font-Ovo"
                >
                    Exploring the world through different lenses. Pick a category to dive into my journey.
                </motion.p>
            </motion.div>

            {/* Main Content Area */}
            <div className="relative w-full">

                {/* 1. Category Stacks (Visible when no category is active) */}
                <AnimatePresence mode="wait">
                    {!activeCategory && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col md:flex-row justify-center gap-10 md:gap-16 items-center"
                        >
                            {Object.entries(galleryData).map(([category, images], index) => (
                                <CategoryStack
                                    key={category}
                                    category={category}
                                    images={images}
                                    onClick={() => setActiveCategory(category)}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 2. Grid View (Visible when a category is active) */}
                <AnimatePresence>
                    {activeCategory && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="w-full"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-3xl font-Ovo font-bold">{activeCategory}</h3>
                                <button
                                    onClick={() => setActiveCategory(null)}
                                    className="px-4 py-2 text-sm font-semibold rounded-full border border-gray-300 hover:bg-black hover:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black transition-colors"
                                >
                                    ← Back to Collections
                                </button>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {galleryData[activeCategory].map((image, idx) => (
                                    <motion.div
                                        key={idx}
                                        layoutId={`img-${activeCategory}-${idx}`} // For shared element transition if we get fancy later
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                                        className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600"
                                        onClick={() => setSelectedImage(image)}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="text-white font-medium px-4 py-2 border border-white/50 rounded-full backdrop-blur-sm">View</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* 3. Lightbox Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                        >
                            <div className="relative w-full h-[60vh] md:h-[80vh] rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-2xl text-white font-Ovo font-bold">{selectedImage.title}</h3>
                                <p className="text-gray-300 mt-2">{selectedImage.description}</p>
                            </div>

                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-10 right-0 md:-right-10 text-white hover:text-gray-300 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Sub-component for individual category stacks
const CategoryStack = ({ category, images, onClick, index }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-64 h-80 cursor-pointer group"
            onClick={onClick}
        >
            {/* Stack Effect Cards */}
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-lg rotate-6 translate-x-2 translate-y-2 group-hover:rotate-12 group-hover:translate-x-4 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 rounded-2xl shadow-lg -rotate-3 -translate-x-1 -translate-y-1 group-hover:-rotate-6 group-hover:-translate-x-2 transition-transform duration-300" />

            {/* Top Card */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-600 bg-white">
                <Image
                    src={images[0].src} // Show first image as cover
                    alt={category}
                    fill
                    className="object-cover"
                />

                {/* Gradient Gradient & Label */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-2xl font-bold font-Ovo">{category}</h3>
                    <p className="text-gray-300 text-sm">{images.length} photos</p>
                </div>

                {/* "Open" Hint on Hover */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white border border-white px-4 py-1 rounded-full text-sm backdrop-blur-md">Explore</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Gallery;
