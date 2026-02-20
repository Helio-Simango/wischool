import {
  ClipboardCheck,
  MessageCircle,
  Users,
  BookOpen,
  Target,
} from "lucide-react"

const FEATURES = [
  { icon: ClipboardCheck, label: "Problem Solving" },
  { icon: MessageCircle, label: "Live chat" },
  { icon: Users, label: "Group Reading" },
  { icon: BookOpen, label: "10k Courses" },
  { icon: Target, label: "Hand-on activities" },
] as const

export function FeaturesBar() {
  return (
    <section className="py-12 md:py-16" aria-label="Key features">

      <div className="mx-auto max-w-310 px-4 md:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {FEATURES.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex h-12 min-w-37.5 shrink-0 items-center gap-2.5 rounded-[4.47px] bg-[#DDFFFF] px-3 md:h-13.5 md:min-w-42.5 md:px-4 lg:h-15 lg:min-w-50 lg:rounded-[5px]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary">
                <Icon className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
              </span>
              <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
