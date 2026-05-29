import { Menu } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { formUrl, navItems } from '../data/site'
import { CTAButton } from './CTAButton'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex min-h-[76px] items-center justify-between gap-5">
        <Logo />
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Navigazione principale">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold transition ${
                  isActive ? 'bg-teal-50 text-teal-700' : 'text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden xl:block">
          <CTAButton to={formUrl} external>
            Manifesta interesse
          </CTAButton>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 text-slate-900 xl:hidden"
          aria-label="Apri menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
