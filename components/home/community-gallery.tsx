import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { PhotoGallery } from "@/components/gallery/photo-gallery"
import { featuredGalleryImages } from "@/lib/gallery-images"

export function CommunityGallery() {
  return (
    <section className="apple-section apple-section-alt">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Community Moments.
          </h2>
          <p className="apple-subhead mx-auto mt-4 max-w-2xl text-base sm:text-lg md:text-xl">
            From the 703 Warriors to mentorship on the field — building confidence, discipline, and opportunity.
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <PhotoGallery images={featuredGalleryImages} variant="bento" />
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/media" className="apple-link inline-flex items-center gap-1">
            View full gallery
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
