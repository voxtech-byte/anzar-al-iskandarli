import * as React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote" | "lead" | "large" | "small" | "muted"
  as?: React.ElementType
}

export function Typography({ className, variant = "p", as, children, ...props }: TypographyProps) {
  const Component = as || (
    variant === "h1" ? "h1" :
    variant === "h2" ? "h2" :
    variant === "h3" ? "h3" :
    variant === "h4" ? "h4" :
    variant === "blockquote" ? "blockquote" :
    "p"
  );

  const variants = {
    h1: "scroll-m-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-tight",
    h2: "scroll-m-20 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight transition-colors first:mt-0 text-primary leading-snug",
    h3: "scroll-m-20 text-xl sm:text-2xl font-semibold tracking-tight text-primary",
    h4: "scroll-m-20 text-lg sm:text-xl font-semibold tracking-tight text-primary",
    p: "leading-7 [&:not(:first-child)]:mt-6 text-zinc-600",
    blockquote: "mt-6 border-l-2 border-cta pl-6 italic text-zinc-700 bg-surface-elevated p-4 rounded-r-lg",
    lead: "text-xl text-zinc-600",
    large: "text-lg font-semibold text-primary",
    small: "text-sm font-medium leading-none text-zinc-500",
    muted: "text-sm text-muted",
  };

  return (
    <Component className={cn(variants[variant], className)} {...props}>
      {children}
    </Component>
  )
}
