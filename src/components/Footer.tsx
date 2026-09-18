import { Link } from 'react-router-dom'
import { associationPec, associationTaxCode, institutionalEmails, navItems, registeredOffice, secondaryNavItems } from '../data/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-[#D9E1E8] bg-white py-14 text-[#1F2937]">
      <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo compact />
          <p className="mt-5 max-w-md leading-7 text-[#475569]">
            ANILP è l’associazione nazionale per la tutela e
            la valorizzazione degli infermieri liberi professionisti.
            Costituita il 9 settembre 2026 e registrata presso l’Agenzia delle
            Entrate il 10 settembre 2026.
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
            <Link to="/documenti" className="transition hover:text-[#066B67]">Statuto e atto costitutivo</Link>
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
            {institutionalEmails.map((item) => (
              <a key={item.email} href={`mailto:${item.email}`} className="transition hover:text-[#066B67]">
                {item.email}
              </a>
            ))}
            <a href={`mailto:${associationPec}`} className="break-words transition hover:text-[#066B67]">PEC: {associationPec}</a>
            <span>Sede legale: {registeredOffice}</span>
            <span>Codice fiscale: {associationTaxCode}</span>
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
