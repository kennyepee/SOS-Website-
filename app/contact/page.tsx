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
import { Mail, MapPin, Instagram, Linkedin, Youtube, Headphones, Send } from "lucide-react"
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
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Contact Us
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                We would like to hear from you. For general questions, partnerships, volunteering, sponsorships, or media requests, please use the form below or reach out directly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we will get back to you as soon as possible.
                </p>

                {submitted ? (
                  <div className="mt-8 p-8 rounded-xl bg-primary/10 text-center">
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Message Sent!</h3>
                    <p className="mt-2 text-muted-foreground">
                      Thank you for reaching out. We will be in touch soon.
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

              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Get in Touch
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Reach out to us directly through email or follow us on social media.
                </p>

                <div className="mt-8 space-y-6">
                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="mt-1 text-muted-foreground">StridesOverSidelines@gmail.com</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="mt-1 text-muted-foreground">Washington, D.C. Metro Area</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                      <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Youtube className="h-5 w-5" />
                        <span className="sr-only">YouTube</span>
                      </a>
                      <Link
                        href="/podcast"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Headphones className="h-5 w-5" />
                        <span className="sr-only">Podcast</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-12 p-6 rounded-xl bg-muted">
                  <h3 className="font-semibold text-foreground">Quick Links</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/about">About SOS</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/donate">Donate</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/podcast">Podcast</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
