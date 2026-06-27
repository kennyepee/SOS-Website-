import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import { BackLink } from "@/components/layout/back-link"

const mentorResponsibilities = [
  "Building consistent, positive relationships",
  "Sharing experiences from competitive soccer environments",
  "Reinforcing confidence, discipline, and leadership",
  "Modeling accountability on and off the field",
]

export default function MentorshipPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageSection containerClassName="max-w-4xl">
          <BackLink href="/get-involved" label="Back to Get Involved" />
        </PageSection>

        <PageHero
          title="Be a Mentor."
          subtitle="Mentors are central to the SOS model. Make a lasting impact on young athletes through consistent guidance and support."
        />

        <PageSection>
          <div className="mx-auto max-w-3xl">
            <p className="apple-body">
              At SOS, mentors are current or former high-level soccer players who understand the demands, discipline, and lessons that come with competitive sport.
            </p>
            <SectionTitle as="h3" className="mt-8">
              Mentors support participants by:
            </SectionTitle>
            <ul className="mt-6 space-y-4">
              {mentorResponsibilities.map((item, index) => (
                <li key={index} className="apple-list-item">
                  <span className="apple-body">{item}</span>
                </li>
              ))}
            </ul>
            <p className="apple-body mt-8">
              Mentors may include current or former collegiate, semi-professional, or professional players. Time commitment varies and is designed to be remote and flexible.
            </p>
          </div>
        </PageSection>

        <PageSection alt>
          <div className="mx-auto max-w-2xl text-center">
            <SectionTitle centered>Become a Mentor.</SectionTitle>
            <p className="mt-4 apple-body">
              Ready to make an impact? Fill out our mentor application to get started.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdHmQ6kNG1GvzwAyykcVedTDwmkoXVugvY4Vn4x3WhH-I4eVA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </Button>
            </div>
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
