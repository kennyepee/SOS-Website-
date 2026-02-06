import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Compass, ArrowRight, Users, Clock, GraduationCap, Brain, TrendingUp } from "lucide-react"

export const metadata = {
  title: "Our Approach | Strides Over Sidelines",
  description: "We believe meaningful change happens when development is intentional. Learn about the SOS model.",
}

const approachPrinciples = [
  {
    icon: Users,
    title: "Small, structured cohorts",
    description: "Intimate group sizes that allow for personalized attention and meaningful relationships.",
  },
  {
    icon: Clock,
    title: "Consistent training paired with mentorship",
    description: "Regular, reliable programming that builds habits and trust over time.",
  },
  {
    icon: GraduationCap,
    title: "Coaches, former athletes, and professionals as role models",
    description: "Mentors who have walked the path and can guide with experience and authenticity.",
  },
  {
    icon: Brain,
    title: "Mental performance and leadership alongside physical training",
    description: "Developing the whole person, not just the athlete.",
  },
  {
    icon: TrendingUp,
    title: "Long-term growth over short-term results",
    description: "Measuring success by development and opportunity, not just wins.",
  },
]

export default function ApproachPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <Compass className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Our Approach
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                We believe meaningful change happens when development is intentional.
              </p>
            </div>
          </div>
        </section>

        {/* Approach Principles */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Model Emphasizes
              </h2>
            </div>

            <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
              {approachPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <principle.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-bold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Statement */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xl lg:text-2xl text-primary-foreground leading-relaxed">
                By holding ourselves to these principles, SOS works to create impact at both the individual level and within the broader sports community.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/summer-cohort">
                    2026 Summer Cohort
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  <Link href="/team/staff">Meet Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
