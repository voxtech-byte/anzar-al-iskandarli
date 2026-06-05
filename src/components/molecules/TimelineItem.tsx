"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Typography } from "@/components/atoms/Typography"

interface TimelineItemProps {
  title: string
  subtitle: string
  date: string
  description?: string | React.ReactNode
  isLeft?: boolean
  delay?: number
}

export function TimelineItem({ title, subtitle, date, description, isLeft = false, delay = 0 }: TimelineItemProps) {
  return (
    <div className={`relative flex items-center justify-between md:justify-normal w-full mb-8 ${isLeft ? "md:flex-row-reverse" : ""}`}>
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-cta border-4 border-white transform -translate-x-1.5 md:-translate-x-1/2 mt-1.5 md:mt-0 z-10" />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay }}
        className={`w-full md:w-5/12 pl-8 md:pl-0 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}
      >
        <Typography variant="small" className="text-cta font-semibold tracking-wider uppercase mb-1">
          {date}
        </Typography>
        <Typography variant="large" className="text-primary mb-1">
          {title}
        </Typography>
        <Typography variant="muted" className="mb-3 font-medium">
          {subtitle}
        </Typography>
        {description && (
          <div className="text-zinc-600 text-sm leading-relaxed">
            {description}
          </div>
        )}
      </motion.div>
    </div>
  )
}
