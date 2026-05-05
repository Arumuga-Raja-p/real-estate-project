export const siteConfig = {
  name: "Green Homes Construction",
  shortName: "Green Homes",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://greenhomesproperty.com",
  description:
    "Green Homes Construction is a real estate company in Guduvanchery, Chennai helping buyers, sellers, and investors discover quality properties and trusted property services.",
  ogImage: "/greenlogo.png",
  locale: "en_IN",
  address: {
    streetAddress: "No:15, Govindarajapuram 2nd street, Nellikappam Road",
    addressLocality: "Guduvanchery",
    addressRegion: "Tamil Nadu",
    postalCode: "603202",
    addressCountry: "IN",
  },
  phones: ["+91-9543326699", "+91-9841886699"],
  email: "ramesh@greenhomesproperty.com",
  sameAs: [
    "https://www.facebook.com/greenhomes369",
    "https://www.instagram.com/green_homes_property",
    "https://www.youtube.com/@greenhomesproperty",
  ],
} as const

export const defaultKeywords = [
  "Green Homes",
  "Green Homes Construction",
  "Green Homes Property",
  "Green Homes Chennai",
  "Green Homes Guduvanchery",
  "Green Homes Property Consultants",
  "real estate in Guduvanchery",
  "real estate in Tamburam",
  "real estate in Chennai",
  "real estate agents in Guduvanchery",
  "real estate company in Guduvanchery",
  "best real estate company in Guduvanchery",
  "properties in Guduvanchery",
  "homes in Guduvanchery",
  "apartments in Guduvanchery",
  "villas in Guduvanchery",
  "real estate in Chennai",
  "property consultants in Chennai",
  "buy property in Chennai",
  "sell property in Chennai",
] as const

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString()
}
