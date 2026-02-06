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
      {
        name: "Team",
        href: "/team",
        children: [
          { name: "Staff", href: "/team/staff" },
          { name: "Board of Directors", href: "/team/board" },
          { name: "Advisors", href: "/team/advisors" },
        ],
      },
    ],
  },
  { name: "2026 Summer Cohort", href: "/summer-cohort" },
  { name: "College/Pro Sessions", href: "/college-pro-sessions" },
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
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null)
  const [mobileOpenSubDropdown, setMobileOpenSubDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image
              src="/images/sos-logo.png"
              alt="Strides Over Sidelines"
              width={180}
              height={80}
              className="h-14 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
              onMouseLeave={() => {
                setOpenDropdown(null)
                setOpenSubDropdown(null)
              }}
            >
              {item.children ? (
                <>
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md hover:bg-gray-50 transition-colors">
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute left-0 top-full pt-1 w-52 z-50">
                      <div className="rounded-lg bg-white border border-gray-100 shadow-lg">
                        {item.children.map((child) => (
                          <div
                            key={child.name}
                            className="relative"
                            onMouseEnter={() => child.children && setOpenSubDropdown(child.name)}
                            onMouseLeave={() => !child.children && setOpenSubDropdown(null)}
                          >
                            {child.children ? (
                              <>
                                <button className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                                  {child.name}
                                  <ChevronDown className="h-4 w-4 -rotate-90" />
                                </button>
                                {openSubDropdown === child.name && (
                                  <div className="absolute left-full top-0 ml-1 w-48">
                                    <div className="rounded-lg bg-white border border-gray-100 shadow-lg overflow-hidden">
                                      {child.children.map((subChild) => (
                                        <Link
                                          key={subChild.name}
                                          href={subChild.href}
                                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                        >
                                          {subChild.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
                                href={child.href}
                                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                              >
                                {child.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md hover:bg-gray-50 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90 text-white ml-3">
            <Link href="/donate">Donate</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100">
          <div className="space-y-1 px-4 pb-4 pt-2 max-h-[80vh] overflow-y-auto">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.name ? null : item.name)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileOpenDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileOpenDropdown === item.name && (
                      <div className="ml-4 space-y-1 mt-1">
                        {item.children.map((child) => (
                          <div key={child.name}>
                            {child.children ? (
                              <>
                                <button
                                  onClick={() => setMobileOpenSubDropdown(mobileOpenSubDropdown === child.name ? null : child.name)}
                                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                                >
                                  {child.name}
                                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileOpenSubDropdown === child.name ? 'rotate-180' : ''}`} />
                                </button>
                                {mobileOpenSubDropdown === child.name && (
                                  <div className="ml-4 space-y-1 mt-1">
                                    {child.children.map((subChild) => (
                                      <Link
                                        key={subChild.name}
                                        href={subChild.href}
                                        className="block rounded-lg px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        {subChild.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
                                href={child.href}
                                className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {child.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                <Link href="/donate">Donate</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
