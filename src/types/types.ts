export interface Property {
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