import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, ArrowLeft, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Fundraisers | Strides Over Sidelines",
  description: "SOS fundraising events supporting our programs and mission.",
}

const fundraiserTypes = [
  "Community soccer events",
  "Partner-hosted fundraisers",
  "Special initiatives and campaigns",
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
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Fundraising Events
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Fundraising events support SOS programs and help expand access to quality training and mentorship.
              </p>
            </div>
          </div>
        </section>

        {/* Fundraiser Types */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-2xl font-bold text-foreground">Events may include:</h2>
              <div className="mt-6 space-y-4">
                {fundraiserTypes.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-muted-foreground">
                More details will be shared as events are announced.
              </p>
            </div>
          </div>
        </section>

        {/* Donate CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground">
                Support Our Mission
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80">
                Can't attend an event? You can still make a difference with an online donation.
              </p>
              <div className="mt-10">
                <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/donate">Donate Now</Link>
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
