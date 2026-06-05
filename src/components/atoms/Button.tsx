import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const variantClasses = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      outline: "border border-border bg-surface text-primary hover:border-border-hover hover:bg-surface-elevated transition-all shadow-sm",
      ghost: "hover:bg-surface-elevated text-zinc-600 hover:text-primary transition-colors rounded-lg",
      link: "underline-offset-4 hover:underline text-cta",
    }
    
    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3 text-sm",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10 flex items-center justify-center",
    }
    
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variantClasses[variant],
          (variant !== "primary" && variant !== "secondary") ? sizeClasses[size] : "", 
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
