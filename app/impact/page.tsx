import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TrendingUp, AlertTriangle, Heart, Users, Brain, GraduationCap, Target, CheckCircle, BarChart3 } from "lucide-react"

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
  { icon: Trophy, text: "Structured, high-quality soccer training" },
  { icon: Users, text: "Mentorship from former athletes and professionals" },
  { icon: Brain, text: "Mental performance and leadership development" },
  { icon: GraduationCap, text: "Exposure to college and professional pathways" },
  { icon: Heart, text: "Tiered access models that prioritize inclusion" },
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

import { Trophy } from "lucide-react"

export default function ImpactPage() {
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
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Impact
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Measuring success by growth, opportunity, and the lasting influence sport can have when done intentionally.
              </p>
            </div>
          </div>
        </section>

        {/* The Need */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  The Need
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Youth sports have the power to shape confidence, discipline, and opportunity, but access to quality programming is uneven.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Many young people are sidelined by:
              </p>
              <div className="mt-6 space-y-3">
                {theNeed.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted">
                    <AlertTriangle className="h-5 w-5 shrink-0 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-lg text-muted-foreground">
                As a result, talent goes underdeveloped and youth miss opportunities to grow through sport.
              </p>
            </div>
          </div>
        </section>

        {/* Our Response */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Heart className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Our Response
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Strides Over Sidelines addresses these gaps by re-centering sport as a tool for development, not just competition.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Our programs combine:
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ourResponse.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                    <item.icon className="h-6 w-6 shrink-0 text-primary" />
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg text-muted-foreground">
                This approach supports youth as athletes and as individuals.
              </p>
            </div>
          </div>
        </section>

        {/* What Impact Looks Like */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  What Impact Looks Like
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SOS defines impact by growth, consistency, and engagement. We focus on:
              </p>
              <div className="mt-8 space-y-4">
                {impactIndicators.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-muted-foreground text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg font-medium text-foreground">
                Our goal is long-term development, not short-term wins.
              </p>
            </div>
          </div>
        </section>

        {/* Beyond the Individual */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Beyond the Individual
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                SOS also aims to influence the broader youth sports ecosystem. By modeling a mentorship-driven, development-first approach, we seek to:
              </p>
              <div className="mt-8 space-y-4">
                {systemChange.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg text-muted-foreground">
                Change at the system level starts with intentional programs on the ground.
              </p>
            </div>
          </div>
        </section>

        {/* Measuring Impact */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Measuring Impact
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As SOS grows, we are building systems to track and evaluate outcomes, including:
              </p>
              <div className="mt-8 space-y-3">
                {measuringImpact.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground">
                These insights guide program improvement and accountability.
              </p>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Our Commitment
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed">
                We are committed to transparency, learning, and continuous improvement.
              </p>
              <p className="mt-4 text-xl text-primary-foreground font-medium">
                Impact at SOS is not measured by trophies, but by growth, opportunity, and the lasting influence sport can have when done intentionally.
              </p>
              <div className="mt-10">
                <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/summer-cohort">Join the 2026 Cohort</Link>
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
