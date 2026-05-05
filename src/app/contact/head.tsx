import { absoluteUrl } from "@/lib/seo"

export default function Head() {
  const title = "Contact Green Homes in Guduvanchery, Chennai"
  const description =
    "Contact Green Homes Construction for property buying, selling, site visits, and real estate support in Guduvanchery, Chennai."
  const canonical = absoluteUrl("/contact")
  const keywords = [
    "contact Green Homes",
    "real estate contact in Guduvanchery",
    "property enquiry Chennai",
    "real estate office in Guduvanchery",
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
