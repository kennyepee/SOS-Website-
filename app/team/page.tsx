import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Users, Mail, Linkedin } from "lucide-react"

export const metadata = {
  title: "Our Team | Strides Over Sidelines",
  description: "Meet the dedicated team behind Strides Over Sidelines working to empower underserved youth through soccer, mentorship, and education.",
}

const teamMembers = [
  {
    id: 1,
    name: "Team Member 1",
    role: "Position Title",
    bio: "Bio coming soon. This team member is dedicated to empowering underserved youth through high-quality soccer training and mentorship programs.",
    image: null,
    linkedin: "#",
    email: "#",
  },
  {
    id: 2,
    name: "Team Member 2",
    role: "Position Title",
    bio: "Bio coming soon. This team member brings expertise in youth development and community engagement to the SOS mission.",
    image: null,
    linkedin: "#",
    email: "#",
  },
  {
    id: 3,
    name: "Team Member 3",
    role: "Position Title",
    bio: "Bio coming soon. This team member is passionate about creating pathways for young athletes to succeed on and off the field.",
    image: null,
    linkedin: "#",
    email: "#",
  },
  {
    id: 4,
    name: "Team Member 4",
    role: "Position Title",
    bio: "Bio coming soon. This team member focuses on building sustainable programs that support long-term youth development.",
    image: null,
    linkedin: "#",
    email: "#",
  },
  {
    id: 5,
    name: "Team Member 5",
    role: "Position Title",
    bio: "Bio coming soon. This team member works to connect families with resources and opportunities throughout the D.C. metro area.",
    image: null,
    linkedin: "#",
    email: "#",
  },
]

export default function TeamPage() {
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
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Meet Our Team
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                The passionate individuals driving the mission of Strides Over Sidelines forward, dedicated to creating opportunities for underserved youth in the Washington, D.C. metro area.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Headshot Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 flex items-center justify-center">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="mx-auto h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-3">
                          <Users className="h-12 w-12 text-muted-foreground/50" />
                        </div>
                        <p className="text-xs text-muted-foreground">Photo Coming Soon</p>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-primary mt-1">
                      {member.role}
                    </p>
                    <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="mt-6 flex gap-3">
                      <a
                        href={member.linkedin}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                      <a
                        href={member.email}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join the Team CTA */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Interested in Joining Our Team?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We're always looking for passionate individuals who want to make a difference in the lives of young athletes. Whether as a coach, mentor, or volunteer, there's a place for you at SOS.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/join-us">Get Involved</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
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
