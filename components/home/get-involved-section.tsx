import Link from "next/link"
import { ChevronRight } from "lucide-react"

const involvementPaths = [
  {
    title: "Volunteer",
    description: "Become a mentor and make a lasting impact on young athletes through consistent guidance and support.",
    cta: "Become a mentor",
    href: "/get-involved/mentorship",
  },
  {
    title: "Partner",
    description: "Collaborate with SOS to expand access and strengthen programming in the DC metro area.",
    cta: "Partner with us",
    href: "/contact",
  },
  {
    title: "Donate",
    description: "Support our mission with a one-time or monthly donation to help underserved youth thrive.",
    cta: "Donate now",
    href: "/donate",
  },
]

export function GetInvolvedSection() {
  return (
    <section className="apple-section apple-section-alt">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Get involved.
          </h2>
          <p className="apple-subhead mx-auto mt-4 max-w-2xl text-base sm:text-lg md:text-xl">
            Built by people who believe sport can be a platform for growth, leadership, and opportunity.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {involvementPaths.map((path) => (
            <div key={path.title} className="text-center">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                {path.title}
              </h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed md:text-lg">
                {path.description}
              </p>
              <Link
                href={path.href}
                className="apple-link mt-4 inline-flex items-center justify-center gap-1"
              >
                {path.cta}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
