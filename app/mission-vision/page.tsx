import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Eye, Compass, Star, Heart, Users, BookOpen, Trophy } from "lucide-react"

export const metadata = {
  title: "Mission & Vision | Strides Over Sidelines",
  description: "Discover the mission, vision, and core values that drive Strides Over Sidelines in empowering underserved youth.",
}

const coreValues = [
  {
    icon: Heart,
    title: "Commitment to Youth",
    description: "We prioritize the holistic development of every young person we serve, focusing on their athletic, academic, and personal growth.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "We work alongside families, schools, and local organizations to create a supportive ecosystem for youth development.",
  },
  {
    icon: BookOpen,
    title: "Education First",
    description: "We believe academic success and athletic achievement go hand in hand, reinforcing discipline and long-term thinking.",
  },
  {
    icon: Trophy,
    title: "Excellence in All Things",
    description: "We strive for high-quality programming that challenges young athletes while meeting them where they are.",
  },
  {
    icon: Compass,
    title: "Accessible Pathways",
    description: "We work to remove barriers so that opportunity is not determined by family income or zip code.",
  },
  {
    icon: Star,
    title: "Long-term Relationships",
    description: "We build consistent, high-trust relationships with families to support youth development over time.",
  },
]

export default function MissionVisionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Mission & Vision
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                The driving purpose behind Strides Over Sidelines and our vision for transforming youth development in the Washington, D.C. metro area.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-8">
                  <Target className="h-8 w-8" />
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Our Mission
                </h2>
                <div className="mt-6 space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Strides Over Sidelines empowers underserved youth ages 8-15 through high-quality soccer training, sports psychology, academic support, and mentorship.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We equip students with the confidence, discipline, and skills needed to thrive on and off the field—building a foundation for success in school, in sport, and in life.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 p-12 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-6 rounded-xl bg-card border border-border">
                        <Trophy className="h-8 w-8 text-primary mx-auto" />
                        <p className="mt-3 font-medium text-foreground">Soccer Training</p>
                      </div>
                      <div className="p-6 rounded-xl bg-card border border-border">
                        <Compass className="h-8 w-8 text-accent mx-auto" />
                        <p className="mt-3 font-medium text-foreground">Mental Performance</p>
                      </div>
                      <div className="p-6 rounded-xl bg-card border border-border">
                        <BookOpen className="h-8 w-8 text-primary mx-auto" />
                        <p className="mt-3 font-medium text-foreground">Academic Support</p>
                      </div>
                      <div className="p-6 rounded-xl bg-card border border-border">
                        <Users className="h-8 w-8 text-accent mx-auto" />
                        <p className="mt-3 font-medium text-foreground">Mentorship</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-primary/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-accent/20 mb-6">
                      <Eye className="h-12 w-12 text-accent" />
                    </div>
                    <div className="space-y-4 max-w-md">
                      <div className="p-4 rounded-lg bg-card/80 backdrop-blur border border-border">
                        <p className="font-medium text-foreground">Confident & Resilient Youth</p>
                      </div>
                      <div className="p-4 rounded-lg bg-card/80 backdrop-blur border border-border">
                        <p className="font-medium text-foreground">Academically Prepared</p>
                      </div>
                      <div className="p-4 rounded-lg bg-card/80 backdrop-blur border border-border">
                        <p className="font-medium text-foreground">Accessible to All</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent mb-8">
                  <Eye className="h-8 w-8" />
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Our Vision
                </h2>
                <div className="mt-6 space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    SOS exists to foster a generation of confident, resilient, and academically prepared young people by offering accessible programs in athletics, mental performance, and education throughout the Washington, D.C. metropolitan area and beyond.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We envision a future where opportunity is not determined by family income or proximity to private networks—where every young person has access to the coaching, mentorship, and support they need to reach their full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Core Values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The principles that guide everything we do at Strides Over Sidelines.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/20"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The SOS Difference */}
        <section className="py-20 lg:py-28 bg-foreground text-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                The SOS Difference
              </h2>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                SOS is built as a full pathway and support system, not a standalone sports program. We provide consistent, high-trust support through weekly training, mental performance instruction, mentorship, and practical guidance that helps families access opportunities and make informed decisions.
              </p>
              <p className="mt-4 text-lg text-background/80 leading-relaxed">
                We are building a repeatable model that improves how youth development pathways are delivered and accessed—one that can scale to serve more communities over time.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Join Our Mission
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Whether as a volunteer, mentor, partner, or donor, there are many ways to help us create pathways to success for underserved youth.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/join-us">Get Involved</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  <Link href="/donate">Donate</Link>
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
