import { Typography } from "@/components/atoms/Typography"
import { profileData } from "@/lib/content"

export function Footer() {
  return (
    <footer className="w-full border-t border-border mt-24 py-16 px-6 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <Typography variant="large" className="text-primary">{profileData.name}</Typography>
          <Typography variant="muted">{profileData.role}</Typography>
        </div>
        
        <div className="flex gap-6">
          {profileData.contact.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-cta transition-colors text-sm font-medium"
            >
              {social.platform}
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <Typography variant="muted" className="text-xs">
          &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
        </Typography>
        <Typography variant="muted" className="text-xs mt-2 md:mt-0">
          Powered by Next.js & Tailwind CSS
        </Typography>
      </div>
    </footer>
  )
}
