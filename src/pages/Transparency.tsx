import { FileText } from 'lucide-react'
import { Card } from '../components/Card'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { StatusBadge } from '../components/StatusBadge'

const items = [
  'Statuto',
  'Regolamenti',
  'Bilanci',
  'Verbali pubblici',
  'Comunicati ufficiali',
  'Organi associativi',
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
        text="I documenti saranno pubblicati progressivamente dopo la costituzione, secondo quanto previsto dallo statuto e dai regolamenti associativi."
      />
      <section className="institutional-gradient py-20">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item}>
              <div className="flex items-start justify-between gap-4">
                <FileText className="h-8 w-8 text-[#087F7A]" aria-hidden="true" />
                <StatusBadge tone="gold">in aggiornamento</StatusBadge>
              </div>
              <h2 className="mt-5 text-xl font-black text-[#1E2A44]">{item}</h2>
              <p className="mt-3 leading-7 text-[#475569]">
                Sezione predisposta per la pubblicazione progressiva dei documenti ufficiali.
              </p>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
