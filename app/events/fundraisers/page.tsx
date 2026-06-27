import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import { BackLink } from "@/components/layout/back-link"
import Link from "next/link"

export const metadata = {
  title: "Fundraisers | Strides Over Sidelines",
  description: "SOS fundraising events supporting our programs and mission.",
}

const fundraiserTypes = [
  "Community soccer events",
  "Partner-hosted fundraisers",
  "Special initiatives and campaigns",
]

export default function FundraisersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageSection containerClassName="max-w-4xl">
          <BackLink href="/events" label="Back to Events" />
        </PageSection>

        <PageHero
          title="Fundraising Events."
          subtitle="Fundraising events support SOS programs and help expand access to quality training and mentorship."
        />

        <PageSection>
          <div className="mx-auto max-w-3xl">
            <SectionTitle as="h3">Events may include:</SectionTitle>
            <div className="mt-6 space-y-4">
              {fundraiserTypes.map((item, index) => (
                <div key={index} className="apple-list-item">
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="apple-body mt-8">
              More details will be shared as events are announced.
            </p>
          </div>
        </PageSection>

        <PageSection alt>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle centered>Support Our Mission.</SectionTitle>
            <p className="mt-6 apple-body">
              Can't attend an event? You can still make a difference with an online donation.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
