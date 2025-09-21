/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PropertyCard } from "@/components/ui/property-card"
import { PropertyFilters } from "@/components/ui/property-filters"
import { Badge } from "@/components/ui/badge"
import RootLayout from "@/components/layout"

const properties = [
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
    image: "/galary/2.jpg",
    type: "house",
    status: "for-sale",
    featured: true,
  },
  {
    id: 3,
    title: "Cozy Studio Loft",
    price: 280000,
    location: "Arts Quarter",
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    image: "/galary/3.jpg",
    type: "apartment",
    status: "for-sale",
    featured: false,
  },
  {
    id: 4,
    title: "Executive Penthouse",
    price: 1200000,
    location: "Skyline Tower",
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    image: "/galary/4.jpg",
    type: "apartment",
    status: "for-sale",
    featured: true,
  },
  {
    id: 5,
    title: "Suburban Family Home",
    price: 620000,
    location: "Maple Grove",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image: "/galary/5.jpg",
    type: "house",
    status: "for-sale",
    featured: false,
  },
  {
    id: 6,
    title: "Waterfront Condo",
    price: 750000,
    location: "Marina Bay",
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    image: "/galary/6.jpg",
    type: "apartment",
    status: "for-sale",
    featured: true,
  },
]

export default function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState(properties)

  const handleFilterChange = (filters: any) => {
    let filtered = properties

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
      <section className="py">
        <div className="relative h-[600px] overflow-hidden flex items-center justify-center">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/about/v3.mp4" type="video/mp4" />
          </video>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto z-30"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Properties for Sale</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your
              <span className="text-green-600"> Dream Home</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover exceptional properties that match your lifestyle and budget. From modern apartments to luxury
              villas, we have something for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <PropertyFilters onFilterChange={handleFilterChange} />
            </div>

            {/* Properties Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900">{filteredProperties.length} Properties Found</h2>
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
                    No properties found matching your criteria. Try adjusting your filters.
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
