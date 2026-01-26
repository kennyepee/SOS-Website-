import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Calendar, MapPin, Clock, DollarSign, Users, Ticket, ArrowLeft, Star } from "lucide-react"

export const metadata = {
  title: "Fundraisers | Strides Over Sidelines",
  description: "Support our mission through galas, charity matches, and community fundraising events.",
}

const fundraisers = [
  {
    id: 1,
    title: "SOS Annual Fundraiser Gala",
    date: "Coming Soon",
    time: "TBD",
    location: "Washington, D.C.",
    description: "Join us for an elegant evening celebrating our impact and supporting our mission. Enjoy dinner, live entertainment, a silent auction, and inspiring stories from our program participants.",
    ticketInfo: "Tickets available soon",
    icon: Star,
  },
  {
    id: 2,
    title: "Charity Soccer Match",
    date: "Coming Soon",
    time: "TBD",
    location: "Washington, D.C.",
    description: "Watch local celebrities and community leaders take the field in a fun, friendly match to raise funds for SOS programs. Family-friendly event with activities for all ages.",
    ticketInfo: "Free admission, donations welcome",
    icon: Users,
  },
  {
    id: 3,
    title: "Community Giving Day",
    date: "Coming Soon",
    time: "All Day",
    location: "Online & In-Person",
    description: "A 24-hour giving campaign to support SOS programs. Every donation will be matched by our sponsors, doubling your impact on youth development.",
    ticketInfo: "No ticket required",
    icon: Heart,
  },
]

const sponsorshipLevels = [
  {
    name: "Champion",
    amount: "$10,000+",
    benefits: [
      "Premier logo placement at all events",
      "VIP table at annual gala",
      "Speaking opportunity at events",
      "Year-round recognition",
    ],
  },
  {
    name: "All-Star",
    amount: "$5,000+",
    benefits: [
      "Logo placement at events",
      "Reserved seating at gala",
      "Recognition in event materials",
      "Social media features",
    ],
  },
  {
    name: "MVP",
    amount: "$2,500+",
    benefits: [
      "Name recognition at events",
      "Tickets to annual gala",
      "Newsletter recognition",
      "Certificate of appreciation",
    ],
  },
  {
    name: "Supporter",
    amount: "$1,000+",
    benefits: [
      "Recognition at events",
      "Tickets to select events",
      "Thank you acknowledgment",
    ],
  },
]

export default function FundraisersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Events
              </Link>
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Fundraisers
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Galas, charity matches, and community events that support our mission of empowering underserved youth through soccer and mentorship.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Statement */}
        <section className="py-16 bg-accent/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg text-foreground leading-relaxed">
                <span className="font-semibold">Your support matters.</span> Every dollar raised goes directly toward providing high-quality soccer training, mental performance education, academic support, and mentorship for underserved youth in the D.C. metro area.
              </p>
            </div>
          </div>
        </section>

        {/* Fundraisers List */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Upcoming Fundraisers
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join us at these events to support SOS and make a difference.
              </p>
            </div>

            <div className="space-y-8">
              {fundraisers.map((event) => (
                <div
                  key={event.id}
                  className="group flex flex-col lg:flex-row gap-8 p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg hover:border-accent/20"
                >
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <event.icon className="h-10 w-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ticket className="h-4 w-4" />
                        <span>{event.ticketInfo}</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button variant="outline" disabled>
                        Registration Opening Soon
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsorship Opportunities */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Sponsorship Opportunities
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Become an event sponsor and support youth development while gaining visibility for your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {sponsorshipLevels.map((level, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 rounded-2xl bg-card border border-border"
                >
                  <div className="text-center pb-4 border-b border-border">
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {level.name}
                    </h3>
                    <p className="mt-2 text-2xl font-bold text-accent">
                      {level.amount}
                    </p>
                  </div>
                  <ul className="mt-6 space-y-3 flex-1">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <DollarSign className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/contact">Become a Sponsor</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Donate CTA */}
        <section className="py-20 lg:py-28 bg-accent">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
                Can't Attend an Event?
              </h2>
              <p className="mt-6 text-lg text-accent-foreground/80 leading-relaxed">
                You can still support our mission by making a direct donation. Every contribution helps us reach more underserved youth in the D.C. metro area.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
                  <Link href="/donate">Donate Now</Link>
                </Button>
                <Button asChild variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent">
                  <Link href="/events">View All Events</Link>
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
