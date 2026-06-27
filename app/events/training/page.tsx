import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import { BackLink } from "@/components/layout/back-link"
import Link from "next/link"

export const metadata = {
  title: "Training Sessions | Strides Over Sidelines",
  description: "SOS training sessions - youth development and college/pro-level training.",
}

const trainingTypes = [
  "Youth development training",
  "Position-specific or skills-focused training",
]

export default function TrainingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageSection containerClassName="max-w-4xl">
          <BackLink href="/events" label="Back to Events" />
        </PageSection>

        <PageHero
          title="Training Sessions."
          subtitle="SOS training sessions focus on structured, development-first soccer environments."
        />

        <PageSection>
          <div className="mx-auto max-w-3xl">
            <SectionTitle as="h3">Sessions may include:</SectionTitle>
            <div className="mt-6 space-y-4">
              {trainingTypes.map((item, index) => (
                <div key={index} className="apple-list-item">
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="apple-body mt-8">
              Training sessions are designed to maintain high standards while prioritizing growth and learning.
            </p>
          </div>
        </PageSection>

        <PageSection alt>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle centered>Our Programs.</SectionTitle>
            <p className="mt-4 apple-body">
              Learn more about our structured training programs.
            </p>
            <div className="mt-10">
              <Button asChild>
                <Link href="/2026-703-warriors">703 Warriors 2026</Link>
              </Button>
            </div>
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
