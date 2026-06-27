import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata = {
  title: "Our Mission | Strides Over Sidelines",
  description: "Our mission is to empower youth and elevate sport through mentorship-driven, development-focused programming.",
}

const missionPillars = [
  "Build confidence, discipline, and accountability",
  "Provide access to high-quality training and mentorship",
  "Develop mental performance and leadership skills",
  "Expose participants to college and professional pathways",
  "Promote a healthier, more intentional approach to youth sports",
]

export default function MissionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHero title="Our Mission." />

        <PageSection>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-2xl font-semibold tracking-tight text-foreground leading-relaxed lg:text-3xl">
              Our mission is to empower youth and elevate sport through mentorship-driven, development-focused programming.
            </p>
          </div>
        </PageSection>

        <PageSection alt>
          <div className="mx-auto max-w-3xl">
            <SectionTitle centered className="mb-12">
              We Use Soccer as a Vehicle To:
            </SectionTitle>

            <div className="space-y-4">
              {missionPillars.map((pillar, index) => (
                <div key={index} className="apple-list-item">
                  <p className="text-lg font-medium text-foreground">{pillar}</p>
                </div>
              ))}
            </div>
          </div>
        </PageSection>

        <PageSection>
          <div className="mx-auto max-w-3xl text-center">
            <p className="apple-body text-xl">
              Through this work, SOS aims to influence how sport is used as a platform for growth, not just competition.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild>
                <Link href="/about/approach">Our Approach</Link>
              </Button>
              <Link href="/impact" className="apple-link inline-flex items-center gap-1">
                See Our Impact
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
