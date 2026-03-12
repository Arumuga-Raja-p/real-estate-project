import { Hero } from "@/components/sections/hero"
import { FeaturedProperties } from "@/components/sections/featured-properties"
import { Services } from "@/components/sections/services"
import { Stats } from "@/components/sections/stats"
import { TestimonialsSection } from "@/components/sections/testimonial"
import { CTA } from "@/components/sections/cta"
import ImageGridSection from "@/components/sections/partners"
import YouTubeSection from "@/components/sections/youtube"

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <ImageGridSection/>
      <Services />
      <Stats />
      <YouTubeSection />
      <TestimonialsSection />
      <CTA />
    </>
  )
}
