"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="fixed top-6 left-4 right-4 z-50 flex justify-center pointer-events-none">
      <nav className="glass-nav rounded-full px-3 md:px-8 py-1.5 md:py-3 flex items-center gap-1 sm:gap-4 md:gap-6 shadow-lg pointer-events-auto overflow-x-auto scrollbar-none max-w-full">
        {navItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative text-xs sm:text-sm font-semibold transition-colors hover:text-cta px-3 py-1.5 sm:py-2 whitespace-nowrap rounded-full",
                isActive ? "text-cta" : "text-zinc-500"
              )}
            >
              <span className="relative z-10">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 bg-zinc-200/50 md:bg-cta/10 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
