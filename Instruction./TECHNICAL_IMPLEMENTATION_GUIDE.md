# 🛠️ TECHNICAL IMPLEMENTATION GUIDE
## Portfolio Website - Code Examples & Component Blueprints

---

## I. PROJECT SETUP & CONFIGURATION

### 1. Next.js 15 Project Initialization

```bash
# Create new Next.js project
npx create-next-app@latest portfolio-website \
  --typescript \
  --tailwind \
  --eslint \
  --src-dir \
  --experimental-app

# Install additional dependencies
npm install framer-motion clsx zustand react-hook-form

# Development
npm run dev
# http://localhost:3000
```

### 2. TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es2020",
    "useDefineForEnumMembers": true,
    "lib": ["es2020", "dom", "dom.iterable"],
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "outDir": ".next",
    "noEmit": true,
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "noImplicitAny": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@pages/*": ["./src/pages/*"],
      "@styles/*": ["./src/styles/*"],
      "@utils/*": ["./src/utils/*"],
      "@types/*": ["./src/types/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### 3. Tailwind CSS Configuration

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#7F77DD',
          secondary: '#1D9E75',
          accent: '#D85A30',
          dark: '#000000',
          light: '#FFFFFF',
          gray: {
            50: '#F5F5F5',
            100: '#E0E0E0',
            200: '#999999',
            300: '#666666',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#000000',
            'a': {
              color: '#7F77DD',
              '&:hover': {
                color: '#6360BB',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
```

---

## II. CORE COMPONENTS

### 1. Layout Components

#### Header/Navigation Component

```tsx
// src/components/common/Header.tsx
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-bold text-xl text-brand-dark hover:text-brand-primary transition"
        >
          MN
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition ${
                pathname === item.href
                  ? 'text-brand-primary font-semibold'
                  : 'text-gray-300 hover:text-brand-dark'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2 rounded-lg bg-brand-primary text-white text-sm font-medium hover:bg-opacity-90 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-dark focus:outline-none"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          <div className="flex flex-col gap-4">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-brand-dark hover:text-brand-primary transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2 rounded-lg bg-brand-primary text-white text-center font-medium hover:bg-opacity-90 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
```

#### Footer Component

```tsx
// src/components/common/Footer.tsx
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-3">Muhammad Nizar</h3>
            <p className="text-sm text-gray-300 mb-4">
              AI Engineer & Tech Provider. Democratizing access to 
              high-quality web technology through AI integration.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-brand-primary transition">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-brand-primary transition">GitHub</a>
              <a href="#" className="text-gray-300 hover:text-brand-primary transition">Instagram</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-brand-primary transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-brand-primary transition">About</Link></li>
              <li><Link href="/work" className="text-gray-300 hover:text-brand-primary transition">Work</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-brand-primary transition">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="mailto:finance.budsteam@gmail.com"
                  className="text-gray-300 hover:text-brand-primary transition"
                >
                  Email
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/62..."
                  className="text-gray-300 hover:text-brand-primary transition"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-gray-300 hover:text-brand-primary transition"
                >
                  Schedule Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
          <p>© {currentYear} Muhammad Nizar. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-brand-primary transition">Privacy</Link>
            <Link href="/terms" className="hover:text-brand-primary transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

### 2. Card Components

#### Project Card Component

```tsx
// src/components/ui/ProjectCard.tsx
import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  subtitle: string
  description: string
  image: string
  tech: string[]
  slug: string
  featured?: boolean
  color: 'blue' | 'teal' | 'coral'
}

export function ProjectCard({
  title,
  subtitle,
  description,
  image,
  tech,
  slug,
  featured = false,
  color,
}: ProjectCardProps) {
  const colorMap = {
    blue: 'from-blue-50 to-blue-100 border-blue-200',
    teal: 'from-teal-50 to-teal-100 border-teal-200',
    coral: 'from-coral-50 to-coral-100 border-coral-200',
  }

  const techColorMap = {
    blue: 'bg-blue-50 border-blue-200 text-blue-600',
    teal: 'bg-teal-50 border-teal-200 text-teal-600',
    coral: 'bg-coral-50 border-coral-200 text-coral-600',
  }

  return (
    <Link href={`/work/${slug}`}>
      <div
        className={`
          rounded-xl border-1.5 overflow-hidden transition-all duration-300
          hover:shadow-lg hover:scale-102 cursor-pointer
          bg-gradient-to-br ${colorMap[color]}
        `}
      >
        {/* Image */}
        <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {featured && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-semibold rounded-md">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            {subtitle}
          </p>
          <p className="text-sm text-gray-700 mb-4">
            {description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map(t => (
              <span
                key={t}
                className={`text-xs px-3 py-1 rounded-full border ${techColorMap[color]}`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="text-sm font-medium hover:underline">
            View Case Study →
          </div>
        </div>
      </div>
    </Link>
  )
}
```

#### Service Card Component

```tsx
// src/components/ui/ServiceCard.tsx
interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <div className="p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4 text-2xl">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        {description}
      </p>
      <ul className="space-y-1 text-xs text-gray-500">
        {features.map((feature, idx) => (
          <li key={idx}>✓ {feature}</li>
        ))}
      </ul>
    </div>
  )
}
```

### 3. Form Components

#### Contact Form Component

```tsx
// src/components/forms/ContactForm.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
  fullName: string
  email: string
  phone?: string
  projectType?: string
  budget?: string
  message: string
  attachment?: FileList
}

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>()
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const onSubmit = async (data: FormData) => {
    try {
      // Send to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          {...register('fullName', {
            required: 'Full name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' },
          })}
          className={`
            w-full px-4 py-2 rounded-lg border transition
            focus:outline-none focus:ring-2 focus:ring-brand-primary
            ${errors.fullName ? 'border-red-500' : 'border-gray-200'}
          `}
          placeholder="Your full name"
        />
        {errors.fullName && (
          <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Email *
        </label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
          })}
          className={`
            w-full px-4 py-2 rounded-lg border transition
            focus:outline-none focus:ring-2 focus:ring-brand-primary
            ${errors.email ? 'border-red-500' : 'border-gray-200'}
          `}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone (Optional) */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Phone (Optional)
        </label>
        <input
          type="tel"
          {...register('phone')}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 transition focus:outline-none focus:ring-2 focus:ring-brand-primary"
          placeholder="+62..."
        />
      </div>

      {/* Project Type */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Project Type
        </label>
        <select
          {...register('projectType')}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 transition focus:outline-none focus:ring-2 focus:ring-brand-primary"
        >
          <option value="">Select an option</option>
          <option value="web-dev">Web Development</option>
          <option value="ai-integration">AI Integration</option>
          <option value="consulting">Consulting</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Budget Range
        </label>
        <select
          {...register('budget')}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 transition focus:outline-none focus:ring-2 focus:ring-brand-primary"
        >
          <option value="">Select range</option>
          <option value="under-1k">Under $1,000</option>
          <option value="1k-5k">$1,000 - $5,000</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="custom">Custom / Let's discuss</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Message *
        </label>
        <textarea
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 20, message: 'Message must be at least 20 characters' },
          })}
          rows={5}
          className={`
            w-full px-4 py-2 rounded-lg border transition resize-none
            focus:outline-none focus:ring-2 focus:ring-brand-primary
            ${errors.message ? 'border-red-500' : 'border-gray-200'}
          `}
          placeholder="Tell me about your project..."
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            w-full px-6 py-3 rounded-lg font-medium transition
            ${isSubmitting || submitStatus === 'success'
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-brand-primary text-white hover:bg-opacity-90'
            }
          `}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
          ✓ Message sent! I'll get back to you within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
          ✗ Something went wrong. Please try again or email me directly.
        </div>
      )}
    </form>
  )
}
```

---

## III. PAGE COMPONENTS

### Home Page Example

```tsx
// src/app/page.tsx
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Services } from '@/components/sections/Services'
import { Skills } from '@/components/sections/Skills'
import { CTA } from '@/components/sections/CTA'

export const metadata = {
  title: 'Muhammad Nizar | AI Engineer & Tech Provider',
  description: 'Building digital solutions with AI integration and human-centered design',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedProjects />
      <Services />
      <Skills />
      <CTA />
    </main>
  )
}
```

### Hero Section Component

```tsx
// src/components/sections/Hero.tsx
import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-12 flex items-center bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              AI Engineer crafting
              <br />
              <span className="text-brand-primary">digital solutions</span>
              <br />
              with human-centered design
            </h1>

            <p className="text-lg text-gray-600 mb-2">
              Hybrid human-AI workflow | No-Code/Low-Code Specialist
            </p>
            <p className="text-lg text-gray-600 mb-8">
              10 months of focused impact across 5+ professional projects
            </p>

            {/* CTAs */}
            <div className="flex gap-4 mb-12">
              <Link
                href="/work"
                className="px-8 py-3 rounded-lg bg-brand-primary text-white font-medium hover:bg-opacity-90 transition"
              >
                Explore My Work →
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg border-2 border-brand-primary text-brand-primary font-medium hover:bg-brand-primary hover:text-white transition"
              >
                Let's Talk
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-gray-100">
                <div className="text-2xl font-bold text-brand-primary mb-1">10</div>
                <p className="text-xs text-gray-600">Months Learning</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-100">
                <div className="text-2xl font-bold text-brand-primary mb-1">5+</div>
                <p className="text-xs text-gray-600">Projects</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-100">
                <div className="text-2xl font-bold text-brand-primary mb-1">60%</div>
                <p className="text-xs text-gray-600">Faster Delivery</p>
              </div>
            </div>
          </div>

          {/* Right Side: Visual */}
          <div className="hidden md:block relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl overflow-hidden">
              {/* Decorative shapes */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl"></div>
              
              {/* Content card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="font-semibold text-gray-900">Muhammad Nizar</p>
                  <p className="text-sm text-gray-600">AI Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## IV. DATA STRUCTURES

### Projects Data

```ts
// src/data/projects.ts
export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  fullDescription: string
  image: string
  featured: boolean
  category: string[]
  tech: string[]
  color: 'blue' | 'teal' | 'coral'
  stats: Array<{
    label: string
    value: string
  }>
  clientContext: string
  testimonial?: {
    quote: string
    author: string
    role: string
    organization: string
  }
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'cosmic-editorial',
    title: 'Cosmic Editorial',
    subtitle: 'Interactive Astronomy Learning Platform',
    description: 'Bridging STEM education with Islamic knowledge through ML-powered correlations',
    fullDescription: '...',
    image: '/images/projects/cosmic-editorial.jpg',
    featured: true,
    category: ['Educational Tech', 'Frontend'],
    tech: ['React 18', 'TypeScript', 'ML', 'FSD'],
    color: 'blue',
    stats: [
      { label: 'Response Time', value: '<200ms' },
      { label: 'Core Web Vitals', value: '✓' },
      { label: 'Active Users', value: '30+' },
    ],
    clientContext: 'Educational Platform | MTs Sains Algebra Sorong',
    testimonial: {
      quote: 'Media pembelajaran ini sangat membantu siswa memahami konsep astronomi yang abstrak sekaligus mendekatkan mereka pada nilai spiritual Al-Qur\'an secara ilmiah.',
      author: 'Teacher',
      role: 'IPA Department',
      organization: 'MTs Sains Algebra Sorong',
    },
  },
  // ... more projects
]
```

### Skills Data

```ts
// src/data/skills.ts
export interface Skill {
  name: string
  category: 'Frontend' | 'Backend' | 'No-Code' | 'Soft Skills'
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  experience: string
}

export const skills: Skill[] = [
  {
    name: 'React 18',
    category: 'Frontend',
    proficiency: 'Advanced',
    experience: '6+ months',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    proficiency: 'Intermediate',
    experience: '5+ months',
  },
  // ... more skills
]
```

---

## V. API ROUTES

### Contact Form Endpoint

```ts
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, phone, projectType, budget, message } = body

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form: ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
        ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thank you for contacting me',
      html: `
        <h2>Hi ${fullName},</h2>
        <p>Thanks for reaching out! I've received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to check out my portfolio at https://muhammadnizar.com</p>
        <p>Best regards,<br>Muhammad Nizar</p>
      `,
    })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
```

---

## VI. ENVIRONMENT VARIABLES

```env
# .env.local
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@muhammadnizar.com
CONTACT_EMAIL=finance.budsteam@gmail.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Blog (if using MDX)
NEXT_PUBLIC_BLOG_PATH=./src/content/blog
```

---

## VII. DEPLOYMENT CHECKLIST

### Pre-Deployment

```bash
# 1. Run tests
npm run test

# 2. Check build
npm run build

# 3. Lint code
npm run lint

# 4. Performance audit
npm run lighthouse

# 5. Type check
npm run type-check
```

### Deployment to Vercel

```bash
# 1. Push to GitHub
git push origin main

# 2. Connect to Vercel (one-time)
npm i -g vercel
vercel

# 3. Set environment variables in Vercel dashboard
# - SMTP_* variables
# - Analytics ID
# - Any API keys

# 4. Automatic deployment on push
# Vercel will automatically deploy on git push
```

### Deployment to Railway/Self-Hosted

```bash
# Build Docker image
docker build -t portfolio:latest .

# Run locally
docker run -p 3000:3000 portfolio:latest

# Deploy to cloud
# Follow platform-specific instructions
```

---

## VIII. PERFORMANCE OPTIMIZATION

### Next.js Configuration for Performance

```js
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
})
```

---

## SUMMARY

This technical guide provides:

✅ Project setup and configuration
✅ Reusable component examples
✅ Data structure templates  
✅ API route implementation
✅ Environment variable setup
✅ Deployment strategies
✅ Performance optimization

Follow these patterns to build a professional, performant portfolio website!

---

**Version**: 1.0
**Last Updated**: June 5, 2026

