import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Sparkles, Trophy, Heart, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Events | Strides Over Sidelines",
  description: "SOS events - workshops, training sessions, and fundraisers.",
}

const eventTypes = [
  {
    icon: Calendar,
    title: "Calendar",
    description: "View all upcoming workshops, training sessions, and fundraising events.",
    href: "/events/calendar",
    cta: "View Calendar",
  },
  {
    icon: Sparkles,
    title: "Workshops",
    description: "Leadership, mental performance, and life skills development sessions for participants.",
    href: "/events/workshops",
    cta: "View Workshops",
  },
  {
    icon: Trophy,
    title: "Training Sessions",
    description: "Youth development training and college/pro-level sessions.",
    href: "/events/training",
    cta: "View Training",
  },
  {
    icon: Heart,
    title: "Fundraisers",
    description: "Community events and campaigns supporting SOS programs.",
    href: "/events/fundraisers",
    cta: "View Fundraisers",
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
                Strides Over Sidelines hosts a range of events designed to support development, community engagement, and access to opportunity through sport.
              </p>
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventTypes.map((event, index) => (
                <Link key={index} href={event.href}>
                  <div className="group h-full flex flex-col p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <event.icon className="h-7 w-7" />
                    </div>
                    <h2 className="mt-6 font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed flex-1">
                      {event.description}
                    </p>
                    <div className="mt-6">
                      <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                        {event.cta}
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
