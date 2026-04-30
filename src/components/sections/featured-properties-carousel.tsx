"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/ui/property-card"
import type { Property } from "@/lib/property"

interface FeaturedPropertiesCarouselProps {
  properties: Property[]
}

export function FeaturedPropertiesCarousel({
  properties,
}: FeaturedPropertiesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 768 ? 3 : 1)
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)

    return () => {
      window.removeEventListener("resize", updateVisibleCount)
    }
  }, [])

  const slideVariants = {
    enter: (directionValue: number) => ({
      x: directionValue > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (directionValue: number) => ({
      x: directionValue < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)

    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === properties.length - 1 ? 0 : prev + 1
      }

      return prev === 0 ? properties.length - 1 : prev - 1
    })
  }

  const getVisibleProperties = () => {
    const visible: Property[] = []

    for (let i = 0; i < visibleCount; i++) {
      const idx = (currentIndex + i) % properties.length
      visible.push(properties[idx])
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of real estate listings
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <Button
            variant="outline"
            size="icon"
            onClick={() => paginate(-1)}
            className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-green-50 border-2 border-gray-200 hover:border-green-600 shadow-lg hover:shadow-xl transition-all duration-300 w-12 h-12 rounded-full"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => paginate(1)}
            className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-green-50 border-2 border-gray-200 hover:border-green-600 shadow-lg hover:shadow-xl transition-all duration-300 w-12 h-12 rounded-full"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </Button>

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
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {getVisibleProperties().map((property, index) => (
                  <motion.div
                    key={`${property._id}-${currentIndex}-${index}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                  >
                    <PropertyCard property={property} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {properties.map((property, index) => (
              <button
                key={property._id}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-green-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/properties">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              View All Properties
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
