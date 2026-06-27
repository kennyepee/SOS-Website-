import { cn } from "@/lib/utils"

type SectionTitleProps = {
  children: React.ReactNode
  as?: "h2" | "h3"
  className?: string
  centered?: boolean
}

export function SectionTitle({
  children,
  as: Tag = "h2",
  className,
  centered = false,
}: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        Tag === "h2"
          ? "text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance"
          : "text-xl font-semibold tracking-tight text-foreground md:text-2xl",
        centered && "text-center",
        className
      )}
    >
      {children}
    </Tag>
  )
}
