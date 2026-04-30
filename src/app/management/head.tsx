import { absoluteUrl } from "@/lib/seo"

export default function Head() {
  const title = "Property Management Services in Chennai"
  const description =
    "Discover Green Homes property management, maintenance, and real estate support services for owners and investors in Chennai."
  const canonical = absoluteUrl("/management")
  const keywords = [
    "property management Chennai",
    "real estate services Guduvanchery",
    "property maintenance Chennai",
    "Green Homes services",
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
