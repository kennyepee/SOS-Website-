import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Users, Target, CheckCircle, TrendingUp, Heart, BookOpen, Brain, Trophy } from "lucide-react"

export const metadata = {
  title: "Anacostia Pilot Program | Strides Over Sidelines",
  description: "Explore our pilot program in Anacostia, bringing comprehensive youth development through soccer, mentorship, and education to one of D.C.'s most underserved communities.",
}

const programStats = [
  { number: "20+", label: "Youth Participants", icon: Users },
  { number: "10+", label: "Mentors & Volunteers", icon: Heart },
  { number: "50+", label: "Training Sessions", icon: Trophy },
  { number: "100%", label: "Community Partners", icon: Target },
]

const programPillars = [
  {
    icon: Trophy,
    title: "Soccer Training",
    description: "Weekly high-quality soccer training sessions focused on fundamentals, teamwork, and athletic development.",
  },
  {
    icon: Brain,
    title: "Mental Performance",
    description: "Sports psychology and mental skills training to build confidence, resilience, and emotional regulation.",
  },
  {
    icon: BookOpen,
    title: "Academic Support",
    description: "Tutoring, homework help, and academic mentorship to reinforce the connection between athletics and education.",
  },
  {
    icon: Heart,
    title: "Mentorship",
    description: "One-on-one and group mentorship providing consistent, high-trust relationships with positive role models.",
  },
]

const timeline = [
  {
    phase: "Phase 1",
    title: "Community Assessment & Partnership Building",
    status: "Completed",
    items: [
      "Identified Anacostia as target community based on need and opportunity",
      "Established partnerships with local schools and community organizations",
      "Recruited and trained initial cohort of mentors and coaches",
      "Secured facilities and resources for programming",
    ],
  },
  {
    phase: "Phase 2",
    title: "Program Launch",
    status: "In Progress",
    items: [
      "Enrolled first cohort of 20+ youth participants ages 8-15",
      "Launched weekly soccer training sessions",
      "Implemented mental performance curriculum",
      "Began family engagement and support programming",
    ],
  },
  {
    phase: "Phase 3",
    title: "Growth & Evaluation",
    status: "Upcoming",
    items: [
      "Expand to serve additional youth in the community",
      "Conduct comprehensive outcome evaluation",
      "Document lessons learned and best practices",
      "Develop model for replication in other communities",
    ],
  },
]

const outcomes = [
  "Youth participants demonstrate improved soccer skills and athletic confidence",
  "Participants show growth in mental performance indicators including goal-setting and resilience",
  "Strong family engagement and satisfaction with programming",
  "Successful partnerships with local schools and community organizations",
  "Mentor and coach retention and development",
]

export default function AnacostiaCaseStudyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Case Studies
              </Link>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                  Active Program
                </span>
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent">
                  Featured Case Study
                </span>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Anacostia Pilot Program
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Bringing comprehensive youth development to one of Washington, D.C.'s most historically underserved communities through soccer, mentorship, and education.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-background/60">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Anacostia, Washington D.C.
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  2025-2026
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Program Stats */}
        <section className="py-12 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {programStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20 mb-3">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <p className="text-3xl font-bold text-primary-foreground lg:text-4xl">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-sm text-primary-foreground/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Program Overview
              </h2>
              <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The Anacostia Pilot Program represents SOS's first comprehensive implementation of our youth development model. Located in one of Washington, D.C.'s most historically underserved communities, this program serves as both an opportunity to make immediate impact and a testing ground for our approach.
                </p>
                <p>
                  Anacostia faces significant challenges including high poverty rates, limited access to quality youth programming, and gaps in educational and athletic opportunities. These factors make it an ideal location for SOS to demonstrate the transformative potential of integrated youth development.
                </p>
                <p>
                  Our goal is not just to provide programming, but to build a sustainable model that can be replicated in other underserved communities across the D.C. metro area and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Pillars */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Program Components
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our integrated approach addresses the whole child through four interconnected pillars.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {programPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-card border border-border"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <pillar.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Program Timeline
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our phased approach to building sustainable impact.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {timeline.map((phase, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl border ${
                    phase.status === "In Progress"
                      ? "bg-primary/5 border-primary/20"
                      : phase.status === "Completed"
                      ? "bg-card border-border"
                      : "bg-muted/50 border-border"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <span className="inline-block w-fit px-3 py-1 text-xs font-bold rounded-full bg-primary text-primary-foreground">
                      {phase.phase}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {phase.title}
                    </h3>
                    <span className={`inline-block w-fit px-3 py-1 text-xs font-medium rounded-full ${
                      phase.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : phase.status === "In Progress"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {phase.status}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className={`h-5 w-5 shrink-0 mt-0.5 ${
                          phase.status === "Completed"
                            ? "text-green-600"
                            : phase.status === "In Progress"
                            ? "text-primary"
                            : "text-muted-foreground/50"
                        }`} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Early Outcomes */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent mb-6">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Early Outcomes
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  While the program is still in its early stages, we're already seeing positive indicators across our key outcome areas.
                </p>
              </div>

              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                    <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                    <p className="text-muted-foreground">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Lessons Learned
              </h2>
              <div className="mt-8 space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold text-foreground">Community Trust Takes Time</h3>
                  <p className="mt-2 text-muted-foreground">
                    Building genuine relationships with families and community members is essential and cannot be rushed. We've learned to prioritize consistent presence and follow-through.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold text-foreground">Integration Is Key</h3>
                  <p className="mt-2 text-muted-foreground">
                    The interconnection between soccer training, mental performance, and academic support creates a more powerful impact than any single component alone.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold text-foreground">Family Engagement Matters</h3>
                  <p className="mt-2 text-muted-foreground">
                    Engaging families as partners in their children's development amplifies outcomes and creates sustainability beyond our direct programming.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold text-foreground">Flexibility Within Structure</h3>
                  <p className="mt-2 text-muted-foreground">
                    Having a clear curriculum and approach while remaining flexible to community needs and individual circumstances is essential for success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Support the Anacostia Program
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Help us expand our impact in Anacostia and bring this model to more underserved communities. Your support makes a direct difference in young lives.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/donate">Donate Now</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  <Link href="/join-us">Get Involved</Link>
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
