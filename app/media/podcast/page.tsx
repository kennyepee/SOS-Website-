import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Headphones, Play, ArrowLeft, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Podcast | Strides Over Sidelines",
  description: "The SOS Podcast - conversations with athletes, coaches, mentors, and leaders.",
}

const podcastTopics = [
  "Lessons from high-level sport",
  "Mentorship and leadership development",
  "Mental performance and resilience",
  "Changing how youth sports are approached",
]

export default function PodcastPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Link
                href="/media"
                className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Media
              </Link>
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                The SOS Podcast
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Conversations with athletes, coaches, mentors, and leaders who believe in sport as a platform for growth and opportunity.
              </p>
            </div>
          </div>
        </section>

        {/* About the Podcast */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-2xl font-bold text-foreground">Episodes Explore</h2>
              <div className="mt-6 space-y-4">
                {podcastTopics.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-muted-foreground">
                The podcast amplifies voices aligned with the SOS mission.
              </p>
            </div>
          </div>
        </section>

        {/* Listen Section */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Listen Now
              </h2>
              <p className="mt-4 text-muted-foreground">
                Episodes coming soon. Follow us to be notified when new episodes drop.
              </p>
              <div className="mt-10 p-12 rounded-2xl bg-card border border-border">
                <div className="flex h-24 w-24 mx-auto items-center justify-center rounded-full bg-primary/10">
                  <Play className="h-12 w-12 text-primary" />
                </div>
                <p className="mt-6 text-muted-foreground">Episodes launching soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Be a Guest CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Be a Guest
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80">
                Have a story to share? We'd love to feature you on the podcast.
              </p>
              <div className="mt-10">
                <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/get-involved/podcast">Apply to Be a Guest</Link>
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
