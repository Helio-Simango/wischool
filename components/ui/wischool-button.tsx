"use client"

import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"

export const buttonVariants = tv({
  base: "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      primary:
        "bg-primary text-primary-foreground hover:bg-primary/90",
      outline:
        "border border-primary text-primary bg-transparent hover:bg-primary-light",
      ghost:
        "text-foreground hover:text-primary bg-transparent",
      link:
        "text-primary underline-offset-4 hover:underline bg-transparent p-0 h-auto",
    },
    size: {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-13 px-8 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    className?: string
  }

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
