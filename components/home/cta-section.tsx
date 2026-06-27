import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Headphones, Instagram, Linkedin, Youtube } from "lucide-react"

export function CtaSection() {
  return (
    <section className="apple-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Stay connected.
          </h2>
          <p className="apple-subhead mx-auto mt-4 max-w-xl text-base sm:text-lg">
            Follow our work and hear stories from our community.
          </p>
          <div className="mt-6 flex items-center justify-center gap-5">
            <a href="https://www.instagram.com/stridesoversidelines" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/strides-over-sidelines" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://www.youtube.com/@StridesOverSidelines" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </a>
            <Link href="/media/podcast" className="text-muted-foreground transition-colors hover:text-primary">
              <Headphones className="h-6 w-6" />
              <span className="sr-only">Podcast</span>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl md:rounded-3xl bg-muted p-10 md:p-12 text-center">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Help build opportunity that lasts.
            </h3>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed md:text-lg">
              Your support helps SOS deliver training, mentorship, and mental performance tools to underserved youth.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/donate">Donate now</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl md:rounded-3xl bg-foreground p-10 md:p-12 text-center">
            <h3 className="text-2xl font-semibold tracking-tight text-background md:text-3xl">
              The SOS Podcast.
            </h3>
            <p className="mt-4 text-base text-background/70 leading-relaxed md:text-lg">
              Conversations with athletes, coaches, and leaders who believe in sport as a platform for growth.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="outline" className="border-background/20 bg-transparent text-background hover:bg-background/10">
                <Link href="/media/podcast">
                  Explore episodes
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
