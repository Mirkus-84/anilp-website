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
    <div className="fixed inset-0 z-[100] bg-white xl:hidden" role="dialog" aria-modal="true">
      <div className="flex min-h-dvh w-full flex-col bg-white">
        <div className="flex min-h-24 items-center justify-between gap-4 border-b border-[#D9E1E8] px-6">
          <Logo compact />
          <button
            type="button"
            className="grid h-14 w-14 place-items-center rounded-md border border-[#D9E1E8] bg-white text-[#1E2A44] transition hover:border-[#087F7A] hover:bg-[#E6F5F3]"
            aria-label="Chiudi menu"
            onClick={onClose}
          >
            <X className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
        <nav className="grid flex-1 content-start gap-2 overflow-y-auto bg-white px-6 py-8" aria-label="Navigazione mobile">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-md px-5 py-4 text-xl font-black transition ${
                  isActive ? 'bg-[#E6F5F3] text-[#066B67]' : 'text-[#334155] hover:bg-[#F7F9FB] hover:text-[#1E2A44]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="border-t border-[#D9E1E8] bg-white px-6 py-6">
          <CTAButton to={formUrl} external>
            Manifesta interesse
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
