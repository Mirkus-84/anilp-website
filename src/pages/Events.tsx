import { CalendarDays } from 'lucide-react'
import { Card } from '../components/Card'
import { PageHero } from '../components/PageHero'
import { CTAButton } from '../components/CTAButton'
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
        text="ANILP partecipa agli appuntamenti dedicati alla libera professione infermieristica e sviluppa iniziative di confronto e formazione."
      />
      <section className="bg-white py-12 sm:py-16">
        <div className="container-page">
          <Card className="border-l-4 border-l-[#087F7A]">
            <p className="text-sm font-bold uppercase tracking-wide text-[#066B67]">29 ottobre 2026 · Mestre (VE)</p>
            <h2 className="mt-3 text-2xl font-black text-[#1E2A44]">Libera Professione Infermieristica Senza Confini</h2>
            <p className="mt-3 leading-7 text-[#334155]">
              Auditorium M9, via Giovanni Pascoli 11, dalle 8:30 alle 14:00.
              Evento gratuito promosso da OPI Venezia con patrocinio FNOPI, accreditato
              per 2,10 crediti ECM. In occasione dell’evento sarà presentata ufficialmente ANILP.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton to="/news/presentazione-ufficiale-anilp-venezia-2026">Scopri il programma</CTAButton>
              <CTAButton to="https://www.opivenezia.it/notizie/tutte-le-notizie/656-opi-venezia-formazione-al-via-levento-libera-professione-infermieristica-senza-confini" variant="secondary" external>Notizia OPI Venezia</CTAButton>
            </div>
          </Card>
        </div>
      </section>
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
