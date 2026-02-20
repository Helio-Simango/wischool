import Image from "next/image"
import { Button } from "@/components/ui/wischool-button"
import { InstructorsCard, StatsCard } from "@/components/landing/hero-cards"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-28 md:pt-32"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-310 px-4 md:px-6 lg:px-8">
        {/* Hero Container with rounded corners and gradient background */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#E1FFEE] via-[#E4FFFF]/30 to-[#DDFFFF]/50 px-8 py-12 md:px-12 md:py-16 lg:min-h-151.25 lg:px-16 lg:py-20">
          {/* Decorative blob top-left */}
          <div
            className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#E1FFEE] opacity-60 blur-3xl"
            aria-hidden="true"
          />
          {/* Decorative blob top-right */}
          <div
            className="pointer-events-none absolute -top-10 -right-10 h-200 w-32 rounded-full bg-[#DDFFFF] opacity-80"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 lg:max-w-[50%]">
              <h1
                id="hero-heading"
                className="font-heading text-4xl font-black leading-[1.1] tracking-tight text-foreground text-balance md:text-5xl lg:text-[56px]"
              >
                {"Quality "}
                <span className="text-primary">{"Education"}</span>
                <br />
                {"By Any Means"}
                <br />
                {"Necessary."}
              </h1>

              <div className="mt-8">
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-xl px-10 text-base font-semibold"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Right Content - Image + Floating Cards */}
            <div className="relative flex flex-1 items-center justify-center lg:justify-end">
              {/* Student Image */}
              <div className="relative w-full max-w-105">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/images/hero-student.png"
                    alt="A student holding books, representing quality education at WiSchool"
                    width={420}
                    height={500}
                    className="object-cover"
                    style={{ width: "100%", height: "auto" }}
                    loading="eager"
                    priority
                  />
                </div>

                {/* Instructors Floating Card - bottom-left overlap */}
                <div className="absolute -bottom-4 -left-8 z-20 hidden md:block lg:-left-24">
                  <InstructorsCard />
                </div>

                {/* Stats Floating Card - bottom-right */}
                <div className="absolute -right-6 bottom-8 z-20 hidden md:block lg:-right-16">
                  <StatsCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
