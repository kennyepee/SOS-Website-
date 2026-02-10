import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BoardGrid } from "./board-grid"

export const metadata = {
  title: "Board of Directors | Strides Over Sidelines",
  description: "Meet the Board of Directors guiding Strides Over Sidelines.",
}

export default function BoardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Our Team
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Meet the people driving the SOS mission forward.
              </p>
              {/* Team Navigation */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" className="border-background/30 text-background hover:bg-background/10 bg-transparent">
                  <Link href="/team/staff">Staff</Link>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/team/board">Board of Directors</Link>
                </Button>
                <Button asChild variant="outline" className="border-background/30 text-background hover:bg-background/10 bg-transparent">
                  <Link href="/team/advisors">Advisors</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Board Grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-12">Board of Directors</h2>
            <BoardGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
