import { CalendarDays } from 'lucide-react'
import { Card } from '../components/Card'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'

export function Events() {
  const items = ['Webinar', 'Congressi', 'Corsi', 'Tavoli tecnici', 'Incontri territoriali', 'Attività ECM future']

  return (
    <>
      <Seo
        title="Eventi e formazione | ANILP"
        description="La programmazione di eventi, webinar, congressi, corsi e tavoli tecnici dell’associazione ANILP."
      />
      <PageHero
        badge="Formazione permanente"
        title="Eventi e formazione"
        text="ANILP intende promuovere aggiornamento professionale, confronto scientifico e iniziative formative dedicate alla libera professione infermieristica."
      />
      <section className="bg-slate-50 py-20">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item}>
              <CalendarDays className="h-8 w-8 text-[#087F7A]" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-black text-[#1E2A44]">{item}</h2>
              <p className="mt-3 leading-7 text-[#475569]">
                Programmazione in fase di definizione. Date, programmi e
                modalità di partecipazione saranno pubblicati dopo l’approvazione
                delle iniziative da parte degli organi competenti.
              </p>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
