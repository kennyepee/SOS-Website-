import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageSection } from "@/components/layout/page-section"

type PageCtaProps = {
  title: string
  description: string
  buttonText: string
  buttonHref: string
}

export function PageCta({ title, description, buttonText, buttonHref }: PageCtaProps) {
  return (
    <PageSection alt>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="apple-body mt-4">{description}</p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href={buttonHref}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </PageSection>
  )
}
