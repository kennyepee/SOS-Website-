import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Our Story | Strides Over Sidelines",
  description: "Learn about the founding story of Strides Over Sidelines and our commitment to re-centering sport as a tool for personal growth.",
}

export default function AboutPage() {
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
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Our Story
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                A simple truth: talent is everywhere, but access and support are not.
              </p>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Strides Over Sidelines was founded on a simple truth: <strong className="text-foreground">talent is everywhere, but access and support are not.</strong>
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  Growing up in competitive sports environments, our leadership saw how opportunity in youth sports is often shaped more by resources, exposure, and networks than by effort or ability. Too many young people are sidelined not because they lack potential, but because the system around them fails to support their development.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  At the same time, youth sports have increasingly emphasized outcomes over growth. Early specialization, pay-to-play models, and performance-only metrics have narrowed the purpose of sport, often at the expense of confidence, mental health, and long-term development.
                </p>

                <div className="my-12 p-8 rounded-2xl bg-primary/5 border border-primary/10">
                  <p className="text-xl font-serif font-semibold text-foreground text-center">
                    SOS was created to challenge that model.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  What began as a commitment to expand access to quality soccer training evolved into a broader mission: to re-center sport as a tool for personal growth, leadership, and opportunity. We believe sport should develop people first and athletes second.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  Strides Over Sidelines exists not only to support individual youth, but to help shift how sports programs think about development, mentorship, and impact.
                </p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/about/mission">
                    Read Our Mission
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/about/approach">Our Approach</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Cards */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/about/mission" className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all">
                <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">Mission</h3>
                <p className="mt-3 text-muted-foreground">Our purpose and what drives us to empower youth through sport.</p>
                <span className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="/about/approach" className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all">
                <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">Our Approach</h3>
                <p className="mt-3 text-muted-foreground">How we structure our programs for meaningful, lasting impact.</p>
                <span className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="/team/staff" className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all">
                <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">Our Team</h3>
                <p className="mt-3 text-muted-foreground">Meet the people driving the SOS mission forward.</p>
                <span className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
