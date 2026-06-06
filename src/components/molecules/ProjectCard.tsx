"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Typography } from "@/components/atoms/Typography"
import { Badge } from "@/components/atoms/Badge"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  challenge: string
  solution: string
  result: string
  tags?: string[]
  delay?: number
  href?: string
}

export function ProjectCard({ title, description, challenge, result, tags = [], delay = 0, href }: ProjectCardProps) {
  const CardContent = (
    <>
      <div className="flex justify-between items-start mb-6">
        <Typography variant="h3" className="group-hover:text-cta transition-colors">
          {title}
        </Typography>
        <div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-cta group-hover:text-white transition-colors">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
      
      <Typography className="text-zinc-600 mb-8 font-medium">
        {description}
      </Typography>

      <div className="space-y-4 mb-8 flex-1">
        <div>
          <Typography variant="small" className="text-zinc-400 uppercase tracking-wider mb-1">Challenge</Typography>
          <Typography variant="small" className="text-zinc-700 line-clamp-2">{challenge}</Typography>
        </div>
        <div>
          <Typography variant="small" className="text-zinc-400 uppercase tracking-wider mb-1">Result</Typography>
          <Typography variant="small" className="text-zinc-900 font-semibold line-clamp-2">{result}</Typography>
        </div>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-zinc-100">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-zinc-50">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </>
  )

  const containerClass = "group project-card"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      {href ? (
        <Link href={href} className={containerClass}>
          {CardContent}
        </Link>
      ) : (
        <div className={containerClass}>
          {CardContent}
        </div>
      )}
    </motion.div>
  )
}
