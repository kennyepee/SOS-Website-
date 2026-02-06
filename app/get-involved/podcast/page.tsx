"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"
import { Headphones, ArrowLeft, CheckCircle, Send } from "lucide-react"

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
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Get Involved
              </Link>
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Share the Story
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                The SOS Podcast features conversations at the intersection of sport, mentorship, and personal growth.
              </p>
            </div>
          </div>
        </section>

        {/* About the Podcast */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We highlight:
              </p>
              <div className="mt-6 space-y-4">
                {podcastHighlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-muted-foreground">
                The podcast amplifies voices that align with the SOS mission.
              </p>
              <div className="mt-8">
                <Button asChild variant="outline">
                  <Link href="/media/podcast">Listen to the Podcast</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Be a Guest
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Share your story on the SOS Podcast.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-primary/10 text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">Almost There!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Your email app should have opened with your interest pre-filled. Please confirm and hit send in your email app to complete your submission. We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-card border border-border">
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
