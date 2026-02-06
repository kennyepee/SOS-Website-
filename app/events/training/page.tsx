import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Trophy, ArrowLeft, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Training Sessions | Strides Over Sidelines",
  description: "SOS training sessions - youth development and college/pro-level training.",
}

const trainingTypes = [
  "Youth development training",
  "College and pro-level sessions",
  "Position-specific or skills-focused training",
]

export default function TrainingPage() {
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
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Training Sessions
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                SOS training sessions focus on structured, development-first soccer environments.
              </p>
            </div>
          </div>
        </section>

        {/* Training Types */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-2xl font-bold text-foreground">Sessions may include:</h2>
              <div className="mt-6 space-y-4">
                {trainingTypes.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-muted-foreground">
                Training sessions are designed to maintain high standards while prioritizing growth and learning.
              </p>
            </div>
          </div>
        </section>

        {/* Program Links */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                Our Programs
              </h2>
              <p className="mt-4 text-muted-foreground">
                Learn more about our structured training programs.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild>
                  <Link href="/summer-cohort">2026 Summer Cohort</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/college-pro-sessions">College/Pro Sessions</Link>
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
