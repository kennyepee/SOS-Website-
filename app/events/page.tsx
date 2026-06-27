import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata = {
  title: "Events | Strides Over Sidelines",
  description: "SOS events - workshops, training sessions, and fundraisers.",
}

const eventTypes = [
  {
    title: "Calendar",
    description: "View all upcoming workshops, training sessions, and fundraising events.",
    href: "/events/calendar",
    cta: "View Calendar",
  },
  {
    title: "Workshops",
    description: "Leadership, mental performance, and life skills development sessions for participants.",
    href: "/events/workshops",
    cta: "View Workshops",
  },
  {
    title: "Training Sessions",
    description: "Youth development training and college/pro-level sessions.",
    href: "/events/training",
    cta: "View Training",
  },
  {
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
        <PageHero
          title="Events."
          subtitle="Strides Over Sidelines hosts a range of events designed to support development, community engagement, and access to opportunity through sport."
        />

        <PageSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <Link key={index} href={event.href} className="apple-nav-card group flex flex-col">
                <h2 className="text-2xl font-semibold text-foreground">
                  {event.title}
                </h2>
                <p className="mt-3 apple-body flex-1">{event.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 apple-link">
                  {event.cta}
                  <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
