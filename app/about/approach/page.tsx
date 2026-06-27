import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata = {
  title: "Our Approach | Strides Over Sidelines",
  description: "We believe meaningful change happens when development is intentional. Learn about the SOS model.",
}

const approachPrinciples = [
  {
    title: "Small, structured cohorts",
    description: "Intimate group sizes that allow for personalized attention and meaningful relationships.",
  },
  {
    title: "Consistent training paired with mentorship",
    description: "Regular, reliable programming that builds habits and trust over time.",
  },
  {
    title: "Coaches, former athletes, and professionals as role models",
    description: "Mentors who have walked the path and can guide with experience and authenticity.",
  },
  {
    title: "Mental performance and leadership alongside physical training",
    description: "Developing the whole person, not just the athlete.",
  },
  {
    title: "Long-term growth over short-term results",
    description: "Measuring success by development and opportunity, not just wins.",
  },
]

export default function ApproachPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Our Approach."
          subtitle="We believe meaningful change happens when development is intentional."
        />

        <PageSection>
          <div className="mx-auto max-w-4xl">
            <SectionTitle centered className="mb-16">
              Our Model Emphasizes
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {approachPrinciples.map((principle, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {principle.title}
                  </h3>
                  <p className="mt-3 apple-body">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </PageSection>

        <PageSection alt>
          <div className="mx-auto max-w-3xl text-center">
            <p className="apple-body text-xl lg:text-2xl">
              By holding ourselves to these principles, SOS works to create impact at both the individual level and within the broader sports community.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild>
                <Link href="/2026-703-warriors">703 Warriors 2026</Link>
              </Button>
              <Link href="/team/staff" className="apple-link inline-flex items-center gap-1">
                Meet Our Team
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
