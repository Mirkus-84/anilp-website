import { Link } from 'react-router-dom'
import { navItems } from '../data/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14 text-slate-800">
      <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-md leading-7 text-slate-600">
            ANILP e in fase di costituzione e promuove un percorso verso una
            rappresentanza nazionale degli infermieri liberi professionisti.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-teal-800">Link rapidi</h2>
          <div className="mt-4 grid gap-2 text-slate-600">
            {navItems.slice(1, 6).map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-teal-800">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-teal-800">Documenti</h2>
          <div className="mt-4 grid gap-2 text-slate-600">
            <Link to="/documenti" className="hover:text-teal-800">Bozza Statuto</Link>
            <Link to="/documenti" className="hover:text-teal-800">Modulistica adesione</Link>
            <Link to="/privacy-policy" className="hover:text-teal-800">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-teal-800">Cookie Policy</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-teal-800">Contatti</h2>
          <div className="mt-4 grid gap-2 text-slate-600">
            <a href="mailto:info@anilp.it" className="hover:text-teal-800">info@anilp.it</a>
            <span>PEC in fase di attivazione</span>
            <span>Sede legale in fase di definizione</span>
          </div>
        </div>
      </div>
      <div className="container-page mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
        © ANILP - Associazione Nazionale Infermieri Liberi Professionisti
      </div>
    </footer>
  )
}
