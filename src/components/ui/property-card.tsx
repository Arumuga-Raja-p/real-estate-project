"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bed, Bath, Square, MapPin, Eye } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { PropertyModal } from "./PropertyModal"

interface Property {
  id: number
  title: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  area: number
  image: string
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
        <Card className="overflow-hidden h-full relative border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-green-500 transition-all duration-500 bg-white">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-500/20 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500" />
          
          <div className="relative flex justify-center items-center bottom-3">
            <div className="relative w-[95%] h-64 rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
              <Image
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                width={400}
                height={300}
                className="w-full h-full rounded-xl object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Image Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          </div>

          <CardContent className="px-6 relative z-10">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  <MapPin className="w-4 h-4 mr-1 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">{property.location}</span>
                </div>
              </div>

              {/* Animated Divider */}
              <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent group-hover:via-green-500 transition-all duration-500" />

              {/* Property Details */}
              <div className="flex items-center justify-between text-gray-600">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center group-hover:text-green-600 transition-colors duration-300"
                >
                  <Bed className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">{property.bedrooms} Beds</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center group-hover:text-green-600 transition-colors duration-300"
                >
                  <Bath className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">{property.bathrooms} Baths</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center group-hover:text-green-600 transition-colors duration-300"
                >
                  <Square className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">{property.area} sqft</span>
                </motion.div>
              </div>

              {/* Action Button */}
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:animate-pulse"
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