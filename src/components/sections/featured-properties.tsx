"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
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
    id: 5,
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
  // Add more if needed
]

export function FeaturedProperties() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  const checkScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setShowLeft(scrollLeft > 0)
    setShowRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    checkScroll()
    container.addEventListener("scroll", checkScroll)
    window.addEventListener("resize", checkScroll)
    return () => {
      container.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const { clientWidth } = scrollRef.current
    const scrollAmount = clientWidth * 0.8
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
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

        {/* Arrows */}
        {showLeft && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur border shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
        )}
        {showRight && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur border shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        )}

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar pb-6"
        >
          <div className="flex space-x-6 px-4 w-max">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px]"
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link href="/properties">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              View All Properties
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


