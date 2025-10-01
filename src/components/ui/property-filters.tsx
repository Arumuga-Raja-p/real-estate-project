"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";

// ✅ Define type for filters
interface Filters {
  type: "all" | "house" | "apartment";
  priceRange: number[];
  bedrooms: "any" | "1" | "2" | "3" | "4";
  location: "all" | "downtown" | "suburban" | "waterfront" | "hills";
}

interface PropertyFiltersProps {
  onFilterChange: (filters: Filters) => void;
  isRental?: boolean;
}

export function PropertyFilters({
  onFilterChange,
  isRental = false,
}: PropertyFiltersProps) {
  const [filters, setFilters] = useState<Filters>({
    type: "all",
    priceRange: isRental ? [1000, 5000] : [200000, 1500000],
    bedrooms: "any",
    location: "all",
  });

  const handleFilterChange = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters: Filters = {
      type: "all",
      priceRange: isRental ? [1000, 5000] : [200000, 1500000],
      bedrooms: "any",
      location: "all",
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <Card className="top-24 border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-green-500 transition-all duration-500 bg-white group overflow-hidden relative">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Decorative Corner Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-500/20 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500" />

      <CardHeader className="relative z-10">
        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
          Filter Properties
        </CardTitle>
        <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent group-hover:via-green-500 transition-all duration-500 mt-2" />
      </CardHeader>

      <CardContent className="space-y-6 relative z-10">
        {/* Property Type */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Label className="text-sm font-semibold mb-3 block text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
            Property Type
          </Label>
          <div className="space-y-2">
            {[
              { value: "all", label: "All Types" },
              { value: "house", label: "Houses" },
              { value: "apartment", label: "Apartments" },
            ].map((option) => (
              <motion.label
                key={option.value}
                whileHover={{ x: 4 }}
                className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-green-50 transition-colors duration-200 group/item"
              >
                <input
                  type="radio"
                  name="type"
                  value={option.value}
                  checked={filters.type === option.value}
                  onChange={(e) =>
                    handleFilterChange("type", e.target.value as Filters["type"])
                  }
                  className="text-green-600 focus:ring-green-500 w-4 h-4 cursor-pointer"
                />
                <span className="text-sm font-medium text-gray-700 group-hover/item:text-green-600 transition-colors duration-200">
                  {option.label}
                </span>
              </motion.label>
            ))}
          </div>
        </motion.div>

        {/* Price Range */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Label className="text-sm font-semibold mb-2 block text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
            Price Range {isRental ? "(Monthly)" : ""}
          </Label>
          <div className="mb-4">
            {/* Display price range */}
            <div className="flex justify-between text-sm font-medium text-gray-600 mb-3 px-1">
              <span className="bg-green-50 px-2 py-1 rounded group-hover:bg-green-100 transition-colors duration-300">
                ₹{filters.priceRange[0].toLocaleString()}
              </span>
              <span className="bg-green-50 px-2 py-1 rounded group-hover:bg-green-100 transition-colors duration-300">
                ₹{filters.priceRange[1].toLocaleString()}
              </span>
            </div>

            {/* Actual slider */}
            <div className="px-1">
              <Slider
                value={filters.priceRange}
                onValueChange={(value) => handleFilterChange("priceRange", value)}
                max={isRental ? 5000 : 1500000}
                min={isRental ? 1000 : 200000}
                step={isRental ? 100 : 10000}
                className="w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Bedrooms */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Label className="text-sm font-semibold mb-3 block text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
            Bedrooms
          </Label>
          <select
            value={filters.bedrooms}
            onChange={(e) =>
              handleFilterChange("bedrooms", e.target.value as Filters["bedrooms"])
            }
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 hover:border-green-400 transition-all duration-300 bg-white cursor-pointer shadow-sm hover:shadow-md font-medium text-gray-700"
          >
            <option value="any">Any</option>
            <option value="1">1+ Bedrooms</option>
            <option value="2">2+ Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Label className="text-sm font-semibold mb-3 block text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
            Location
          </Label>
          <select
            value={filters.location}
            onChange={(e) =>
              handleFilterChange("location", e.target.value as Filters["location"])
            }
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 hover:border-green-400 transition-all duration-300 bg-white cursor-pointer shadow-sm hover:shadow-md font-medium text-gray-700"
          >
            <option value="all">All Locations</option>
            <option value="downtown">Downtown</option>
            <option value="suburban">Suburban</option>
            <option value="waterfront">Waterfront</option>
            <option value="hills">Hills</option>
          </select>
        </motion.div>

        {/* Reset Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Button
            variant="outline"
            onClick={resetFilters}
            className="w-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Reset Filters
          </Button>
        </motion.div>
      </CardContent>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
    </Card>
  );
}
