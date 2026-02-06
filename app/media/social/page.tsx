import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Instagram, Youtube, Linkedin, ArrowLeft, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Social Media | Strides Over Sidelines",
  description: "Follow Strides Over Sidelines on social media.",
}

const followReasons = [
  "See SOS in action",
  "Stay updated on programs and events",
  "Learn from mentors and athletes",
  "Engage with the broader SOS mission",
]

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/stridesoversidelines", handle: "@stridesoversidelines" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@StridesOverSidelines", handle: "@StridesOverSidelines" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/strides-over-sidelines", handle: "Strides Over Sidelines" },
]

export default function SocialMediaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Link
                href="/media"
                className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Media
              </Link>
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <Instagram className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Follow the Movement
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Our social channels highlight program moments, mentor spotlights, training sessions, and stories from the SOS community.
              </p>
            </div>
          </div>
        </section>

        {/* Why Follow */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-2xl font-bold text-foreground">Follow us to:</h2>
              <div className="mt-6 space-y-4">
                {followReasons.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground text-center mb-12">
                Follow Us on Social Media
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <social.icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground">{social.name}</h3>
                    <p className="text-sm text-muted-foreground">{social.handle}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
