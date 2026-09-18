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
        description="La costituzione di ANILP il 9 settembre 2026, la registrazione il 10 settembre 2026 e le prossime tappe associative."
      />
      <PageHero
        badge="Costituzione completata"
        title="Percorso costitutivo"
        text="Dalla sottoscrizione dell’atto costitutivo all’avvio delle attività: le tappe raggiunte e quelle in programmazione."
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
                    <p className="mt-3 text-sm font-semibold text-[#334155]">{step.status === 'completata' ? 'Tappa completata' : step.status === 'in definizione' ? 'In definizione' : 'In programmazione'}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="mt-8 bg-[#F7F9FB]">
            <div className="flex gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#087F7A]" aria-hidden="true" />
              <p className="leading-8 text-[#334155]">
                La manifestazione di interesse consente di chiedere informazioni
                sul percorso associativo. Non equivale a una domanda di adesione
                né comporta il pagamento di una quota.
              </p>
            </div>
          </Card>
          <div className="mt-8"><CTAButton to="/documenti" variant="secondary">Consulta gli atti dell’associazione</CTAButton></div>
        </div>
      </section>
    </>
  )
}
