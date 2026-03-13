/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { PropertyCard } from "@/components/ui/property-card"
import { PropertyFilters } from "@/components/ui/property-filters"
import { Badge } from "@/components/ui/badge"
import RootLayout from "@/components/layout"
import { fetchProperties } from "@/lib/property"

const properties =  await fetchProperties()
const animatedHeading = "Dream Home ..."

export default function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState(properties)
  const [typedHeading, setTypedHeading] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!isDeleting && typedHeading === animatedHeading) {
      const timeout = window.setTimeout(() => setIsDeleting(true), 900)
      return () => window.clearTimeout(timeout)
    }

    if (isDeleting && typedHeading.length === 0) {
      const timeout = window.setTimeout(() => setIsDeleting(false), 300)
      return () => window.clearTimeout(timeout)
    }

    const timeout = window.setTimeout(() => {
      const nextLength = typedHeading.length + (isDeleting ? -1 : 1)
      setTypedHeading(animatedHeading.slice(0, nextLength))
    }, isDeleting ? 70 : 110)

    return () => window.clearTimeout(timeout)
  }, [isDeleting, typedHeading])

  const handleFilterChange = (filters: any) => {
    let filtered = properties

    if (filters.type && filters.type !== "all") {
      filtered = filtered.filter((property: { type: any }) => property.type === filters.type)
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange
      filtered = filtered.filter((property: { price: number }) => property.price >= min && property.price <= max)
    }

    if (filters.bedrooms && filters.bedrooms !== "any") {
      filtered = filtered.filter((property: { bedrooms: number }) => property.bedrooms >= Number.parseInt(filters.bedrooms))
    }

    if (filters.location && filters.location !== "all") {
      filtered = filtered.filter((property: { location: string }) => property.location.toLowerCase().includes(filters.location.toLowerCase()))
    }

    setFilteredProperties(filtered)
  }

  return (
    <RootLayout>
      <div>
      {/* Hero Section */}
      <section className="relative flex min-h-[100svh] min-h-[100dvh] items-center justify-center overflow-hidden px-4 pb-10 pt-28 sm:px-6 sm:pb-12 sm:pt-32 lg:px-8">
          <video
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="/about/v3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/55 sm:bg-white/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mx-auto flex w-full max-w-5xl -translate-y-8 flex-col items-center text-center sm:-translate-y-10"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 sm:mb-6">Properties for Sale</Badge>
            <h1
              className="mb-5 max-w-5xl text-4xl font-bold leading-none text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                WebkitTextStroke: "10.5px rgba(255, 255, 255, 0.95)",
                paintOrder: "stroke fill",
              }}
            >
              Find Your
              <span className="ml-3 inline-flex min-w-[5.5ch] items-center text-green-600">
                {typedHeading}
              </span>
            </h1>
            <p className="max-w-4xl text-base font-semibold leading-relaxed text-gray-700 sm:text-lg md:text-xl">
              Discover exceptional properties that match your lifestyle and budget. From modern apartments to luxury
              villas, we have something for everyone.
            </p>
          </motion.div>
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
                {filteredProperties.map((property:any, index: number) => (
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
