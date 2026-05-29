import { X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { formUrl, navItems } from '../data/site'
import { CTAButton } from './CTAButton'
import { Logo } from './Logo'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 xl:hidden" role="dialog" aria-modal="true">
      <div className="ml-auto flex h-full w-full max-w-sm flex-col bg-white p-5 shadow-2xl">
        <div className="flex items-center justify-between gap-4">
          <Logo />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md border border-slate-200"
            aria-label="Chiudi menu"
            onClick={onClose}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <nav className="mt-8 grid gap-2" aria-label="Navigazione mobile">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-md px-4 py-3 text-base font-semibold ${
                  isActive ? 'bg-teal-50 text-teal-700' : 'text-slate-800 hover:bg-slate-100'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-8">
          <CTAButton to={formUrl} external>
            Manifesta interesse
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
