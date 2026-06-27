"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { galleryImages, type GalleryImage } from "@/lib/gallery-images"
import { cn } from "@/lib/utils"

const layoutClasses: Record<NonNullable<GalleryImage["layout"]>, string> = {
  default: "col-span-1 row-span-1",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  large: "col-span-2 row-span-2",
}

type PhotoGalleryProps = {
  images?: GalleryImage[]
  variant?: "grid" | "bento"
  className?: string
}

export function PhotoGallery({
  images = galleryImages,
  variant = "grid",
  className,
}: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null

  const openImage = (index: number) => setSelectedIndex(index)
  const closeImage = () => setSelectedIndex(null)

  const showPrevious = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
  }

  const showNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % images.length)
  }

  return (
    <>
      <div
        className={cn(
          variant === "bento"
            ? "grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-3 md:gap-4"
            : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4",
          className
        )}
      >
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => openImage(index)}
            className={cn(
              "group relative overflow-hidden rounded-2xl bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              variant === "grid" && "aspect-[4/5] sm:aspect-square",
              variant === "bento" && "min-h-full " + layoutClasses[image.layout ?? "default"]
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={variant === "bento" ? "(max-width: 768px) 50vw, 25vw" : "(max-width: 768px) 50vw, 25vw"}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && closeImage()}>
        <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none sm:max-w-5xl">
          <DialogTitle className="sr-only">
            {selectedImage?.alt ?? "Gallery image"}
          </DialogTitle>
          {selectedImage && selectedIndex !== null && (
            <div className="relative">
              <button
                type="button"
                onClick={closeImage}
                className="absolute right-2 top-2 z-10 rounded-full bg-foreground/80 p-2 text-background transition-colors hover:bg-foreground"
                aria-label="Close gallery"
              >
                <X className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-foreground/80 p-2 text-background transition-colors hover:bg-foreground"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-foreground/80 p-2 text-background transition-colors hover:bg-foreground"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-foreground">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
