import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trophy, Brain, Users, Compass } from "lucide-react"

const features = [
  {
    icon: Trophy,
    title: "Build Confidence & Discipline",
    description: "Through structured soccer training that develops both athletic skills and personal accountability.",
  },
  {
    icon: Brain,
    title: "Develop Mental Performance",
    description: "Sports psychology tools that build resilience, focus, and leadership skills for life.",
  },
  {
    icon: Users,
    title: "Connect with Mentors",
    description: "Current and former collegiate and professional athletes who model excellence and provide guidance.",
  },
  {
    icon: Compass,
    title: "Access New Pathways",
    description: "Exposure to college and professional environments that open doors to future opportunities.",
  },
]

export function MissionSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            SOS uses soccer as a vehicle for personal growth, leadership development, and opportunity. Our mentorship-driven model goes beyond training to build confident, disciplined young people.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="group relative flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild>
            <Link href="/about/approach">Our Approach</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/impact">See Our Impact</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
