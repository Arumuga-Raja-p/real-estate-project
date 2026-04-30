import { absoluteUrl } from "@/lib/seo"

export default function Head() {
  const title = "Real Estate Gallery in Guduvanchery, Chennai"
  const description =
    "Browse Green Homes project images, completed work, and property visuals from Guduvanchery and Chennai."
  const canonical = absoluteUrl("/gallery")
  const keywords = [
    "Green Homes gallery",
    "property gallery Guduvanchery",
    "real estate images Chennai",
    "construction gallery Guduvanchery",
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
