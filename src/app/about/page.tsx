"use client"

import * as React from "react"
import { Typography } from "@/components/atoms/Typography"
import { Badge } from "@/components/atoms/Badge"
import { educationData, certificationData, professionalExperience } from "@/lib/content"
import { motion } from "framer-motion"
import { Modal } from "@/components/molecules/Modal"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function About() {
  const [selectedCert, setSelectedCert] = React.useState<typeof certificationData[0] | null>(null)

  return (
    <>
      <div className="flex flex-col gap-32 pb-32 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <section className="pt-24 md:pt-32 lg:pt-40 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
          >
            <div className="md:col-span-8">
              <Typography variant="small" className="text-cta uppercase tracking-widest font-bold mb-6 block">
                Philosophy & Journey
              </Typography>
              <Typography variant="h1" className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-tight">
                Architecting <br />
                <span className="text-zinc-400 italic font-serif">Understanding.</span>
              </Typography>
            </div>
            <div className="md:col-span-4 pb-4">
              <Typography variant="lead" className="text-zinc-600 text-lg md:text-xl leading-relaxed">
                From studying the intricacies of Hadith transmission to building modern web experiences, my path is defined by a constant pursuit of structural understanding.
              </Typography>
            </div>
          </motion.div>
        </section>

        {/* Experience Timeline */}
        <section>
          <div className="mb-16 md:mb-24 flex items-center gap-8">
            <Typography variant="h2" className="text-4xl md:text-6xl font-bold shrink-0">Experience</Typography>
            <div className="h-[1px] w-full bg-border" />
          </div>
          
          <div className="space-y-24">
            {professionalExperience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 relative"
              >
                <div className="md:col-span-4 md:sticky md:top-32 self-start">
                  <Typography variant="h3" className="text-cta mb-2 text-2xl">{exp.duration}</Typography>
                  <Typography variant="large" className="text-zinc-500 uppercase tracking-widest text-sm">{exp.company}</Typography>
                </div>
                <div className="md:col-span-8 space-y-8">
                  <Typography variant="h2" className="text-3xl md:text-5xl tracking-tight leading-tight">{exp.role}</Typography>
                  <div className="space-y-6">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-cta mt-2.5 shrink-0" />
                        <Typography className="text-zinc-600 text-lg leading-relaxed">{resp}</Typography>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Certs */}
        <section className="flex flex-col gap-32">
          {/* Education - Asymmetrical List */}
          <div>
            <div className="mb-16 flex items-center gap-8">
              <Typography variant="h2" className="text-4xl md:text-6xl font-bold shrink-0">Education</Typography>
              <div className="h-[1px] w-full bg-border" />
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-y-16 gap-x-8">
              {educationData.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={cn(
                    "w-full md:w-[calc(50%-1rem)] lg:w-[calc(45%-1rem)] p-8 rounded-3xl border border-border bg-surface shadow-sm relative group overflow-hidden hover:shadow-md transition-shadow",
                    idx % 2 !== 0 && "md:ml-auto md:mt-16"
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Badge variant="secondary" className="mb-6">{edu.years}</Badge>
                  <Typography variant="h3" className="text-2xl md:text-3xl mb-4 font-bold text-primary">{edu.program}</Typography>
                  <Typography className="text-cta mb-6 font-semibold">{edu.institution}</Typography>
                  <Typography className="text-zinc-600 leading-relaxed">{edu.achievements}</Typography>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications - Bento Grid Style */}
          <div>
            <div className="mb-16 flex flex-row-reverse items-center gap-8">
              <Typography variant="h2" className="text-4xl md:text-6xl font-bold shrink-0">Certifications</Typography>
              <div className="h-[1px] w-full bg-border" />
            </div>
            
            <div className="flex flex-col md:flex-row md:flex-wrap gap-6">
              {certificationData.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setSelectedCert(cert)}
                  className={cn(
                    "group relative overflow-hidden rounded-3xl cursor-pointer border border-border bg-surface shadow-sm hover:shadow-md flex flex-col justify-between p-8 min-h-[250px]",
                    idx === 0 || idx === 3 ? "w-full md:w-[calc(66.666%-0.75rem)]" : "w-full md:w-[calc(33.333%-0.75rem)]"
                  )}
                >
                  <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                    <Badge variant="outline" className="w-fit group-hover:border-cta group-hover:text-cta transition-colors bg-white">
                      {cert.date}
                    </Badge>
                    <div>
                      <Typography variant="h3" className="text-xl md:text-2xl font-bold mb-2 group-hover:text-cta transition-colors text-primary">{cert.name}</Typography>
                      <Typography variant="small" className="text-zinc-500 line-clamp-2">{cert.issuer}</Typography>
                    </div>
                  </div>
                  
                  {/* Subtle hover indicator */}
                  <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-cta group-hover:text-cta translate-x-4 group-hover:translate-x-0 shadow-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Certificate Modal */}
      <Modal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)}>
        {selectedCert && (
          <div className="flex flex-col md:flex-row gap-8 bg-surface p-6 md:p-8 rounded-2xl">
            <div className="w-full md:w-1/2 shrink-0 aspect-[4/3] relative rounded-xl overflow-hidden border border-border">
              {selectedCert.image ? (
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  fill
                  className="object-contain bg-zinc-50"
                />
              ) : (
                <div className="w-full h-full bg-zinc-50 flex items-center justify-center text-zinc-400">
                  No Image Available
                </div>
              )}
            </div>
            <div className="w-full flex flex-col justify-center space-y-6">
              <div>
                <Typography variant="h3" className="text-2xl font-bold mb-2 text-primary">{selectedCert.name}</Typography>
                <Typography className="text-zinc-600">{selectedCert.issuer}</Typography>
              </div>
              
              <div className="grid grid-cols-2 gap-4 border-y border-border py-4">
                <div>
                  <Typography variant="small" className="text-zinc-500 uppercase tracking-widest text-xs mb-1">Date</Typography>
                  <Typography className="font-semibold text-primary">{selectedCert.date}</Typography>
                </div>
                <div>
                  <Typography variant="small" className="text-zinc-500 uppercase tracking-widest text-xs mb-1">ID</Typography>
                  <Typography className="font-semibold text-primary font-mono">{selectedCert.id}</Typography>
                </div>
              </div>

              {selectedCert.description && (
                <div>
                  <Typography className="text-zinc-600 leading-relaxed">
                    {selectedCert.description}
                  </Typography>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}
