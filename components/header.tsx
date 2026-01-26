"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "About SOS", href: "/about" },
      { name: "Mission & Vision", href: "/mission-vision" },
      { name: "Our Team", href: "/team" },
      { name: "Advisors", href: "/advisors" },
      { name: "Partners", href: "/partners" },
    ],
  },
  {
    name: "Events",
    href: "/events",
    children: [
      { name: "All Events", href: "/events" },
      { name: "Workshops", href: "/events/workshops" },
      { name: "Fundraisers", href: "/events/fundraisers" },
    ],
  },
  {
    name: "Join Us",
    href: "/join-us",
    children: [
      { name: "Get Involved", href: "/join-us" },
      { name: "Mentorship Program", href: "/join-us/mentorship" },
      { name: "Guest Speakers", href: "/join-us/guest-speakers" },
      { name: "Podcast Guest", href: "/join-us/podcast-guest" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Podcast", href: "/podcast" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image
              src="/images/sos-logo.png"
              alt="Strides Over Sidelines"
              width={180}
              height={80}
              className="h-16 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-6">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.children ? (
                <>
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute left-0 top-full pt-2 w-48">
                      <div className="rounded-lg bg-card border border-border shadow-lg overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground ml-4">
            <Link href="/donate">Donate</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-6 pt-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.name ? null : item.name)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileOpenDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileOpenDropdown === item.name && (
                      <div className="ml-4 space-y-1 mt-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/donate">Donate</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
