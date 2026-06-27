import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import { TeamNav } from "@/components/layout/team-nav"
import { AdvisorsGrid } from "./advisors-grid"

export const metadata = {
  title: "Advisors | Strides Over Sidelines",
  description: "Meet the advisors guiding Strides Over Sidelines.",
}

export default function AdvisorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Our Team."
          subtitle="Meet the people driving the SOS mission forward."
        >
          <TeamNav active="advisors" />
        </PageHero>

        <PageSection>
          <SectionTitle as="h3" className="mb-12">Advisors</SectionTitle>
          <AdvisorsGrid />
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
