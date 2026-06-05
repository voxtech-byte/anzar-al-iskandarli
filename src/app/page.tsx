"use client"

import { Typography } from "@/components/atoms/Typography"
import { BentoBox } from "@/components/molecules/BentoBox"
import { Badge } from "@/components/atoms/Badge"
import { Button } from "@/components/atoms/Button"
import { profileData, caseStudies, activitiesAndInterests } from "@/lib/content"
import { ArrowRight, Code, BrainCircuit, Zap, ArrowUpRight, Cpu, Layers } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  const techStack = [
    "Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Docker", "Vite", "Node.js", "Supabase", "Python"
  ]

  return (
    <div className="flex flex-col gap-24 pb-32 overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cta/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 relative z-10"
          >
            <Badge variant="outline" className="mb-4 bg-white/50 backdrop-blur-md px-4 py-2 border-border shadow-sm">
              <span className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cta"></span>
                </span>
                <span className="text-zinc-600 font-medium">Available for new opportunities</span>
              </span>
            </Badge>
            <Typography variant="h1" className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-black tracking-tighter leading-[0.9]">
              Tech <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cta via-blue-500 to-indigo-500">
                Provider.
              </span>
            </Typography>
            <Typography variant="lead" className="max-w-xl text-zinc-600 text-xl leading-relaxed">
              {profileData.bio[0]}
            </Typography>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full bg-cta hover:bg-cta/90 text-white px-8 h-14 text-lg shadow-md hover:shadow-lg">
                <Link href="/work">View Works <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-border bg-surface hover:bg-surface-elevated px-8 h-14 text-lg">
                <Link href="/contact">Let&apos;s Talk</Link>
              </Button>
            </div>
          </motion.div>
          
          {/* Abstract Hero Visual - Asymmetrical Concept */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 w-full relative aspect-square hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cta/10 via-blue-500/5 to-transparent rounded-[3rem] rotate-12 backdrop-blur-3xl border border-border" />
            <div className="absolute inset-8 bg-white rounded-[2rem] -rotate-6 overflow-hidden shadow-xl border border-border p-8 flex flex-col justify-between group hover:rotate-0 transition-transform duration-700">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <Typography variant="small" className="text-zinc-500 uppercase tracking-widest font-mono text-xs">System Status</Typography>
                  <div className="flex items-center gap-2 text-cta font-mono text-sm font-semibold">
                    <span className="h-2 w-2 rounded-full bg-cta shadow-[0_0_10px_rgba(var(--cta),0.5)]"></span>
                    Operational
                  </div>
                </div>
                <Cpu className="text-zinc-400 w-8 h-8 group-hover:text-cta transition-colors" />
              </div>
              
              <div className="space-y-4">
                <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                  <div className="h-full bg-cta w-3/4 rounded-full" />
                </div>
                <div className="flex justify-between text-xs font-mono text-zinc-500 font-medium">
                  <span>AI Workflows</span>
                  <span>75% Optimized</span>
                </div>
              </div>
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl border border-border shadow-xl backdrop-blur-xl animate-bounce-slow">
              <Layers className="w-8 h-8 text-blue-500 mb-2" />
              <Typography variant="small" className="font-bold text-primary">No-Code / Low-Code</Typography>
              <Typography variant="small" className="text-zinc-500">Rapid Prototyping</Typography>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-10 border-y border-border bg-surface-elevated/50 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex gap-16 px-8 items-center"
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <span key={i} className="text-2xl md:text-4xl font-bold text-zinc-300 uppercase tracking-widest hover:text-zinc-400 transition-colors">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Immersive Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* Bio Box - Large */}
        <BentoBox className="md:col-span-4 lg:col-span-4 row-span-1 bg-surface border-border shadow-sm group" delay={0.1}>
          <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
            <ArrowUpRight className="text-cta w-8 h-8" />
          </div>
          <div className="flex flex-col h-full justify-between relative z-10 p-8 gap-8 min-h-[250px]">
            <Typography variant="small" className="text-zinc-500 uppercase tracking-widest font-bold">The Vision</Typography>
            <Typography className="text-lg md:text-xl lg:text-2xl font-serif italic text-zinc-700 leading-relaxed max-w-3xl">
              &quot;{profileData.vision}&quot;
            </Typography>
          </div>
        </BentoBox>

        {/* Core Value 1 */}
        <BentoBox className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-cta to-blue-600 border-0 shadow-md group text-white" delay={0.2}>
          <div className="flex flex-col h-full justify-between p-6 gap-6 min-h-[250px]">
            <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md shadow-sm group-hover:scale-110 transition-transform">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div>
              <Typography variant="h3" className="text-white text-2xl">{profileData.coreValues[0].title}</Typography>
              <Typography className="text-white/80 mt-2 line-clamp-3">
                {profileData.coreValues[0].description}
              </Typography>
            </div>
          </div>
        </BentoBox>

        {/* Specialization Box */}
        <BentoBox className="md:col-span-2 lg:col-span-3 row-span-1 bg-surface border-border shadow-sm p-6 min-h-[250px]" delay={0.3}>
          <div className="flex flex-col h-full justify-center text-center items-center relative overflow-hidden group gap-4">
            <div className="absolute inset-0 bg-cta/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Code className="h-16 w-16 text-zinc-400 group-hover:text-cta transition-colors" />
            <Typography variant="h3" className="text-3xl text-primary">Specialization</Typography>
            <Typography className="text-zinc-600 font-medium text-lg max-w-sm">
              {profileData.specialization}
            </Typography>
          </div>
        </BentoBox>

        {/* Core Value 2 */}
        <BentoBox className="md:col-span-2 lg:col-span-3 bg-surface-elevated border-border shadow-sm" delay={0.4}>
          <div className="flex flex-col h-full justify-between p-6 gap-6 min-h-[250px]">
            <div className="h-16 w-16 rounded-2xl bg-white border border-border flex items-center justify-center group-hover:border-blue-200 transition-colors shadow-sm">
              <BrainCircuit className="h-8 w-8 text-zinc-500 group-hover:text-blue-500 transition-colors" />
            </div>
            <div>
              <Typography variant="h3" className="text-2xl text-primary">{profileData.coreValues[1].title}</Typography>
              <Typography className="mt-2 line-clamp-3 text-zinc-600">
                {profileData.coreValues[1].description}
              </Typography>
            </div>
          </div>
        </BentoBox>
      </section>

      {/* Featured Work Highlight */}
      <section className="pt-16">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <Typography variant="h2" className="text-4xl md:text-5xl font-bold">Featured Work</Typography>
            <Typography className="text-zinc-500 mt-2">A glimpse into recent architectural solutions.</Typography>
          </div>
          <Button asChild variant="ghost" className="hidden md:flex text-cta hover:bg-cta/5">
            <Link href="/work">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative rounded-[2rem] overflow-hidden bg-surface border border-border shadow-md flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-500"
        >
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white z-10 relative">
            <Badge variant="outline" className="w-fit mb-6 text-zinc-500">Case Study</Badge>
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-cta transition-colors">
              {caseStudies[0].title}
            </Typography>
            <Typography className="text-zinc-600 text-lg mb-8 leading-relaxed">
              {caseStudies[0].shortDescription}
            </Typography>
            <Button asChild className="w-fit">
              <Link href="/work">Read Case Study</Link>
            </Button>
          </div>
          <div className="w-full md:w-1/2 bg-surface-elevated relative min-h-[300px] md:min-h-[500px] border-l border-border">
            {/* Abstract representation since we don't have images in this component currently */}
            <div className="absolute inset-0 bg-gradient-to-br from-cta/5 to-transparent flex items-center justify-center p-12">
              <div className="w-full h-full border border-border rounded-xl bg-white/50 backdrop-blur-sm shadow-sm flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-cta/10 blur-[80px] rounded-full" />
                <Typography variant="large" className="text-zinc-500 font-mono tracking-widest">{caseStudies[0].visuals[0]}</Typography>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Latest Thoughts */}
      <section className="pt-16 border-t border-border">
        <div className="mb-12">
          <Typography variant="h2" className="text-4xl md:text-5xl font-bold mb-2">Latest Thoughts</Typography>
          <Typography className="text-zinc-500">Reflections on tech, psychology, and structural living.</Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activitiesAndInterests.publications.slice(0, 3).map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href="#" className="block h-full group">
                <div className="p-8 rounded-3xl bg-surface border border-border hover:border-border-hover hover:shadow-md transition-all h-full flex flex-col">
                  <div className="mb-6 h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors bg-surface-elevated text-zinc-500">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <Typography variant="h3" className="text-xl font-bold mb-4 group-hover:text-cta transition-colors">
                    {pub.title}
                  </Typography>
                  <Typography className="text-zinc-600 line-clamp-3 text-sm flex-1">
                    {pub.description}
                  </Typography>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
