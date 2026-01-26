"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { Heart, CreditCard, Building2, Users, Dribbble, Brain, Shield, Package, Layers, CheckCircle } from "lucide-react"

const donationAmounts = [25, 50, 100, 250, 500]

const impactAreas = [
  {
    icon: Dribbble,
    title: "Program Delivery",
    description: "Coaching, curriculum materials, and student support for cohort-based programming",
  },
  {
    icon: Brain,
    title: "Mental Performance Education",
    description: "Sports psychology workshops and age-appropriate tools for confidence, resilience, and goal setting",
  },
  {
    icon: Users,
    title: "Access and Equity",
    description: "Subsidies that keep high-quality programming affordable for low-income families",
  },
  {
    icon: Shield,
    title: "Safe Operations",
    description: "Insurance, permits, background checks, and required program infrastructure",
  },
  {
    icon: Package,
    title: "Equipment and Field Needs",
    description: "Balls, pinnies, cones, goals, first aid supplies, and field access",
  },
  {
    icon: Layers,
    title: "Infrastructure and Expansion",
    description: "Curriculum codification, coach training, outcome tracking, and groundwork for SOS hubs in additional communities",
  },
]

const otherWays = [
  "Volunteer as a mentor or coach",
  "Partner with SOS as a school or community organization",
  "Invite SOS to speak or host a workshop",
]

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(50)
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const amount = selectedAmount === "custom" ? customAmount : selectedAmount
    alert(`Thank you for your ${donationType} donation of $${amount}! This is a demo - no payment will be processed.`)
  }

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
                Your support helps Strides Over Sidelines (SOS) deliver high-quality soccer training, mental performance education, academic support, and mentorship to underserved youth across the Washington, D.C. metropolitan area.
              </p>
              <p className="mt-4 text-background/80">
                Every contribution expands access, strengthens programming, and helps more students and families navigate opportunity with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Give */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ways to Give
              </h2>
            </div>

            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Online Donation */}
              <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Donate Online</h3>
                <p className="mt-3 text-primary-foreground/80 text-sm leading-relaxed">
                  Make a secure online donation to support our programs and mission.
                </p>
                <Button asChild className="mt-6 w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="#">Donate Now</Link>
                </Button>
              </div>

              {/* Check Donation */}
              <div className="rounded-2xl bg-card p-8 border border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <Building2 className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">Donate by Check</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  Payable to: Strides Over Sidelines (SOS)
                </p>
                <p className="mt-2 text-muted-foreground text-sm">
                  Mail to our Washington, D.C. office
                </p>
                <Button asChild variant="outline" className="mt-6 w-full bg-transparent">
                  <Link href="/contact">Get Mailing Address</Link>
                </Button>
              </div>

              {/* Corporate */}
              <div className="rounded-2xl bg-card p-8 border border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <Users className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">Corporate Sponsorships</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  Sponsor a cohort, workshop, or equipment needs. Many employers also match donations.
                </p>
                <Button asChild variant="outline" className="mt-6 w-full bg-transparent">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl">
              <h2 className="font-serif text-2xl font-bold text-foreground text-center">Make a Donation</h2>
              <p className="mt-2 text-muted-foreground text-center">
                Choose an amount and donation type below.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-card p-8 rounded-2xl border border-border">
                {/* Donation Type */}
                <div>
                  <label className="text-sm font-medium text-foreground">Donation Type</label>
                  <div className="mt-2 grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setDonationType("one-time")}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                        donationType === "one-time"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-foreground hover:border-primary/50"
                      }`}
                    >
                      One-Time
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationType("monthly")}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                        donationType === "monthly"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-foreground hover:border-primary/50"
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div>
                  <label className="text-sm font-medium text-foreground">Select Amount</label>
                  <div className="mt-2 grid grid-cols-3 gap-3">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setSelectedAmount(amount)}
                        className={`py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                          selectedAmount === amount
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-foreground hover:border-primary/50"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setSelectedAmount("custom")}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                        selectedAmount === "custom"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-foreground hover:border-primary/50"
                      }`}
                    >
                      Custom
                    </button>
                  </div>
                  {selectedAmount === "custom" && (
                    <div className="mt-4">
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <input
                          type="number"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          placeholder="Enter amount"
                          className="w-full pl-8 pr-4 py-3 rounded-lg border border-input bg-background text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                          min="1"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Heart className="mr-2 h-4 w-4" />
                  Donate {selectedAmount === "custom" ? (customAmount ? `$${customAmount}` : "") : `$${selectedAmount}`} {donationType === "monthly" ? "Monthly" : ""}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* What Your Donation Supports */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What Your Donation Supports
              </h2>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {impactAreas.map((area) => (
                <div key={area.title} className="flex gap-4 p-6 rounded-xl bg-card border border-border">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <area.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{area.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Transparency and Accountability
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                SOS is committed to responsible stewardship of donor funds. We prioritize direct program impact, track outcomes, and continuously improve how we deliver youth development pathways.
              </p>
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
                  <Link href="/contact">Get Involved</Link>
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
                Thank you for investing in young people and expanding access to opportunity.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
