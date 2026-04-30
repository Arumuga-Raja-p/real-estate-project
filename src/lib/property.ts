import { client } from "./sanity.client"

export type Property = {
  _id?: string
  title: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  area: number
  type: string
  status: string
  featured?: boolean | null
  images: { url: string }[]
  slug?: string
}

const propertyFields = `
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
`

export async function fetchProperties(): Promise<Property[]> {
  const query = `*[_type == "property"]{
    ${propertyFields}
  } | order(_createdAt desc)`

  return client.fetch<Property[]>(query)
}

export async function fetchPropertyBySlug(slug: string): Promise<Property | null> {
  const query = `*[_type == "property" && slug.current == $slug][0]{
    ${propertyFields}
  }`

  return client.fetch<Property | null>(query, { slug })
}

export async function fetchFeaturedProperties(): Promise<Property[]> {
  const query = `*[_type == "property" && featured == true]{
    ${propertyFields}
  } | order(_createdAt desc)`

  return client.fetch<Property[]>(query)
}
  
