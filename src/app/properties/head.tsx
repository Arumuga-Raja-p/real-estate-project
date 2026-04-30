import { absoluteUrl } from "@/lib/seo"

export default function Head() {
  const title = "Properties for Sale in Guduvanchery, Chennai"
  const description =
    "Explore apartments, villas, and residential properties for sale with Green Homes Construction in Guduvanchery, Chennai."
  const canonical = absoluteUrl("/properties")
  const keywords = [
    "properties in Guduvanchery",
    "properties for sale Chennai",
    "apartments in Guduvanchery",
    "villas in Chennai",
    "Green Homes properties",
  ].join(", ")

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
    </>
  )
}
