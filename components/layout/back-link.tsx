import Link from "next/link"
import { ChevronLeft } from "lucide-react"

type BackLinkProps = {
  href: string
  label: string
}

export function BackLink({ href, label }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="apple-link mb-8 inline-flex items-center gap-1 text-sm"
    >
      <ChevronLeft className="h-4 w-4" />
      {label}
    </Link>
  )
}
