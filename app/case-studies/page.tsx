import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, ArrowRight, MapPin, Calendar, Users } from "lucide-react"

export const metadata = {
  title: "Case Studies | Strides Over Sidelines",
  description: "Explore our program case studies and learn about the impact of Strides Over Sidelines on communities in the D.C. metro area.",
}

const caseStudies = [
  {
    id: 1,
    title: "Anacostia Pilot Program",
    location: "Anacostia, Washington D.C.",
    year: "2025-2026",
    status: "Active",
    description: "Our flagship pilot program bringing comprehensive youth development to one of D.C.'s most underserved communities. Learn about our approach, early outcomes, and lessons learned.",
    slug: "anacostia-pilot-program",
    featured: true,
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Case Studies
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Explore in-depth looks at our programs, their impact, and the lessons we're learning as we work to empower underserved youth.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies List */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-8">
              {caseStudies.map((study) => (
                <Link key={study.id} href={`/case-studies/${study.slug}`}>
                  <article className="group p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                            {study.status}
                          </span>
                          {study.featured && (
                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                              Featured
                            </span>
                          )}
                        </div>
                        <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {study.title}
                        </h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                          {study.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {study.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {study.year}
                          </span>
                        </div>

                        <div className="mt-6">
                          <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                            Read Case Study
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                More Case Studies Coming Soon
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                As SOS expands to new communities, we'll share detailed case studies documenting our approach, outcomes, and learnings.
              </p>
              <div className="mt-10">
                <Button asChild>
                  <Link href="/blog">Read Our Blog</Link>
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
