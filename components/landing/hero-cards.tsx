import Image from "next/image"
import { Users } from "lucide-react"

const INSTRUCTOR_AVATARS = [
  "/images/joghn-pic.png",
  "/images/joghn-pic.png",
  "/images/joghn-pic.png",
  "/images/joghn-pic.png",
  "/images/joghn-pic.png",
]

export function InstructorsCard() {
  return (
    <div className="rounded-2xl bg-background/95 px-6 py-5 shadow-lg backdrop-blur-sm">
      <p className="text-center text-sm font-semibold leading-snug text-foreground">
        {"Learn from best"}
        <br />
        <span className="text-primary">{"instructors"}</span>
        {" around"}
        <br />
        {"the globe"}
      </p>
      <div className="mt-3 flex items-center justify-center -space-x-2">
        {INSTRUCTOR_AVATARS.map((src, i) => (
          <div
            key={i}
            className="h-8 w-8 overflow-hidden rounded-full border-2 border-background"
          >
            <Image
              src={src}
              alt={`Instructor ${i + 1}`}
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary-light text-xs font-semibold text-primary">
          {"+"}
        </div>
      </div>
    </div>
  )
}

export function StatsCard() {
  return (
    <div className="rounded-2xl bg-background/95 px-5 py-4 shadow-lg backdrop-blur-sm">
      <div className="mb-2 flex justify-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
          <Users className="h-4 w-4 text-primary" />
        </div>
      </div>
      <p className="text-center text-2xl font-bold text-primary">{"15k"}</p>
      <p className="text-center text-xs leading-tight text-muted-foreground">
        {"Amazing"}
        <br />
        {"students around"}
        <br />
        {"the globe"}
      </p>
    </div>
  )
}
