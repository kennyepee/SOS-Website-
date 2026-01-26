import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Headphones, Instagram, Linkedin, Youtube } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Stay Connected */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Stay Connected
          </h2>
          <p className="mt-4 text-muted-foreground">
            Follow our work and hear stories from students, families, coaches, and the broader community.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </a>
            <a href="/podcast" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <Headphones className="h-5 w-5" />
              <span className="sr-only">Podcast</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Donate CTA */}
          <div className="relative overflow-hidden rounded-2xl bg-primary p-8 lg:p-12">
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-bold text-primary-foreground lg:text-3xl">
                Help Build Opportunity That Lasts
              </h3>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                Your support helps SOS deliver high-quality soccer training, mental performance education, career and academic readiness support, and mentorship to underserved youth.
              </p>
              <Button asChild className="mt-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/donate">Make a Donation</Link>
              </Button>
            </div>
            {/* Decorative element */}
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary-foreground/10" />
            <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-primary-foreground/5" />
          </div>

          {/* Podcast CTA */}
          <div className="relative overflow-hidden rounded-2xl bg-foreground p-8 lg:p-12">
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/20">
                <Headphones className="h-6 w-6 text-background" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-bold text-background lg:text-3xl">
                Listen to The SOS Podcast
              </h3>
              <p className="mt-4 text-background/80 leading-relaxed">
                Our storytelling and education platform making youth development knowledge accessible while elevating community voices.
              </p>
              <Button asChild variant="outline" className="mt-6 border-background/30 text-background hover:bg-background/10 bg-transparent">
                <Link href="/podcast">Explore Episodes</Link>
              </Button>
            </div>
            {/* Decorative element */}
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-background/10" />
            <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-background/5" />
          </div>
        </div>
      </div>
    </section>
  )
}
