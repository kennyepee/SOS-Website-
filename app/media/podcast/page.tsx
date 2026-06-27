import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import { BackLink } from "@/components/layout/back-link"
import Link from "next/link"

export const metadata = {
  title: "Podcast | Strides Over Sidelines",
  description: "The SOS Podcast - conversations with athletes, coaches, mentors, and leaders.",
}

const podcastTopics = [
  "Lessons from high-level sport",
  "Mentorship and leadership development",
  "Mental performance and resilience",
  "Changing how youth sports are approached",
]

export default function PodcastPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageSection containerClassName="max-w-4xl">
          <BackLink href="/media" label="Back to Media" />
        </PageSection>

        <PageHero
          title="The SOS Podcast."
          subtitle="Conversations with athletes, coaches, mentors, and leaders who believe in sport as a platform for growth and opportunity."
        />

        <PageSection>
          <div className="mx-auto max-w-3xl">
            <SectionTitle as="h3">Episodes Explore</SectionTitle>
            <ul className="mt-6 space-y-4">
              {podcastTopics.map((item, index) => (
                <li key={index} className="apple-list-item">
                  <span className="apple-body">{item}</span>
                </li>
              ))}
            </ul>
            <p className="apple-body mt-8">
              The podcast amplifies voices aligned with the SOS mission.
            </p>
          </div>
        </PageSection>

        <PageSection alt>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle centered>Listen Now.</SectionTitle>
            <p className="mt-4 apple-body">
              Episodes coming soon. Follow us to be notified when new episodes drop.
            </p>
            <div className="mt-10 apple-highlight">
              <p className="apple-body">Episodes launching soon</p>
            </div>
          </div>
        </PageSection>

        <PageSection>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle centered>Be a Guest.</SectionTitle>
            <p className="mt-6 apple-body">
              Have a story to share? We'd love to feature you on the podcast.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/get-involved/podcast">Apply to Be a Guest</Link>
              </Button>
            </div>
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
