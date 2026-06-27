import Link from "next/link"
import { ChevronRight } from "lucide-react"

const features = [
  {
    title: "Build Confidence & Discipline",
    description: "Structured soccer training that develops athletic skills and personal accountability.",
  },
  {
    title: "Develop Mental Performance",
    description: "Sports psychology tools that build resilience, focus, and leadership for life.",
  },
  {
    title: "Connect with Mentors",
    description: "Current and former collegiate and professional athletes who model excellence.",
  },
  {
    title: "Access New Pathways",
    description: "Exposure to college and professional environments that open doors to opportunity.",
  },
]

export function MissionSection() {
  return (
    <section className="apple-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            What we do.
          </h2>
          <p className="apple-subhead mx-auto mt-4 max-w-2xl text-base sm:text-lg md:text-xl">
            Soccer as a vehicle for personal growth, leadership development, and opportunity.
          </p>
        </div>

        <div className="mx-auto mt-16 md:mt-20 grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-14">
          {features.map((feature) => (
            <div key={feature.title} className="text-center sm:text-left">
              <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-muted-foreground leading-relaxed md:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/about/approach" className="apple-link inline-flex items-center gap-1">
            Our approach
            <ChevronRight className="h-4 w-4" />
          </Link>
          <Link href="/impact" className="apple-link inline-flex items-center gap-1">
            See our impact
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
