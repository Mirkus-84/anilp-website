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
    <div className="fixed inset-0 z-50 bg-slate-900/35 xl:hidden" role="dialog" aria-modal="true">
      <div className="ml-auto flex h-full w-full max-w-sm flex-col border-l border-[#D9E1E8] bg-white p-5">
        <div className="flex items-center justify-between gap-4">
          <Logo />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md border border-[#D9E1E8] text-[#1E2A44] transition hover:border-[#087F7A] hover:bg-[#E6F5F3]"
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
                `rounded-md px-4 py-3 text-base font-semibold transition ${
                  isActive ? 'bg-[#E6F5F3] text-[#066B67]' : 'text-[#334155] hover:bg-[#F7F9FB] hover:text-[#1E2A44]'
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
