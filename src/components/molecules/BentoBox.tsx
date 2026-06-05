"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface BentoBoxProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function BentoBox({ children, className, delay = 0, ...props }: BentoBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, type: "spring", bounce: 0.3 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className={cn(
        "card flex flex-col justify-between overflow-hidden relative group transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Decorative gradient blob that moves on hover */}
      <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-br from-cta/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full blur-3xl group-hover:translate-x-10 group-hover:translate-y-10" />
      {/* Subtle border top glow on hover */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cta/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  )
}

