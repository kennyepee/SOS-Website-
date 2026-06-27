"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type Slide = {
  src: string
  alt: string
}

type HeroSlideshowProps = {
  slides: Slide[]
  intervalMs?: number
}

export function HeroSlideshow({ slides, intervalMs = 5000 }: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const previousIndex =
    slides.length <= 1 ? 0 : (activeIndex - 1 + slides.length) % slides.length
  const visibleIndices =
    slides.length <= 1 ? [0] : Array.from(new Set([previousIndex, activeIndex]))

  useEffect(() => {
    if (slides.length <= 1) return

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, intervalMs)

    return () => clearInterval(timer)
  }, [slides.length, intervalMs])

  return (
    <div className="absolute inset-0" aria-hidden>
      {visibleIndices.map((index) => {
        const slide = slides[index]
        return (
          <Image
            key={slide.src}
            src={slide.src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={cn(
              "object-cover transition-opacity duration-1000 ease-in-out",
              index === activeIndex ? "opacity-100" : "opacity-0"
            )}
          />
        )
      })}
      <div className="absolute inset-0 bg-foreground/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-foreground/40" />
    </div>
  )
}
