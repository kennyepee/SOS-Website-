import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { MissionSection } from "@/components/home/mission-section"
import { StatsSection } from "@/components/home/stats-section"
import { ProgramsSection } from "@/components/home/programs-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MissionSection />
        <StatsSection />
        <ProgramsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
