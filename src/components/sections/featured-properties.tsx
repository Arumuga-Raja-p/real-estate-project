import {
  fetchFeaturedProperties,
  fetchProperties,
} from "@/lib/property"
import { FeaturedPropertiesCarousel } from "./featured-properties-carousel"

export async function FeaturedProperties() {
  try {
    const featuredProperties = await fetchFeaturedProperties()
    const properties =
      featuredProperties.length > 0
        ? featuredProperties
        : await fetchProperties()

    if (properties.length === 0) {
      return (
        <div className="py-20 text-center text-gray-500 text-lg">
          No properties found in Sanity. Add property documents in Studio to show them here.
        </div>
      )
    }

    return <FeaturedPropertiesCarousel properties={properties} />
  } catch (error) {
    console.error("Failed to load featured properties from Sanity", error)

    return (
      <div className="py-20 text-center text-red-500 text-lg">
        Failed to load properties from Sanity. Check project ID, dataset, and published content.
      </div>
    )
  }
}
