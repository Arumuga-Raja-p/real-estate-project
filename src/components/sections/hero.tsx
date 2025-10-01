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
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=600&fit=crop",
      title: "Modern Villa",
      location: "Downtown District",
      rating: 4.8,
      icon: Home,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=600&fit=crop",
      title: "Luxury Apartment",
      location: "Business Center",
      rating: 4.9,
      icon: MapPin,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500&h=600&fit=crop",
      title: "Premium Condo",
      location: "Skyline View",
      rating: 4.7,
      icon: Star,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
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
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const currentSlide = slides[currentIndex];
  const IconComponent = currentSlide.icon;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Green Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-200/30 via-emerald-200/20 to-green-300/30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />

        {/* Floating Animated Green Circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-green-200 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-emerald-200 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.35, 0.15],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
          className="absolute top-1/3 left-1/3 w-32 h-32 rounded-full bg-lime-200 blur-2xl"
        />

        {/* Bouncing Green Home SVGs */}
        <motion.div
          className="absolute top-16 left-10 opacity-20"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="70"
            height="70"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-green-500"
          >
            <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-40 right-24 opacity-15"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -8, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-green-400"
          >
            <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-24 opacity-25"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-emerald-500"
          >
            <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-16 opacity-20"
          animate={{
            y: [0, 10, 0],
            rotate: [0, -12, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <svg
            width="45"
            height="45"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-green-300"
          >
            <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z" />
          </svg>
        </motion.div>

        {/* Floating Green Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-green-400 opacity-40"
            animate={{
              y: [0, -80, 0],
              x: [0, Math.sin(i) * 40, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-20 w-full relative z-10">
        <div className="flex justify-center w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
            {/* Content - Centered */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="space-y-4 max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center space-x-2 text-green-600 justify-center lg:justify-start"
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
                  className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
                >
                  Discover exceptional properties that match your lifestyle and
                  budget. From luxury homes to investment opportunities, we make
                  real estate simple.
                </motion.p>
              </div>

              {/* Stats - All content properly visible */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-md"
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

            {/* Hero Image - Centered */}
            <div className="flex justify-center lg:justify-end w-full">
              <div className="relative w-full max-w-md">
                {/* Carousel Container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white border-2 border-green-100">
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
                          scale: { duration: 0.5 },
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
                            <span className="text-sm font-medium">
                              {currentSlide.rating}
                            </span>
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
                          ? "w-8 h-3 bg-green-600"
                          : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {index === currentIndex && (
                        <motion.div
                          className="absolute inset-0 bg-green-600"
                          layoutId="activeIndicator"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Floating Info Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.8,
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-green-100 z-10"
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      key={currentIndex}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      className={`w-12 h-12 ${currentSlide.iconBg} rounded-lg flex items-center justify-center`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${currentSlide.iconColor}`}
                      />
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
        </div>
      </div>
    </section>
  );
}
