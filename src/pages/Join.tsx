import { CheckCircle2 } from 'lucide-react'
import { Card } from '../components/Card'
import { CTAButton } from '../components/CTAButton'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { StatusBadge } from '../components/StatusBadge'
import { formUrl } from '../data/site'

export function Join() {
  const who = [
    'Infermieri liberi professionisti con partita IVA individuale',
    'Infermieri liberi professionisti in forma collettiva, STP, studi associati o societa',
    'Infermieri iscritti OPI interessati alla libera professione',
  ]

  return (
    <>
      <Seo
        title="Diventa socio | ANILP"
        description="Partecipa alla nascita di ANILP compilando la manifestazione di interesse per futuri soci e professionisti interessati."
      />
      <PageHero
        badge="Manifestazione di interesse"
        title="Partecipa alla nascita di ANILP"
        text="Il percorso di adesione sara formalizzato dopo la costituzione. Oggi puoi manifestare interesse e contribuire allo sviluppo del progetto associativo."
      />
      <section className="bg-white py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="grid gap-5">
            <Card>
              <h2 className="text-2xl font-black text-[#1E2A44]">Perche aderire</h2>
              <p className="mt-4 leading-8 text-[#475569]">
                Aderire al percorso ANILP significa contribuire alla costruzione
                di una rappresentanza nazionale orientata a tutela, formazione,
                supporto organizzativo, servizi, convenzioni e interlocuzione
                istituzionale.
              </p>
            </Card>
            <Card>
              <h2 className="text-2xl font-black text-[#1E2A44]">Chi puo aderire</h2>
              <div className="mt-5 grid gap-4">
                {who.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#087F7A]" aria-hidden="true" />
                    <span className="leading-7 text-[#334155]">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <Card className="h-fit border-l-4 border-l-[#087F7A] bg-[#F7F9FB]">
            <StatusBadge>Quota non definitiva</StatusBadge>
            <h2 className="mt-5 text-2xl font-black text-[#1E2A44]">Quota associativa</h2>
            <p className="mt-4 leading-8 text-[#334155]">
              La quota associativa annuale sara definita dagli organi competenti.
              In fase di avvio e in valutazione una quota indicativa di 50 euro annui.
            </p>
            <div className="mt-8">
              <CTAButton to={formUrl} external>
                Compila la manifestazione di interesse
              </CTAButton>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}
