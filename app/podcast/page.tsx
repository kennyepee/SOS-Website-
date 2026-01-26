import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Play, Brain, Trophy, GraduationCap, Users, Mic, Heart, Headphones } from "lucide-react"

export const metadata = {
  title: "The SOS Podcast | Strides Over Sidelines",
  description: "Our storytelling and education platform making youth development knowledge accessible while elevating community voices.",
}

const topics = [
  {
    icon: Brain,
    title: "Mental Performance",
    description: "Tools for confidence, focus, resilience, and emotional regulation",
  },
  {
    icon: Trophy,
    title: "Youth Sports Pathways",
    description: "Training, development, and decision making guidance",
  },
  {
    icon: GraduationCap,
    title: "Recruiting & Academics",
    description: "Timelines, expectations, and how to evaluate programs",
  },
  {
    icon: Users,
    title: "Community Voices",
    description: "Stories from families, students, coaches, and leaders",
  },
]

const guests = [
  "Sports psychology and mental performance professionals",
  "College and professional athletes",
  "Coaches and youth development leaders",
  "Educators, mentors, and community advocates",
  "Partners and supporters aligned with SOS's mission",
]

export default function PodcastPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/podcast-art.png"
                    alt="The SOS Podcast"
                    width={280}
                    height={280}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                    The SOS Podcast
                  </h1>
                  <p className="mt-6 text-lg text-background/80 leading-relaxed">
                    {"Strides Over Sidelines' storytelling and education platform. Making youth development knowledge more accessible while elevating community voices."}
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="#">
                        <Play className="mr-2 h-4 w-4" />
                        Listen Now
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10 bg-transparent">
                      <Link href="#">Subscribe</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the Podcast */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {"We use the podcast to translate what is often \"insider information\" in youth sports into clear, practical guidance, while also sharing the stories that funders, partners, and communities need to understand what students face and what support can change outcomes."}
              </p>
            </div>
          </div>
        </section>

        {/* What You'll Hear */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What You Will Hear
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Each episode is designed to be useful, grounded, and actionable.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
              {topics.map((topic) => (
                <div key={topic.title} className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <topic.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{topic.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{topic.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why the Podcast Matters
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Access gaps in youth sports are also information gaps. Many families do not have a trusted network to explain what to do next, what to prioritize, or how to avoid common pitfalls.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                The SOS Podcast helps close that gap. It gives families and young athletes a credible source of guidance and encouragement, and it helps partners and sponsors understand the real needs behind the mission.
              </p>
            </div>
          </div>
        </section>

        {/* Our Guests */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Guests
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We feature a mix of voices from across the ecosystem.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-2xl">
              <ul className="space-y-4">
                {guests.map((guest, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <Mic className="h-5 w-5 shrink-0 text-primary" />
                    <span>{guest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Listen Platforms */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Listen and Share
              </h2>
              <p className="mt-4 text-muted-foreground">
                If you find an episode helpful, please share it. That is one of the simplest ways to expand the reach of this work.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button asChild variant="outline" size="lg">
                  <Link href="#">Spotify</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#">Apple Podcasts</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#">YouTube</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Become a Guest CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/20">
                  <Heart className="h-7 w-7 text-primary-foreground" />
                </div>
              </div>
              <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Become a Guest or Partner
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                If you are a coach, athlete, mental performance professional, educator, or community leader and want to contribute, we would like to hear from you.
              </p>
              <div className="mt-10">
                <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/contact">Contact Us</Link>
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
