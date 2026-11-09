import type { ReactNode } from 'react'

const profiles = [
  { label: 'Facebook', url: 'https://www.facebook.com/share/1F6HLx2dEg/?mibextid=wwXIfr' },
  { label: 'Instagram', url: 'https://www.instagram.com/anilp_associazione_infermieri/' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/anilp/' },
] as const

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.973H15.83c-1.49 0-1.955.93-1.955 1.885v2.263h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM6.673 20.452H3.995V9h2.678v11.452ZM22.225 0H1.771C.792 0 0 .775 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .775 23.2 0 22.225 0Z" />
    </svg>
  )
}

function SocialLink({ label, url, children }: { label: string; url: string; children: ReactNode }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      aria-label={`Visita il profilo ANILP su ${label} (si apre in una nuova scheda)`}
      className="inline-flex items-center gap-2 rounded-xl border border-[#D9E1E8] bg-white px-3 py-2.5 font-semibold text-[#1E2A44] transition-colors hover:border-[#087F7A] hover:bg-[#EFFAF8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F7A]">
      {children}<span>{label}</span>
    </a>
  )
}

export function SocialLinks() {
  return (
    <nav aria-label="Profili social ufficiali ANILP">
      <div className="flex flex-wrap gap-3">
        <SocialLink label={profiles[0].label} url={profiles[0].url}><span className="text-[#1877F2]"><FacebookIcon /></span></SocialLink>
        <SocialLink label={profiles[1].label} url={profiles[1].url}><span className="text-[#C13584]"><InstagramIcon /></span></SocialLink>
        <SocialLink label={profiles[2].label} url={profiles[2].url}><span className="text-[#0A66C2]"><LinkedInIcon /></span></SocialLink>
      </div>
    </nav>
  )
}
