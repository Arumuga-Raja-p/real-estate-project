"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Bed, Bath, Square, MapPin, Calendar, Car, Home, Wifi, Shield, TreePine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
// import { useRouter } from "next/navigation"
import { useState } from "react"

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

interface PropertyModalProps {
  property: Property | null
  isOpen: boolean
  onClose: () => void
}

export function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  // const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(0)

  if (!property) return null


const handleContactClick = () => {
  const phone = "7397165773"; // Replace with your number
  const message = `Hello, I'm interested in the property: "${property.title}" located at ${property.location}. Bedrooms: ${property.bedrooms}, Bathrooms: ${property.bathrooms}, Area: ${property.area} sqft.Here's the link to its image: https://real-estate-dun-pi.vercel.app/${property.image} Please confirm if it's available.`;

  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank"); // Open in new tab
  onClose(); // Close modal
};


  // Sample additional images for the gallery
  const additionalImages = [
    property.image,
    "/galary/2.jpg",
    "/galary/4.jpg",
    "/galary/5.jpg",
    "/galary/6.jpg"
  ]

  const handleImageClick = (index: number) => {
    setSelectedImage(index)
  }

  // Sample features
  const features = [
    { icon: Car, label: "Parking" },
    { icon: Wifi, label: "WiFi Ready" },
    { icon: Shield, label: "Security" },
    { icon: TreePine, label: "Garden" },
    { icon: Home, label: "Furnished" },
    { icon: Calendar, label: "Available Now" }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm  flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6  py-4 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{property.title}</h2>
                <div className="flex items-center text-gray-600 mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Badge 
                  variant={property.status === 'for-sale' ? 'default' : 'secondary'}
                  className="capitalize"
                >
                  {property.status.replace('-', ' ')}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="rounded-full h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="max-h-[calc(90vh-120px)] overflow-y-auto">
              <div className="grid lg:grid-cols-2 gap-8 px-6">
                {/* Left - Images */}
                <div className="space-y-4">
                  {/* Main Image */}
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src={additionalImages[selectedImage] || "/placeholder.svg"}
                      alt={property.title}
                      width={600}
                      height={400}
                      className="w-full h-70 object-cover transition-all duration-300"
                    />
                    
                  </div>

                  {/* Image Gallery */}
                  <div className="grid grid-cols-5 gap-2">
                    {additionalImages.map((img, index) => (
                      <div 
                        key={index} 
                        className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                          selectedImage === index 
                            ? 'ring-2 ring-green-500 ring-offset-2' 
                            : 'hover:scale-105'
                        }`}
                        onClick={() => handleImageClick(index)}
                      >
                        <Image
                          src={img}
                          alt={`Property ${index + 1}`}
                          width={150}
                          height={100}
                          className="w-full h-20 object-cover"
                        />
                        {selectedImage === index && (
                          <div className="absolute inset-0 bg-green-500/20" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Details */}
                <div className="space-y-3">
                  {/* Price */}
                  

                  {/* Key Details */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Bed className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-semibold text-gray-900">{property.bedrooms}</div>
                        <div className="text-sm text-gray-600">Bedrooms</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Bath className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-semibold text-gray-900">{property.bathrooms}</div>
                        <div className="text-sm text-gray-600">Bathrooms</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Square className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-semibold text-gray-900">{property.area}</div>
                        <div className="text-sm text-gray-600">Sq Ft</div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                      This stunning {property.type} offers modern living in the heart of {property.location}. 
                      With {property.bedrooms} spacious bedrooms and {property.bathrooms} well-appointed bathrooms, 
                      this property is perfect for comfortable living. The {property.area} square feet of living space 
                      provides ample room for relaxation and entertainment.
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                    <div className="grid grid-cols-4 gap-3">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-600">
                          <feature.icon className="w-4 h-4" />
                          <span className="text-sm">{feature.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Button */}
                  <div className="py-4 mb-2">
                    <Button
                      onClick={handleContactClick}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-xl"
                      size="lg"
                    >
                      Contact Agent
                    </Button>
                    
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}