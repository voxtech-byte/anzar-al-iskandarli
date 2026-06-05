"use client"

import { ReactNode } from "react"

export function SmoothScroll({ children }: { children: ReactNode }) {
  // CSS-based smooth scroll is more reliable than Lenis with Next.js App Router.
  // The smooth-scroll behavior is applied via CSS in globals.css instead.
  return <>{children}</>
}
