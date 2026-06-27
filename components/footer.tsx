import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Linkedin } from "lucide-react"

const navigation = {
  about: [
    { name: "Our Story", href: "/about" },
    { name: "Mission", href: "/about/mission" },
    { name: "Our Approach", href: "/about/approach" },
    { name: "Team", href: "/team/staff" },
    { name: "Impact", href: "/impact" },
  ],
  programs: [
    { name: "SOS × 703 Warriors", href: "/2026-703-warriors" },
    { name: "Events", href: "/events" },
  ],
  getInvolved: [
    { name: "Mentorship", href: "/get-involved/mentorship" },
    { name: "Workshops", href: "/get-involved/workshops" },
    { name: "Podcast Guest", href: "/get-involved/podcast" },
    { name: "Donate", href: "/donate" },
  ],
  media: [
    { name: "Podcast", href: "/media/podcast" },
    { name: "Social Media", href: "/media/social" },
    { name: "Newsletter", href: "/media/newsletter" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Instagram", href: "https://www.instagram.com/stridesoversidelines", icon: Instagram },
    { name: "YouTube", href: "https://www.youtube.com/@StridesOverSidelines", icon: Youtube },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/strides-over-sidelines", icon: Linkedin },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Image
              src="/images/sos-logo.png"
              alt="Strides Over Sidelines"
              width={140}
              height={60}
              className="h-10 w-auto"
            />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Soccer training, mentorship, and mental performance tools for underserved youth in the DC metro area.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">About</h4>
            <ul className="space-y-2">
              {navigation.about.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">Programs</h4>
            <ul className="space-y-2">
              {navigation.programs.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">Get Involved</h4>
            <ul className="space-y-2">
              {navigation.getInvolved.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <div className="flex gap-4">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Strides Over Sidelines. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
