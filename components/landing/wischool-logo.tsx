import Link from "next/link"
import { cn } from "@/lib/utils"

type WischoolLogoProps = {
  className?: string
  color?: "dark" | "white"
}

export function WischoolLogo({
  className,
  color = "dark",
}: WischoolLogoProps) {
  const textColor = color === "white" ? "text-white" : "text-foreground"
  const dotColor = "bg-primary"

  return (
    <Link
      href="/"
      aria-label="WiSchool - Home"
      className={cn(
        "relative inline-flex items-baseline font-heading font-semibold tracking-tight",
        className
      )}
      style={{ fontSize: "32.8px", lineHeight: "100%" }}
    >
      <span className={textColor}>WiSch</span>

      <span className="relative inline-block">
        <span className={textColor}>oo</span>

        <span className="absolute left-0 -top-px flex w-full justify-between px-1.25">
          <span className={cn("h-1.5 w-1.5 rounded-full", dotColor)} />
          <span className={cn("h-1.5 w-1.5 rounded-full", dotColor)} />
        </span>
      </span>

      {/* l */}
      <span className={textColor}>l</span>
    </Link>
  )
}