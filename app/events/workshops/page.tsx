import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles, ArrowLeft, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Workshops | Strides Over Sidelines",
  description: "SOS workshops - leadership, mental performance, and life skills development.",
}

const workshopTopics = [
  "Leadership and confidence development",
  "Mental performance and mindset training",
  "College and career readiness",
  "Health, wellness, and discipline",
]

export default function WorkshopsPage() {
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
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Workshops & Learning Sessions
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                SOS workshops provide participants with opportunities to build leadership, mental performance, and life skills beyond the field.
              </p>
            </div>
          </div>
        </section>

        {/* Workshop Topics */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-2xl font-bold text-foreground">Workshops may include:</h2>
              <div className="mt-6 space-y-4">
                {workshopTopics.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-muted-foreground">
                Workshops are led by experienced mentors, professionals, and community partners.
              </p>
            </div>
          </div>
        </section>

        {/* Lead a Workshop CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground">
                Lead a Workshop
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80">
                Have expertise to share? We're looking for workshop leaders.
              </p>
              <div className="mt-10">
                <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/get-involved/workshops">Host a Workshop</Link>
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
