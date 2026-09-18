import { Link } from 'react-router-dom'
import { associationPec, associationTaxCode, institutionalEmails, navItems, registeredOffice, secondaryNavItems } from '../data/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-[#D9E1E8] bg-white py-14 text-[#1F2937]">
      <div className="container-page grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1fr_1.15fr]">
        <div className="min-w-0">
          <div className="flex flex-wrap items-start gap-x-5 gap-y-4">
            <Logo compact />
            <dl className="min-w-0 flex-1 basis-40 text-sm leading-6 text-[#475569]">
              <div>
                <dt className="font-semibold text-[#1E2A44]">Sede legale</dt>
                <dd>{registeredOffice}</dd>
              </div>
              <div className="mt-2">
                <dt className="font-semibold text-[#1E2A44]">Codice fiscale</dt>
                <dd>{associationTaxCode}</dd>
              </div>
            </dl>
          </div>
          <p className="mt-5 max-w-md leading-7 text-[#475569]">
            ANILP è l’associazione nazionale per la tutela e
            la valorizzazione degli infermieri liberi professionisti.
          </p>
        </div>
        <div className="min-w-0">
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#087F7A]">Link rapidi</h2>
          <div className="mt-4 grid gap-2 text-[#475569]">
            {navItems.slice(1).map((item) => (
              <Link key={item.path} to={item.path} className="transition hover:text-[#066B67]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="min-w-0">
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
        <div className="min-w-0">
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#087F7A]">Contatti</h2>
          <div className="mt-4 grid gap-2 break-words text-[#475569]">
            {institutionalEmails.map((item) => (
              <a key={item.email} href={`mailto:${item.email}`} className="transition hover:text-[#066B67]">
                {item.email}
              </a>
            ))}
            <a href={`mailto:${associationPec}`} className="break-words transition hover:text-[#066B67]">PEC: {associationPec}</a>
          </div>
        </div>
      </div>
      <div className="container-page mt-10 flex flex-col gap-4 border-t border-[#D9E1E8] pt-6 text-sm text-[#475569] md:flex-row md:items-center md:justify-between">
        <p>© ANILP - Associazione Nazionale Infermieri Liberi Professionisti</p>
        <nav aria-label="Informative legali" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/privacy-policy" className="transition hover:text-[#066B67]">Privacy Policy</Link>
          <Link to="/cookie-policy" className="transition hover:text-[#066B67]">Cookie Policy</Link>
        </nav>
      </div>
    </footer>
  )
}
