import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { PhotoGallery } from "@/components/gallery/photo-gallery"

export const metadata = {
  title: "Media | Strides Over Sidelines",
  description: "SOS media - Podcast, social media, and newsletter to stay connected with our mission.",
}

const mediaChannels = [
  {
    title: "Podcast",
    description: "The SOS Podcast features conversations with athletes, coaches, mentors, and leaders who believe in sport as a platform for growth and opportunity.",
    href: "/media/podcast",
    cta: "Listen to the Podcast",
  },
  {
    title: "Social Media",
    description: "Follow us to see SOS in action, stay updated on programs and events, learn from mentors and athletes, and engage with the broader SOS mission.",
    href: "/media/social",
    cta: "Follow Us",
  },
  {
    title: "Newsletter",
    description: "The SOS Newsletter provides periodic updates on programs, impact, opportunities to get involved, and stories from our community.",
    href: "/media/newsletter",
    cta: "Sign Up",
  },
]

export default function MediaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Media."
          subtitle="Strides Over Sidelines uses media to share stories, highlight impact, and elevate conversations around sport, mentorship, and youth development."
        />

        <PageSection alt className="pt-0">
          <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              SOS in action.
            </h2>
            <p className="apple-subhead mx-auto mt-4 max-w-2xl text-base sm:text-lg md:text-xl">
              Moments from training sessions, mentorship, and community programs across the DC metro area.
            </p>
          </div>
          <PhotoGallery />
        </PageSection>

        <PageSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaChannels.map((channel, index) => (
              <Link key={index} href={channel.href} className="apple-nav-card group flex flex-col">
                <h2 className="text-2xl font-semibold text-foreground">
                  {channel.title}
                </h2>
                <p className="mt-3 apple-body flex-1">{channel.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 apple-link">
                  {channel.cta}
                  <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
