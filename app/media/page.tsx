import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Radio, Headphones, Instagram, Mail, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Media | Strides Over Sidelines",
  description: "SOS media - Podcast, social media, and newsletter to stay connected with our mission.",
}

const mediaChannels = [
  {
    icon: Headphones,
    title: "Podcast",
    description: "The SOS Podcast features conversations with athletes, coaches, mentors, and leaders who believe in sport as a platform for growth and opportunity.",
    href: "/media/podcast",
    cta: "Listen to the Podcast",
  },
  {
    icon: Instagram,
    title: "Social Media",
    description: "Follow us to see SOS in action, stay updated on programs and events, learn from mentors and athletes, and engage with the broader SOS mission.",
    href: "/media/social",
    cta: "Follow Us",
  },
  {
    icon: Mail,
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
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <Radio className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Media
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Strides Over Sidelines uses media to share stories, highlight impact, and elevate conversations around sport, mentorship, and youth development.
              </p>
            </div>
          </div>
        </section>

        {/* Media Channels */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mediaChannels.map((channel, index) => (
                <div
                  key={index}
                  className="group flex flex-col p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <channel.icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 font-serif text-2xl font-bold text-foreground">
                    {channel.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed flex-1">
                    {channel.description}
                  </p>
                  <div className="mt-6">
                    <Button asChild>
                      <Link href={channel.href}>
                        {channel.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
