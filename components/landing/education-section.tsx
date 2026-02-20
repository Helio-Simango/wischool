import Image from "next/image"
import { BookOpen, Clock, Globe, Users } from "lucide-react"

const FEATURES = [
  {
    icon: BookOpen,
    label: "Free E-book, Videos and kits",
  },
  {
    icon: Clock,
    label: "Learn at your own pace",
  },
  {
    icon: Globe,
    label: "Collaborate with different learners around the globe",
  },
  {
    icon: Users,
    label: "Top instructors around the globe",
  },
] as const

export function EducationSection() {
  return (
    <section
      className="py-10 md:py-16"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-[1240px] px-4 md:px-6 lg:px-8">
        {/* Section Eyebrow */}
        <p className="font-poppins text-[32px] font-semibold leading-[100%] text-[#333333]">
          We Bring The Good Education To Life
        </p>

        {/* Content Grid */}
        <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Left - Image with floating card */}
          <div className="relative flex-shrink-0 lg:w-[45%]">
            <div className="relative w-full max-w-[400px]">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/education-woman.png"
                  alt="A student holding books, representing quality education"
                  width={400}
                  height={480}
                  className="object-cover"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* Job Opportunities Floating Card */}
              <div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-xl bg-background/95 px-5 py-4 shadow-lg backdrop-blur-sm md:-right-12">
                <div className="mb-2 flex justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <p className="text-center text-sm font-bold text-foreground">
                  Job
                </p>
                <p className="text-center text-sm font-bold text-foreground">
                  Opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Right - Text + Features */}
          <div className="flex-1">
            <h2
              id="education-heading"
              className="font-poppins text-3xl font-semibold leading-[100%] text-[#333333] text-balance md:text-[48px]"
            >
              Let Your Education Do The Walking
            </h2>

            {/* Feature List */}
            <ul className="mt-8 flex flex-col gap-5">
              {FEATURES.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                    <Icon
                      className="h-5 w-5 text-primary"
                      strokeWidth={2}
                    />
                  </span>
                  <span className="text-sm font-medium text-muted-foreground md:text-base">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
