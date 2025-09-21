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

  // const formatPrice = (price: number) => {
  //   if (property.isRental) {
  //     return `$${price.toLocaleString()}/month`
  //   }
  //   return `$${price.toLocaleString()}`
  // }

  const handleViewDetails = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="property-card-hover">
        <Card className="overflow-hidden h-full">
          <div className="relative flex justify-center items-center bottom-3">
            <Image
              src={property.image || "/placeholder.svg"}
              alt={property.title}
              width={400}
              height={300}
              className="w-[95%] h-64 rounded-xl object-cover"
            />
          </div>

          <CardContent className="px-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
              </div>

              {/* Price */}
              {/* <div className="text-2xl font-bold text-green-600">
                {formatPrice(property.price)}
              </div> */}

              {/* Property Details */}
              <div className="flex items-center justify-between text-gray-600">
                <div className="flex items-center">
                  <Bed className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.bedrooms} Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.bathrooms} Baths</span>
                </div>
                <div className="flex items-center">
                  <Square className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.area} sqft</span>
                </div>
              </div>

              {/* Action Button */}
              <Button 
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={handleViewDetails}
              >
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </div>
          </CardContent>
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