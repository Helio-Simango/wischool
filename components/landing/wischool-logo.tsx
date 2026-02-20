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
      {/* WiSch */}
      <span className={textColor}>WiSch</span>

      {/* oo com pontos acima */}
      <span className="relative inline-block">
        {/* letras o o */}
        <span className={textColor}>oo</span>

        {/* pontos verdes */}
        <span className="absolute left-0 top-[-1px] flex w-full justify-between px-[5px]">
          <span className={cn("h-[6px] w-[6px] rounded-full", dotColor)} />
          <span className={cn("h-[6px] w-[6px] rounded-full", dotColor)} />
        </span>
      </span>

      {/* l */}
      <span className={textColor}>l</span>
    </Link>
  )
}