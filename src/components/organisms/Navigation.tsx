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
      <nav className="glass-nav rounded-full px-8 py-3 flex items-center gap-6 sm:gap-8 shadow-lg pointer-events-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative text-sm font-semibold transition-colors hover:text-cta px-3 py-2 rounded-full",
                isActive ? "text-cta" : "text-zinc-500"
              )}
            >
              <span className="relative z-10">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 bg-cta/10 rounded-full"
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
