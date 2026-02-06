import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { MissionSection } from "@/components/home/mission-section"
import { CohortPreview } from "@/components/home/cohort-preview"
import { GetInvolvedSection } from "@/components/home/get-involved-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MissionSection />
        <CohortPreview />
        <GetInvolvedSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
