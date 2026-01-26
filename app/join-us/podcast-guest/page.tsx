"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useState } from "react"
import { Headphones, ArrowLeft, Mic2, Radio, Users, Clock, Send, MessageCircle, Sparkles } from "lucide-react"

const podcastTopics = [
  "Youth Development & Education",
  "Sports & Athletic Training",
  "Mental Performance & Psychology",
  "Community Building & Social Impact",
  "Coaching & Leadership",
  "Personal Journey & Overcoming Challenges",
  "Parenting & Family Support",
  "Career & Professional Development",
  "Health & Wellness",
  "Other",
]

const episodeFormats = [
  "Solo Interview (30-45 min)",
  "Panel Discussion",
  "Q&A / AMA Style",
  "Storytelling / Narrative",
  "How-To / Educational",
]

export default function PodcastGuestPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    organization: "",
    topic: "",
    format: "",
    story: "",
    links: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Link
                href="/join-us"
                className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Join Us
              </Link>
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Be a Podcast Guest
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Join the SOS podcast and share your insights on youth development, sports, education, or community building with our growing audience.
              </p>
            </div>
          </div>
        </section>

        {/* About the Podcast */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  About the SOS Podcast
                </h2>
                <div className="mt-6 space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The Strides Over Sidelines podcast features conversations with athletes, coaches, educators, and community leaders who are passionate about youth development.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We explore topics ranging from athletic training and mental performance to education, mentorship, and the challenges facing underserved youth today.
                  </p>
                </div>

                <div className="mt-8">
                  <Button asChild>
                    <Link href="/podcast">Listen to Episodes</Link>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Radio className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">Growing Audience</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Reach families, educators, and youth advocates</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Mic2 className="h-8 w-8 text-accent" />
                  <h3 className="mt-4 font-semibold text-foreground">Professional Setup</h3>
                  <p className="mt-2 text-sm text-muted-foreground">High-quality recording and production</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <MessageCircle className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">Meaningful Conversations</h3>
                  <p className="mt-2 text-sm text-muted-foreground">In-depth discussions on topics that matter</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Sparkles className="h-8 w-8 text-accent" />
                  <h3 className="mt-4 font-semibold text-foreground">Amplify Your Voice</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Share your story and expertise</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What to Expect
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We make the process easy and enjoyable for our guests.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center p-8 rounded-xl bg-card border border-border">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Pre-Interview Call</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We'll have a brief call to discuss topics, format, and answer any questions you have.
                </p>
              </div>
              <div className="text-center p-8 rounded-xl bg-card border border-border">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mic2 className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Recording Session</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  In-person in D.C. or remote via video call. Sessions typically run 30-45 minutes.
                </p>
              </div>
              <div className="text-center p-8 rounded-xl bg-card border border-border">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Clock className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Production & Release</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We handle editing and production. You'll receive the episode before it goes live.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Apply to Be a Guest
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Tell us about yourself and what you'd like to discuss.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-primary/10 text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">Application Submitted!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for your interest in being a podcast guest. We'll review your submission and be in touch soon.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: "", email: "", phone: "", title: "", organization: "", topic: "", format: "", story: "", links: "" })
                    }}
                    variant="outline"
                    className="mt-4"
                  >
                    Submit Another Application
                  </Button>
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

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="(555) 555-5555"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Title / Role</Label>
                      <Input
                        id="title"
                        placeholder="Your professional title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization / Company (Optional)</Label>
                    <Input
                      id="organization"
                      placeholder="Where you work or your affiliation"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="topic">Primary Topic</Label>
                      <Select
                        value={formData.topic}
                        onValueChange={(value) => setFormData({ ...formData, topic: value })}
                      >
                        <SelectTrigger id="topic">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          {podcastTopics.map((topic) => (
                            <SelectItem key={topic} value={topic}>
                              {topic}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="format">Preferred Format</Label>
                      <Select
                        value={formData.format}
                        onValueChange={(value) => setFormData({ ...formData, format: value })}
                      >
                        <SelectTrigger id="format">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          {episodeFormats.map((format) => (
                            <SelectItem key={format} value={format}>
                              {format}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="story">Your Story & What You'd Like to Discuss</Label>
                    <Textarea
                      id="story"
                      placeholder="Tell us about yourself, your background, and what topics you'd like to explore on the podcast..."
                      rows={5}
                      value={formData.story}
                      onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="links">Relevant Links (Optional)</Label>
                    <Textarea
                      id="links"
                      placeholder="Share links to your website, social media, previous podcast appearances, or any other relevant content..."
                      rows={3}
                      value={formData.links}
                      onChange={(e) => setFormData({ ...formData, links: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
