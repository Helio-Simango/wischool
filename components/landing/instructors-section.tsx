import Image from "next/image"

const INSTRUCTORS = [
  {
    id: "instructor-01",
    name: "John Mark",
    role: "Senior Developer",
    avatar: "/images/joghn-pic.png",
    quote: '"Education will be for you what you want it to be"',
  },
  {
    id: "instructor-02",
    name: "Lora Shrof",
    role: "Marketing Lead",
    avatar: "/images/instructor-lora.png",
    quote:
      '"Knowledge has to be improved, challenged, and increased constantly, or it vanishes"',
  },
  {
    id: "instructor-03",
    name: "Zeng Chin",
    role: "Data Analist at Meta",
    avatar: "/images/instructor-zeng.png",
    quote:
      '"To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge"',
  },
] as const

export function InstructorsSection() {
  return (
    <section
      className="py-10 md:py-16"
      aria-labelledby="instructors-heading"
    >
      <div className="mx-auto max-w-[1240px] px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <h2
          id="instructors-heading"
          className="font-poppins text-xl font-semibold text-foreground md:text-2xl"
        >
          Meet our instructors
        </h2>

        {/* Instructor Cards Grid */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 lg:flex-nowrap">
          {INSTRUCTORS.map((instructor) => (
            <article
              key={instructor.id}
              className="flex w-[calc(50%-12px)] flex-col items-center rounded-[5.99px] bg-card px-6 py-8 shadow-[0px_2px_12px_rgba(0,0,0,0.08)] lg:w-[390px]"
              style={{ minHeight: 371 }}
            >
              {/* Avatar */}
              <div className="h-[114px] w-[114px] overflow-hidden rounded-full">
                <Image
                  src={instructor.avatar}
                  alt={instructor.name}
                  width={114}
                  height={114}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name */}
              <p className="mt-4 text-base font-bold text-foreground">
                {instructor.name}
              </p>

              {/* Role */}
              <p className="mt-1 text-sm font-medium text-primary">
                {instructor.role}
              </p>

              {/* Quote */}
              <p className="mt-6 text-center text-sm leading-relaxed text-muted-foreground">
                {instructor.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
