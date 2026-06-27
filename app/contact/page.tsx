"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useState } from "react"

const inquiryTypes = [
  "General Questions",
  "Partnership Inquiry",
  "Volunteer/Mentor",
  "Sponsorship",
  "Media Request",
  "Guest Inquiry (Podcast)",
  "Other",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`[SOS Contact] ${formData.inquiryType || 'General Inquiry'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
    )

    window.location.href = `mailto:Stridesoversidelines@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Contact Us."
          subtitle="We would like to hear from you. For general questions, partnerships, volunteering, sponsorships, or media requests, please use the form below or reach out directly."
        />

        <PageSection>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <SectionTitle as="h3">Send Us a Message</SectionTitle>
              <p className="mt-2 apple-body">
                Fill out the form below and we will get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="apple-highlight mt-8">
                  <h3 className="font-semibold text-lg text-foreground">Almost There!</h3>
                  <p className="mt-2 apple-body">
                    Your email app should have opened with your message pre-filled. Please confirm and hit send in your email app to complete your message. We will be in touch soon.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: "", email: "", inquiryType: "", message: "" })
                    }}
                    variant="outline"
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
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
                    <Label htmlFor="inquiry-type">Inquiry Type</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                    >
                      <SelectTrigger id="inquiry-type">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            <div>
              <SectionTitle as="h3">Get in Touch</SectionTitle>
              <p className="mt-2 apple-body">
                Reach out to us directly through email or follow us on social media.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="mt-1 apple-body">Stridesoversidelines@gmail.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="mt-1 apple-body">Washington, D.C. Metro Area</p>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://www.instagram.com/stridesoversidelines"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-link"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/company/strides-over-sidelines"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-link"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://www.youtube.com/@StridesOverSidelines"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-link"
                    >
                      YouTube
                    </a>
                    <Link href="/media/podcast" className="apple-link">
                      Podcast
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-12 apple-nav-card">
                <h3 className="font-semibold text-foreground">Quick Links</h3>
                <div className="mt-4 flex flex-wrap gap-4">
                  <Link href="/about" className="apple-link inline-flex items-center gap-1">
                    About SOS
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link href="/donate" className="apple-link inline-flex items-center gap-1">
                    Donate
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link href="/media/podcast" className="apple-link inline-flex items-center gap-1">
                    Podcast
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
