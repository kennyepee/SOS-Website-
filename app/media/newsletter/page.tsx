import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import { BackLink } from "@/components/layout/back-link"

export default function NewsletterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageSection containerClassName="max-w-4xl">
          <BackLink href="/media" label="Back to Media" />
        </PageSection>

        <PageHero title="Newsletter." />

        <PageSection>
          <div className="mx-auto max-w-2xl text-center">
            <SectionTitle centered>Coming Soon.</SectionTitle>
            <p className="mt-4 apple-body">
              Our newsletter is currently in the works. Check back soon for updates on programs, impact stories, and ways to get involved.
            </p>
          </div>
        </PageSection>
      </main>
      <Footer />
    </div>
  )
}
