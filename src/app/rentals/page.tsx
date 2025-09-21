
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PropertyCard } from "@/components/ui/property-card"
import { PropertyFilters } from "@/components/ui/property-filters"
import { Badge } from "@/components/ui/badge"
import RootLayout from "@/components/layout"

const rentalProperties = [
  {
    id: 1,
    title: "Downtown Studio Apartment",
    price: 1800,
    location: "City Center",
    bedrooms: 1,
    bathrooms: 1,
    area: 600,
    image: "/placeholder.svg?height=300&width=400",
    type: "apartment",
    status: "for-rent",
    featured: true,
    isRental: true,
  },
  {
    id: 2,
    title: "Spacious 2BR Condo",
    price: 2500,
    location: "Riverside District",
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    image: "/placeholder.svg?height=300&width=400",
    type: "apartment",
    status: "for-rent",
    featured: true,
    isRental: true,
  },
  {
    id: 3,
    title: "Family House with Garden",
    price: 3200,
    location: "Suburban Area",
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    image: "/placeholder.svg?height=300&width=400",
    type: "house",
    status: "for-rent",
    featured: false,
    isRental: true,
  },
  {
    id: 4,
    title: "Luxury Penthouse",
    price: 4500,
    location: "Premium Tower",
    bedrooms: 3,
    bathrooms: 3,
    area: 2000,
    image: "/placeholder.svg?height=300&width=400",
    type: "apartment",
    status: "for-rent",
    featured: true,
    isRental: true,
  },
  {
    id: 5,
    title: "Cozy 1BR Loft",
    price: 1600,
    location: "Arts District",
    bedrooms: 1,
    bathrooms: 1,
    area: 750,
    image: "/placeholder.svg?height=300&width=400",
    type: "apartment",
    status: "for-rent",
    featured: false,
    isRental: true,
  },
  {
    id: 6,
    title: "Modern Townhouse",
    price: 2800,
    location: "Green Valley",
    bedrooms: 2,
    bathrooms: 2,
    area: 1300,
    image: "/placeholder.svg?height=300&width=400",
    type: "house",
    status: "for-rent",
    featured: true,
    isRental: true,
  },
]

export default function RentalsPage() {
  const [filteredProperties, setFilteredProperties] = useState(rentalProperties)

  const handleFilterChange = (filters: any) => {
    let filtered = rentalProperties

    if (filters.type && filters.type !== "all") {
      filtered = filtered.filter((property) => property.type === filters.type)
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange
      filtered = filtered.filter((property) => property.price >= min && property.price <= max)
    }

    if (filters.bedrooms && filters.bedrooms !== "any") {
      filtered = filtered.filter((property) => property.bedrooms >= Number.parseInt(filters.bedrooms))
    }

    if (filters.location && filters.location !== "all") {
      filtered = filtered.filter((property) => property.location.toLowerCase().includes(filters.location.toLowerCase()))
    }

    setFilteredProperties(filtered)
  }

  return (
    <RootLayout>
      <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Rental Properties</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Premium
              <span className="text-green-600"> Rental Homes</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find the perfect rental property for your lifestyle. From cozy studios to spacious family homes, all
              maintained to the highest standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rental Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">All properties are thoroughly inspected and maintained</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock maintenance and support services</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Terms</h3>
              <p className="text-gray-600">Various lease options to suit your needs</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <PropertyFilters onFilterChange={handleFilterChange} isRental={true} />
            </div>

            {/* Properties Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {filteredProperties.length} Rental Properties Available
                </h2>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <PropertyCard property={property} />
                  </motion.div>
                ))}
              </div>

              {filteredProperties.length === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No rental properties found matching your criteria. Try adjusting your filters.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
    </RootLayout>
  )
}
