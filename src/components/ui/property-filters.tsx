/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface PropertyFiltersProps {
  onFilterChange: (filters: any) => void;
  isRental?: boolean;
}

export function PropertyFilters({
  onFilterChange,
  isRental = false,
}: PropertyFiltersProps) {
  const [filters, setFilters] = useState({
    type: "all",
    priceRange: isRental ? [1000, 5000] : [200000, 1500000],
    bedrooms: "any",
    location: "all",
  });

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters = {
      type: "all",
      priceRange: isRental ? [1000, 5000] : [200000, 1500000],
      bedrooms: "any",
      location: "all",
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="text-lg">Filter Properties</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Property Type */}
        <div>
          <Label className="text-sm font-medium mb-3 block">
            Property Type
          </Label>
          <div className="space-y-2">
            {[
              { value: "all", label: "All Types" },
              { value: "house", label: "Houses" },
              { value: "apartment", label: "Apartments" },
            ].map((option) => (
              <label
                key={option.value}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="type"
                  value={option.value}
                  checked={filters.type === option.value}
                  onChange={(e) => handleFilterChange("type", e.target.value)}
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="text-sm">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <Label className="text-sm font-medium mb-2 block">
            Price Range {isRental ? "(Monthly)" : ""}
          </Label>
          <div className="mb-4">
            {/* Display price range */}
            <div className="flex justify-between text-sm text-gray-600 mb-3 px-1">
              <span>₹{filters.priceRange[0].toLocaleString()}</span>
              <span>₹{filters.priceRange[1].toLocaleString()}</span>
            </div>

            {/* Actual slider */}
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

        {/* Bedrooms */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Bedrooms</Label>
          <select
            value={filters.bedrooms}
            onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="any">Any</option>
            <option value="1">1+ Bedrooms</option>
            <option value="2">2+ Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Location</Label>
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange("location", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="all">All Locations</option>
            <option value="downtown">Downtown</option>
            <option value="suburban">Suburban</option>
            <option value="waterfront">Waterfront</option>
            <option value="hills">Hills</option>
          </select>
        </div>

        {/* Reset Button */}
        <Button
          variant="outline"
          onClick={resetFilters}
          className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
        >
          Reset Filters
        </Button>
      </CardContent>
    </Card>
  );
}
