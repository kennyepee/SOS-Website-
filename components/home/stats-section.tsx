import Link from "next/link"
import { Button } from "@/components/ui/button"

export function StatsSection() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Why It Matters
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed">
            Too many talented young people face barriers that limit access to consistent coaching, trusted mentorship, and clear development pathways. SOS closes both the access gap and the information gap so that talent and motivation translate into sustained growth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="/about">Read Our Story</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              <Link href="/contact">Partner With SOS</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
