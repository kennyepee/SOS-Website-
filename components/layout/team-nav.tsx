import Link from "next/link"
import { cn } from "@/lib/utils"

type TeamNavProps = {
  active: "staff" | "board" | "advisors"
}

const tabs = [
  { id: "staff" as const, label: "Staff", href: "/team/staff" },
  { id: "board" as const, label: "Board", href: "/team/board" },
  { id: "advisors" as const, label: "Advisors", href: "/team/advisors" },
]

export function TeamNav({ active }: TeamNavProps) {
  return (
    <nav className="mt-8 flex flex-wrap items-center justify-center gap-2">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={tab.href}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            active === tab.id
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  )
}
