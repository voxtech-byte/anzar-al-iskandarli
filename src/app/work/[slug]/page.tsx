import { caseStudies } from "@/lib/content"
import { notFound } from "next/navigation"
import { Typography } from "@/components/atoms/Typography"
import { Badge } from "@/components/atoms/Badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.id,
  }))
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.id === slug)

  if (!study) {
    notFound()
  }

  return (
    <div className="max-w-5xl mx-auto pb-24 px-6 lg:px-12">
      <Link href="/work" className="inline-flex items-center text-zinc-500 hover:text-cta mb-12 transition-colors font-medium">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Works
      </Link>

      <header className="mb-16">
        <Typography variant="h1" className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          {study.title}
        </Typography>
        <Typography variant="lead" className="text-xl text-zinc-600">
          {study.shortDescription}
        </Typography>
      </header>

      {/* Hero Visual */}
      <div className="w-full aspect-video bg-surface rounded-3xl mb-16 flex items-center justify-center border border-border shadow-sm">
        <Typography variant="muted">Hero Image / Video Showcase</Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Sticky Sidebar */}
        <div className="md:col-span-4">
          <div className="sticky top-32 space-y-8">
            <div>
              <Typography variant="small" className="uppercase tracking-wider text-zinc-500 mb-2 block">Role</Typography>
              <Typography className="font-semibold text-primary">AI Engineer & Frontend Architect</Typography>
            </div>
            
            {study.visuals && (
              <div>
                <Typography variant="small" className="uppercase tracking-wider text-zinc-500 mb-3 block">Deliverables</Typography>
                <div className="flex flex-col gap-2">
                  {study.visuals.map(tag => (
                    <Badge key={tag} variant="secondary" className="w-fit bg-surface-elevated">{tag}</Badge>
                  ))}
                </div>
              </div>
            )}
            
            {study.links && (
              <div className="pt-6 border-t border-border flex gap-4">
                {study.links.live && (
                  <a href={study.links.live} className="text-cta font-semibold hover:underline">Live Preview ↗</a>
                )}
                {study.links.github && (
                  <a href={study.links.github} className="text-zinc-600 font-semibold hover:text-primary transition-colors">GitHub ↗</a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-8 space-y-16">
          <section>
            <Typography variant="h2" className="text-3xl font-bold mb-6">The Challenge</Typography>
            <Typography className="text-zinc-600 text-lg leading-relaxed">
              {study.challenge}
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="text-3xl font-bold mb-6">The Solution</Typography>
            <Typography className="text-zinc-600 text-lg leading-relaxed mb-8">
              {study.solution}
            </Typography>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-surface rounded-2xl border border-border flex items-center justify-center p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <Typography variant="muted" className="text-xs font-semibold">Detail View</Typography>
              </div>
              <div className="aspect-square bg-surface rounded-2xl border border-border flex items-center justify-center p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <Typography variant="muted" className="text-xs font-semibold">Architecture</Typography>
              </div>
            </div>
          </section>

          <section>
            <Typography variant="h2" className="text-3xl font-bold mb-6">The Result</Typography>
            <Typography className="text-zinc-600 text-lg leading-relaxed">
              {study.result}
            </Typography>
          </section>

          {study.testimonial && (
            <section className="mt-16 bg-blue-50 border border-blue-100 p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                {/* Quote Icon representation */}
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-cta"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              </div>
              <Typography variant="blockquote" className="text-2xl text-zinc-800 border-none pl-0 italic font-medium leading-relaxed relative z-10 bg-transparent">
                {study.testimonial}
              </Typography>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
