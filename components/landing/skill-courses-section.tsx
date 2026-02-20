"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { CourseCard } from "@/components/landing/course-card"
import type { PopularCourse } from "@/types/landing"

const SKILL_COURSES: PopularCourse[] = [
  {
    id: "skill-business-01",
    title: "All You Need In Business Strategy",
    image: "/images/category-marketing.png",
    rating: 4.5,
    duration: "6 weeks",
    students: 1500,
    studentsLabel: "1.5k Students",
    price: 30.5,
  },
  {
    id: "skill-figma-01",
    title: "The Amazing Hack In Figma Prototyping",
    image: "/images/category-design.png",
    rating: 4.5,
    duration: "6 weeks",
    students: 1500,
    studentsLabel: "1.5k Students",
    price: 30.5,
  },
  {
    id: "skill-gamedev-01",
    title: "Introduction To Basic Game Developement",
    image: "/images/category-programming.png",
    rating: 4.5,
    duration: "6 weeks",
    students: 1500,
    studentsLabel: "1.5k Students",
    price: 30.5,
  },
  {
    id: "skill-marketing-02",
    title: "Advanced Social Media Marketing",
    image: "/images/course-marketing.png",
    rating: 4.7,
    duration: "4 weeks",
    students: 2300,
    studentsLabel: "2.3k Students",
    price: 25.0,
  },
  {
    id: "skill-ux-02",
    title: "UX Research Methods And Best Practices",
    image: "/images/course-ux.png",
    rating: 4.6,
    duration: "5 weeks",
    students: 1800,
    studentsLabel: "1.8k Students",
    price: 35.0,
  },
  {
    id: "skill-data-02",
    title: "Data Visualization With Python",
    image: "/images/course-data.png",
    rating: 4.8,
    duration: "8 weeks",
    students: 2100,
    studentsLabel: "2.1k Students",
    price: 40.0,
  },
]

const VISIBLE_DESKTOP = 3
const CARD_GAP = 24 /* gap-6 = 24px */

export function SkillCoursesSection() {
  const [startIndex, setStartIndex] = useState(0)
  const [pressedBtn, setPressedBtn] = useState<"prev" | "next" | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [cardWidth, setCardWidth] = useState(0)

  const maxIndex = SKILL_COURSES.length - VISIBLE_DESKTOP

  /* Measure card width on mount / resize */
  useEffect(() => {
    function measure() {
      if (!trackRef.current) return
      const containerWidth = trackRef.current.offsetWidth
      setCardWidth(
        (containerWidth - CARD_GAP * (VISIBLE_DESKTOP - 1)) / VISIBLE_DESKTOP
      )
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
    "absolute top-1/3 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40"
  const navBtnIdle = "border border-border bg-background hover:shadow-lg"
  const navBtnActive = "border-primary bg-primary text-primary-foreground"

  return (
    <section
      className="py-10 md:py-16"
      aria-labelledby="skill-courses-heading"
    >
      <div className="mx-auto max-w-310 px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2
            id="skill-courses-heading"
            className="font-heading text-xl font-bold text-foreground md:text-2xl"
          >
            Learn New Skill Within 2 Hours
          </h2>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 lg:hidden"
          >
            <ChevronDown className="h-4 w-4" />
            Sort by
          </button>
        </div>

        {/* Mobile: 2-column grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 lg:hidden">
          {SKILL_COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
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
            aria-label="Previous courses"
          >
            <ChevronLeft
              className={`h-5 w-5 ${
                pressedBtn === "prev"
                  ? "text-primary-foreground"
                  : "text-foreground"
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
              {SKILL_COURSES.map((course) => (
                <div
                  key={course.id}
                  className="w-full shrink-0"
                  style={{
                    minWidth:
                      cardWidth > 0
                        ? `${cardWidth}px`
                        : `calc((100% - ${CARD_GAP * (VISIBLE_DESKTOP - 1)}px) / ${VISIBLE_DESKTOP})`,
                    maxWidth: cardWidth > 0 ? `${cardWidth}px` : undefined,
                  }}
                >
                  <CourseCard course={course} />
                </div>
              ))}
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
            aria-label="Next courses"
          >
            <ChevronRight
              className={`h-5 w-5 ${
                pressedBtn === "next"
                  ? "text-primary-foreground"
                  : "text-foreground"
              }`}
            />
          </button>
        </div>

        {/* Carousel Indicators (desktop only) */}
        <div
          className="mt-6 hidden items-center justify-center gap-2 lg:flex"
          aria-hidden="true"
        >
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setStartIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === startIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide group ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
