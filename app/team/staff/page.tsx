import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import { TeamNav } from "@/components/layout/team-nav"
import { PageCta } from "@/components/layout/page-cta"
import { StaffGrid } from "./staff-grid"

export const metadata = {
  title: "Staff | Strides Over Sidelines",
  description: "Meet the staff members driving the Strides Over Sidelines mission forward.",
}

export default function StaffPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Our Team."
          subtitle="Meet the people driving the SOS mission forward."
        >
          <TeamNav active="staff" />
        </PageHero>

        <PageSection>
          <SectionTitle as="h3" className="mb-12">Staff</SectionTitle>
          <StaffGrid />
        </PageSection>

        <PageCta
          title="Join Our Team"
          description="Interested in contributing to our mission? We're always looking for passionate individuals."
          buttonText="Get in Touch"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </div>
  )
}
