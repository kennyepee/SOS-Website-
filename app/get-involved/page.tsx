import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { UserPlus, Users, Sparkles, Headphones, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Get Involved | Strides Over Sidelines",
  description: "Get involved with SOS through mentorship, workshops, or podcast appearances.",
}

const opportunities = [
  {
    icon: Users,
    title: "Mentorship",
    description: "Mentors are central to the SOS model. At SOS, mentors are current or former high-level soccer players who understand the demands, discipline, and lessons that come with competitive sport.",
    href: "/get-involved/mentorship",
    cta: "Become a Mentor",
  },
  {
    icon: Sparkles,
    title: "Workshops",
    description: "SOS workshops provide participants with exposure to skills and perspectives beyond the field. Lead a workshop on leadership, mental performance, career readiness, or life skills.",
    href: "/get-involved/workshops",
    cta: "Host a Workshop",
  },
  {
    icon: Headphones,
    title: "Podcast",
    description: "The SOS Podcast features conversations at the intersection of sport, mentorship, and personal growth. Share your story and insights with our audience.",
    href: "/get-involved/podcast",
    cta: "Be a Guest",
  },
]

export default function GetInvolvedPage() {
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
                  <UserPlus className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Get Involved
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Strides Over Sidelines is built by people who believe sport can be a platform for growth, leadership, and opportunity. Whether you are a former athlete, coach, or supporter, there are meaningful ways to contribute to our mission.
              </p>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-12">
              {opportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 rounded-2xl bg-card border border-border"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <opportunity.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-foreground">
                        {opportunity.title}
                      </h2>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {opportunity.description}
                    </p>
                    <div className="mt-6">
                      <Button asChild>
                        <Link href={opportunity.href}>
                          {opportunity.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Questions?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Not sure which opportunity is right for you? Reach out and we'll help you find the best way to contribute.
              </p>
              <div className="mt-10">
                <Button asChild>
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
