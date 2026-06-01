import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { formUrl, navItems } from '../data/site'
import { CTAButton } from './CTAButton'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#D9E1E8] bg-white/97 backdrop-blur transition-shadow duration-200 ${
        scrolled ? 'shadow-md shadow-slate-900/8' : 'shadow-none'
      }`}
    >
      <div className="container-page flex min-h-[78px] items-center justify-between gap-5">
        <Logo compact />
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Navigazione principale">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-200 after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:transition-opacity ${
                  isActive
                    ? 'bg-[#E6F5F3] text-[#066B67] after:bg-[#087F7A] after:opacity-100'
                    : 'text-[#334155] after:bg-[#087F7A] after:opacity-0 hover:bg-[#F7F9FB] hover:text-[#1E2A44] hover:after:opacity-100'
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
          className="grid h-11 w-11 place-items-center rounded-md border border-[#D9E1E8] text-[#1E2A44] transition hover:border-[#087F7A] hover:bg-[#E6F5F3] xl:hidden"
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
