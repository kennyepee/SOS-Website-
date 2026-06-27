import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata = {
  title: "Our Story | Strides Over Sidelines",
  description: "Learn about the founding story of Strides Over Sidelines and our commitment to re-centering sport as a tool for personal growth.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Our Story."
          subtitle="A simple truth: talent is everywhere, but access and support are not."
        />

        <PageSection>
          <div className="mx-auto max-w-3xl">
            <p className="apple-body">
              Strides Over Sidelines was founded on a simple truth: <strong className="text-foreground">talent is everywhere, but access and support are not.</strong>
            </p>

            <p className="apple-body mt-6">
              Growing up in competitive sports environments, our leadership saw how opportunity in youth sports is often shaped more by resources, exposure, and networks than by effort or ability. Too many young people are sidelined not because they lack potential, but because the system around them fails to support their development.
            </p>

            <p className="apple-body mt-6">
              At the same time, youth sports have increasingly emphasized outcomes over growth. Early specialization, pay-to-play models, and performance-only metrics have narrowed the purpose of sport, often at the expense of confidence, mental health, and long-term development.
            </p>

            <div className="apple-highlight">
              <p className="text-xl font-semibold text-foreground">
                SOS was created to challenge that model.
              </p>
            </div>

            <p className="apple-body">
              What began as a commitment to expand access to quality soccer training evolved into a broader mission: to re-center sport as a tool for personal growth, leadership, and opportunity. We believe sport should develop people first and athletes second.
            </p>

            <p className="apple-body mt-6">
              Strides Over Sidelines exists not only to support individual youth, but to help shift how sports programs think about development, mentorship, and impact.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
              <Button asChild>
                <Link href="/about/mission">Read Our Mission</Link>
              </Button>
              <Link href="/about/approach" className="apple-link inline-flex items-center gap-1">
                Our Approach
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </PageSection>

        <PageSection alt>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/about/mission" className="apple-nav-card group">
              <h3 className="text-xl font-semibold text-foreground">Mission</h3>
              <p className="mt-3 apple-body">Our purpose and what drives us to empower youth through sport.</p>
              <span className="mt-4 inline-flex items-center gap-1 apple-link">
                Learn more
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
            <Link href="/about/approach" className="apple-nav-card group">
              <h3 className="text-xl font-semibold text-foreground">Our Approach</h3>
              <p className="mt-3 apple-body">How we structure our programs for meaningful, lasting impact.</p>
              <span className="mt-4 inline-flex items-center gap-1 apple-link">
                Learn more
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
            <Link href="/team/staff" className="apple-nav-card group">
              <h3 className="text-xl font-semibold text-foreground">Our Team</h3>
              <p className="mt-3 apple-body">Meet the people driving the SOS mission forward.</p>
              <span className="mt-4 inline-flex items-center gap-1 apple-link">
                Learn more
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
