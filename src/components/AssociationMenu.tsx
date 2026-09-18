import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { associationNavItems } from '../data/site'

type AssociationMenuProps = {
  mobile?: boolean
}

export function AssociationMenu({ mobile = false }: AssociationMenuProps) {
  const { pathname } = useLocation()
  const active = associationNavItems.some((item) => item.path === pathname)
  const [expanded, setExpanded] = useState(mobile && active)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelId = mobile ? 'association-mobile-links' : 'association-desktop-links'

  useEffect(() => {
    if (!expanded || mobile) return
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
        setExpanded(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [expanded, mobile])

  return (
    <div
      ref={containerRef}
      className="relative"
      onBlur={(event) => {
        if (!mobile && !event.currentTarget.contains(event.relatedTarget)) setExpanded(false)
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && expanded) {
          event.stopPropagation()
          setExpanded(false)
          triggerRef.current?.focus()
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        className={`flex items-center justify-between gap-1.5 rounded-md font-semibold transition-colors duration-200 ${
          mobile ? 'w-full px-5 py-3 text-lg' : 'px-3 py-2 text-sm'
        } ${active || expanded ? 'bg-[#E6F5F3] text-[#066B67]' : 'text-[#334155] hover:bg-[#F7F9FB] hover:text-[#1E2A44]'}`}
        onClick={() => setExpanded((value) => !value)}
        onKeyDown={(event) => {
          if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
          event.preventDefault()
          setExpanded(true)
          const last = event.key === 'ArrowUp'
          requestAnimationFrame(() => {
            const links = containerRef.current?.querySelectorAll<HTMLAnchorElement>('a')
            if (links?.length) links[last ? links.length - 1 : 0].focus()
          })
        }}
      >
        Associazione
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <ul
        id={panelId}
        hidden={!expanded}
        className={mobile
          ? 'mt-1 space-y-1 border-l-2 border-[#D9E1E8] pl-3 ml-5'
          : 'absolute left-0 top-full mt-2 w-64 space-y-1 rounded-md border border-[#D9E1E8] bg-white p-2 shadow-lg shadow-slate-950/10'}
      >
        {associationNavItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              onClick={() => setExpanded(false)}
              className={({ isActive }) => `block rounded-md px-4 py-3 text-sm font-semibold transition-colors ${
                isActive ? 'bg-[#E6F5F3] text-[#066B67]' : 'text-[#334155] hover:bg-[#F7F9FB] hover:text-[#066B67]'
              }`}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
