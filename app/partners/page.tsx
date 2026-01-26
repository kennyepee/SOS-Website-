import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Handshake, Building2, ExternalLink, Heart } from "lucide-react"

export const metadata = {
  title: "Our Partners | Strides Over Sidelines",
  description: "Meet the organizations and partners who collaborate with Strides Over Sidelines to create opportunities for underserved youth.",
}

const partners = [
  {
    id: 1,
    name: "Partner Organization 1",
    type: "Community Partner",
    description: "Description coming soon. This partner organization collaborates with SOS to expand access to quality soccer training and mentorship programs.",
    logo: null,
    website: "#",
  },
  {
    id: 2,
    name: "Partner Organization 2",
    type: "Education Partner",
    description: "Description coming soon. This partner provides academic support resources and educational programming to complement our athletic training.",
    logo: null,
    website: "#",
  },
  {
    id: 3,
    name: "Partner Organization 3",
    type: "Youth Sports Partner",
    description: "Description coming soon. This partner works with SOS to identify talented young athletes who would benefit from our comprehensive development model.",
    logo: null,
    website: "#",
  },
  {
    id: 4,
    name: "Partner Organization 4",
    type: "Corporate Sponsor",
    description: "Description coming soon. This partner provides funding and resources to help SOS reach more underserved youth in the D.C. metro area.",
    logo: null,
    website: "#",
  },
  {
    id: 5,
    name: "Partner Organization 5",
    type: "School Partner",
    description: "Description coming soon. This partner school hosts SOS programs and helps connect students with our training and mentorship opportunities.",
    logo: null,
    website: "#",
  },
]

const partnershipTypes = [
  {
    title: "Community Organizations",
    description: "Local nonprofits and community groups that help us identify and reach underserved youth.",
    icon: Building2,
  },
  {
    title: "Schools & Educators",
    description: "Educational institutions that host our programs and integrate with our academic support.",
    icon: Building2,
  },
  {
    title: "Corporate Sponsors",
    description: "Businesses that provide funding, resources, and volunteer support to expand our reach.",
    icon: Handshake,
  },
  {
    title: "Youth Sports Organizations",
    description: "Soccer clubs and leagues that collaborate on training and pathway development.",
    icon: Heart,
  },
]

export default function PartnersPage() {
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
                  <Handshake className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Our Partners
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                SOS works alongside schools, community organizations, and youth sports programs to create a network of support for young athletes. Together, we're building pathways to success.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How We Partner
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our partnerships span multiple sectors, each playing a vital role in our ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {partnershipTypes.map((type, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-card border border-border"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <type.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {type.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Meet Our Partners
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Organizations committed to empowering underserved youth alongside SOS.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="group flex flex-col rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Logo Placeholder */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 flex items-center justify-center p-8">
                    {partner.logo ? (
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={200}
                        height={100}
                        className="object-contain max-h-20"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="mx-auto h-20 w-20 rounded-xl bg-muted flex items-center justify-center">
                          <Building2 className="h-10 w-10 text-muted-foreground/50" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-3">Logo Coming Soon</p>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3">
                        {partner.type}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-foreground">
                        {partner.name}
                      </h3>
                      <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                        {partner.description}
                      </p>
                    </div>

                    {/* Link */}
                    <div className="mt-6">
                      <a
                        href={partner.website}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Visit Website
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Partner With SOS
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Are you an organization looking to make a meaningful impact on youth development? We'd love to explore partnership opportunities with you.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/contact">Become a Partner</Link>
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
