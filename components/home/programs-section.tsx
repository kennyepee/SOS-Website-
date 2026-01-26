import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, Users, Heart } from "lucide-react"

export function ProgramsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Approach
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Individual Level */}
          <div className="relative overflow-hidden rounded-xl bg-card p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <User className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-foreground">Support at the Individual Level</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Weekly training, mental performance instruction, mentorship, and practical navigation support for students and families.
            </p>
          </div>

          {/* Scalable Model */}
          <div className="relative overflow-hidden rounded-xl bg-card p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-foreground">Build a Model That Can Scale</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A repeatable hub approach across schools and communities, supported by curriculum, coach training, and outcome measurement.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/about">How It Works</Link>
          </Button>
        </div>

        {/* Get Involved Section */}
        <div className="mx-auto mt-20 max-w-5xl">
          <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground text-center sm:text-3xl">
            Get Involved
          </h3>
          <p className="mt-4 text-center text-muted-foreground">
            There are multiple ways to support SOS.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold text-foreground">Volunteer or Mentor</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Help students build confidence and consistency on and off the field.
              </p>
              <Button asChild variant="link" className="mt-4 text-primary">
                <Link href="/contact">Volunteer</Link>
              </Button>
            </div>

            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold text-foreground">Partner With Us</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Schools and community organizations can collaborate with SOS to expand access.
              </p>
              <Button asChild variant="link" className="mt-4 text-primary">
                <Link href="/contact">Partner</Link>
              </Button>
            </div>

            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold text-foreground">Sponsor or Donate</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Fuel programming, subsidies, safe operations, and long-term expansion.
              </p>
              <Button asChild variant="link" className="mt-4 text-primary">
                <Link href="/donate">Donate</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
