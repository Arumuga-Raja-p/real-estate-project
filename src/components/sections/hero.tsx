"use client";

import { motion, AnimatePresence } from "framer-motion";

import React, { useState, useEffect } from "react";
import {
  Home,
  MapPin,
  TrendingUp,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);


const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=600&fit=crop",
      title: "Modern Villa",
      location: "Downtown District",
      rating: 4.8,
      icon: Home,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=600&fit=crop",
      title: "Luxury Apartment",
      location: "Business Center",
      rating: 4.9,
      icon: MapPin,
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500&h=600&fit=crop",
      title: "Premium Condo",
      location: "Skyline View",
      rating: 4.7,
      icon: Star,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const currentSlide = slides[currentIndex];
  const IconComponent = currentSlide.icon;

  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-green-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-300 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-2 text-green-600"
              >
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">
                  Premium Real Estate Solutions
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
              >
                Find Your
                <span className="text-green-600"> Dream Home</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Discover exceptional properties that match your lifestyle and
                budget. From luxury homes to investment opportunities, we make
                real estate simple.
              </motion.p>
            </div>

            {/* Search Bar */}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-gray-900">
                  2,500+
                </div>
                <div className="text-gray-600">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-gray-900">
                  5,000+
                </div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1 mx-auto">
                <div className="text-xl md:text-3xl font-bold text-gray-900">
                  15+
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          
      <div className="relative w-full max-w-md">
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
          {/* Image Container */}
          <div className="relative h-96 w-full">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 }
                }}
                className="absolute inset-0"
              >
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl font-bold mb-1"
                  >
                    {currentSlide.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm opacity-90 mb-2"
                  >
                    {currentSlide.location}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center space-x-1"
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{currentSlide.rating}</span>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 h-3 bg-green-600' 
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 bg-green-600"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Floating Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 25 }}
          className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-10"
        >
          <div className="flex items-center space-x-3">
            <motion.div
              key={currentIndex}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 20 }}
              className={`w-12 h-12 ${currentSlide.iconBg} rounded-lg flex items-center justify-center`}
            >
              <IconComponent className={`w-6 h-6 ${currentSlide.iconColor}`} />
            </motion.div>
            <div>
              <motion.div
                key={`title-${currentIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="font-semibold text-gray-900 text-sm"
              >
                Premium Location
              </motion.div>
              <motion.div
                key={`location-${currentIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xs text-gray-600"
              >
                {currentSlide.location}
              </motion.div>
            </div>
          </div>
        </motion.div>

        
      </div>
    </div>
        </div>
    </section>
  );
}
