import { Link } from 'react-router-dom'
import { navItems, secondaryNavItems } from '../data/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-[#D9E1E8] bg-white py-14 text-[#1F2937]">
      <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo symbol />
          <p className="mt-5 max-w-md leading-7 text-[#475569]">
            ANILP è in fase di costituzione e promuove un percorso verso una
            rappresentanza nazionale degli infermieri liberi professionisti.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#087F7A]">Link rapidi</h2>
          <div className="mt-4 grid gap-2 text-[#475569]">
            {navItems.slice(1).map((item) => (
              <Link key={item.path} to={item.path} className="transition hover:text-[#066B67]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#087F7A]">Sezioni istituzionali</h2>
          <div className="mt-4 grid gap-2 text-[#475569]">
            <Link to="/documenti" className="transition hover:text-[#066B67]">Bozza Statuto</Link>
            {secondaryNavItems.slice(0, 5).map((item) => (
              <Link key={item.path} to={item.path} className="transition hover:text-[#066B67]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#087F7A]">Contatti</h2>
          <div className="mt-4 grid gap-2 text-[#475569]">
            <a href="mailto:info@anilp.it" className="transition hover:text-[#066B67]">info@anilp.it</a>
            <span>PEC in fase di attivazione</span>
            <span>Sede legale in fase di definizione</span>
            <Link to="/privacy-policy" className="transition hover:text-[#066B67]">Privacy Policy</Link>
            <Link to="/cookie-policy" className="transition hover:text-[#066B67]">Cookie Policy</Link>
          </div>
        </div>
      </div>
      <div className="container-page mt-10 border-t border-[#D9E1E8] pt-6 text-sm text-[#475569]">
        © ANILP - Associazione Nazionale Infermieri Liberi Professionisti
      </div>
    </footer>
  )
}
