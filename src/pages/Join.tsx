import { CheckCircle2 } from 'lucide-react'
import { Card } from '../components/Card'
import { CTAButton } from '../components/CTAButton'
import { PageHero } from '../components/PageHero'
import { SectionTitle } from '../components/SectionTitle'
import { Seo } from '../components/Seo'
import { StatusBadge } from '../components/StatusBadge'
import { faqs, interestEmailUrl } from '../data/site'

export function Join() {
  const who = [
    'Infermieri liberi professionisti con partita IVA individuale',
    'Infermieri liberi professionisti in forma collettiva, STP, studi associati o società',
    'Infermieri iscritti OPI interessati alla libera professione',
    'Infermieri con titolo estero autorizzati all’esercizio temporaneo in Italia, alle condizioni previste dall’articolo 5 dello statuto',
  ]

  return (
    <>
      <Seo
        title="Diventa socio | ANILP"
        description="Partecipa al percorso di ANILP: requisiti statutari, manifestazione di interesse, quota indicativa e informazioni sulle adesioni."
      />
      <PageHero
        badge="Manifestazione di interesse"
        title="Partecipa al percorso di ANILP"
        text="ANILP è costituita e avvia il proprio percorso associativo. Le modalità operative di adesione sono in fase di definizione: puoi già manifestare interesse e chiedere informazioni."
      />
      <section className="bg-white py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="grid gap-5">
            <Card>
              <h2 className="text-2xl font-black text-[#1E2A44]">Perché partecipare</h2>
              <p className="mt-4 leading-8 text-[#475569]">
                Manifestare interesse significa contribuire allo sviluppo di
                un’associazione nazionale orientata a rappresentanza, tutela,
                appartenenza professionale e costruzione di strumenti utili per
                gli infermieri liberi professionisti.
              </p>
              <p className="mt-4 leading-7 text-[#475569]">La manifestazione di interesse non costituisce iscrizione e non comporta pagamenti. L’ammissione come socio è deliberata dal Consiglio Direttivo su domanda scritta, secondo lo statuto.</p>
            </Card>
            <Card>
              <h2 className="text-2xl font-black text-[#1E2A44]">Chi può manifestare interesse</h2>
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
              La quota associativa annuale sarà proposta dal Comitato Esecutivo
              e deliberata dal Consiglio Direttivo, secondo lo statuto.
              In fase di avvio è in valutazione una quota indicativa di 50 euro annui.
            </p>
            <div className="mt-8">
              <CTAButton to={interestEmailUrl} external>
                Manifesta il tuo interesse via email
              </CTAButton>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#475569]">Scrivi a info@anilp.it per informazioni sulle adesioni.</p>
          </Card>
        </div>
      </section>
      <section className="institutional-gradient py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="Domande frequenti"
            title="FAQ"
            text="Risposte sintetiche per comprendere natura, tempi e modalità del percorso ANILP."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <h2 className="text-xl font-black text-[#1E2A44]">{faq.question}</h2>
                <p className="mt-3 leading-7 text-[#475569]">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
