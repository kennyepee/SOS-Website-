import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import Link from "next/link"

export const metadata = {
  title: "Get Involved | Strides Over Sidelines",
  description: "Get involved with SOS through mentorship, workshops, or podcast appearances.",
}

const opportunities = [
  {
    title: "Mentorship",
    description: "Mentors are central to the SOS model. At SOS, mentors are current or former high-level soccer players who understand the demands, discipline, and lessons that come with competitive sport.",
    href: "/get-involved/mentorship",
    cta: "Become a Mentor",
  },
  {
    title: "Workshops",
    description: "SOS workshops provide participants with exposure to skills and perspectives beyond the field. Lead a workshop on leadership, mental performance, career readiness, or life skills.",
    href: "/get-involved/workshops",
    cta: "Host a Workshop",
  },
  {
    title: "Podcast",
    description: "The SOS Podcast features conversations at the intersection of sport, mentorship, and personal growth. Share your story and insights with our audience.",
    href: "/get-involved/podcast",
    cta: "Be a Guest",
  },
]

export default function GetInvolvedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Get Involved."
          subtitle="Strides Over Sidelines is built by people who believe sport can be a platform for growth, leadership, and opportunity. Whether you are a former athlete, coach, or supporter, there are meaningful ways to contribute to our mission."
        />

        <PageSection>
          <div className="space-y-12">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="mx-auto max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  {opportunity.title}
                </h2>
                <p className="mt-4 apple-body">{opportunity.description}</p>
                <div className="mt-6">
                  <Button asChild>
                    <Link href={opportunity.href}>{opportunity.cta}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </PageSection>

        <PageSection alt>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle centered>Questions?</SectionTitle>
            <p className="mt-6 apple-body">
              Not sure which opportunity is right for you? Reach out and we'll help you find the best way to contribute.
            </p>
            <div className="mt-10">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
