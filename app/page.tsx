import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { Features } from "@/components/features"
import { CTA } from "@/components/cta"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { OrdenanzaSection } from "@/components/ordenanza-section"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Stats />
      <Benefits />
      <About />
      <OrdenanzaSection />
      <Features />
      <CTA />
    </div>
  )
}
