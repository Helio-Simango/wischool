"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const TESTIMONIALS = [
  {
    id: "testimonial-01",
    name: "Mohh Jumah",
    role: "Senior Developer",
    avatar: "/images/avatar-mohh.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis",
  },
  {
    id: "testimonial-02",
    name: "John Mark",
    role: "Data Analyst",
    avatar: "/images/avatar-john.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis",
  },
  {
    id: "testimonial-03",
    name: "Mohh Jumah",
    role: "Senior Developer",
    avatar: "/images/avatar-mohh.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis",
  },
  {
    id: "testimonial-04",
    name: "John Mark",
    role: "Data Analyst",
    avatar: "/images/avatar-john.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis",
  },
] as const

const VISIBLE_DESKTOP = 2

export function ReviewsSection() {
  const [startIndex, setStartIndex] = useState(0)
  const [pressedBtn, setPressedBtn] = useState<"prev" | "next" | null>(null)

  const maxIndex = TESTIMONIALS.length - VISIBLE_DESKTOP

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

  const visibleTestimonials = TESTIMONIALS.slice(
    startIndex,
    startIndex + VISIBLE_DESKTOP
  )

  const navBtnBase =
    "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40"
  const navBtnIdle = "border border-primary text-primary hover:bg-primary-light"
  const navBtnActive = "bg-primary text-primary-foreground"

  return (
    <section
      className="py-10 md:py-16"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-310 px-4 md:px-6 lg:px-8">
        {/* Section Label - centered */}
        <p className="text-center text-sm font-semibold text-foreground">
          Reviews
        </p>

        {/* Content */}
        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
          {/* Left - Title + Nav */}
          <div className="shrink-0 lg:w-[30%]">
            <h2
              id="reviews-heading"
              className="font-heading text-2xl font-bold text-foreground text-balance md:text-3xl lg:text-4xl"
            >
              {"What Our "}
              <span className="text-primary underline decoration-primary decoration-2 underline-offset-4">
                Students
              </span>
              {" Say About Us"}
            </h2>

            {/* Nav Buttons */}
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                disabled={startIndex === 0}
                className={`${navBtnBase} ${
                  pressedBtn === "prev" ? navBtnActive : navBtnIdle
                }`}
                aria-label="Previous reviews"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={startIndex >= maxIndex}
                className={`${navBtnBase} ${
                  pressedBtn === "next" ? navBtnActive : navBtnIdle
                }`}
                aria-label="Next reviews"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right - Testimonial Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {visibleTestimonials.map((testimonial) => (
                <article
                  key={testimonial.id}
                  className="flex flex-col gap-4"
                >
                  {/* Avatar + Name */}
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs font-medium text-primary">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {testimonial.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}