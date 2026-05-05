import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { FeaturedProperties } from "@/components/sections/featured-properties"
import { Services } from "@/components/sections/services"
import { Stats } from "@/components/sections/stats"
import { TestimonialsSection } from "@/components/sections/testimonial"
import { CTA } from "@/components/sections/cta"
import ImageGridSection from "@/components/sections/partners"
import YouTubeSection from "@/components/sections/youtube"
import { fetchPartnersSection } from "@/lib/partners"
import { siteConfig } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Trusted Property Experts in Guduvanchery, Chennai",
  description:
    "Green Homes Construction helps you buy, sell, and invest in quality properties across Guduvanchery and Chennai with reliable guidance, local expertise, and transparent service.",
  alternates: {
    canonical: "/",
  },
}

export default async function HomePage() {
  const partnersSection = await fetchPartnersSection()
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/properties`,
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Hero />
      <FeaturedProperties />
      {partnersSection ? <ImageGridSection {...partnersSection} /> : null}
      <Services />
      <Stats />
      <YouTubeSection />
      <TestimonialsSection />
      <CTA />
    </>
  )
}
