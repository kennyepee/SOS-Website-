import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Linkedin, Mail, MapPin } from "lucide-react"

const navigation = {
  about: [
    { name: "Our Story", href: "/about" },
    { name: "Mission", href: "/about/mission" },
    { name: "Our Approach", href: "/about/approach" },
    { name: "Team", href: "/team/staff" },
    { name: "Impact", href: "/impact" },
  ],
  programs: [
    { name: "2026 Summer Cohort", href: "/summer-cohort" },
    { name: "College/Pro Sessions", href: "/college-pro-sessions" },
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
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/images/sos-logo.png"
              alt="Strides Over Sidelines"
              width={160}
              height={70}
              className="h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/80 text-sm leading-relaxed">
              Delivering soccer training, mentorship, and mental performance tools to underserved youth across the Washington, DC metro area.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-background/80">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Washington, DC Metro Area</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/80">
                <Mail className="h-4 w-4 shrink-0" />
                <span>Stridesoversidelines@gmail.com</span>
              </div>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              {navigation.about.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/80 hover:text-background text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {navigation.programs.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/80 hover:text-background text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              {navigation.getInvolved.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/80 hover:text-background text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Media Links */}
          <div>
            <h4 className="font-semibold mb-4">Media</h4>
            <ul className="space-y-2">
              {navigation.media.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/80 hover:text-background text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-background/60 hover:text-background transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-background/60">
              © 2025 Strides Over Sidelines. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
