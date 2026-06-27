import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import Link from "next/link"

export const metadata = {
  title: "Impact | Strides Over Sidelines",
  description: "Learn about the impact of Strides Over Sidelines and how we're changing youth sports.",
}

const theNeed = [
  "Limited access to high-quality coaching and training",
  "Pay-to-play models that exclude families with fewer resources",
  "A lack of consistent mentorship and positive role models",
  "Sports environments that prioritize results over development",
]

const ourResponse = [
  "Structured, high-quality soccer training",
  "Mentorship from former athletes and professionals",
  "Mental performance and leadership development",
  "Exposure to college and professional pathways",
  "Tiered access models that prioritize inclusion",
]

const impactIndicators = [
  "Increased confidence and accountability",
  "Improved discipline and work habits",
  "Stronger relationships with mentors and peers",
  "Exposure to new pathways and possibilities",
  "Sustained participation in structured sport environments",
]

const systemChange = [
  "Shift how success is defined in youth sports",
  "Encourage healthier, more sustainable training environments",
  "Elevate the role of mentorship and mental performance in athletics",
  "Support coaches and programs in adopting development-focused practices",
]

const measuringImpact = [
  "Participant attendance and retention",
  "Engagement in mentorship and workshops",
  "Self-reported confidence and leadership indicators",
  "Feedback from participants, families, and mentors",
]

export default function ImpactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Impact."
          subtitle="Measuring success by growth, opportunity, and the lasting influence sport can have when done intentionally."
        />

        <PageSection>
          <div className="mx-auto max-w-3xl">
            <SectionTitle className="mb-6">The Need.</SectionTitle>
            <p className="apple-body">
              Youth sports have the power to shape confidence, discipline, and opportunity, but access to quality programming is uneven.
            </p>
            <p className="apple-body mt-4">Many young people are sidelined by:</p>
            <div className="mt-6 space-y-3">
              {theNeed.map((item, index) => (
                <div key={index} className="apple-list-item">
                  <span className="apple-body">{item}</span>
                </div>
              ))}
            </div>
            <p className="apple-body mt-6">
              As a result, talent goes underdeveloped and youth miss opportunities to grow through sport.
            </p>
          </div>
        </PageSection>

        <PageSection alt>
          <div className="mx-auto max-w-3xl">
            <SectionTitle className="mb-6">Our Response.</SectionTitle>
            <p className="apple-body">
              Strides Over Sidelines addresses these gaps by re-centering sport as a tool for development, not just competition.
            </p>
            <p className="apple-body mt-4">Our programs combine:</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ourResponse.map((item, index) => (
                <div key={index} className="apple-list-item">
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="apple-body mt-8">
              This approach supports youth as athletes and as individuals.
            </p>
          </div>
        </PageSection>

        <PageSection>
          <div className="mx-auto max-w-3xl">
            <SectionTitle className="mb-6">What Impact Looks Like.</SectionTitle>
            <p className="apple-body">
              SOS defines impact by growth, consistency, and engagement. We focus on:
            </p>
            <ul className="mt-8 space-y-4">
              {impactIndicators.map((item, index) => (
                <li key={index} className="apple-body flex items-start gap-3">
                  <span className="text-primary">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg font-medium text-foreground">
              Our goal is long-term development, not short-term wins.
            </p>
          </div>
        </PageSection>

        <PageSection alt>
          <div className="mx-auto max-w-3xl">
            <SectionTitle className="mb-6">Beyond the Individual.</SectionTitle>
            <p className="apple-body">
              SOS also aims to influence the broader youth sports ecosystem. By modeling a mentorship-driven, development-first approach, we seek to:
            </p>
            <div className="mt-8 space-y-4">
              {systemChange.map((item, index) => (
                <div key={index} className="apple-list-item">
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="apple-body mt-8">
              Change at the system level starts with intentional programs on the ground.
            </p>
          </div>
        </PageSection>

        <PageSection>
          <div className="mx-auto max-w-3xl">
            <SectionTitle className="mb-6">Measuring Impact.</SectionTitle>
            <p className="apple-body">
              As SOS grows, we are building systems to track and evaluate outcomes, including:
            </p>
            <ul className="mt-8 space-y-3">
              {measuringImpact.map((item, index) => (
                <li key={index} className="apple-body flex items-start gap-3">
                  <span className="text-primary">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="apple-body mt-6">
              These insights guide program improvement and accountability.
            </p>
          </div>
        </PageSection>

        <PageSection alt>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle centered className="mb-6">Our Commitment.</SectionTitle>
            <p className="apple-body">
              We are committed to transparency, learning, and continuous improvement.
            </p>
            <p className="mt-4 text-xl font-medium text-foreground">
              Impact at SOS is not measured by trophies, but by growth, opportunity, and the lasting influence sport can have when done intentionally.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/2026-703-warriors">Join the 703 Warriors 2026</Link>
              </Button>
            </div>
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
