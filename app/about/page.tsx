import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Eye, User, Users, CheckCircle, Heart } from "lucide-react"

export const metadata = {
  title: "About Us | Strides Over Sidelines",
  description: "Learn about our mission, vision, and how we support underserved youth through soccer training, mental performance, and mentorship.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                About Strides Over Sidelines
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                A Washington, D.C. metro-based youth development and advocacy organization serving underserved students ages 8 to 15.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Strides Over Sidelines (SOS) helps young athletes and their families navigate youth sports, academics, mental performance, and long-term opportunity through a structured cohort model paired with practical guidance and advocacy.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Mission */}
              <div className="relative overflow-hidden rounded-2xl bg-card p-8 lg:p-12 border border-border">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Target className="h-7 w-7" />
                </div>
                <h2 className="mt-6 font-serif text-2xl font-bold text-foreground lg:text-3xl">
                  Our Mission
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Strides Over Sidelines empowers underserved youth through high-quality soccer training, sports psychology, academic support, and mentorship. We equip students with the confidence, discipline, and skills needed to thrive on and off the field.
                </p>
              </div>

              {/* Vision */}
              <div className="relative overflow-hidden rounded-2xl bg-card p-8 lg:p-12 border border-border">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Eye className="h-7 w-7" />
                </div>
                <h2 className="mt-6 font-serif text-2xl font-bold text-foreground lg:text-3xl">
                  Our Vision
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  SOS exists to foster a generation of confident, resilient, and academically prepared young people by offering accessible programs in athletics, mental performance, and education throughout the Washington, D.C. metropolitan area and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How We Work
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                SOS is designed to support young people at two levels that reinforce each other.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Individual Level</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    We provide consistent, high-trust support to each child and family through weekly training, mental performance instruction, mentorship, and practical guidance that helps families access opportunities and make informed decisions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Community Level</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    We are building a repeatable model that improves how youth development pathways are delivered and accessed. By codifying curriculum, training coaches, measuring outcomes, and partnering with schools and community organizations, SOS aims to scale a hub-based approach across schools and communities over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes SOS Different */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What Makes SOS Different
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                SOS is built as a full pathway and support system, not a standalone sports program.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                "High-quality soccer training led by qualified coaches focused on fundamentals, teamwork, and leadership",
                "Mental performance tools that build confidence, emotional regulation, resilience, and goal setting",
                "Academic support and mentorship that reinforce discipline, consistency, and long-term development",
                "Family guidance and advocacy to help families understand options, timelines, and next steps across school and sport",
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg bg-card border border-border">
                  <CheckCircle className="h-6 w-6 shrink-0 text-primary" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Partners and Community Roots
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                SOS works alongside local schools, community organizations, and youth sports programs to identify students with potential who lack consistent access to coaching and support systems. We also collaborate with local partners to expand access, strengthen programming, and stay grounded in community needs.
              </p>
            </div>
          </div>
        </section>

        {/* Join SOS CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/20">
                  <Heart className="h-7 w-7 text-primary-foreground" />
                </div>
              </div>
              <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Join SOS
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                If you are a coach, mentor, partner organization, or potential sponsor, we would like to connect. SOS is building a model where opportunity is not determined by family income or proximity to private networks, and where young people get the support they need to thrive.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  <Link href="/donate">Support Our Mission</Link>
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
