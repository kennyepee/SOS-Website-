import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles, Calendar, MapPin, Clock, Users, Target, Brain, Trophy, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Workshops | Strides Over Sidelines",
  description: "Join our soccer training clinics, mental performance sessions, and educational workshops for youth and families.",
}

const workshops = [
  {
    id: 1,
    title: "Fundamentals of Soccer Workshop",
    date: "Coming Soon",
    time: "TBD",
    location: "Washington, D.C.",
    ageGroup: "Ages 8-12",
    description: "A comprehensive workshop covering essential soccer skills including dribbling, passing, shooting, and team play. Perfect for beginners and intermediate players looking to strengthen their foundation.",
    capacity: "20 participants",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Mental Performance Training",
    date: "Coming Soon",
    time: "TBD",
    location: "Washington, D.C.",
    ageGroup: "Ages 10-15",
    description: "Learn sports psychology techniques to build confidence, manage pressure, set goals, and develop mental resilience both on and off the field.",
    capacity: "15 participants",
    icon: Brain,
  },
  {
    id: 3,
    title: "Goal Setting & Academic Success",
    date: "Coming Soon",
    time: "TBD",
    location: "Washington, D.C.",
    ageGroup: "Ages 8-15",
    description: "A workshop for student-athletes and their families on balancing academics and athletics, setting SMART goals, and building habits for success.",
    capacity: "25 participants",
    icon: Target,
  },
  {
    id: 4,
    title: "Community Soccer Day",
    date: "Coming Soon",
    time: "TBD",
    location: "Washington, D.C.",
    ageGroup: "All Ages",
    description: "A free community event bringing families together for soccer activities, games, skill demonstrations, and information about SOS programs.",
    capacity: "Open to all",
    icon: Users,
  },
]

const workshopTypes = [
  {
    title: "Soccer Training Clinics",
    description: "Hands-on skill development sessions led by experienced coaches.",
  },
  {
    title: "Mental Performance Sessions",
    description: "Sports psychology workshops building confidence and resilience.",
  },
  {
    title: "Academic & Life Skills",
    description: "Workshops on goal setting, time management, and success strategies.",
  },
  {
    title: "Family Workshops",
    description: "Sessions for parents and families on supporting young athletes.",
  },
]

export default function WorkshopsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Events
              </Link>
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Workshops
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Soccer training clinics, mental performance sessions, and educational workshops designed to develop well-rounded young athletes.
              </p>
            </div>
          </div>
        </section>

        {/* Workshop Types */}
        <section className="py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {workshopTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <h3 className="font-semibold text-foreground">{type.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshops List */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Upcoming Workshops
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Register for an upcoming workshop or check back for new sessions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {workshops.map((workshop) => (
                <div
                  key={workshop.id}
                  className="group flex flex-col p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/20"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <workshop.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3">
                        {workshop.ageGroup}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {workshop.title}
                      </h3>
                      <p className="mt-3 text-muted-foreground leading-relaxed">
                        {workshop.description}
                      </p>
                    </div>
                  </div>

                  {/* Workshop Details */}
                  <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{workshop.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{workshop.capacity}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button variant="outline" className="w-full" disabled>
                      Registration Opening Soon
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request a Workshop CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Request a Workshop
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Want to bring an SOS workshop to your school, community center, or organization? We'd love to discuss how we can create a custom workshop experience.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/contact">Request a Workshop</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  <Link href="/events">View All Events</Link>
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
