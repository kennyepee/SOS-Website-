import Image from "next/image"
import Link from "next/link"

const partners = [
  {
    name: "Joga Bonito Training",
    href: "https://www.jogabonitotraining.com/",
    logo: "/images/partners/joga-bonito.png",
    external: true,
  },
  {
    name: "Learning Engine",
    href: null,
    logo: null,
  },
  {
    name: "703 Warriors",
    href: "https://www.703warriors.com/",
    logo: "/images/partners/703-warriors.png",
    external: true,
  },
]

export function PartnerOrganizationsSection() {
  return (
    <section className="apple-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="apple-eyebrow">Collaborators</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Partner organizations.
          </h2>
          <p className="apple-subhead mx-auto mt-4 max-w-2xl text-base sm:text-lg md:text-xl">
            SOS works alongside organizations that share our commitment to youth development through sport.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {partners.map((partner) => {
            const content = (
              <div className="flex h-full min-h-[140px] items-center justify-center rounded-2xl md:rounded-3xl bg-muted px-6 py-10 text-center transition-colors hover:bg-muted/70">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={160}
                    className="h-24 w-auto object-contain md:h-28"
                  />
                ) : (
                  <p className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                    {partner.name}
                  </p>
                )}
              </div>
            )

            if (partner.href) {
              if ("external" in partner && partner.external) {
                return (
                  <a
                    key={partner.name}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                )
              }

              return (
                <Link key={partner.name} href={partner.href} className="block">
                  {content}
                </Link>
              )
            }

            return <div key={partner.name}>{content}</div>
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Partner list pending confirmation.
        </p>
      </div>
    </section>
  )
}
