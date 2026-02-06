import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Events Calendar | Strides Over Sidelines",
  description: "View all upcoming SOS events - workshops, training sessions, and fundraisers.",
}

export default function CalendarPage() {
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
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Upcoming Events
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                The SOS Events Calendar lists all upcoming workshops, training sessions, and fundraising events.
              </p>
            </div>
          </div>
        </section>

        {/* Calendar Coming Soon */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="p-12 rounded-2xl bg-muted border border-border">
                <Calendar className="h-16 w-16 mx-auto text-muted-foreground/50" />
                <h2 className="mt-6 font-serif text-2xl font-bold text-foreground">
                  Calendar Launching Soon
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Event details will include dates, locations, and registration information as they become available.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild>
                    <Link href="/summer-cohort">2026 Summer Cohort</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
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
