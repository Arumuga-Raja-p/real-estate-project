import { Hero } from "@/components/sections/hero"
import { FeaturedProperties } from "@/components/sections/featured-properties"
import { Services } from "@/components/sections/services"
import { Stats } from "@/components/sections/stats"
import { TestimonialsSection } from "@/components/sections/testimonial"
import { CTA } from "@/components/sections/cta"
import RootLayout from "@/components/layout"
import ImageGridSection from "@/components/sections/partners"

export default function HomePage() {
  return (
    <RootLayout>
          <>
      <Hero />
      <FeaturedProperties />
      <ImageGridSection/>
      <Services />
      <Stats />
      <TestimonialsSection />
      <CTA />
    </>
    </RootLayout>
  )
}
