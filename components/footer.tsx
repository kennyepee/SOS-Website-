import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Linkedin, Mail, MapPin } from "lucide-react"

const navigation = {
  about: [
    { name: "About SOS", href: "/about" },
    { name: "Mission & Vision", href: "/mission-vision" },
    { name: "Our Team", href: "/team" },
    { name: "Advisors", href: "/advisors" },
    { name: "Partners", href: "/partners" },
  ],
  programs: [
    { name: "Events", href: "/events" },
    { name: "Workshops", href: "/events/workshops" },
    { name: "Fundraisers", href: "/events/fundraisers" },
    { name: "Case Studies", href: "/case-studies" },
  ],
  getInvolved: [
    { name: "Join Us", href: "/join-us" },
    { name: "Mentorship Program", href: "/join-us/mentorship" },
    { name: "Guest Speakers", href: "/join-us/guest-speakers" },
    { name: "Podcast Guest", href: "/join-us/podcast-guest" },
    { name: "Donate", href: "/donate" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Podcast", href: "/podcast" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "YouTube", href: "#", icon: Youtube },
    { name: "LinkedIn", href: "#", icon: Linkedin },
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
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/80 text-sm leading-relaxed">
              Empowering underserved youth through high-quality soccer training, mental performance education, academic support, and mentorship in the Washington, D.C. metro area.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-background/80">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Washington, D.C. Metro Area</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/80">
                <Mail className="h-4 w-4 shrink-0" />
                <span>StridesOverSidelines@gmail.com</span>
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

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
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
              &copy; {new Date().getFullYear()} Strides Over Sidelines (SOS). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
