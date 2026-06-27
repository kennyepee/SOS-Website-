import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"

export const metadata = {
  title: "SOS × 703 Warriors | Strides Over Sidelines",
  description:
    "SOS partners with 703 Warriors to bring mental performance and mental health programming to youth athletes in Arlington, VA. August–September 2026.",
}

const quickFacts = [
  { label: "Partner", value: "703 Warriors" },
  { label: "Location", value: "Arlington, VA" },
  { label: "Dates", value: "August–September 2026" },
  { label: "Focus", value: "Mental performance & mental health" },
]

export default function Warriors703Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="SOS × 703 Warriors"
          title="Mental Performance Program."
          subtitle="Strides Over Sidelines is partnering with 703 Warriors to bring mental performance and mental health programming to youth athletes in Arlington, VA. Running August through September 2026, this inaugural program combines on-field soccer training with in-person mentorship — giving young players the tools to succeed in the sport and in life."
        >
          <div className="mt-10 flex justify-center">
            <Image
              src="/images/partners/703-warriors.png"
              alt="703 Warriors"
              width={140}
              height={140}
              className="h-28 w-auto object-contain md:h-32"
            />
          </div>
        </PageHero>

        <PageSection alt>
          <div className="mx-auto max-w-3xl">
            <SectionTitle>Quick facts.</SectionTitle>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="apple-nav-card">
                  <h3 className="font-semibold text-foreground">{fact.label}</h3>
                  <p className="mt-1 apple-body">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </PageSection>

        <PageSection>
          <div className="mx-auto max-w-3xl">
            <SectionTitle>About the program.</SectionTitle>
            <p className="mt-6 apple-body">
              At the core of this program is a curriculum built around mental performance and mental health — helping young athletes develop the confidence, focus, and resilience that carry over from the field into everyday life. Alongside that focus, participants receive hands-on soccer skills training, life skills coaching, and consistent in-person mentorship from the SOS team.
            </p>
            <div className="apple-highlight mt-10">
              <p className="text-lg font-medium text-foreground">
                Our goal is simple: equip these kids with tools that serve them well beyond the game.
              </p>
            </div>
          </div>
        </PageSection>

        <PageSection alt>
          <div className="mx-auto max-w-3xl text-center">
            <p className="apple-body">
              Questions about the program? Contact{" "}
              <a href="mailto:Stridesoversidelines@gmail.com" className="apple-link">
                Stridesoversidelines@gmail.com
              </a>
            </p>
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
