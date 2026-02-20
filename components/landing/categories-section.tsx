"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const CATEGORIES = [
  {
    name: "Marketing",
    image: "/images/category-marketing.png",
    description:
      "Master digital marketing strategies, SEO, social media campaigns, and data-driven growth techniques.",
  },
  {
    name: "Design",
    image: "/images/category-design.png",
    description:
      "Learn UI/UX design, visual identity, prototyping, and modern design tools like Figma and Adobe Suite.",
  },
  {
    name: "Programming",
    image: "/images/category-programming.png",
    description:
      "Build real-world applications with JavaScript, Python, React, and full-stack development frameworks.",
  },
  {
    name: "Technology",
    image: "/images/category-technology.png",
    description:
      "Explore AI, cloud computing, cybersecurity, VR/AR, and the latest innovations shaping the future.",
  },
  {
    name: "Data Science",
    image: "/images/category-programming.png",
    description:
      "Dive into data analytics, machine learning, statistical modeling, and Python for data-driven insights.",
  },
  {
    name: "Business",
    image: "/images/category-marketing.png",
    description:
      "Develop leadership, project management, entrepreneurship, and strategic thinking skills for success.",
  },
] as const

const VISIBLE_COUNT = 4
const CARD_GAP = 20 /* gap-5 = 20px */

export function CategoriesSection() {
  const [startIndex, setStartIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [pressedBtn, setPressedBtn] = useState<"prev" | "next" | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [cardWidth, setCardWidth] = useState(0)

  const maxIndex = CATEGORIES.length - VISIBLE_COUNT

  /* Measure card width on mount / resize */
  useEffect(() => {
    function measure() {
      if (!trackRef.current) return
      const containerWidth = trackRef.current.offsetWidth
      setCardWidth((containerWidth - CARD_GAP * (VISIBLE_COUNT - 1)) / VISIBLE_COUNT)
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const handlePrev = useCallback(() => {
    setPressedBtn("prev")
    setStartIndex((prev) => Math.max(0, prev - 1))
    setTimeout(() => setPressedBtn(null), 200)
  }, [])

  const handleNext = useCallback(() => {
    setPressedBtn("next")
    setStartIndex((prev) => Math.min(maxIndex, prev + 1))
    setTimeout(() => setPressedBtn(null), 200)
  }, [maxIndex])

  const translateX = startIndex * (cardWidth + CARD_GAP)

  const navBtnBase =
    "absolute top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40"
  const navBtnIdle = "border border-border bg-background hover:shadow-lg"
  const navBtnActive = "border-primary bg-primary text-primary-foreground"

  return (
    <section className="py-10 md:py-16" aria-labelledby="categories-heading">
      <div className="mx-auto max-w-310 px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2
            id="categories-heading"
            className="font-heading text-xl font-bold text-foreground md:text-2xl"
          >
            Choose favourite course from top cartegories
          </h2>
          <a
            href="#courses"
            className="text-sm font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            See all
          </a>
        </div>

        {/* Mobile: horizontal scroll showing 3 per row */}
        <div className="mt-8 lg:hidden">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {CATEGORIES.map((category, idx) => (
              console.log(idx),
              <article
                key={category.name}
                className="w-[calc((100%-24px)/3)] min-w-[calc((100%-24px)/3)] shrink-0 cursor-pointer overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-3/4 w-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={`${category.name} course category`}
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-sm font-bold text-white">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Desktop: Carousel */}
        <div className="relative mt-8 hidden lg:block">
          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`${navBtnBase} -left-4 lg:-left-5 ${
              pressedBtn === "prev" ? navBtnActive : navBtnIdle
            }`}
            aria-label="Previous categories"
          >
            <ChevronLeft
              className={`h-5 w-5 ${
                pressedBtn === "prev" ? "text-primary-foreground" : "text-foreground"
              }`}
            />
          </button>

          {/* Sliding track */}
          <div ref={trackRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: `${CARD_GAP}px`,
                transform: `translateX(-${translateX}px)`,
              }}
            >
              {CATEGORIES.map((category, idx) => {
                const isHovered = hoveredIndex === idx

                return (
                  <article
                    key={category.name}
                    className="w-full shrink-0 cursor-pointer overflow-hidden rounded-2xl"
                    style={{
                      minWidth: cardWidth > 0 ? `${cardWidth}px` : `calc((100% - ${CARD_GAP * (VISIBLE_COUNT - 1)}px) / ${VISIBLE_COUNT})`,
                      maxWidth: cardWidth > 0 ? `${cardWidth}px` : undefined,
                    }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Image */}
                    <div className="relative aspect-3/4 w-full overflow-hidden">
                      <Image
                        src={category.image}
                        alt={`${category.name} course category`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        style={{
                          transform: isHovered ? "scale(1.08)" : "scale(1)",
                        }}
                      />

                      {/* Permanent dark gradient at bottom */}
                      <div
                        className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"
                        aria-hidden="true"
                      />

                      {/* Hover overlay - fades in */}
                      <div
                        className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10 transition-opacity duration-500 ease-in-out"
                        style={{ opacity: isHovered ? 1 : 0 }}
                        aria-hidden="true"
                      />

                      {/* Category name - always visible at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-lg font-bold text-white">
                          {category.name}
                        </h3>

                        {/* Description slides up on hover */}
                        <p
                          className="mt-1 overflow-hidden text-sm leading-relaxed text-white/90 transition-all duration-500 ease-in-out"
                          style={{
                            maxHeight: isHovered ? "80px" : "0px",
                            opacity: isHovered ? 1 : 0,
                            transform: isHovered
                              ? "translateY(0)"
                              : "translateY(12px)",
                          }}
                        >
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={startIndex >= maxIndex}
            className={`${navBtnBase} -right-4 lg:-right-5 ${
              pressedBtn === "next" ? navBtnActive : navBtnIdle
            }`}
            aria-label="Next categories"
          >
            <ChevronRight
              className={`h-5 w-5 ${
                pressedBtn === "next" ? "text-primary-foreground" : "text-foreground"
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  )
}
