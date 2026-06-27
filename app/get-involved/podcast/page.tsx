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
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useState } from "react"

const podcastHighlights = [
  "Current and former athletes",
  "Coaches and mentors",
  "Leaders using sport as a platform for development",
  "Individuals shaping the future of youth sports",
]

export default function PodcastGuestPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    topic: "",
    bio: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent('[SOS Podcast] Guest Interest')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTitle/Role: ${formData.title}\n\nTopics to Discuss:\n${formData.topic}\n\nBio:\n${formData.bio}`
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
          title="Share the Story."
          subtitle="The SOS Podcast features conversations at the intersection of sport, mentorship, and personal growth."
        />

        <PageSection>
          <div className="mx-auto max-w-3xl">
            <p className="apple-body">We highlight:</p>
            <ul className="mt-6 space-y-4">
              {podcastHighlights.map((item, index) => (
                <li key={index} className="apple-list-item">
                  <span className="apple-body">{item}</span>
                </li>
              ))}
            </ul>
            <p className="apple-body mt-8">
              The podcast amplifies voices that align with the SOS mission.
            </p>
            <div className="mt-8">
              <Link href="/media/podcast" className="apple-link inline-flex items-center gap-1">
                Listen to the Podcast
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </PageSection>

        <PageSection alt>
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <SectionTitle centered>Be a Guest.</SectionTitle>
              <p className="mt-4 apple-body">
                Share your story on the SOS Podcast.
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
                  <Label htmlFor="title">Title / Role</Label>
                  <Input
                    id="title"
                    placeholder="Your professional title or role"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="topic">What would you like to discuss?</Label>
                  <Textarea
                    id="topic"
                    placeholder="Topics you'd like to explore on the podcast..."
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
                    placeholder="Tell us about yourself..."
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
