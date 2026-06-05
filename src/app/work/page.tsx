"use client"

import { Typography } from "@/components/atoms/Typography"
import { Badge } from "@/components/atoms/Badge"
import { Button } from "@/components/atoms/Button"
import { caseStudies, achievementsAndAwards } from "@/lib/content"
import { motion } from "framer-motion"
import { ArrowRight, Trophy } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Work() {
  return (
    <div className="flex flex-col gap-32 pb-32 max-w-7xl mx-auto px-6 lg:px-12">
      {/* Header */}
      <section className="pt-24 md:pt-40 text-center md:text-left flex flex-col md:flex-row gap-12 items-end justify-between border-b border-border pb-16">
        <div className="max-w-3xl">
          <Typography variant="small" className="text-cta uppercase tracking-widest font-bold mb-6 block">
            Portfolio Archive
          </Typography>
          <Typography variant="h1" className="text-6xl md:text-[6rem] font-black tracking-tighter leading-none mb-6">
            Selected <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-400">Works.</span>
          </Typography>
        </div>
        <div className="max-w-md">
          <Typography variant="lead" className="text-zinc-600 text-xl leading-relaxed">
            A showcase of architectural problem-solving. Translating complex requirements into elegant, high-performance systems.
          </Typography>
        </div>
      </section>

      {/* Case Studies — Flexbox Alternating Layout */}
      <section className="flex flex-col gap-40">
        {caseStudies.map((study, idx) => {
          const isEven = idx % 2 === 0
          
          return (
            <motion.article 
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              {/* Flexbox: row for even, row-reverse for odd */}
              <div className={cn(
                "flex flex-col gap-8 md:gap-16 items-center",
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              )}>
                
                {/* Content Side — ~45% width on desktop */}
                <div className="w-full md:w-[45%] flex flex-col justify-center z-10 relative shrink-0">
                  <div className="absolute -inset-x-8 -inset-y-12 bg-white/50 blur-2xl rounded-[3rem] -z-10 group-hover:bg-white/80 transition-colors duration-500" />
                  
                  <div className="flex gap-2 flex-wrap mb-6">
                    {study.visuals.slice(0,2).map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-white">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Typography variant="h2" className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-none">
                    {study.title}
                  </Typography>
                  
                  <Typography className="text-zinc-600 text-lg md:text-xl leading-relaxed mb-8">
                    {study.shortDescription}
                  </Typography>
                  
                  <div className="space-y-6 mb-10">
                    <div className="border-l-2 border-cta pl-4">
                      <Typography variant="small" className="text-cta font-bold uppercase tracking-widest mb-1">Challenge</Typography>
                      <Typography className="text-zinc-700">{study.challenge}</Typography>
                    </div>
                    <div className="border-l-2 border-indigo-500 pl-4">
                      <Typography variant="small" className="text-indigo-600 font-bold uppercase tracking-widest mb-1">Result</Typography>
                      <Typography className="text-zinc-700">{study.result}</Typography>
                    </div>
                  </div>
                  
                  <Button asChild size="lg" className="w-fit rounded-full shadow-md">
                    <Link href={`/work/${study.id}`}>
                      Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Visual Side — fills remaining ~50% */}
                <div className="w-full md:flex-1 relative h-[400px] md:h-[550px] rounded-[2rem] overflow-hidden border border-border bg-surface-elevated shadow-sm group-hover:shadow-lg transition-shadow duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-zinc-50" />
                  
                  {/* Abstract Visual Elements */}
                  <div className="absolute inset-0 flex items-center justify-center p-8 group-hover:scale-[1.03] transition-transform duration-700">
                    {isEven ? (
                       <div className="w-full h-full relative">
                         <div className="absolute top-10 right-10 w-48 h-48 bg-cta/10 blur-[60px] rounded-full" />
                         <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />
                         <div className="w-full h-full border border-border rounded-2xl bg-white/50 backdrop-blur-xl shadow-xl overflow-hidden flex flex-col">
                            <div className="h-10 border-b border-border bg-zinc-50/50 flex items-center px-4 gap-2">
                              <div className="w-3 h-3 rounded-full bg-zinc-300" />
                              <div className="w-3 h-3 rounded-full bg-zinc-300" />
                              <div className="w-3 h-3 rounded-full bg-zinc-300" />
                            </div>
                            <div className="flex-1 p-8 flex items-center justify-center">
                              <Typography className="font-mono text-zinc-400 text-center uppercase tracking-widest text-sm">
                                {study.visuals[0]}
                              </Typography>
                            </div>
                         </div>
                       </div>
                    ) : (
                       <div className="w-full h-full relative flex items-center justify-center">
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 blur-[80px] rounded-full -z-10" />
                         
                         {/* Main card */}
                         <div className="w-11/12 h-5/6 border border-border rounded-2xl bg-white/60 backdrop-blur-xl shadow-lg relative flex items-center justify-center p-6 text-center z-10">
                            <div className="absolute left-6 top-6 bottom-6 w-[1px] bg-border/50 hidden md:block" />
                            <div className="absolute right-6 top-6 bottom-6 w-[1px] bg-border/50 hidden md:block" />
                            
                            <div className="flex flex-col items-center gap-4">
                              <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-border flex items-center justify-center mb-2 shadow-sm">
                                <div className="w-4 h-4 bg-indigo-400 rounded-full animate-pulse" />
                              </div>
                              <Typography className="font-mono text-zinc-500 uppercase tracking-widest text-sm max-w-[200px] leading-relaxed">
                                {study.visuals[0]}
                              </Typography>
                            </div>
                         </div>
                         
                         {/* Floating secondary box */}
                         <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-32 md:w-44 p-4 border border-border rounded-xl bg-white/90 backdrop-blur-md shadow-xl z-20 hidden sm:block">
                            <div className="h-2 w-1/2 bg-zinc-200 rounded-full mb-2" />
                            <div className="h-2 w-full bg-zinc-100 rounded-full mb-2" />
                            <div className="h-2 w-3/4 bg-zinc-100 rounded-full" />
                         </div>
                       </div>
                    )}
                  </div>
                </div>

              </div>
            </motion.article>
          )
        })}
      </section>

      <div className="h-[1px] w-full bg-border my-12" />

      {/* Innovations & Awards — Flexbox Layout */}
      <section className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Patents & Innovations — ~58% */}
        <div className="w-full lg:w-[58%] bg-surface border border-border p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden group hover:shadow-xl transition-shadow duration-500 shadow-md shrink-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cta/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cta/10 transition-colors duration-700" />
          
          <div className="relative z-10">
            <Typography variant="small" className="text-cta uppercase tracking-widest font-bold mb-4 block">
              Architectural Design
            </Typography>
            <Typography variant="h2" className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight">
              Innovations
            </Typography>
            
            <div className="space-y-12">
              {achievementsAndAwards.patentsAndInnovations.map((item, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-cta to-transparent" />
                  <div className="absolute left-[-3px] top-2 w-2 h-2 rounded-full bg-white border border-cta" />
                  <Typography variant="h3" className="text-2xl font-bold text-primary mb-4">{item.name}</Typography>
                  <Typography className="text-zinc-600 text-lg leading-relaxed">
                    {item.description}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitions — fills remaining space */}
        <div className="w-full lg:flex-1 space-y-12">
          <div>
            <Typography variant="small" className="text-indigo-600 uppercase tracking-widest font-bold mb-4 block">
              Achievements
            </Typography>
            <Typography variant="h2" className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Recognition
            </Typography>
          </div>
          
          <div className="space-y-6">
            {achievementsAndAwards.competitions.map((comp, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] bg-surface border border-border shadow-sm transition-all hover:shadow-md hover:border-border-hover group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-14 w-14 rounded-2xl bg-amber-100 border border-amber-200 text-amber-600 flex items-center justify-center mb-6 relative z-10">
                  <Trophy className="w-7 h-7" />
                </div>
                <div className="relative z-10">
                  <Typography variant="h3" className="text-xl font-bold mb-4 text-primary group-hover:text-amber-600 transition-colors">
                    {comp.name}
                  </Typography>
                  <Typography className="text-zinc-600 leading-relaxed">
                    {comp.description}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
