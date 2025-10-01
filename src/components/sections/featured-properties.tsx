"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/ui/property-card"

const featuredProperties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: 450000,
    location: "Downtown District",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "/galary/1.jpg",
    type: "apartment",
    status: "for-sale",
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Family Villa",
    price: 850000,
    location: "Greenwood Heights",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    image: "/galary/7.jpg",
    type: "house",
    status: "for-sale",
    featured: true,
  },
  {
    id: 3,
    title: "Executive Penthouse",
    price: 1200000,
    location: "Skyline Tower",
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    image: "/galary/3.jpg",
    type: "apartment",
    status: "for-sale",
    featured: true,
  },
  {
    id: 4,
    title: "Coastal Beach House",
    price: 950000,
    location: "Seaside Avenue",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image: "/galary/4.jpg",
    type: "house",
    status: "for-sale",
    featured: true,
  },
  {
    id: 5,
    title: "Urban Loft Studio",
    price: 380000,
    location: "Arts District",
    bedrooms: 1,
    bathrooms: 1,
    area: 900,
    image: "/galary/5.jpg",
    type: "apartment",
    status: "for-sale",
    featured: true,
  },
]

export function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === featuredProperties.length - 1 ? 0 : prevIndex + 1
      } else {
        return prevIndex === 0 ? featuredProperties.length - 1 : prevIndex - 1
      }
    })
  }

  // Calculate visible properties based on screen size
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3
      if (window.innerWidth >= 768) return 2
      return 1
    }
    return 3
  }

  const [visibleCount] = useState(getVisibleCount())

  // Get properties to display
  const getVisibleProperties = () => {
    const visible = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % featuredProperties.length
      visible.push(featuredProperties[index])
    }
    return visible
  }

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties available now
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Left Arrow */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => paginate(-1)}
            className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-green-50 border-2 border-gray-200 hover:border-green-600 shadow-lg hover:shadow-xl transition-all duration-300 w-12 h-12 rounded-full"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </Button>

          {/* Right Arrow */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => paginate(1)}
            className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-green-50 border-2 border-gray-200 hover:border-green-600 shadow-lg hover:shadow-xl transition-all duration-300 w-12 h-12 rounded-full"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </Button>

          {/* Properties Display */}
          <div className="overflow-hidden px-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {getVisibleProperties().map((property, index) => (
                  <motion.div
                    key={`${property.id}-${currentIndex}-${index}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <PropertyCard property={property} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredProperties.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-green-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/properties">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300">
              View All Properties
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}