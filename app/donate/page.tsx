import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, CheckCircle } from "lucide-react"
import { DonationForm } from "./donation-form"
import { ZelleDonationCard } from "./zelle-donation-card"

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

        {/* Donation Form */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-lg space-y-10">
              <DonationForm />
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden>
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs font-medium uppercase tracking-wider">
                  <span className="bg-background px-3 text-muted-foreground">
                    Or donate with Zelle
                  </span>
                </div>
              </div>
              <ZelleDonationCard />
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
                Thank you for your interest in investing in young people and expanding access to opportunity. Every contribution makes a difference.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
