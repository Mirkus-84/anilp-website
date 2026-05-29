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
      'bg-teal-600 text-white shadow-lg shadow-teal-900/10 hover:bg-teal-500',
    secondary:
      'border border-slate-300 bg-white text-slate-950 hover:border-teal-500 hover:text-teal-700',
    light:
      'border border-white/25 bg-white text-slate-950 hover:bg-teal-50',
  }

  const className = `inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition ${classes[variant]}`

  if (external) {
    return (
      <a href={to} className={className} target="_blank" rel="noreferrer">
        {children}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    )
  }

  return (
    <Link to={to} className={className}>
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  )
}
