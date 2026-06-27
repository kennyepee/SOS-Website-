import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { HeroSlideshow } from "@/components/home/hero-slideshow"
import { galleryImages } from "@/lib/gallery-images"

const heroSlides = galleryImages.map(({ src, alt }) => ({ src, alt }))

export function HeroSection() {
  return (
    <section className="relative overflow-hidden text-background">
      <HeroSlideshow slides={heroSlides} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-32 sm:pt-32 sm:pb-36 lg:px-8 lg:pt-40 lg:pb-40 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Strides Over Sidelines (SOS)
        </p>
        <h1 className="font-serif mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
          Let&apos;s Make Strides,
          <br />
          One Sideline at a Time
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-background/90">
          Through high-quality soccer training, mental performance education, academic support, and mentorship. Build confidence. Build discipline. Build opportunity.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/donate">
              Donate
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-background/30 bg-transparent text-background hover:bg-background/10"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="var(--background)"
          />
        </svg>
      </div>
    </section>
  )
}
