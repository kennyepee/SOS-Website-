import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users, GraduationCap } from "lucide-react"

export function CohortPreview() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary mb-4">
              Now Accepting Applications
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              2026 Summer Cohort
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our first full summer cohort will launch in 2026, bringing together youth, mentors, and coaches for an immersive program focused on growth, leadership, and long-term development, alongside college and professional training sessions designed to expose participants to higher-level pathways and standards.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/summer-cohort">
                  Learn About the 2026 Cohort
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-card border border-border">
              <Calendar className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-semibold text-foreground">8 Weeks</h3>
              <p className="mt-2 text-sm text-muted-foreground">Structured summer program with guaranteed weekly sessions</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-semibold text-foreground">Mentorship-Driven</h3>
              <p className="mt-2 text-sm text-muted-foreground">1:1 mentorship from former collegiate and pro athletes</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-semibold text-foreground">College Exposure</h3>
              <p className="mt-2 text-sm text-muted-foreground">Training sessions with collegiate and professional players</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border bg-primary/5">
              <div className="text-2xl font-bold text-primary">DC Metro</div>
              <h3 className="mt-2 font-semibold text-foreground">Arlington & DC Area</h3>
              <p className="mt-2 text-sm text-muted-foreground">In-person sessions throughout the region</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
