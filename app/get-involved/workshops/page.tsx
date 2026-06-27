"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import { BackLink } from "@/components/layout/back-link"
import { useState } from "react"

const workshopTopics = [
  "Leadership and confidence",
  "Mental performance and mindset",
  "College and career readiness",
  "Health, wellness, and discipline",
  "Life skills through sport",
]

export default function WorkshopsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    topic: "",
    bio: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent('[SOS] Workshop Host Interest')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization || 'N/A'}\n\nProposed Workshop Topic:\n${formData.topic}\n\nBio:\n${formData.bio}`
    )

    window.location.href = `mailto:Stridesoversidelines@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageSection containerClassName="max-w-4xl">
          <BackLink href="/get-involved" label="Back to Get Involved" />
        </PageSection>

        <PageHero
          title="Lead a Workshop."
          subtitle="SOS workshops provide participants with exposure to skills and perspectives beyond the field."
        />

        <PageSection>
          <div className="mx-auto max-w-3xl">
            <SectionTitle as="h3">Workshop Topics</SectionTitle>
            <p className="mt-4 apple-body">Workshops may focus on:</p>
            <ul className="mt-6 space-y-4">
              {workshopTopics.map((item, index) => (
                <li key={index} className="apple-list-item">
                  <span className="apple-body">{item}</span>
                </li>
              ))}
            </ul>
            <p className="apple-body mt-8">
              Workshops are led by professionals, former athletes, and community leaders who want to contribute expertise in a structured setting.
            </p>
          </div>
        </PageSection>

        <PageSection alt>
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <SectionTitle centered>Host a Workshop.</SectionTitle>
              <p className="mt-4 apple-body">
                Share your expertise with our participants.
              </p>
            </div>

            {submitted ? (
              <div className="apple-highlight">
                <h3 className="font-semibold text-lg text-foreground">Almost There!</h3>
                <p className="mt-2 apple-body">
                  Your email app should have opened with your interest pre-filled. Please confirm and hit send in your email app to complete your submission. We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization (Optional)</Label>
                  <Input
                    id="organization"
                    placeholder="Your organization or affiliation"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="topic">Proposed Workshop Topic</Label>
                  <Textarea
                    id="topic"
                    placeholder="Describe the workshop you'd like to lead..."
                    rows={4}
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Short Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about your background and expertise..."
                    rows={4}
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Interest
                </Button>
              </form>
            )}
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
