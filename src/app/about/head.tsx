import { absoluteUrl } from "@/lib/seo"

export default function Head() {
  const title = "About Green Homes in Guduvanchery, Chennai"
  const description =
    "Learn about Green Homes Construction, our real estate expertise, and how we help clients across Guduvanchery and Chennai."
  const canonical = absoluteUrl("/about")
  const keywords = [
    "about Green Homes",
    "real estate company in Guduvanchery",
    "property consultants in Chennai",
    "Green Homes Construction",
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
