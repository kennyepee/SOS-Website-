import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, ArrowRight, Trophy, Users, Brain, GraduationCap, Heart } from "lucide-react"

export const metadata = {
  title: "Our Mission | Strides Over Sidelines",
  description: "Our mission is to empower youth and elevate sport through mentorship-driven, development-focused programming.",
}

const missionPillars = [
  {
    icon: Trophy,
    title: "Build confidence, discipline, and accountability",
  },
  {
    icon: Users,
    title: "Provide access to high-quality training and mentorship",
  },
  {
    icon: Brain,
    title: "Develop mental performance and leadership skills",
  },
  {
    icon: GraduationCap,
    title: "Expose participants to college and professional pathways",
  },
  {
    icon: Heart,
    title: "Promote a healthier, more intentional approach to youth sports",
  },
]

export default function MissionPage() {
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
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Our Mission
              </h1>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-2xl lg:text-3xl font-serif font-semibold text-foreground leading-relaxed">
                Our mission is to empower youth and elevate sport through mentorship-driven, development-focused programming.
              </p>
            </div>
          </div>
        </section>

        {/* How We Do It */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                We Use Soccer as a Vehicle To:
              </h2>
            </div>

            <div className="mx-auto max-w-3xl space-y-4">
              {missionPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <p className="text-lg font-medium text-foreground">{pillar.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beyond Competition */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Through this work, SOS aims to influence how sport is used as a platform for growth, not just competition.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild>
                  <Link href="/about/approach">
                    Our Approach
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/impact">See Our Impact</Link>
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
