import { cn } from "@/lib/utils"

type PageSectionProps = {
  children: React.ReactNode
  alt?: boolean
  className?: string
  containerClassName?: string
}

export function PageSection({ children, alt, className, containerClassName }: PageSectionProps) {
  return (
    <section className={cn("apple-section", alt && "apple-section-alt", className)}>
      <div className={cn("mx-auto max-w-6xl px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  )
}
