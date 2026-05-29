import { Link } from 'react-router-dom'
import { navItems } from '../data/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-slate-950 py-14 text-white">
      <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-md leading-7 text-slate-300">
            ANILP è in fase di costituzione e promuove un percorso verso una
            rappresentanza nazionale degli infermieri liberi professionisti.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-teal-200">Link rapidi</h2>
          <div className="mt-4 grid gap-2 text-slate-300">
            {navItems.slice(1, 6).map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-teal-200">Documenti</h2>
          <div className="mt-4 grid gap-2 text-slate-300">
            <Link to="/documenti" className="hover:text-white">Bozza Statuto</Link>
            <Link to="/documenti" className="hover:text-white">Modulistica adesione</Link>
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-teal-200">Contatti</h2>
          <div className="mt-4 grid gap-2 text-slate-300">
            <a href="mailto:info@anilp.it" className="hover:text-white">info@anilp.it</a>
            <span>PEC in fase di attivazione</span>
            <span>Sede legale in fase di definizione</span>
          </div>
        </div>
      </div>
      <div className="container-page mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
        © ANILP - Associazione Nazionale Infermieri Liberi Professionisti
      </div>
    </footer>
  )
}
