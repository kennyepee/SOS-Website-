import { cn } from "@/lib/utils"

type PageHeroProps = {
  title: string
  subtitle?: string
  eyebrow?: string
  children?: React.ReactNode
  className?: string
}

export function PageHero({ title, subtitle, eyebrow, children, className }: PageHeroProps) {
  return (
    <section className={cn("apple-section pt-8 md:pt-12 text-center", className)}>
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {eyebrow && <p className="apple-eyebrow">{eyebrow}</p>}
        <h1 className="apple-headline mt-2">{title}</h1>
        {subtitle && (
          <p className="apple-subhead mx-auto mt-4 max-w-2xl">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  )
}
