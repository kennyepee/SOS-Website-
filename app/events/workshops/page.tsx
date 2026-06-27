import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import { BackLink } from "@/components/layout/back-link"
import Link from "next/link"

export const metadata = {
  title: "Workshops | Strides Over Sidelines",
  description: "SOS workshops - leadership, mental performance, and life skills development.",
}

const workshopTopics = [
  "Leadership and confidence development",
  "Mental performance and mindset training",
  "College and career readiness",
  "Health, wellness, and discipline",
]

export default function WorkshopsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageSection containerClassName="max-w-4xl">
          <BackLink href="/events" label="Back to Events" />
        </PageSection>

        <PageHero
          title="Workshops & Learning Sessions."
          subtitle="SOS workshops provide participants with opportunities to build leadership, mental performance, and life skills beyond the field."
        />

        <PageSection>
          <div className="mx-auto max-w-3xl">
            <SectionTitle as="h3">Workshops may include:</SectionTitle>
            <div className="mt-6 space-y-4">
              {workshopTopics.map((item, index) => (
                <div key={index} className="apple-list-item">
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="apple-body mt-8">
              Workshops are led by experienced mentors, professionals, and community partners.
            </p>
          </div>
        </PageSection>

        <PageSection alt>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle centered>Lead a Workshop.</SectionTitle>
            <p className="mt-6 apple-body">
              Have expertise to share? We're looking for workshop leaders.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/get-involved/workshops">Host a Workshop</Link>
              </Button>
            </div>
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
