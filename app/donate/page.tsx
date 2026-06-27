import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import Link from "next/link"
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
        <PageHero
          title="Support Our Mission."
          subtitle="Your support helps Strides Over Sidelines deliver high-quality soccer training, mental performance education, and mentorship to underserved youth across the Washington, DC metro area."
        />

        <PageSection>
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
        </PageSection>

        <PageSection alt>
          <div className="mx-auto max-w-3xl">
            <SectionTitle centered className="mb-12">
              What Your Support Makes Possible
            </SectionTitle>
            <div className="space-y-4">
              {impactAreas.map((area, index) => (
                <div key={index} className="apple-list-item">
                  <span className="apple-body">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </PageSection>

        <PageSection>
          <div className="mx-auto max-w-2xl text-center">
            <SectionTitle centered>Other Ways to Support</SectionTitle>
            <p className="mt-4 apple-body">
              Financial contributions are not the only way to make an impact.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-xl">
            <ul className="space-y-4">
              {otherWays.map((way, index) => (
                <li key={index} className="apple-list-item">
                  <span className="apple-body">{way}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <Button asChild>
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </PageSection>

        <PageSection alt>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle centered>Thank You.</SectionTitle>
            <p className="mt-6 apple-body">
              Thank you for your interest in investing in young people and expanding access to opportunity. Every contribution makes a difference.
            </p>
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
