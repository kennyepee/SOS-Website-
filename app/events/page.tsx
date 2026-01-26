import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, MapPin, Clock, ArrowRight, Sparkles, Heart, Users } from "lucide-react"

export const metadata = {
  title: "Events | Strides Over Sidelines",
  description: "Join us at upcoming workshops, fundraisers, and community events supporting youth development in the D.C. metro area.",
}

const upcomingEvents = [
  {
    id: 1,
    title: "Youth Soccer Skills Workshop",
    type: "Workshop",
    date: "Coming Soon",
    time: "TBD",
    location: "Washington, D.C.",
    description: "A hands-on workshop focusing on fundamental soccer skills, teamwork, and mental performance training for young athletes.",
    link: "/events/workshops",
  },
  {
    id: 2,
    title: "SOS Annual Fundraiser Gala",
    type: "Fundraiser",
    date: "Coming Soon",
    time: "TBD",
    location: "Washington, D.C.",
    description: "Join us for an evening celebrating our impact and supporting our mission to empower underserved youth through sports and mentorship.",
    link: "/events/fundraisers",
  },
  {
    id: 3,
    title: "Community Soccer Day",
    type: "Workshop",
    date: "Coming Soon",
    time: "TBD",
    location: "Washington, D.C.",
    description: "A free community event bringing families together for soccer activities, games, and information about SOS programs.",
    link: "/events/workshops",
  },
]

const eventCategories = [
  {
    title: "Workshops",
    description: "Soccer training clinics, mental performance sessions, and educational workshops for youth and families.",
    icon: Sparkles,
    link: "/events/workshops",
    color: "primary",
  },
  {
    title: "Fundraisers",
    description: "Galas, charity matches, and community fundraising events supporting our programs and mission.",
    icon: Heart,
    link: "/events/fundraisers",
    color: "accent",
  },
]

export default function EventsPage() {
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
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Events
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Join us at workshops, fundraisers, and community gatherings that support our mission of empowering underserved youth through soccer and mentorship.
              </p>
            </div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Event Types
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore our different types of events and find one that interests you.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {eventCategories.map((category, index) => (
                <Link key={index} href={category.link}>
                  <div className="group h-full p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-full ${
                      category.color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                    }`}>
                      <category.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      View Events
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Upcoming Events
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Mark your calendar and join us at these upcoming gatherings.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="group flex flex-col rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  {/* Event Type Banner */}
                  <div className={`px-6 py-3 ${
                    event.type === "Workshop" ? "bg-primary/10" : "bg-accent/10"
                  }`}>
                    <span className={`text-sm font-semibold ${
                      event.type === "Workshop" ? "text-primary" : "text-accent"
                    }`}>
                      {event.type}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed flex-1">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="mt-6 space-y-2 text-sm text-muted-foreground">
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
                    </div>

                    <div className="mt-6">
                      <Link
                        href={event.link}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Host an Event CTA */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Host an Event With Us
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Interested in hosting a workshop, fundraiser, or community event to support SOS? We'd love to partner with you to create meaningful experiences for our community.
              </p>
              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
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
