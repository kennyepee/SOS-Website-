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
import { Mic, ArrowLeft, Users, Clock, Calendar, MapPin, Send, Lightbulb, Trophy, Brain, BookOpen } from "lucide-react"

const speakingTopics = [
  {
    icon: Trophy,
    title: "Athletic Excellence",
    description: "Share your sports journey, training philosophy, or path to success.",
  },
  {
    icon: Brain,
    title: "Mental Performance",
    description: "Discuss confidence, resilience, goal-setting, and overcoming challenges.",
  },
  {
    icon: BookOpen,
    title: "Education & Career",
    description: "Talk about academic success, career pathways, or professional development.",
  },
  {
    icon: Lightbulb,
    title: "Life Skills",
    description: "Share wisdom on leadership, teamwork, communication, or personal growth.",
  },
]

const eventTypes = [
  "Workshop Session (30-45 min)",
  "Training Day Talk (15-20 min)",
  "Panel Discussion",
  "Fireside Chat / Q&A",
  "Full Workshop Lead",
  "Virtual Presentation",
]

const expertiseAreas = [
  "Professional Sports",
  "Coaching / Training",
  "Sports Psychology",
  "Education / Academia",
  "Business / Entrepreneurship",
  "Community Leadership",
  "Health / Wellness",
  "Other",
]

export default function GuestSpeakersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    organization: "",
    expertise: "",
    eventType: "",
    topic: "",
    bio: "",
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
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <Mic className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Guest Speakers
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Share your expertise and inspire the next generation of young athletes. We're looking for passionate speakers to join our workshops, events, and training sessions.
              </p>
            </div>
          </div>
        </section>

        {/* Speaking Topics */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Topics We're Looking For
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We welcome speakers who can share insights on these key areas of youth development.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {speakingTopics.map((topic, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-card border border-border"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <topic.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Speaking Opportunities
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  We offer flexible formats to match your availability and speaking style.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Our Audience</h3>
                      <p className="text-muted-foreground">Young athletes ages 8-15 and their families, primarily from underserved communities in the D.C. metro area.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Time Commitment</h3>
                      <p className="text-muted-foreground">Sessions range from 15-minute talks to full workshop leads, depending on the format and your availability.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">Events are held in the Washington, D.C. metro area. Virtual presentations are also available.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Scheduling</h3>
                      <p className="text-muted-foreground">We work with your schedule to find a time that works. Events are typically held on weekends or weekday evenings.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                  What to Expect
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                      1
                    </div>
                    <span className="text-muted-foreground">We'll discuss your expertise and match you with the right event format.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                      2
                    </div>
                    <span className="text-muted-foreground">Our team provides event details, audience context, and logistical support.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                      3
                    </div>
                    <span className="text-muted-foreground">You deliver an inspiring session tailored to our youth audience.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                      4
                    </div>
                    <span className="text-muted-foreground">We share your impact and consider you for future opportunities.</span>
                  </li>
                </ul>
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
                  Become a Guest Speaker
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Share your interest in speaking at SOS events.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-accent/10 text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Send className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">Interest Submitted!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for your interest in speaking at SOS events. We'll review your submission and be in touch soon.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: "", email: "", phone: "", title: "", organization: "", expertise: "", eventType: "", topic: "", bio: "" })
                    }}
                    variant="outline"
                    className="mt-4"
                  >
                    Submit Another Interest
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
                    <Label htmlFor="organization">Organization / Company</Label>
                    <Input
                      id="organization"
                      placeholder="Where you work or your affiliation"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="expertise">Area of Expertise</Label>
                      <Select
                        value={formData.expertise}
                        onValueChange={(value) => setFormData({ ...formData, expertise: value })}
                      >
                        <SelectTrigger id="expertise">
                          <SelectValue placeholder="Select your expertise" />
                        </SelectTrigger>
                        <SelectContent>
                          {expertiseAreas.map((area) => (
                            <SelectItem key={area} value={area}>
                              {area}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="event-type">Preferred Event Type</Label>
                      <Select
                        value={formData.eventType}
                        onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                      >
                        <SelectTrigger id="event-type">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic">Proposed Topic / Talk Title</Label>
                    <Textarea
                      id="topic"
                      placeholder="What would you like to speak about? Share your proposed topic or talk idea..."
                      rows={3}
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Short Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself and your background..."
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
