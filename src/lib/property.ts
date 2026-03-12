import { client } from "./sanity.client"

export async function fetchProperties() {
  const query = `*[_type == "property"]{
    _id,
    title,
    price,
    location,
    bedrooms,
    bathrooms,
    area,
    type,
    status,
    featured,
    "images": images[]{
      "url": asset->url
    },
    // Slug if needed
    "slug": slug.current
  } | order(_createdAt desc)`

  const properties = await client.fetch(query)
  return properties
}

export async function fetchPropertyBySlug(slug: string) {
    const query = `*[_type == "property" && slug.current == $slug][0]{
      _id,
      title,
      price,
      location,
      bedrooms,
      bathrooms,
      area,
      type,
      status,
      featured,
      "images": images[]{
        "url": asset->url
      },
      "slug": slug.current
    }`
  
    const property = await client.fetch(query, { slug })
    return property
  }

  export async function fetchFeaturedProperties() {
    const query = `*[_type == "property" && featured == true]{
      _id,
      title,
      price,
      location,
      bedrooms,
      bathrooms,
      area,
      type,
      status,
      featured,
      "images": images[]{
        "url": asset->url
      }
    } | order(_createdAt desc)`
  
    return await client.fetch(query)
  }
  