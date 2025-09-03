import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PillarsSection } from "@/components/pillars-section"
import { LatestDrops } from "@/components/latest-drops"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PillarsSection />
        <LatestDrops />
      </main>
      <Footer />
    </div>
  )
}
