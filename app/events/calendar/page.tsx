import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import { BackLink } from "@/components/layout/back-link"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata = {
  title: "Events Calendar | Strides Over Sidelines",
  description: "View all upcoming SOS events - workshops, training sessions, and fundraisers.",
}

export default function CalendarPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageSection containerClassName="max-w-4xl">
          <BackLink href="/events" label="Back to Events" />
        </PageSection>

        <PageHero
          title="Upcoming Events."
          subtitle="The SOS Events Calendar lists all upcoming workshops, training sessions, and fundraising events."
        />

        <PageSection>
          <div className="mx-auto max-w-3xl text-center">
            <div className="apple-highlight">
              <SectionTitle as="h3" centered>Calendar Launching Soon</SectionTitle>
              <p className="mt-4 apple-body">
                Event details will include dates, locations, and registration information as they become available.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild>
                <Link href="/2026-703-warriors">703 Warriors 2026</Link>
              </Button>
              <Link href="/contact" className="apple-link inline-flex items-center gap-1">
                Contact Us
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
