import { CheckCircle2 } from 'lucide-react'
import { Card } from '../components/Card'
import { CTAButton } from '../components/CTAButton'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { constitutionSteps } from '../data/site'

export function ConstitutionPath() {
  return (
    <>
      <Seo
        title="Percorso costitutivo | ANILP"
        description="Dal 9 settembre 2026 all’apertura delle domande di ammissione su Yapla e alla presentazione ufficiale di ANILP a Mestre il 29 ottobre."
      />
      <PageHero
        badge="Associazione costituita · domande aperte"
        title="Percorso costitutivo"
        text="Dalla costituzione all’apertura delle domande su Yapla: le principali decisioni del Direttivo, i progressi raggiunti e i prossimi appuntamenti."
      />
      <section className="bg-white py-20">
        <div className="container-page max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2">
            {constitutionSteps.map((step, index) => (
              <Card key={step.title}>
                <div className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#087F7A] text-sm font-black text-white">
                    {index + 1}
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-bold text-[#066B67]">{step.date}</p>
                    <h2 className="text-xl font-black text-[#1E2A44]">{step.title}</h2>
                    <p className="mt-2 leading-7 text-[#475569]">{step.text}</p>
                    <p className="mt-3 text-sm font-semibold text-[#334155]">{step.status === 'completata' ? 'Tappa completata' : step.status === 'in corso' ? 'In corso' : 'In programmazione'}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="mt-8 bg-[#F7F9FB]">
            <div className="flex gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#087F7A]" aria-hidden="true" />
              <p className="leading-8 text-[#334155]">
                La domanda di ammissione a Socio Ordinario può già essere presentata tramite Yapla.
                La quota associativa è di 60 € e, in questa prima fase, sarà versata
                successivamente secondo le indicazioni della Segreteria. La delibera
                favorevole del Consiglio Direttivo rimane necessaria per l’ammissione.
              </p>
            </div>
          </Card>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton to="/diventa-socio">Presenta la domanda su Yapla</CTAButton>
            <CTAButton to="/documenti" variant="secondary">Consulta gli atti dell’associazione</CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
