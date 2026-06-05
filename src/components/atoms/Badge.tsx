import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "destructive"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantClasses = {
    default: "border-transparent bg-primary text-white hover:bg-primary/90 shadow-sm",
    secondary: "border-transparent bg-surface-elevated text-primary hover:bg-zinc-200 shadow-sm",
    destructive: "border-transparent bg-red-500/10 text-red-600 hover:bg-red-500/20",
    outline: "text-zinc-600 border-border hover:border-border-hover bg-surface shadow-sm",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 focus:ring-offset-background",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
