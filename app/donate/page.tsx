import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Clock, Mail, CheckCircle } from "lucide-react"

const impactAreas = [
  "Program Delivery — Coaching, curriculum materials, and student support",
  "Mental Performance Education — Sports psychology workshops and confidence-building tools",
  "Access and Equity — Subsidies that keep programming affordable for all families",
  "Equipment and Field Needs — Balls, cones, goals, first aid supplies, and field access",
  "Infrastructure and Expansion — Outcome tracking and groundwork for SOS growth",
]

const otherWays = [
  "Volunteer as a mentor or coach",
  "Partner with SOS as a school or community organization",
  "Invite SOS to speak or host a workshop",
]

export default function DonatePage() {
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
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Support Our Mission
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Your support helps Strides Over Sidelines deliver high-quality soccer training, mental performance education, and mentorship to underserved youth across the Washington, DC metro area.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-semibold uppercase tracking-wider">Coming Soon</span>
              </div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Online Donations Launching Soon
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We are currently setting up our donation platform to ensure a secure and seamless giving experience. Online donations will be available shortly.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                In the meantime, if you would like to support Strides Over Sidelines, please reach out to us directly and we will be happy to discuss how you can contribute.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <a href="mailto:Stridesoversidelines@gmail.com?subject=[SOS] Donation Inquiry">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Us to Donate
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What Donations Will Support */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center">
                What Your Support Makes Possible
              </h2>
              <div className="mt-12 space-y-4">
                {impactAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Ways to Support */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Other Ways to Support
              </h2>
              <p className="mt-4 text-muted-foreground">
                Financial contributions are not the only way to make an impact.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-xl">
              <ul className="space-y-4">
                {otherWays.map((way, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{way}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <Button asChild>
                  <Link href="/get-involved">Get Involved</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Thank You CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Thank You
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Thank you for your interest in investing in young people and expanding access to opportunity. We look forward to opening donations soon.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
