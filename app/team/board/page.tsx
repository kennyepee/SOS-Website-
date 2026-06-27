import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import { TeamNav } from "@/components/layout/team-nav"
import { BoardGrid } from "./board-grid"

export const metadata = {
  title: "Board of Directors | Strides Over Sidelines",
  description: "Meet the Board of Directors guiding Strides Over Sidelines.",
}

export default function BoardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Our Team."
          subtitle="Meet the people driving the SOS mission forward."
        >
          <TeamNav active="board" />
        </PageHero>

        <PageSection>
          <SectionTitle as="h3" className="mb-12">Board of Directors</SectionTitle>
          <BoardGrid />
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
