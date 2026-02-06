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
import { Users, ArrowLeft, CheckCircle, Send } from "lucide-react"

const mentorResponsibilities = [
  "Building consistent, positive relationships",
  "Sharing experiences from competitive soccer environments",
  "Reinforcing confidence, discipline, and leadership",
  "Modeling accountability on and off the field",
]

export default function MentorshipPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    background: "",
    motivation: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const subject = encodeURIComponent('[SOS] Mentor Application')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\n\nSoccer Background:\n${formData.background}\n\nWhy I Want to Be a Mentor:\n${formData.motivation}`
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
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Be a Mentor
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Mentors are central to the SOS model. Make a lasting impact on young athletes through consistent guidance and support.
              </p>
            </div>
          </div>
        </section>

        {/* About Mentorship */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At SOS, mentors are current or former high-level soccer players who understand the demands, discipline, and lessons that come with competitive sport.
              </p>
              <h3 className="mt-8 text-xl font-semibold text-foreground">Mentors support participants by:</h3>
              <div className="mt-6 space-y-4">
                {mentorResponsibilities.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-muted-foreground">
                Mentors may include current or former collegiate, semi-professional, or professional players. Time commitment varies and is designed to be remote and flexible.
              </p>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Become a Mentor
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Fill out the form below to express your interest.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-primary/10 text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">Almost There!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Your email app should have opened with your application pre-filled. Please confirm and hit send in your email app to complete your submission. We'll be in touch soon.
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="(555) 555-5555"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="background">Soccer Background</Label>
                    <Textarea
                      id="background"
                      placeholder="Tell us about your soccer experience (collegiate, professional, coaching, etc.)"
                      rows={4}
                      value={formData.background}
                      onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to be a mentor?</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Share why you're interested in mentoring with SOS..."
                      rows={4}
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
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
