import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Trophy, Users, Target, MapPin, Calendar, CheckCircle, Mail } from "lucide-react"

export const metadata = {
  title: "College & Pro Training Sessions | Strides Over Sidelines",
  description: "High-level, competitive training sessions for collegiate, semi-professional, and professional players.",
}

const whoSessionsAreFor = [
  "Have competed at the collegiate level (any division), semi-professional level, or professional level, or",
  "Currently train and compete at a comparable level and can perform in a college/pro training environment",
]

const whatToExpect = [
  "College- and pro-style training sessions",
  "High-intensity, competitive environments",
  "Experienced coaches and former players",
  "Emphasis on standards, sharpness, and accountability",
]

const sessionDetails = [
  { icon: Target, label: "Format", value: "In-person" },
  { icon: MapPin, label: "Location", value: "Washington, DC metro area" },
  { icon: Calendar, label: "Schedule", value: "Varies based on availability" },
  { icon: Users, label: "Capacity", value: "Limited to maintain quality" },
]

export default function CollegeProSessionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                College & Pro Training Sessions
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                High-level, competitive training designed for advanced players seeking to maintain and elevate their game.
              </p>
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
                Strides Over Sidelines hosts college and professional training sessions designed for advanced players seeking a high-level, competitive training environment.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                These sessions bring together current and former collegiate, semi-professional, and professional players, along with a limited number of athletes who train at a comparable level. Registration helps SOS plan capacity, staffing, and field space.
              </p>
            </div>
          </div>
        </section>

        {/* Who These Sessions Are For */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Who These Sessions Are For
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                These sessions are intended for players who:
              </p>
              <div className="mt-8 space-y-4">
                {whoSessionsAreFor.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 rounded-xl bg-destructive/10 border border-destructive/20">
                <p className="text-foreground font-medium">
                  These sessions are not designed for beginners or recreational players.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What to Expect
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Participants can expect:
              </p>
              <div className="mt-8 space-y-4">
                {whatToExpect.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-muted-foreground text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-muted-foreground">
                Sessions prioritize quality and competitiveness over volume.
              </p>
            </div>
          </div>
        </section>

        {/* Session Details */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Session Details
              </h2>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {sessionDetails.map((detail, index) => (
                  <div key={index} className="p-6 rounded-xl bg-card border border-border">
                    <detail.icon className="h-8 w-8 text-primary" />
                    <h3 className="mt-4 font-semibold text-foreground">{detail.label}</h3>
                    <p className="mt-1 text-muted-foreground">{detail.value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-muted-foreground">
                Exact dates, times, and locations will be shared with registered participants.
              </p>
            </div>
          </div>
        </section>

        {/* Register CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Register
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80">
                Register your interest to be notified of upcoming sessions.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdqbdLxMXkDctr1_2odHW3xYgzQvlaHsdXH_KgGJPY-A_7cqg/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                    Register Here
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
