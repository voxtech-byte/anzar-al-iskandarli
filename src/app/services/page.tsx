"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Typography } from "@/components/atoms/Typography"
import { skillsData, careerGoals } from "@/lib/content"
import { Database, Code2, Cpu, Zap, CheckCircle2, XCircle } from "lucide-react"
import { Badge } from "@/components/atoms/Badge"
import { BentoBox } from "@/components/molecules/BentoBox"
import { cn } from "@/lib/utils"

export default function Services() {
  const [terminalText, setTerminalText] = React.useState("> initializing system...")

  React.useEffect(() => {
    const sequence = [
      "> loading core modules...",
      "> authenticating AI-assisted workflow...",
      "> establishing connection to Next.js engine...",
      "> System Ready. Hello, World!"
    ]
    
    let i = 0;
    const interval = setInterval(() => {
      setTerminalText(sequence[i])
      i++
      if (i === sequence.length) clearInterval(interval)
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col gap-16 md:gap-32 pb-32 max-w-7xl mx-auto px-6 lg:px-12">
      {/* Header */}
      <section className="pt-24 md:pt-32 text-center max-w-3xl mx-auto px-4 md:px-0">
        <Typography variant="small" className="text-cta uppercase tracking-widest font-bold mb-6 block text-xs md:text-sm">
          Capabilities & Approach
        </Typography>
        <Typography variant="h1" className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
          Engineering at the Speed of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cta to-indigo-500">Thought.</span>
        </Typography>
        <Typography variant="lead" className="text-zinc-600 text-xl leading-relaxed">
          Bridging the gap between design and scalable engineering using modern architectures and AI-assisted workflows.
        </Typography>
      </section>

      {/* Why AI-Assisted Workflow? */}
      <section>
        <div className="mb-12 md:mb-24 flex items-center gap-4 md:gap-8">
          <Typography variant="h2" className="text-3xl md:text-5xl font-bold shrink-0">Why AI-Assisted Workflow?</Typography>
          <div className="h-[1px] w-full bg-border hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Traditional */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-12 rounded-3xl md:rounded-[2rem] border border-border bg-surface shadow-sm relative overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="absolute top-0 right-0 p-4 md:p-8 opacity-10">
              <XCircle className="w-16 h-16 md:w-32 md:h-32 text-red-500" />
            </div>
            <Typography variant="h3" className="text-2xl text-zinc-500 mb-8 font-medium">Traditional Method</Typography>
            <ul className="space-y-6 relative z-10">
              {[
                "Weeks of manual boilerplate setup",
                "High risk of human error in repetitive tasks",
                "Slower iteration cycles and feedback loops",
                "Higher development costs for basic features"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start text-zinc-600">
                  <XCircle className="w-6 h-6 text-zinc-400 shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* AI-Assisted */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-12 rounded-3xl md:rounded-[2rem] border border-cta/20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden group shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="absolute top-0 right-0 p-4 md:p-8 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-700">
              <Zap className="w-16 h-16 md:w-32 md:h-32 text-cta" />
            </div>
            <Typography variant="h3" className="text-2xl md:text-3xl text-primary mb-8 font-bold flex flex-wrap items-center gap-3">
              Hybrid AI-Workflow
              <Badge variant="secondary" className="bg-cta text-white border-0 shadow-md">40-60% Faster</Badge>
            </Typography>
            <ul className="space-y-6 relative z-10">
              {[
                "Instant scaffolding with intelligent context",
                "Focus shifts to architecture and UX, not syntax",
                "Rapid prototyping enables daily feedback loops",
                "Cost-effective delivery of premium digital products"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start text-zinc-700">
                  <CheckCircle2 className="w-6 h-6 text-cta shrink-0" />
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Terminal Prop - Keeping this Dark for contrast/theme */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl overflow-hidden border border-zinc-800 bg-[#0d1117] text-green-400 font-mono text-sm shadow-2xl max-w-4xl mx-auto"
        >
          <div className="bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-zinc-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-4 text-zinc-500 text-xs">nizar@hybrid-engine ~</span>
          </div>
          <div className="p-6 h-48 overflow-y-auto">
            <p className="mb-2 text-zinc-300">$ ./execute-workflow.sh</p>
            <p className="text-zinc-400 mb-6">{terminalText}</p>
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 3.5 }}
            >
              <p className="text-cta font-bold mb-2">OUTPUT &gt; Value Proposition:</p>
              <p className="text-zinc-300 whitespace-pre-wrap leading-relaxed">{careerGoals.valueProposition}</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Asymmetrical Skills Bento Grid */}
      <section className="px-4 md:px-0 overflow-x-hidden">
        <div className="mb-12 md:mb-24 flex flex-row-reverse items-center gap-4 md:gap-8">
          <Typography variant="h2" className="text-3xl md:text-5xl font-bold shrink-0">Core Arsenal</Typography>
          <div className="h-[1px] w-full bg-border hidden md:block" />
        </div>
        
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6">
          {skillsData[0].skills.map((skill, idx) => {
            const icons = [<Code2 key="1"/>, <Cpu key="2"/>, <Database key="3"/>]
            
            // Width classes for asymmetrical sizing
            let widthClass = "w-full md:w-[calc(33.333%-1rem)]"
            if (idx === 0) widthClass = "w-full md:w-[calc(66.666%-0.75rem)]"
            if (idx === 1) widthClass = "w-full md:w-[calc(33.333%-0.75rem)]"
            if (idx === 2) widthClass = "w-full"

            return (
              <BentoBox 
                key={idx}
                className={cn(
                  "bg-surface border-border p-6 md:p-8 shadow-sm min-h-auto md:min-h-[250px]",
                  widthClass
                )}
                delay={idx * 0.1}
              >
                <div className="flex flex-col h-full justify-between overflow-hidden">
                  <div className="flex justify-between items-start">
                    <div className="p-4 rounded-2xl bg-blue-50 text-cta w-fit shrink-0">
                      {icons[idx % icons.length]}
                    </div>
                    <Badge variant="outline" className="border-border text-zinc-500 bg-white shadow-sm shrink-0">
                      {skill.level}
                    </Badge>
                  </div>
                  
                  <div className="mt-8 min-w-0">
                    <Typography variant="h3" className="text-2xl font-bold text-primary mb-2 leading-tight">
                      {skill.name}
                    </Typography>
                    <Typography className="text-zinc-500 font-mono text-sm break-words">
                      <span className="text-cta font-semibold mr-2">Tools_</span>
                      {skill.tools}
                    </Typography>
                  </div>
                </div>
              </BentoBox>
            )
          })}
        </div>
      </section>
    </div>
  )
}
