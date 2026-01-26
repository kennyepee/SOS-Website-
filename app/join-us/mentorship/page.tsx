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
import { Users, ArrowLeft, Heart, Clock, BookOpen, Shield, CheckCircle, Send } from "lucide-react"

const mentorBenefits = [
  {
    icon: Heart,
    title: "Make a Lasting Impact",
    description: "Build a meaningful relationship with a young athlete and help shape their future.",
  },
  {
    icon: Clock,
    title: "Flexible Commitment",
    description: "We work with your schedule to find a mentoring arrangement that fits your life.",
  },
  {
    icon: BookOpen,
    title: "Training & Support",
    description: "Receive comprehensive training and ongoing support from our team.",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "All mentors are background checked and participate in structured programming.",
  },
]

const expectations = [
  "Commit to meeting with your mentee regularly (in-person or virtual)",
  "Attend mentor training sessions and ongoing development opportunities",
  "Communicate openly with SOS staff about progress and any concerns",
  "Serve as a positive role model and maintain appropriate boundaries",
  "Support your mentee's academic and athletic goals",
  "Participate in at least one SOS event per quarter with your mentee",
]

export default function MentorshipPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    experience: "",
    motivation: "",
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
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Mentorship Program
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Become a mentor and make a transformative impact on a young athlete's life through consistent guidance, support, and encouragement.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Become a Mentor?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Mentoring is one of the most impactful ways you can contribute to youth development.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {mentorBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-card border border-border"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  What We Expect from Mentors
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  We're looking for dedicated individuals who can commit to building a meaningful relationship with a young athlete.
                </p>
                <ul className="mt-8 space-y-4">
                  {expectations.map((expectation, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-muted-foreground">{expectation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                  The Mentor Journey
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Apply</h4>
                      <p className="text-sm text-muted-foreground">Submit your application and share why you want to mentor.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Interview & Screening</h4>
                      <p className="text-sm text-muted-foreground">Meet with our team and complete background checks.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Training</h4>
                      <p className="text-sm text-muted-foreground">Participate in mentor training to prepare for your role.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Match & Begin</h4>
                      <p className="text-sm text-muted-foreground">Get matched with a mentee and start your journey together.</p>
                    </div>
                  </div>
                </div>
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
                  Apply to Be a Mentor
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Fill out the form below to start your mentor application.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-primary/10 text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">Application Submitted!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for your interest in becoming a mentor. We'll be in touch soon.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: "", email: "", phone: "", occupation: "", experience: "", motivation: "" })
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
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="occupation">Occupation</Label>
                      <Input
                        id="occupation"
                        placeholder="Your current occupation"
                        value={formData.occupation}
                        onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Relevant Experience</Label>
                    <Textarea
                      id="experience"
                      placeholder="Tell us about any experience you have working with youth, coaching, or mentoring..."
                      rows={4}
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to be a mentor?</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Share why you're interested in becoming an SOS mentor..."
                      rows={4}
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      required
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
