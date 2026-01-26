import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { UserPlus, Users, Mic, Headphones, ArrowRight, Heart, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Join Us | Strides Over Sidelines",
  description: "Get involved with SOS through our mentorship program, as a guest speaker, or as a podcast guest.",
}

const opportunities = [
  {
    title: "Mentorship Program",
    description: "Become a mentor and make a lasting impact on a young athlete's life through consistent guidance, support, and encouragement.",
    icon: Users,
    link: "/join-us/mentorship",
    color: "primary",
    features: [
      "One-on-one mentoring relationships",
      "Training and support provided",
      "Flexible time commitment",
      "Make a lasting difference",
    ],
  },
  {
    title: "Guest Speakers",
    description: "Share your expertise and inspire young athletes by speaking at our workshops, events, and training sessions.",
    icon: Mic,
    link: "/join-us/guest-speakers",
    color: "accent",
    features: [
      "Share your story and expertise",
      "Inspire the next generation",
      "Flexible scheduling",
      "Various event formats",
    ],
  },
  {
    title: "Podcast Guest",
    description: "Join us on the SOS podcast to share your insights on youth development, sports, education, or community building.",
    icon: Headphones,
    link: "/join-us/podcast-guest",
    color: "primary",
    features: [
      "Share your perspective",
      "Reach a growing audience",
      "Professional recording setup",
      "Remote participation available",
    ],
  },
]

const impactStats = [
  { number: "100+", label: "Youth Served" },
  { number: "50+", label: "Volunteers" },
  { number: "20+", label: "Community Partners" },
  { number: "1000+", label: "Training Hours" },
]

export default function JoinUsPage() {
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
                Join Us
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                There are many ways to get involved with Strides Over Sidelines. Whether as a mentor, speaker, or podcast guest, your contribution helps us empower underserved youth.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-12 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
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

        {/* Opportunities */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ways to Get Involved
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose the opportunity that matches your skills and availability.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {opportunities.map((opportunity, index) => (
                <Link key={index} href={opportunity.link}>
                  <div className="group h-full flex flex-col p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-full ${
                      opportunity.color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                    }`}>
                      <opportunity.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {opportunity.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed flex-1">
                      {opportunity.description}
                    </p>

                    <ul className="mt-6 space-y-2">
                      {opportunity.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-6 border-t border-border">
                      <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Why Join SOS?
                </h2>
                <div className="mt-6 space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    When you join SOS, you become part of a community dedicated to creating opportunities for young people who need them most.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our volunteers and partners consistently tell us that working with SOS is as rewarding for them as it is for the youth we serve. You'll build meaningful relationships, develop new skills, and see the direct impact of your contribution.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Heart className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">Make an Impact</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Directly influence young lives</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Users className="h-8 w-8 text-accent" />
                  <h3 className="mt-4 font-semibold text-foreground">Join a Community</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Connect with like-minded people</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">Get Support</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Training and resources provided</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <UserPlus className="h-8 w-8 text-accent" />
                  <h3 className="mt-4 font-semibold text-foreground">Grow Personally</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Develop new skills and perspectives</p>
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
                Ready to Make a Difference?
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Have questions about getting involved? We'd love to hear from you and discuss how you can contribute to our mission.
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
