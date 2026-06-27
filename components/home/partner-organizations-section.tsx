import Image from "next/image"

const partners = [
  {
    name: "703 Warriors",
    href: "https://www.703warriors.com/",
    logo: "/images/partners/703-warriors.png",
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

        <div className="mx-auto mt-14 max-w-xs">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex min-h-[140px] items-center justify-center rounded-2xl md:rounded-3xl bg-muted px-6 py-10 transition-colors hover:bg-muted/70">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={160}
                  className="h-24 w-auto object-contain md:h-28"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
