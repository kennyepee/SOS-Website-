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
      { name: "Our Story", href: "/about" },
      { name: "Mission", href: "/about/mission" },
      { name: "Our Approach", href: "/about/approach" },
      { name: "Team", href: "/team/staff" },
    ],
  },
  { name: "703 Warriors 2026", href: "/2026-703-warriors" },
  { name: "Impact", href: "/impact" },
  {
    name: "Get Involved",
    href: "/get-involved",
    children: [
      { name: "Mentorship", href: "/get-involved/mentorship" },
      { name: "Workshops", href: "/get-involved/workshops" },
      { name: "Podcast", href: "/get-involved/podcast" },
    ],
  },
  {
    name: "Media",
    href: "/media",
    children: [
      { name: "Podcast", href: "/media/podcast" },
      { name: "Social Media", href: "/media/social" },
      { name: "Newsletter", href: "/media/newsletter" },
    ],
  },
  {
    name: "Events",
    href: "/events",
    children: [
      { name: "Calendar", href: "/events/calendar" },
      { name: "Workshops", href: "/events/workshops" },
      { name: "Training Sessions", href: "/events/training" },
      { name: "Fundraisers", href: "/events/fundraisers" },
    ],
  },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 lg:px-8">
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image
              src="/images/sos-logo.png"
              alt="Strides Over Sidelines"
              width={180}
              height={80}
              className="h-12 w-auto"
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
        <div className="hidden lg:flex lg:items-center lg:gap-x-1">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.children ? (
                <>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </Link>
                  {openDropdown === item.name && (
                    <div className="absolute left-0 top-full pt-1 w-52 z-50">
                      <div className="rounded-xl bg-background border border-border shadow-lg overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
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
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Button asChild size="sm" className="ml-3">
            <Link href="/donate">Donate</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <div className="space-y-1 px-4 pb-4 pt-2 max-h-[80vh] overflow-y-auto">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <div className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-foreground">
                      <Link
                        href={item.href}
                        className="flex-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.name ? null : item.name)}
                        className="p-1"
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileOpenDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
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
              <Button asChild className="w-full">
                <Link href="/donate">Donate</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
