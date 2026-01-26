import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Award, Mail, Linkedin, Quote } from "lucide-react"

export const metadata = {
  title: "Our Advisors | Strides Over Sidelines",
  description: "Meet our advisory board - experienced professionals guiding Strides Over Sidelines in our mission to empower underserved youth.",
}

const advisors = [
  {
    id: 1,
    name: "Advisor 1",
    title: "Advisory Role",
    organization: "Organization Name",
    bio: "Bio coming soon. This advisor brings years of experience in youth development and nonprofit leadership to guide SOS strategy and growth.",
    image: null,
    linkedin: "#",
    email: "#",
  },
  {
    id: 2,
    name: "Advisor 2",
    title: "Advisory Role",
    organization: "Organization Name",
    bio: "Bio coming soon. This advisor provides expertise in sports management and community outreach programs across the D.C. metro region.",
    image: null,
    linkedin: "#",
    email: "#",
  },
  {
    id: 3,
    name: "Advisor 3",
    title: "Advisory Role",
    organization: "Organization Name",
    bio: "Bio coming soon. This advisor contributes insights from education and mentorship sectors to strengthen our programming.",
    image: null,
    linkedin: "#",
    email: "#",
  },
  {
    id: 4,
    name: "Advisor 4",
    title: "Advisory Role",
    organization: "Organization Name",
    bio: "Bio coming soon. This advisor offers strategic guidance on organizational development and partnership building.",
    image: null,
    linkedin: "#",
    email: "#",
  },
  {
    id: 5,
    name: "Advisor 5",
    title: "Advisory Role",
    organization: "Organization Name",
    bio: "Bio coming soon. This advisor shares expertise in mental performance and athlete development to enhance our holistic approach.",
    image: null,
    linkedin: "#",
    email: "#",
  },
]

export default function AdvisorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <Award className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Our Advisors
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Experienced leaders and experts who provide strategic guidance and support to help Strides Over Sidelines achieve its mission of empowering underserved youth.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Quote */}
        <section className="py-16 bg-primary/5">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center">
              <Quote className="mx-auto h-10 w-10 text-primary/30" />
              <blockquote className="mt-6 font-serif text-2xl italic text-foreground leading-relaxed">
                "Our advisors bring invaluable expertise and perspective that helps us create sustainable impact for young athletes and their families."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Advisors Grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {advisors.map((advisor) => (
                <div
                  key={advisor.id}
                  className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/20"
                >
                  {/* Headshot Placeholder */}
                  <div className="shrink-0">
                    <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-xl bg-gradient-to-br from-accent/10 via-primary/10 to-accent/5 flex items-center justify-center mx-auto sm:mx-0">
                      {advisor.image ? (
                        <Image
                          src={advisor.image}
                          alt={advisor.name}
                          width={160}
                          height={160}
                          className="rounded-xl object-cover"
                        />
                      ) : (
                        <div className="text-center">
                          <div className="mx-auto h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                            <Award className="h-8 w-8 text-muted-foreground/50" />
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">Photo Coming Soon</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {advisor.name}
                    </h3>
                    <p className="text-sm font-medium text-primary mt-1">
                      {advisor.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {advisor.organization}
                    </p>
                    <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                      {advisor.bio}
                    </p>

                    {/* Social Links */}
                    <div className="mt-4 flex gap-3 justify-center sm:justify-start">
                      <a
                        href={advisor.linkedin}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                      <a
                        href={advisor.email}
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

        {/* Become an Advisor CTA */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Share Your Expertise
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Are you an experienced professional passionate about youth development? We welcome advisors who can contribute their expertise to help shape the future of SOS.
              </p>
              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href="/contact">Connect With Us</Link>
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
