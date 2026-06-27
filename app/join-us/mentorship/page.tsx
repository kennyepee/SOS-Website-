import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import { BackLink } from "@/components/layout/back-link"

const mentorBenefits = [
  {
    title: "Make a Lasting Impact",
    description: "Build a meaningful relationship with a young athlete and help shape their future.",
  },
  {
    title: "Flexible Commitment",
    description: "We work with your schedule to find a mentoring arrangement that fits your life.",
  },
  {
    title: "Training & Support",
    description: "Receive comprehensive training and ongoing support from our team.",
  },
  {
    title: "Safe Environment",
    description: "All mentors are background checked and participate in structured programming.",
  },
]

const expectations = [
  "Commit to meeting with your mentee regularly (in-person or virtual)",
  "Attend mentor training sessions and ongoing development opportunities",
  "Communicate openly with SOS staff about progress and any concerns",
  "Serve as a positive role model and maintain appropriate boundaries",
  "Support your mentee's academic and athletic goals",
  "Participate in at least one SOS event per quarter with your mentee",
]

const mentorJourney = [
  { step: "1", title: "Apply", description: "Submit your application and share why you want to mentor." },
  { step: "2", title: "Interview & Screening", description: "Meet with our team and complete background checks." },
  { step: "3", title: "Training", description: "Participate in mentor training to prepare for your role." },
  { step: "4", title: "Match & Begin", description: "Get matched with a mentee and start your journey together." },
]

export default function MentorshipPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageSection containerClassName="max-w-4xl">
          <BackLink href="/join-us" label="Back to Join Us" />
        </PageSection>

        <PageHero
          title="Mentorship Program."
          subtitle="Become a mentor and make a transformative impact on a young athlete's life through consistent guidance, support, and encouragement."
        />

        <PageSection>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <SectionTitle centered>Why Become a Mentor?</SectionTitle>
            <p className="mt-4 apple-body">
              Mentoring is one of the most impactful ways you can contribute to youth development.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {mentorBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm apple-body">{benefit.description}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <PageSection alt>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionTitle>What We Expect from Mentors</SectionTitle>
              <p className="mt-4 apple-body">
                We're looking for dedicated individuals who can commit to building a meaningful relationship with a young athlete.
              </p>
              <ul className="mt-8 space-y-4">
                {expectations.map((expectation, index) => (
                  <li key={index} className="apple-list-item">
                    <span className="apple-body">{expectation}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="apple-nav-card">
              <SectionTitle as="h3" className="mb-6">The Mentor Journey</SectionTitle>
              <div className="space-y-6">
                {mentorJourney.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm apple-body">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageSection>

        <PageSection>
          <div className="mx-auto max-w-2xl text-center">
            <SectionTitle centered>Apply to Be a Mentor.</SectionTitle>
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
