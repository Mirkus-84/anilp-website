import { FileText } from 'lucide-react'
import { Card } from '../components/Card'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { StatusBadge } from '../components/StatusBadge'
import { foundingActUrl, statuteUrl } from '../data/site'

const items = [
  {
    title: 'Statuto',
    status: 'disponibile',
    href: statuteUrl,
    text: 'Copia digitale dello statuto per la consultazione pubblica, senza firme e timbri.',
  },
  {
    title: 'Atto costitutivo',
    status: 'disponibile',
    href: foundingActUrl,
    text: 'Copia pubblica dell’atto costitutivo con dati anagrafici privati e firme oscurati.',
  },
  {
    title: 'Regolamenti',
    status: 'in aggiornamento',
    text: 'Sezione predisposta per la pubblicazione progressiva dei regolamenti ufficiali.',
  },
  {
    title: 'Bilanci',
    status: 'in aggiornamento',
    text: 'I bilanci saranno pubblicati progressivamente secondo le scadenze associative.',
  },
  {
    title: 'Verbali pubblici',
    status: 'in aggiornamento',
    text: 'Area predisposta per verbali e documenti pubblici degli organi associativi.',
  },
  {
    title: 'Comunicati ufficiali',
    status: 'in aggiornamento',
    text: 'Archivio dei comunicati istituzionali ANILP.',
  },
  {
    title: 'Organi associativi',
    status: 'disponibile',
    href: '/organi-associativi',
    text: 'Riepilogo degli organi associativi secondo lo statuto e gli atti approvati.',
  },
]

export function Transparency() {
  return (
    <>
      <Seo
        title="Trasparenza | ANILP"
        description="Area trasparenza ANILP predisposta per statuto, regolamenti, bilanci, verbali pubblici, comunicati ufficiali e organi associativi."
      />
      <PageHero
        badge="Documenti istituzionali"
        title="Trasparenza"
        text="Sono disponibili lo statuto e la copia pubblica dell’atto costitutivo. Regolamenti, bilanci e altri documenti saranno pubblicati progressivamente secondo le approvazioni e le scadenze associative."
      />
      <section className="institutional-gradient py-20">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title}>
              <div className="flex items-start justify-between gap-4">
                <FileText className="h-8 w-8 text-[#087F7A]" aria-hidden="true" />
                <StatusBadge tone={item.href ? 'light' : 'gold'}>{item.status}</StatusBadge>
              </div>
              <h2 className="mt-5 text-xl font-black text-[#1E2A44]">{item.title}</h2>
              <p className="mt-3 leading-7 text-[#475569]">{item.text}</p>
              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-[linear-gradient(135deg,#087F7A,#066B67)] px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,#066B67,#055754)]"
                >
                  {item.title === 'Organi associativi' ? 'Consulta gli organi' : 'Consulta il documento'}
                </a>
              )}
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
