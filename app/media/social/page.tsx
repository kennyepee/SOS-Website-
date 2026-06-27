import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import { BackLink } from "@/components/layout/back-link"
import { ChevronRight } from "lucide-react"

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
  { name: "Instagram", href: "https://www.instagram.com/stridesoversidelines", handle: "@stridesoversidelines" },
  { name: "YouTube", href: "https://www.youtube.com/@StridesOverSidelines", handle: "@StridesOverSidelines" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/strides-over-sidelines", handle: "Strides Over Sidelines" },
]

export default function SocialMediaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageSection containerClassName="max-w-4xl">
          <BackLink href="/media" label="Back to Media" />
        </PageSection>

        <PageHero
          title="Follow the Movement."
          subtitle="Our social channels highlight program moments, mentor spotlights, training sessions, and stories from the SOS community."
        />

        <PageSection>
          <div className="mx-auto max-w-3xl">
            <SectionTitle as="h3">Follow us to:</SectionTitle>
            <ul className="mt-6 space-y-4">
              {followReasons.map((item, index) => (
                <li key={index} className="apple-list-item">
                  <span className="apple-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </PageSection>

        <PageSection alt>
          <div className="mx-auto max-w-3xl">
            <SectionTitle centered className="mb-12">
              Follow Us on Social Media.
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-nav-card group text-center"
                >
                  <h3 className="font-semibold text-foreground">{social.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{social.handle}</p>
                  <span className="mt-4 inline-flex items-center gap-1 apple-link">
                    Follow
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
