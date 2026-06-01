import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type CTAButtonProps = {
  children: React.ReactNode
  to: string
  variant?: 'primary' | 'secondary' | 'light'
  external?: boolean
}

export function CTAButton({ children, to, variant = 'primary', external }: CTAButtonProps) {
  const classes = {
    primary:
      'bg-[linear-gradient(135deg,#087F7A,#0B9A91)] text-white shadow-md shadow-teal-900/10 hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,#066B67,#087F7A)] hover:shadow-lg hover:shadow-teal-900/20',
    secondary:
      'border border-[#D9E1E8] bg-white text-[#1E2A44] hover:-translate-y-0.5 hover:border-[#087F7A] hover:bg-[#E6F5F3] hover:text-[#066B67] hover:shadow-md',
    light:
      'border border-[#087F7A] bg-white text-[#066B67] hover:-translate-y-0.5 hover:bg-[#E6F5F3] hover:shadow-md',
  }

  const className = `group inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition-all duration-200 ease-out focus-visible:outline-[#087F7A] ${classes[variant]}`

  if (external) {
    return (
      <a href={to} className={className} target="_blank" rel="noreferrer">
        {children}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </a>
    )
  }

  return (
    <Link to={to} className={className}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  )
}
