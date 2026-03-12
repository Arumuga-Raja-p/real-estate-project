"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bed, Bath, Square, MapPin, Eye } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { PropertyModal } from "./PropertyModal"

interface Property {
  id: string | number
  title: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  area: number
  images: { url: string }[]
  type: string
  status: string
  featured?: boolean
  isRental?: boolean
}

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <motion.div 
        whileHover={{ y: -8 }} 
        transition={{ duration: 0.3 }} 
        className="property-card-hover group h-full"
      >
        <Card className="overflow-hidden h-full relative border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-green-500 transition-all duration-500 bg-white p-0">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-bl from-green-500/20 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500 z-20" />
          
          {/* Vertical Image Container - Responsive Heights - No Gap */}
          <div className="relative w-full h-56 xs:h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-t-lg">
            <Image
              key={property.id}
              src={property.images?.[0]?.url || "/placeholder.svg"}
              alt={property.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              priority={false}
            />
            {/* Image Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Featured Badge */}
            {property.featured && (
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                <span className="bg-green-600 text-white text-xs sm:text-sm font-semibold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg">
                  Featured
                </span>
              </div>
            )}
            
            {/* Status Badge */}
            {property.status && (
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                <span className="bg-blue-600 text-white text-xs sm:text-sm font-semibold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg">
                  {property.status}
                </span>
              </div>
            )}
          </div>

          <CardContent className="p-4 sm:p-5 md:p-6 relative z-10">
            <div className="space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 text-green-600 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  <span className="text-xs sm:text-sm truncate">{property.location}</span>
                </div>
              </div>

              {/* Price Display */}
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl sm:text-3xl font-bold text-green-600">
                  ${property.price.toLocaleString()}
                </span>
                {property.isRental && (
                  <span className="text-sm sm:text-base text-gray-500">/month</span>
                )}
              </div>

              {/* Animated Divider */}
              <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent group-hover:via-green-500 transition-all duration-500" />

              {/* Property Details - Responsive Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 text-gray-600">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col sm:flex-row items-center justify-center sm:justify-start group-hover:text-green-600 transition-colors duration-300"
                >
                  <Bed className="w-4 h-4 sm:w-5 sm:h-5 mb-1 sm:mb-0 sm:mr-1.5" />
                  <span className="text-xs sm:text-sm font-medium">{property.bedrooms}</span>
                  <span className="hidden sm:inline text-xs sm:text-sm font-medium ml-0.5">Beds</span>
                  <span className="sm:hidden text-xs">Beds</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col sm:flex-row items-center justify-center sm:justify-start group-hover:text-green-600 transition-colors duration-300"
                >
                  <Bath className="w-4 h-4 sm:w-5 sm:h-5 mb-1 sm:mb-0 sm:mr-1.5" />
                  <span className="text-xs sm:text-sm font-medium">{property.bathrooms}</span>
                  <span className="hidden sm:inline text-xs sm:text-sm font-medium ml-0.5">Baths</span>
                  <span className="sm:hidden text-xs">Baths</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col sm:flex-row items-center justify-center sm:justify-start group-hover:text-green-600 transition-colors duration-300"
                >
                  <Square className="w-4 h-4 sm:w-5 sm:h-5 mb-1 sm:mb-0 sm:mr-1.5" />
                  <span className="text-xs sm:text-sm font-medium">{property.area}</span>
                  <span className="hidden sm:inline text-xs sm:text-sm font-medium ml-0.5">sqft</span>
                  <span className="sm:hidden text-xs">sqft</span>
                </motion.div>
              </div>

              {/* Action Button */}
              <Button 
                className="w-full bg-green-600 hover:bg-green-500 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:animate-pulse text-sm sm:text-base py-2 sm:py-2.5"
                onClick={handleViewDetails}
              >
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </div>
          </CardContent>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
        </Card>
      </motion.div>

      {/* Modal */}
      <PropertyModal
        property={property}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
