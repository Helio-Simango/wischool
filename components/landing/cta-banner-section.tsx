import Image from "next/image"
import { Button } from "@/components/ui/wischool-button"

export function CtaBannerSection() {
  return (
    <section
      className="relative w-full"
      aria-labelledby="cta-banner-heading"
    >
      {/* Full-width container, no border-radius, fills all space */}
      <div className="relative mx-auto w-full min-h-100 lg:min-h-151 overflow-hidden">

        {/* Layer 1: Large background image (woman with tech) covering the full container */}
        <Image
          src="/images/cta-bg-woman.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
          priority={false}
        />

        {/* Layer 2: Dark overlay on top of bg image */}
        <div
          className="absolute inset-0 bg-[#1a2a3a]/80"
          aria-hidden="true"
        />

        {/* Layer 3: Wave pattern repeated 3 times across, on top of the overlay */}
        <div
          className="absolute inset-0 flex items-end overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="relative w-full h-[60%] flex">
            {/* Wave 1 - left */}
            <div className="relative flex-1 min-w-[33.33%]">
              <Image
                src="/images/cta-wave-pattern.png"
                alt=""
                fill
                className="object-cover opacity-40"
              />
            </div>
            {/* Wave 2 - center */}
            <div className="relative flex-1 min-w-[33.33%]">
              <Image
                src="/images/cta-wave-pattern.png"
                alt=""
                fill
                className="object-cover opacity-40"
              />
            </div>
            {/* Wave 3 - right */}
            <div className="relative flex-1 min-w-[33.33%]">
              <Image
                src="/images/cta-wave-pattern.png"
                alt=""
                fill
                className="object-cover opacity-40"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="relative z-10 hidden lg:flex lg:items-center lg:min-h-[604px] px-6 lg:px-0">
          {/* Featured Student Image - positioned on the left */}
          <div
            className="relative flex-shrink-0 ml-[98px]"
            style={{ marginTop: '15px' }}
          >
            <div className="relative h-[517px] w-[513px] overflow-hidden rounded-[20px]">
              <Image
                src="/images/cta-featured-student.png"
                alt="A student with headphones studying on a laptop"
                fill
                className="object-cover"
              />
              {/* Dark overlay on the featured image */}
              <div
                className="absolute inset-0 bg-[#00000033] rounded-[20px]"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Content - right side */}
          <div className="relative z-10 flex flex-col px-12 py-16 ml-8 max-w-[560px]">
            <h2
              id="cta-banner-heading"
              className="font-poppins text-[40px] font-bold italic leading-[1.2] text-background text-balance"
            >
              {"You Don\u2019t Have To See The Whole Staircase Just Take The First Step"}
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-background/70 md:text-base">
              Amet In A Suspendisse Convallis Eget, Amet In A
              Suspendisse Convallis EgetAmet In A
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex gap-6">
              <Button
                variant="primary"
                size="lg"
                className="rounded-xl px-10 py-4 text-base font-semibold"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border-primary bg-primary-light px-10 py-4 text-base font-semibold text-primary hover:bg-primary/10"
              >
                Place a call
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Layout - featured photo hidden */}
        <div className="relative z-10 flex flex-col items-center lg:hidden">
          {/* Content centered */}
          <div className="relative z-10 flex flex-col items-center px-6 py-12 text-center sm:px-10 sm:py-16">
            <h2
              className="font-poppins text-2xl font-bold italic leading-tight text-background sm:text-3xl text-balance"
            >
              {"You Don\u2019t Have To See The Whole Staircase Just Take The First Step"}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-background/70 md:text-base">
              Amet In A Suspendisse Convallis Eget,
              Amet In A Suspendisse Convallis
              EgetAmet In A
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex gap-4">
              <Button
                variant="primary"
                size="lg"
                className="rounded-xl px-8 text-base font-semibold"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border-primary bg-primary-light px-8 text-base font-semibold text-primary hover:bg-primary/10"
              >
                Place a call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
