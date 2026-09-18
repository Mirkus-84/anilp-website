import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import { interestUrl, navItems } from '../data/site'
import { CTAButton } from './CTAButton'
import { Logo } from './Logo'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    const root = document.getElementById('root')
    const previousInert = root?.inert ?? false
    const desktop = window.matchMedia('(min-width: 1280px)')

    document.body.style.overflow = 'hidden'
    if (root) root.inert = true
    dialogRef.current?.querySelector<HTMLButtonElement>('button')?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab') return
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    const onResize = () => { if (desktop.matches) onClose() }
    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onResize)

    return () => {
      document.body.style.overflow = previousOverflow
      if (root) root.inert = previousInert
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onResize)
      previousFocus?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      ref={dialogRef}
      id="anilp-mobile-menu"
      className="fixed inset-0 z-[100] h-dvh bg-white xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu di navigazione"
      onClick={(event) => { if (event.target instanceof Element && event.target.closest('a')) onClose() }}
    >
      <div className="flex h-full w-full flex-col bg-white">
        <div className="flex min-h-24 shrink-0 items-center justify-between gap-4 border-b border-[#D9E1E8] px-6">
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
        <nav className="grid min-h-0 flex-1 content-start gap-2 overflow-y-auto bg-white px-6 py-8" aria-label="Navigazione mobile">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
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
        <div className="shrink-0 border-t border-[#D9E1E8] bg-white px-6 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <CTAButton to={interestUrl}>
            Manifesta interesse
          </CTAButton>
        </div>
      </div>
    </div>,
    document.body,
  )
}
