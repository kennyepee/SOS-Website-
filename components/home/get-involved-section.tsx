import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Handshake, Heart, ArrowRight } from "lucide-react"

const involvementPaths = [
  {
    icon: Users,
    title: "Volunteer",
    description: "Become a mentor and make a lasting impact on young athletes through consistent guidance and support.",
    cta: "Become a Mentor",
    href: "/get-involved/mentorship",
  },
  {
    icon: Handshake,
    title: "Partner",
    description: "Collaborate with SOS to expand access and strengthen programming in the DC metro area.",
    cta: "Partner With Us",
    href: "/contact",
  },
  {
    icon: Heart,
    title: "Donate",
    description: "Online donations are coming soon. Contact us to learn how you can support our mission today.",
    cta: "Coming Soon",
    href: "/donate",
  },
]

export function GetInvolvedSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get Involved
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Strides Over Sidelines is built by people who believe sport can be a platform for growth, leadership, and opportunity.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {involvementPaths.map((path) => (
            <div
              key={path.title}
              className="group flex flex-col p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <path.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold text-foreground">
                {path.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed flex-1">
                {path.description}
              </p>
              <div className="mt-6">
                <Link
                  href={path.href}
                  className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                >
                  {path.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
