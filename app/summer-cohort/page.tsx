import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Users, Trophy, Brain, GraduationCap, MapPin, Clock, CheckCircle, Heart, Mail } from "lucide-react"

export const metadata = {
  title: "2026 Summer Cohort | Strides Over Sidelines",
  description: "Apply for the Strides Over Sidelines 2026 Summer Cohort - an eight-week, mentorship-driven program designed to support youth development.",
}

const programFocus = [
  "One guaranteed weekly session for eight weeks",
  "Soccer training led by experienced coaches",
  "College- and professional-level training sessions",
  "Mentorship from former athletes and professionals",
  "Mental performance and leadership development workshops",
  "Team-based activities that build confidence and discipline",
]

const whoShouldApply = [
  "Are committed to personal and athletic growth",
  "Want consistent coaching and mentorship",
  "Are open to leadership and life skills development",
  "Demonstrate effort, accountability, and coachability",
]

const programDetails = [
  { icon: Calendar, label: "Program Length", value: "8 weeks (Summer 2026)" },
  { icon: Clock, label: "Guaranteed Sessions", value: "One session per week" },
  { icon: MapPin, label: "Location", value: "DC metro area (Arlington & DC)" },
  { icon: Users, label: "Cohort Size", value: "Limited to maintain quality" },
]

export default function SummerCohortPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block px-4 py-1.5 text-sm font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-primary mb-6">
                Now Accepting Applications
              </span>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                2026 Summer Cohort
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                An eight-week, mentorship-driven program designed to support youth development through soccer, leadership, and mental performance.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScVg9dKpHg2p0n5G-pbTF0-Wt6Li9ipn4ruJCFUnzhm3t2frg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Overview
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                The Strides Over Sidelines 2026 Summer Cohort is an eight-week, mentorship-driven program designed to support youth development through soccer, leadership, and mental performance.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Each participant is guaranteed one structured session per week for eight weeks. Additional training, mentorship, and workshop sessions may be offered on an as-available basis. The program emphasizes consistency, accountability, and long-term growth on and off the field.
              </p>
            </div>
          </div>
        </section>

        {/* Program Focus */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Program Focus
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The 2026 Summer Cohort prioritizes personal development through intentional sport-based programming. Participants will engage in:
              </p>
              <div className="mt-8 space-y-4">
                {programFocus.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Who Should Apply
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                This program is designed for youth who:
              </p>
              <div className="mt-8 space-y-4">
                {whoShouldApply.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-foreground font-medium">
                  No prior elite experience is required. Selection is based on mindset and commitment, not résumé.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Program Details
              </h2>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {programDetails.map((detail, index) => (
                  <div key={index} className="p-6 rounded-xl bg-card border border-border">
                    <detail.icon className="h-8 w-8 text-primary" />
                    <h3 className="mt-4 font-semibold text-foreground">{detail.label}</h3>
                    <p className="mt-1 text-muted-foreground">{detail.value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-muted-foreground">
                Specific dates, times, and locations will be shared with accepted participants.
              </p>
            </div>
          </div>
        </section>

        {/* Program Cost & Access */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Heart className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Program Cost & Access
                </h2>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mt-8">Our Commitment to Access</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Strides Over Sidelines is committed to making our programs accessible to all participants, regardless of financial background. The 2026 Summer Cohort uses a tiered participation model to ensure youth are never excluded due to cost.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8">How the Tiered Model Works</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Participants with financial need are asked to pay a refundable or non-refundable deposit only, which secures their spot and supports attendance accountability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Participants with greater financial flexibility may be asked to contribute a higher program fee to help offset program costs and support broader access.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="text-muted-foreground">No participant is denied participation based on ability to pay.</span>
                </li>
              </ul>

              <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/10">
                <h4 className="font-semibold text-foreground">Application Note</h4>
                <p className="mt-2 text-muted-foreground">
                  Financial information is not required at the time of application. Cost details are discussed only after acceptance to ensure the selection process remains fair and development-focused.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Application Process
              </h2>
              <p className="mt-4 text-muted-foreground">
                Applications for the 2026 Summer Cohort are reviewed on a rolling basis. The application includes:
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Participant questionnaire</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Guardian information and consent</span>
                </li>
              </ul>
              <p className="mt-6 text-muted-foreground">
                Selected applicants may be invited to a short interview or evaluation session.
              </p>
            </div>
          </div>
        </section>

        {/* Apply CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Apply Now
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80">
                Applications for the 2026 Summer Cohort are now open.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScVg9dKpHg2p0n5G-pbTF0-Wt6Li9ipn4ruJCFUnzhm3t2frg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                    Start Your Application
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>Questions? Contact Stridesoversidelines@gmail.com</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
