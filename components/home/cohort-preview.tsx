import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const highlights = [
  { label: "Partner", detail: "703 Warriors" },
  { label: "Location", detail: "Arlington, VA" },
  { label: "Dates", detail: "August–September 2026" },
  { label: "Focus", detail: "Mental performance & mental health" },
]

export function CohortPreview() {
  return (
    <section className="apple-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <p className="apple-eyebrow">SOS × 703 Warriors</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Mental Performance Program.
          </h2>
          <p className="apple-subhead mx-auto mt-4 max-w-2xl text-base sm:text-lg md:text-xl">
            On-field soccer training and in-person mentorship — giving young players the tools to succeed in the sport and in life.
          </p>
        </div>

        <div className="relative mx-auto mt-12 aspect-[16/10] max-w-4xl overflow-hidden rounded-2xl md:rounded-3xl bg-muted shadow-xl shadow-foreground/5">
          <Image
            src="/images/gallery/gallery-18.png"
            alt="703 Warriors player during SOS practice"
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {highlights.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-muted-foreground md:text-base">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg">
            <Link href="/2026-703-warriors">
              Learn more
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
