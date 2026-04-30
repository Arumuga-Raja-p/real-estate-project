import { absoluteUrl } from "@/lib/seo"

export default function Head() {
  const title = "Rental Properties in Guduvanchery, Chennai"
  const description =
    "Find rental homes, apartments, and family properties with Green Homes Construction in Guduvanchery and Chennai."
  const canonical = absoluteUrl("/rentals")
  const keywords = [
    "rental properties Guduvanchery",
    "homes for rent Chennai",
    "apartments for rent Guduvanchery",
    "Green Homes rentals",
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
