"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
// import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"
import RootLayout from "@/components/layout"

const galleryItems = [
  {
    id: 1,
    title: "Modern Kitchen Design",
    category: "interior",
    image: "/galary/1.jpg",
    description: "Contemporary kitchen with premium appliances and marble countertops",
  },
  {
    id: 2,
    title: "Luxury Living Room",
    category: "interior",
    image: "/galary/2.jpg",
    description: "Spacious living area with floor-to-ceiling windows",
  },
  {
    id: 3,
    title: "Downtown Skyline View",
    category: "exterior",
    image: "/galary/3.jpg",
    description: "Stunning city views from premium high-rise apartments",
  },
  {
    id: 4,
    title: "Master Bedroom Suite",
    category: "interior",
    image: "/galary/4.jpg",
    description: "Elegant master bedroom with walk-in closet and en-suite bathroom",
  },
  {
    id: 5,
    title: "Garden Landscape",
    category: "exterior",
    image: "/galary/5.jpg",
    description: "Beautifully landscaped garden with outdoor seating area",
  },
  {
    id: 6,
    title: "Spa Bathroom",
    category: "interior",
    image: "/galary/6.jpg",
    description: "Luxury bathroom with soaking tub and rainfall shower",
  },
  {
    id: 7,
    title: "Property Facade",
    category: "exterior",
    image: "/galary/7.jpg",
    description: "Modern architectural design with premium materials",
  },
  {
    id: 8,
    title: "Home Office Space",
    category: "interior",
    image: "/galary/8.jpg",
    description: "Dedicated workspace with built-in storage and natural light",
  },
  {
    id: 9,
    title: "Rooftop Terrace",
    category: "exterior",
    image: "/galary/9.jpg",
    description: "Private rooftop terrace with panoramic city views",
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "interior", label: "Ongoing Project" },
  { id: "exterior", label: "Completed Projects" },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <RootLayout>
      <div className="pt-5">
      {/* Hero Section */}
      {/* <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Project Gallery</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our
              <span className="text-green-600"> Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our collection of exceptional properties and design projects. From modern interiors to stunning
              exteriors, see the quality that defines our work.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                      <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </RootLayout>
  )
}
