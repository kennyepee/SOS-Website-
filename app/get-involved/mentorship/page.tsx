import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, ArrowLeft, CheckCircle } from "lucide-react"

const mentorResponsibilities = [
  "Building consistent, positive relationships",
  "Sharing experiences from competitive soccer environments",
  "Reinforcing confidence, discipline, and leadership",
  "Modeling accountability on and off the field",
]

export default function MentorshipPage() {
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

        {/* Application CTA */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Become a Mentor
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Ready to make an impact? Fill out our mentor application to get started.
              </p>
              <div className="mt-10">
                <Button asChild size="lg">
                  <a href="https://docs.google.com/forms/d/1QdbmhsV2eMwuzZdsrU_6r7OOUwfMRQ0zL3ksHsOE5vk/edit" target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
