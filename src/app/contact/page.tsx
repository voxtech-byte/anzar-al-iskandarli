"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Typography } from "@/components/atoms/Typography"
import { Button } from "@/components/atoms/Button"
import { profileData } from "@/lib/content"
import { Mail, MapPin, Send, MessageSquare } from "lucide-react"

export default function Contact() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex flex-col justify-center py-24 overflow-hidden -mt-24" // Negative margin to compensate for nav
    >
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            x: mousePosition.x - 400,
            y: mousePosition.y - 400,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 2 }}
          className="w-[800px] h-[800px] bg-cta/5 rounded-full blur-[120px] absolute opacity-50"
        />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left: CTA & Info */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-5/12 space-y-12"
        >
          <div>
            <Typography variant="small" className="text-cta uppercase tracking-widest font-bold mb-6 block">
              Initiate Contact
            </Typography>
            <Typography variant="h1" className="text-6xl md:text-7xl lg:text-[5.5rem] font-black mb-8 tracking-tighter leading-[0.9]">
              Let&apos;s build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-zinc-600 to-zinc-400">
                something.
              </span>
            </Typography>
            <Typography variant="lead" className="text-zinc-600 text-xl leading-relaxed max-w-lg">
              Interested in AI-assisted development, rapid prototyping, or system architecture? I&apos;m currently open to new opportunities.
            </Typography>
          </div>

          <div className="space-y-8 pt-8 border-t border-border">
            <motion.a 
              href={`mailto:${profileData.contact.email}`}
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="h-16 w-16 rounded-full bg-surface border border-border shadow-sm flex items-center justify-center group-hover:bg-cta group-hover:border-cta transition-all duration-300">
                <Mail className="h-6 w-6 text-zinc-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <Typography variant="small" className="text-zinc-500 uppercase tracking-widest text-xs mb-2">Direct Email</Typography>
                <Typography className="text-xl md:text-2xl font-bold text-primary group-hover:text-cta transition-colors">
                  {profileData.contact.email}
                </Typography>
              </div>
            </motion.a>
            
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-full bg-surface border border-border shadow-sm flex items-center justify-center">
                <MapPin className="h-6 w-6 text-zinc-500" />
              </div>
              <div>
                <Typography variant="small" className="text-zinc-500 uppercase tracking-widest text-xs mb-2">Location / Format</Typography>
                <Typography className="text-xl md:text-2xl font-bold text-primary">Remote / Indonesia</Typography>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Modern Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-7/12"
        >
          <div className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-border shadow-xl relative overflow-hidden">
            {/* Form Glow */}
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-cta to-transparent opacity-50" />
            
            <div className="flex items-center gap-4 mb-8">
              <MessageSquare className="text-cta w-8 h-8" />
              <Typography variant="h3" className="text-2xl font-bold text-primary">Send a Message</Typography>
            </div>

            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest font-semibold text-zinc-500 pl-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    className="w-full bg-surface-elevated border border-border rounded-2xl px-6 py-4 text-primary placeholder-zinc-400 outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-all focus:bg-white"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest font-semibold text-zinc-500 pl-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-surface-elevated border border-border rounded-2xl px-6 py-4 text-primary placeholder-zinc-400 outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-all focus:bg-white"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-xs uppercase tracking-widest font-semibold text-zinc-500 pl-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="Tell me about your project, timeline, and expectations..." 
                  className="w-full bg-surface-elevated border border-border rounded-2xl px-6 py-4 text-primary placeholder-zinc-400 outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-all resize-none focus:bg-white"
                />
              </div>

              <Button type="button" size="lg" className="w-full group shadow-md hover:shadow-lg h-16 rounded-2xl text-lg font-bold">
                <span className="flex items-center justify-center">
                  Initialize Transmission 
                  <Send className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
